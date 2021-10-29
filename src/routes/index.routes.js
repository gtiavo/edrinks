const express = require ('express');
const router = express.Router();


router.use('/', require('./home.routes'));

router.use('/product', require('./products.routes'))


module.exports = router;


// RUTA PRINCIPAL QUE RESIVE A TODAS LAS RUTAS DEL PROYECTO