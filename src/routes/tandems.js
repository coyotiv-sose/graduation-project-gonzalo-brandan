const express = require('express')
const router = express.Router()
const Tandem = require('../models/tandem')
const User = require('../models/user')

/* GET tandem listing. */
router.get('/', async function (req, res, next) {
  const tandems = await Tandem.find()
  if (req.query.view === 'json') return res.send(tandems)

  res.render('tandems', { tandems })
})

// get a specific tandem by index
router.get('/:tandemId', function (req, res, next) {
  res.send(Tandem.list[req.params.userId])
})

// initiate a new tandem
router.post('/', async function (req, res, next) {
  const user = await User.findById({ _id: req.body.user })
  console.log(user)
  const partner = await User.findById({ _id: req.body.partner })
  const tandem = await user.initiateTandem(partner, req.body.language, req.body.date, req.body.time)

  res.send(tandem.details)
  // res.send({
  //   name: user.name,
  //   targetLanguage: user.targetLanguage,
  //   offeredLanguage: user.offeredLanguage,
  //   tandems: user.tandems.map(tandem => {
  //     return {
  //       user: tandem.user.name,
  //       //partner: tandem.partner.name,
  //       language: tandem.language,
  //       date: tandem.date,
  //       time: tandem.time,
  //       status: tandem.status,
  //     }
  //   }),
  // })
})

module.exports = router
