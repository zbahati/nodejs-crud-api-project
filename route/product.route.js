const express = require("express");
const Router = express.Router();
const { getProducts, getProduct, createProduct, deleteProduct, updatedProduct } = require("../controller/product.controller");

// GET Product and Individual project
Router.get('/', getProducts);
Router.get('/:id', getProduct);

// Add Product
Router.post('/', createProduct);

// Delete Product 
Router.delete('/:id', deleteProduct);

// Update Product
Router.put('/:id', updatedProduct);


// Export EveryThing
module.exports = Router;