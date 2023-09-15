const { CategoryModel } = require('../models/categoryModel');

const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find().sort('_id');
        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
};

module.exports = { getCategories };