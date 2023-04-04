var express = require('express')
var router = express.Router()
const User = require('../user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
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
