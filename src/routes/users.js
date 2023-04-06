const express = require('express')
const router = express.Router()
const User = require('../models/user')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find()
  if (req.query.view === 'json') return res.send(users)
  res.render('users', { users })
})

// get a specific user by index
router.get('/:userId', function (req, res, next) {
  res.send(User.list[req.params.userId])
})

// create a new user
router.post('/', async function (req, res, next) {
  const user = await User.create({ name: req.body.name })
  res.send(user)
})

// delete a user

module.exports = router
