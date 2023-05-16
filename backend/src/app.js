const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
require('./database-connection')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/user')
const passport = require('passport')

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy())

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const tandemsRouter = require('./routes/tandems')
const accountsRouter = require('./routes/accounts')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('trust proxy', 1)

const clientPromise = mongoose.connection.asPromise().then(connection => (connection = connection.getClient()))

app.use(
  session({
    secret: 'jsda3231jsakl1233kk',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
      sameSite: process.env.NODE === 'production' ? 'none' : 'lax',
      //sameSite: 'lax', //make it dependent if production, otherwise sameSite: 'lax'
      // domain: process.env.NODE_ENV === 'production' ? 'https://backend-jdi5rgnuxa-ew.a.run.app' : 'localhost:3000', //heroku replace by backend url google
      domain: process.env.COOKIE_DOMAIN,
    },
    store: MongoStore.create({
      //clientPromise: clientPromise,
      clientPromise,
      stringify: false,
    }),
  })
)

app.use(passport.session())

app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0
  req.session.numberOfVisits = numberOfVisits + 1
  req.session.history = req.session.history || []
  req.session.history.push({ url: req.url, ip: req.ip })
  req.session.ip = req.ip

  //console.log('session', req.session)

  next()
})

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter) //
app.use('/tandems', tandemsRouter) // when the path is /tandem, use the tandemRouter
app.use('/users', usersRouter) // when the path is /users, use the usersRouter

app.use('/accounts', accountsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  console.log(err)
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.createSocketServer = function (server) {
  const io = require('socket.io')(server)

  console.log('socket.io server created')

  io.on('connection', function (socket) {
    console.log('a user connected')

    socket.on('disconnect', function () {
      console.log('user disconnected')
    })
  })
}

module.exports = app
