const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const mongoose = require('mongoose');
const { UserModel } = require('../models/userModel');
const { OrderModel } = require('../models/orderModel');
const { ProductModel } = require('../models/productModel');

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

const createPaymentIntent = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        const amount = user.cart.reduce((acc, ci) => acc + (ci.quantity * ci.price), 0) * 100;
        const currency = 'ron';

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            metadata: {
                userId: userId
            }
        });

        return res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ serverError: err.message });
    }
}

const webhook = async (req, res) => {
    let event = req.body;
    const signature = req.headers['stripe-signature'];

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            endpointSecret
        );
    } catch (err) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message);
        return res.sendStatus(400);
    }

    const paymentIntent = event.data.object;
    const userId = paymentIntent.metadata.userId;
    const user = await UserModel.findById(userId);
    const orderList = await OrderModel.find({ parent_user: mongoose.Types.ObjectId(userId) });
    const order = orderList.length > 0 ? orderList[orderList.length - 1] : null;

    switch (event.type) {
        case 'payment_intent.succeeded':
            console.log(`${user.firstName} paid ${paymentIntent.amount / 100} RON successfully!`);
            console.log(`Sent payment confirmation mail to ${user.email}\n`);

            for (const cartItem of user.cart) {
                const product = await ProductModel.findById(cartItem._id);
                product.quantity = product.quantity - cartItem.quantity;
                await product.save();
            }

            user.cart = [];
            await user.save();

            break;
        case 'payment_intent.payment_failed':
            await OrderModel.findByIdAndRemove(order._id);
            break;
        default:
        // console.log(`Unhandled event type ${event.type}.`);
    }

    return res.sendStatus(200).end();
}

module.exports = { createPaymentIntent, webhook };