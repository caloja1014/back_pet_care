var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

