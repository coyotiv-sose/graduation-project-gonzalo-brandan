var express = require('express')
var router = express.Router()
const User = require('../user')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find()
  res.send(users)
})

// get a specific user by index
router.get('/:userId', function (req, res, next) {
  res.send(User.list[req.params.userId])
})

// create a new user
router.post('/', function (req, res, next) {
  //const user = new User(req.body.name)
  const user = User.create({ name: req.body.name })
  res.send(user)
})

module.exports = router
