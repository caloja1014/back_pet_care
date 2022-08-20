var express = require('express');
var router = express.Router();
var ownerController = require('../controllers/owner.controller');

router.post('/',ownerController.create);
module.exports = router;
