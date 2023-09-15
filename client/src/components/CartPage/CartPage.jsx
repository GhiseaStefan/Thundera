import React from 'react'
import { useSelector } from 'react-redux';
import { CartContainer, Container, Bar, CheckoutContainer, Button, Label, InputText, TotalPrice } from './CartPageStyles';
import CartItem from './CartItem/CartItem';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const totalPrice = cart.reduce((acc, ci) => acc + (ci.quantity * ci.price), 0);

    return (
        <Container>
            <CartContainer>
                <Bar>{cart.reduce((acc, ci) => acc + ci.quantity, 0)} products</Bar>
                <div>
                    {cart.map((ci) => (
                        <CartItem key={ci._id} ci={ci} />
                    ))}
                </div>
            </CartContainer>
            <CheckoutContainer>
                <h2>Order Summary</h2>
                <p>Products cost: {totalPrice} RON</p>
                <p>Delivery cost: 0 RON</p>
                <div>
                    <Label>Coupon code:</Label>
                    <InputText />
                </div>
                <h2>Total: </h2>
                <TotalPrice>{totalPrice} RON</TotalPrice>
                <Button href='/checkout'>
                    Go to checkout
                </Button>
            </CheckoutContainer>
        </Container>
    )
}

export default CartPage