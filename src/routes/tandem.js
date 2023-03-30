var express = require('express')
const Tandem = require('../tandem')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Tandem.list)
})

module.exports = router
