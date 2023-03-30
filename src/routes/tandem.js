var express = require('express')
const Tandem = require('../tandem')
var router = express.Router()

/* GET tandems listing. */
router.get('/', function (req, res, next) {
  if(req.query.view === 'json') {
    return res.send(
      Tandem.list.map(tandem => ({
        date: tandem.date,
        time: tandem.time,
        language: tandem.language,
        status: tandem.status,
        partner: tandem.partner.name,
      }))
    )
  }
  res.render('tandems', {
    tandems: Tandem.list,
  })
})

module.exports = router
