const { OrderModel } = require('../models/orderModel');

const validatePhoneNumber = (phoneNumber) => {
    const regex = /^(\+40|0)[0-9]{9}$/;
    return regex.test(phoneNumber);
};

const validateZip = (zip) => {
    const regex = /^\d{6}$/;
    return regex.test(zip)
};

const createOrder = async (req, res) => {
    try {
        const { userId, orderInfo, cart } = req.body;

        const amount = cart.reduce((acc, ci) => acc + (ci.price * ci.quantity), 0);
        const timezoneOffset = 3 * (60 * 60 * 1000);
        const date = new Date(Date.now() + timezoneOffset);

        if (!validatePhoneNumber(orderInfo.phone)) {
            return res.status(400).json({ error: 'Phone number is not valid' });
        }

        if (!validateZip(orderInfo.zip)) {
            return res.status(400).json({ error: 'Must be a number with 6 digits' });
        }

        const order = await OrderModel.create({
            parent_user: userId,
            firstName: orderInfo.firstName,
            lastName: orderInfo.lastName,
            phone: orderInfo.phone,
            county: orderInfo.county,
            city: orderInfo.city,
            address: orderInfo.address,
            zip: orderInfo.zip,
            date: date,
            products: cart,
            amount: amount
        });

        return res.status(200).json({ message: 'Order has been successfully created!', orderId: order._id });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
};

module.exports = { createOrder }