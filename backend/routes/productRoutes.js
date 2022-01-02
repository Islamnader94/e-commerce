const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require('../controller/productControllers')

//get all products from db.
router.get('/', getAllProducts);

//get product by product id.
router.get('/:id', getProductById);

module.exports = router;