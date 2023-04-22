const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
require('./database-connection')
const cors = require('cors')
const session = require('express-session')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const tandemsRouter = require('./routes/tandems') // import the tandemRouter

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(
  session({
    secret: 'jsda3231jsakl1233kk',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
    },
  })
)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter) //
app.use('/tandems', tandemsRouter) // when the path is /tandem, use the tandemRouter
app.use('/users', usersRouter) // when the path is /users, use the usersRouter
// usersRouter is defined in src/routes/users.js
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

module.exports = app
