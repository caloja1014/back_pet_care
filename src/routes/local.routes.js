var express = require('express');
var router = express.Router();
var Local = require('../controllers/local.controller');

router.post('/', Local.create);
router.put('/:id', Local.update);
router.get('/:id', Local.get);
router.get('/', Local.getAll);
module.exports = router;

