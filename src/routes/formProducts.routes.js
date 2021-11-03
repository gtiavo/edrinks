const express = require('express');
const router = express.Router();
const {controllerFormProducts} = require('../controllers/index');
const upload = require('../middleware/multerProducts')

router.get('/', controllerFormProducts.forms);
router.post('/create',upload.single('imagen'),controllerFormProducts.create);


module.exports = router;