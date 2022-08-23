var express = require('express');
var router = express.Router();
var petOwnerController = require('../controllers/petOwner.controller');

router.post('/', petOwnerController.create);
router.get('/', petOwnerController.findAll);
router.put('/:identification', petOwnerController.update);
module.exports = router;