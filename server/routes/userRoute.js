const router = require('express').Router();
const { registerUser, loginUser, checkAuthUser, updateUser, removeFromCart, addToCart } = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/authentication').post(checkAuthUser);
router.route('/update').put(updateUser);
router.route('/cart').put(addToCart);
router.route('/cart/:userId/:cartItemId').delete(removeFromCart);

module.exports = router;