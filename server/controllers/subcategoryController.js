const { SubcategoryModel } = require('../models/subcategoryModel');

const getSubcategories = async (req, res) => {
    try {
        const subcategories = await SubcategoryModel.find().sort('_id');
        return res.status(200).json(subcategories);
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
};

module.exports = { getSubcategories };