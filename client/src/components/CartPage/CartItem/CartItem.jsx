import React from 'react'
import { Container, ItemImage, ItemInfo } from './CartItemStyles'
import SERVER from '../../../config';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../slices/cartSlice';
import User from '../../../stores/userStore';

const CartItem = ({ ci }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleRemoveFromCart = async () => {
        dispatch(removeFromCart(ci._id));
        await User.removeFromCart(user._id, ci._id);
    }

    return (
        <Container>
            <ItemImage>
                <img src={`${SERVER}/images/products/${ci._id}/img1.jpg`} alt='' />
            </ItemImage>
            <ItemInfo>
                <p>{ci.price} RON</p>
                <p>{ci.product_name}</p>
                <p>Quantity: {ci.quantity}</p>
            </ItemInfo>
            <AiOutlineClose onClick={handleRemoveFromCart} />
        </Container>
    )
}

export default CartItem