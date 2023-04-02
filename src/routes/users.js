var express = require('express')
var router = express.Router()
const User = require('../user')

var users = [{ name: 'Jane' }, { name: 'John' }, { name: 'Jack' }]
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users)

  return

  res.render('users', {
    user: {
      name: 'Jane',
    },
    users: [{ name: 'Jane' }, { name: 'John' }, { name: 'Jack' }],
  })
})

// get a specific user by index
router.get('/:userId', function (req, res, next) {
  res.send(users[req.params.userId])
})

// create a new user
router.post('/', function (req, res, next) {
  const user = new User(req.body.name)
  res.send(user)
})

module.exports = router
