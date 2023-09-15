const { ProductModel } = require('../models/productModel');
const multer = require('multer');
const path = require('path');
const os = require('os');
const fs = require('fs');
const mongoose = require('mongoose');

const getProducts = async (req, res) => {
    try {
        const { sortMethod, parent_subcategory, page, pageSize } = req.query;
        let sortCriteria = { _id: -1 };
        let filterCriteria = { quantity: { $gt: 0 } };

        if (sortMethod) {
            sortCriteria = { price: sortMethod === 'asc' ? 1 : -1, _id: -1 };
        }

        if (parent_subcategory) {
            filterCriteria.parent_subcategory = mongoose.Types.ObjectId(parent_subcategory);
        }

        const skip = (parseInt(page) - 1) * parseInt(pageSize);

        const products = await ProductModel.find(filterCriteria)
            .sort(sortCriteria)
            .skip(skip)
            .limit(parseInt(pageSize));

        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { product_name, parent_subcategory, price, quantity } = req.body;
        const newProduct = await ProductModel.create({ product_name, parent_subcategory, price, quantity });
        return res.status(201).json(newProduct);
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
}

// Upload Product Image
const startingIndexNumber = (uploadDir) => {
    const files = fs.readdirSync(uploadDir);
    const imageFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    })
    return imageFiles.length;
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const uploadDir = `public/images/products/${req.body._id}`;
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const uploadDir = `public/images/products/${req.body._id}`;
        const ext = path.extname(file.originalname);
        const name = `img${startingIndexNumber(uploadDir) + 1}${ext}`;
        callback(null, name);
    }
});

const createProductImage = async (req, res) => {
    multer({ storage }).array('images')(req, res, (err) => {
        if (err) {
            return res.status(500).json({ serverError: err.message });
        }
    })
}
// Upload Product Image

const getNumberOfImages = async (req, res) => {
    const { productId } = req.query;
    const directoryPath = `public/images/products/${productId}`;
    const files = await fs.readdirSync(directoryPath);

    let numberOfImages = 0;
    for (const file of files) {
        if (file.endsWith('.jpg')) {
            numberOfImages++;
        }
    }

    return res.status(200).json({ numberOfImages });
}

module.exports = { getProducts, createProduct, createProductImage, getNumberOfImages };