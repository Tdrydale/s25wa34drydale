var express = require('express');
var router = express.Router();
var radio = 0.75;
var acc = 1000;

/* GET users listing. */
router.get('/', function(req, res, next) {
  acc = radio * acc;
  res.send('Value is:' + acc);
});

module.exports = router;
