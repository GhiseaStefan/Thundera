const mongoose = require('mongoose');

const SubcategorySchema = mongoose.Schema({
    subcategory_name: {
        type: String,
        required: true
    },
    parent_category: {
        type: mongoose.Types.ObjectId,
        ref: 'CategoryModel',
        required: true
    }
});

const SubcategoryModel = mongoose.model('SubcategoryModel', SubcategorySchema);

module.exports = { SubcategoryModel, SubcategorySchema };