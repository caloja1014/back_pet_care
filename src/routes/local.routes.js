var express = require('express');
var router = express.Router();
var localController = require('../controllers/local.controller');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


