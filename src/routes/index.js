var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Lingolink',
    user: { name: 'Gonzalo' },
    users: [{ name: 'Maria' }, { name: 'Armagan' }],
  })
})

module.exports = router
