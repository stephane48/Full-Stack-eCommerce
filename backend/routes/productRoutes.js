const express = require('express');
const router = express.Router();

const {getAllProducts, getProductsById} = require('../controller/productControllers');

//GET all products from db
//@rout GET api/products
//@access public
router.get('/', getAllProducts);

//GET all a product by id from db
//@rout GET api/products/:id
//@access public
router.get('/:id', getProductsById);

module.exports = router;