import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Bar, ImageContainer, Product, ProductList, UtilContainer, ViewCart } from './NavbarCartStyles';
import SERVER from '../../../config';
import { CartContainer } from '../NavbarStyles';
import { setCart } from '../../../slices/cartSlice';

const NavbarCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const currentURL = window.location.href;

        if (!currentURL.includes("redirect_status=succeeded")) {
            dispatch(setCart(user.cart));
        } else {
            dispatch(setCart([]));
        }
    }, [user]);

    return (
        <CartContainer>
            {cart.length > 0 &&
                <>
                    <Bar>
                        {cart.reduce((acc, ci) => acc + ci.quantity, 0)} products
                    </Bar>
                    <ProductList>
                        {cart.map((ci) =>
                            <Product key={ci._id}>
                                <ImageContainer>
                                    <img src={`${SERVER}/images/products/${ci._id}/img1.jpg`} alt='' />
                                </ImageContainer>
                                <UtilContainer>
                                    <p>{ci.product_name}</p>
                                    <p>Quantity: {ci.quantity}</p>
                                    <p>Price: {ci.price} RON</p>
                                </UtilContainer>
                            </Product>
                        )}
                    </ProductList>
                    <Bar>
                        Total: {cart.reduce((acc, ci) => acc + (ci.price * ci.quantity), 0)} RON
                    </Bar>
                    <ViewCart href='/cart'>
                        View Cart
                    </ViewCart>
                </>
            }
        </CartContainer>
    )
}

export default NavbarCart