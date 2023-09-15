import axios from 'axios';
import SERVER from '../config';

class User {
    static async registerUser(email, password) {
        try {
            const response = await axios.post(`${SERVER}/user/register`, {
                email: email,
                password: password
            });

            return response;
        } catch (err) {
            throw err;
        }
    }

    static async loginUser(email, password) {
        try {
            const response = await axios.post(`${SERVER}/user/login`, {
                email: email,
                password: password
            });

            return response;
        } catch (err) {
            throw err;
        }
    }

    static async checkAuthUser(token) {
        try {
            const response = await axios.post(`${SERVER}/user/authentication`, {
                token: token
            });

            return response;
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(data) {
        try {
            const response = await axios.put(`${SERVER}/user/update`, data);

            return response;
        } catch (err) {
            throw err;
        }
    }

    static async removeFromCart(userId, cartItemId) {
        try {
            const response = await axios.delete(`${SERVER}/user/cart/${userId}/${cartItemId}`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async addToCart(userId, cartItem) {
        try {
            const response = await axios.put(`${SERVER}/user/cart`, {
                userId: userId,
                cartItem: cartItem
            });

            return response;
        } catch (err) {
            throw err;
        }
    }
}

export default User;