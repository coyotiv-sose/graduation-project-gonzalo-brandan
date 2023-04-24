const express = require('express')
const router = express.Router()
const Tandem = require('../models/tandem')
const User = require('../models/user')
const generateDescription = require('../lib/description-generator')

/* GET tandem listing. */
router.get('/', async function (req, res, next) {
  const tandems = await Tandem.find()
  if (req.query.view === 'json') return res.send(tandems)

  //res.render('tandems', { tandems })
  res.send(tandems)
})

// get a specific tandem by index
router.get('/:tandemId', function (req, res, next) {
  res.send(Tandem.list[req.params.userId])
})

// initiate a new tandem
router.post('/', async function (req, res, next) {
  const user = await User.findById({ _id: req.body.user })
  const partner = await User.findById({ _id: req.body.partner })
  const tandem = await user.initiateTandem(partner, req.body.language, req.body.date, req.body.time)
  res.send(tandem)
})

module.exports = router
