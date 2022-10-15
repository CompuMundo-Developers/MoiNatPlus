const express = require("express")
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts)  
router.route('/producto/nuevo').post(newProduct); 
router.route('/producto/:id').get(getProductById); 
router.route('/producto/:id').put(updateProduct);
router.route('/producto/:id').delete(deleteProduct); 

module.exports = router;