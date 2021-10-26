const express = require('express');
const router = express.Router();
const {controllerHome}= require('../controllers/index')


router.get('/', controllerHome.home);



module.exports = router;