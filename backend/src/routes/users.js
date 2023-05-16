const express = require('express')
const router = express.Router()
const User = require('../models/user')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find()
  if (req.query.view === 'json') return res.send(users)
  res.send(users)
})

// get a specific user by index // look up
router.get('/:userId', async function (req, res, next) {
  const user = await User.findById({ _id: req.params.userId })
  res.send(user)
})

router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body
  const user = await User.register({ name, email }, password)
  res.send(user)
})

// update a user
router.put('/', async function (req, res, next) {
  if (!req.user) return res.status(401).send('You are not logged in')
  await req.user.addAvailability(req.body.date, req.body.time)
  await req.user.save()
  res.send(req.user)
})

module.exports = router
