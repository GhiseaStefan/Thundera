const mongoose = require('mongoose');
const { ProductSchema } = require('./productModel');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: [ProductSchema],
        default: []
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    county: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    zip: {
        type: Number,
        default: ''
    }
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = { UserModel, UserSchema };