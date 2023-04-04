var express = require('express')
var router = express.Router()
const Tandem = require('../tandem')
const User = require('../user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Tandem.list)
})

// get a specific tandem by index
router.get('/:tandemId', function (req, res, next) {
  res.send(Tandem.list[req.params.userId])
})

// create a new user
router.post('/', function (req, res, next) {
  //const user = new User(req.body.name)
  // const user = gonzalo.createTandem({
  //   user: req.body.user,
  //   partner: req.body.partner,
  //   language: req.body.language,
  //   date: req.body.date,
  //   time: req.body.time,
  //   status: req.body.status,
  // })
  const user = User.list.find(user => user.name === req.body.user)
  const partner = User.list.find(user => user.name === req.body.partner)
  user.bookSession(partner, req.body.language, req.body.date, req.body.time)

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
