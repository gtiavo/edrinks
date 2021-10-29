const express = require('express');
const router = express.Router();
const {controllerProducts} = require('../controllers/index')


router.get('/novedades', controllerProducts.novedades);
router.get('/ofertas', controllerProducts.ofertas);
router.get('/detail/:id', controllerProducts.detail); 



module.exports = router;