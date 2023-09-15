const { UserModel } = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncLock = require('async-lock');
const lock = new asyncLock();

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email.length === 0) {
            return res.status(400).json({ error: 'You have to add an email!' });
        }
        if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return res.status(400).json({ error: 'Email format is not valid!' })
        }
        const existingUser = await UserModel.findOne({ 'email': email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already used!' });
        }
        if (password.length === 0) {
            return res.status(400).json({ error: 'You have to add a password!' })
        }
        if (password.length < 8) {
            return res.status(400).json({ error: 'Password must contain atleast 8 characters!' })
        }
        if (!(/[A-Z]/.test(password))) {
            return res.status(400).json({ error: 'Password must contain atleast 1 uppercase character!' })
        }
        if (!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password))) {
            return res.status(400).json({ error: 'Password must contain atleast 1 symbol!' })
        }
        const encryptedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
        const newUser = await UserModel.create({ email: email.toLowerCase(), password: encryptedPassword });
        const payload = {
            _id: newUser._id,
            email: newUser.email
        };
        const options = { expiresIn: '30d' };
        const token = jwt.sign(payload, process.env.SECRET_KEY, options);

        const sanitizedData = {
            _id: newUser._id,
            email: newUser.email,
            cart: newUser.cart,
            token: token,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            phone: newUser.phone,
            county: newUser.county,
            city: newUser.city,
            address: newUser.address,
            zip: newUser.zip
        }

        return res.status(201).json({ sanitizedData });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email.length === 0) {
            return res.status(400).json({ error: 'You have to add an email!' });
        }
        if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return res.status(400).json({ error: 'Email format is not valid!' })
        }
        const existingUser = await UserModel.findOne({ 'email': email.toLowerCase() });
        if (!existingUser) {
            return res.status(400).json({ error: 'Email is not registered!' });
        }
        if (password.length === 0) {
            return res.status(400).json({ error: 'You have to add a password!' });
        }
        if (!(await bcrypt.compare(password, existingUser.password))) {
            return res.status(400).json({ error: 'Wrong password!' });
        }
        const payload = {
            _id: existingUser._id,
            email: existingUser.email
        };
        const options = { expiresIn: '30d' };
        const token = jwt.sign(payload, process.env.SECRET_KEY, options);

        const sanitizedData = {
            _id: existingUser._id,
            email: existingUser.email,
            cart: existingUser.cart,
            token: token,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            phone: existingUser.phone,
            county: existingUser.county,
            city: existingUser.city,
            address: existingUser.address,
            zip: existingUser.zip
        }

        return res.status(200).json({ sanitizedData });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
}

const checkAuthUser = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        const user = await UserModel.findById(decodedToken._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        const sanitizedData = {
            _id: user._id,
            email: user.email,
            cart: user.cart,
            token: token,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            county: user.county,
            city: user.city,
            address: user.address,
            zip: user.zip
        }

        return res.status(200).json({ sanitizedData });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
}

const validatePhoneNumber = (phoneNumber) => {
    const regex = /^(\+40|0)[0-9]{9}$/;
    return regex.test(phoneNumber);
};

const validateZip = (zip) => {
    const regex = /^\d{6}$/;
    return regex.test(zip)
};

const updateUser = async (req, res) => {
    try {
        const { userId, firstName, lastName, phone, county, city, address, zip, oldPassword, newPassword } = req.body;
        const errors = {};

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        const fields = [
            { key: 'firstName', value: firstName },
            { key: 'lastName', value: lastName },
            { key: 'phone', value: phone, validate: validatePhoneNumber, error: 'Phone number is not valid' },
            { key: 'county', value: county },
            { key: 'city', value: city },
            { key: 'address', value: address },
            { key: 'zip', value: zip, validate: validateZip, error: 'Must be a number with 6 digits' }
        ];

        for (const field of fields) {
            if (field.value && field.value !== '') {
                if (field.validate && !field.validate(field.value)) {
                    errors[field.key] = field.error;
                } else {
                    user[field.key] = field.value;
                }
            }
        }

        if (newPassword && newPassword !== '') {
            if (!(await bcrypt.compare(oldPassword, user.password))) {
                errors.oldPassword = 'The password you entered is incorrect'
            } else if (newPassword.length < 8 || !(/[A-Z]/.test(newPassword)) || !(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword))) {
                errors.newPassword = 'Password must contain 8 characters, 1 uppercase and 1 symbol';
            } else {
                const encryptedPassword = await bcrypt.hash(newPassword, Number(process.env.SALT_ROUNDS));
                user.password = encryptedPassword;
            }
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        await user.save();

        return res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
}

const removeFromCart = async (req, res) => {
    try {
        const { userId, cartItemId } = req.params;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await lock.acquire(userId, async () => {
            const cartItemIndex = user.cart.findIndex(item => item._id.toString() === cartItemId);

            if (cartItemIndex === -1) {
                return res.status(404).json({ error: 'Product not found in the cart' });
            }

            user.cart.splice(cartItemIndex, 1);

            await user.save();
        }).then(() => {
            return res.status(200).json({ message: 'The item was removed successfully' });
        });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
};

const addToCart = async (req, res) => {
    try {
        const { userId, cartItem } = req.body;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (cartItem.quantity === 0) {
            return res.status(400).json({ error: 'Item is out of stock' });
        }

        await lock.acquire(userId, async () => {
            const existingCartItem = user.cart.find(item => String(item._id) === String(cartItem._id));

            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                cartItem.quantity = 1;
                user.cart.push(cartItem);
            }

            await user.save();
        }).then(() => {
            return res.status(200).json({ message: 'The item was added to the cart successfully' });
        });
    } catch (err) {
        return res.status(500).json({ serverError: err.message });
    }
}

module.exports = { registerUser, loginUser, checkAuthUser, updateUser, removeFromCart, addToCart };