import axios from 'axios';
import SERVER from '../config';

class StripeStore {
    static async createPaymentIntent(userId) {
        try {
            const response = await axios.post(`${SERVER}/stripe/create-payment-intent`, {
                userId: userId,
            });

            return response;
        } catch (err) {
            throw err;
        }
    }

    static async createOrder(userId, orderInfo, cart) {
        try {
            const response = await axios.post(`${SERVER}/order/create-order`, {
                userId: userId,
                orderInfo: orderInfo,
                cart: cart
            });

            return response;
        } catch (err) {
            throw err;
        }
    }
}

export default StripeStore;