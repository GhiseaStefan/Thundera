import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import StripeStore from '../../stores/stripeStore';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Checkout = () => {
    const user = useSelector((state) => state.user);

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const handleCreatePaymentIntent = async () => {
            try {
                const response = await StripeStore.createPaymentIntent(user._id);
                setClientSecret(response.data.clientSecret);
            } catch (err) {
                console.error('Error creating PaymentIntent:', err);
            }
        };

        handleCreatePaymentIntent();
    }, []);

    const options = {
        clientSecret
    }

    if (!clientSecret) {
        return;
    }

    return (
        <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Checkout