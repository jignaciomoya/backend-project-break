const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/new', productController.showNewProductForm);
router.post('/', productController.addProduct);
router.get('/:productId/edit', productController.showEditProductForm);
router.put('/:productId', productController.editProduct);
router.delete('/:productId', productController.deleteProduct);

router.get('/', productController.showProducts);
router.get('/:productId', productController.showProductById);

module.exports = router;