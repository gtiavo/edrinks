const express = require('express');
const router = express.Router();
const {controllerNovedad} = require('../controllers/index')


router.get('/novedades', controllerNovedad.novedades);
router.get('/ofertas', controllerNovedad.ofertas);



module.exports = router;