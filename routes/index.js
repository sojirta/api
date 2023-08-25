var express = require('express');
var router = express.Router();

var {insert,select} = require('../controller/usercontroller');

router.post('/',insert);

router.get('/',select);


module.exports = router;
