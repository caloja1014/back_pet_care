var express = require('express');
var router = express.Router();
var Product = require('../controllers/product.controller');

router.post('/', Product.create);
router.put('/:id', Product.update);

module.exports = router;