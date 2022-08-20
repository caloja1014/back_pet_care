var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/service.controller');

router.post('/',serviceController.create);
module.exports = router;
