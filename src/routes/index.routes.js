const express = require ('express');
const router = express.Router();


router.use('/', require('./home.routes'))


module.exports = router;