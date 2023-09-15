const router = require('express').Router();
const { getSubcategories } = require('../controllers/subcategoryController');

router.route('/').get(getSubcategories);

module.exports = router;