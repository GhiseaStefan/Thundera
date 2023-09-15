const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    parent_subcategory: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
});

const ProductModel = mongoose.model('ProductModel', ProductSchema);

module.exports = { ProductModel, ProductSchema };