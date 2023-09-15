const mongoose = require('mongoose');
const { ProductSchema } = require('./productModel');

const OrderSchema = mongoose.Schema({
    parent_user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    products: {
        type: [ProductSchema],
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const OrderModel = mongoose.model('OrderModel', OrderSchema);

module.exports = { OrderModel, OrderSchema };