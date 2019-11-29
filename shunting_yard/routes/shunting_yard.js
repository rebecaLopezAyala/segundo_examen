const shuntingController = require("../controllers");

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', shuntingController.shuntingYard.evaluate);

module.exports = router;
