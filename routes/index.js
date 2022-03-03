const express = require('express');
const router = express.Router();
const product = require('./product');

router.use('/product',product);

module.exports = router;