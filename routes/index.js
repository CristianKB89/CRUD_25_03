var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userControllers')

/* GET home page. */
router.get('/', userControllers.getUsers);

module.exports = router;
