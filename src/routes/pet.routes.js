var express = require('express');
var router = express.Router();
var petController = require('../controllers/pet.controller');

router.post('/', petController.create);
router.get('/:petownerIdentification', petController.findAll);
module.exports = router;