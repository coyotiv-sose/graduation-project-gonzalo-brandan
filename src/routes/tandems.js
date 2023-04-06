const express = require('express')
const router = express.Router()
const Tandem = require('../models/tandem')
const User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Tandem.list)
})

// get a specific tandem by index
router.get('/:tandemId', function (req, res, next) {
  res.send(Tandem.list[req.params.userId])
})

// initiate a new tandem
router.post('/', function (req, res, next) {
  const user = User.list.find(user => user.name === req.body.user)
  const partner = User.list.find(user => user.name === req.body.partner)
  user.initiateTandem(partner, req.body.language, req.body.date, req.body.time)

  res.send({
    name: user.name,
    targetLanguage: user.targetLanguage,
    offeredLanguage: user.offeredLanguage,
    tandems: user.tandems.map(tandem => {
      return {
        user: tandem.user.name,
        //partner: tandem.partner.name,
        language: tandem.language,
        date: tandem.date,
        time: tandem.time,
        status: tandem.status,
      }
    }),
  })
})

module.exports = router
