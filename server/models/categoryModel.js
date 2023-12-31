const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true
    }
});

const CategoryModel = mongoose.model('CategoryModel', CategorySchema);

module.exports = { CategoryModel, CategorySchema };