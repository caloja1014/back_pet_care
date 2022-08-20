var express = require('express');
var router = express.Router();
var saleController = require('../controllers/sale.controller');

router.post('/',saleController.create);
module.exports = router;
