const express = require('express');
const router = express.Router();

const { addProduct, getProduct, getAllProduct } = require('../controllers/productController');

router.post('/add', addProduct);
router.get('/product', getProduct);
router.get('/all', getAllProduct);

module.exports = router;