var express = require('express');
var router = express.Router();
var Inventory = require('../controllers/inventory.controller');

router.post('/', Inventory.create);
router.get('/:localId', Inventory.findAll);

module.exports = router;