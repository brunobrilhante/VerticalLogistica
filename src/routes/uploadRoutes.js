const express = require('express');
const router = express.Router();
const upload = require('multer')({ dest: '../../uploads' });
const { uploadArquivo } = require('../controllers/uploadController');

router.post('/', upload.single('arquivo'), uploadArquivo);
router.get('/pedido/:id', getOrderById);
router.get('/intervaloCompra/:periodo', getIntervaloCompra);

module.exports = router;