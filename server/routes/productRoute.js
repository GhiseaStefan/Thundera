const router = require('express').Router();
const { getProducts, createProduct, createProductImage, getNumberOfImages } = require('../controllers/productController');

router.route('/').get(getProducts).post(createProduct);
router.route('/image').post(createProductImage).get(getNumberOfImages);

module.exports = router;