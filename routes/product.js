const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

router.post('/addProduct',product.product.addProducts);
router.get('/getAllProducts',product.product.getAllProduct);
router.get('/getOneProduct',product.product.getProductsById);
router.post('/updateProductDetails',product.product.updateProductDetails);
router.delete('/deleteProductDetails/:_id',product.product.deleteProductsDetail);

module.exports = router;