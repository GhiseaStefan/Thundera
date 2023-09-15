import React from 'react'
import { Container, ImageContainer } from './ProductPreviewStyle'
import SERVER from '../../../../config';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../../../stores/userStore';
import { addToCart } from '../../../../slices/cartSlice';

const ProductPreview = ({ product }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleAddToCart = async (e) => {
        e.preventDefault();
        if (user) {
            try {
                await User.addToCart(user._id, product);
                dispatch(addToCart(product));
            } catch (err) {
                console.error(err);
            }
        } else {
            window.location.href = '/account/login';
        }
    }

    return (
        <Container href={`/products/${product._id}`}>
            <ImageContainer>
                <img src={`${SERVER}/images/products/${product._id}/img1.jpg`} alt='' />
            </ImageContainer>
            <p>
                {product.product_name}
            </p>
            <h2>
                Price: {product.price} RON
            </h2>
            <button onClick={handleAddToCart}>
                Add to cart
            </button>
        </Container>
    )
}

export default ProductPreview