var express = require('express')
const Tandem = require('../tandem')
const User = require('../user')
var router = express.Router()
router.get('/', function (req, res, next) {
  res.render('users', {
    // comes from .pug
    title: 'Lingolink',
    user: { name: 'Gonzalo' },
    users: User.list.map(user => ({
      name: user.name,
      targetLanguage: user.targetLanguage,
      offeredLanguage: user.offeredLanguage,
      rating: user.rating,
      tandems: user.tandems.map(tandem => ({
        date: tandem.date,
        time: tandem.time,
        language: tandem.language,
        status: tandem.status,
        partner: tandem.partner.name,
      })),
    })),
  })
})
/* GET users listing. */
router.get('/json', function (req, res, next) {
  res.send(
    User.list.map(user => ({
      name: user.name,
      targetLanguage: user.targetLanguage,
      offeredLanguage: user.offeredLanguage,
      rating: user.rating,
      tandems: user.tandems.map(tandem => ({
        date: tandem.date,
        time: tandem.time,
        language: tandem.language,
        status: tandem.status,
        partner: tandem.partner.name,
      })),
    }))
  )
})

/* Create a new user */
router.post('/', function (req, res, next) {
  const user = User.create({
    name: req.body.name,
    targetLanguage: req.body.targetLanguage,
    offeredLanguage: req.body.offeredLanguage,
  })

  res.send(user)
})

/* create a tandem for a user */

router.post('/:userId/tandems', function (req, res, next) {
  const tandem = user.createTandem(req.body.partner, req.body.language, req.body.date, req.body.time)

  res.send(tandem)
})

module.exports = router
