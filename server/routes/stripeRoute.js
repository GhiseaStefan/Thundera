const router = require('express').Router();
const { createPaymentIntent, webhook } = require('../controllers/stripeController');

router.route('/create-payment-intent').post(createPaymentIntent);
router.route('/webhook').post(webhook);

module.exports = router;