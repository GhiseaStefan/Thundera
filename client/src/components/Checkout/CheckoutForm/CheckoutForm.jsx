import React, { useState, useEffect } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Container, Error, LabelInputContainer, LoadingBar, PaymentContainer, Spinner, SubmitButton, UtilContainer, UtilPayWrapper } from './CheckoutFormStyles';
import { useSelector } from 'react-redux';
import StripeStore from '../../../stores/stripeStore';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const user = useSelector((state) => state.user);

    const [message, setMessage] = useState(null);
    const [$messageProgress, setMessageProgress] = useState(0);
    const [$isLoading, setIsLoading] = useState(false);
    const [orderInfo, setOrderInfo] = useState({
        firstName: user.firstName ? user.firstName : '',
        lastName: user.lastName ? user.lastName : '',
        phone: user.phone ? user.phone : '',
        county: user.county ? user.county : '',
        city: user.city ? user.city : '',
        address: user.address ? user.address : '',
        zip: user.zip ? user.zip : '',
    });

    const paymentElementOptions = {
        layout: 'tabs',
        fields: {
            billingDetails: {
                address: {
                    country: 'never'
                }
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (!orderInfo.firstName && !orderInfo.lastName && !orderInfo.county && !orderInfo.city && !orderInfo.address) {
            setMessage('Adress fields must be completed!');
            return;
        }

        setIsLoading(true);

        try {
            await StripeStore.createOrder(user._id, orderInfo, user.cart);

            const { error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://localhost:3000/checkout/success',
                    payment_method_data: {
                        billing_details: {
                            address: {
                                country: 'RO'
                            }
                        }
                    }
                }
            });

            if (error.type === 'card_error' || error.type === 'validation_error') {
                setMessage(error.message);
            } else {
                setMessage('An unexpected error occurred.');
            }
        } catch (err) {
            setMessage(err.response.data.error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderInfo(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        let interval;

        if (message) {
            const animationDuration = 5000;
            const updateInterval = 10;

            const steps = Math.floor(animationDuration / updateInterval);
            const stepIncrement = 100 / steps;

            interval = setInterval(() => {
                setMessageProgress((prevProgress) => {
                    const newProgress = prevProgress + stepIncrement;

                    if (newProgress >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            setMessage(null);
                            setMessageProgress(0);
                        }, 50);
                        return 100;
                    }

                    return newProgress;
                });
            }, updateInterval);
        } else {
            setMessageProgress(0);
        }

        return () => {
            clearInterval(interval);
        };
    }, [message]);

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <UtilPayWrapper>
                    <UtilContainer>
                        <LabelInputContainer>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' id='firstName' name='firstName' value={orderInfo.firstName} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' id='lastName' name='lastName' value={orderInfo.lastName} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' id='phone' name='phone' value={orderInfo.phone} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='county'>County</label>
                            <input type='text' id='county' name='county' value={orderInfo.county} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='city'>City</label>
                            <input type='text' id='city' name='city' value={orderInfo.city} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='address'>Address</label>
                            <input type='text' id='address' name='address' value={orderInfo.address} onChange={handleChange} />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <label htmlFor='zip'>ZIP Code</label>
                            <input type='text' id='zip' name='zip' value={orderInfo.zip} onChange={handleChange} />
                        </LabelInputContainer>
                    </UtilContainer>
                    <PaymentContainer>
                        <PaymentElement options={paymentElementOptions} />
                        <SubmitButton $isLoading={$isLoading} disabled={$isLoading}>
                            <Spinner $isLoading={$isLoading} />
                            <span>
                                {$isLoading ? 'Loading...' : 'Submit order'}
                            </span>
                        </SubmitButton>
                    </PaymentContainer>
                </UtilPayWrapper>
                {message &&
                    <Error>
                        {message}
                        <LoadingBar $messageProgress={$messageProgress} />
                    </Error>
                }
            </form>
        </Container>
    )
}

export default CheckoutForm