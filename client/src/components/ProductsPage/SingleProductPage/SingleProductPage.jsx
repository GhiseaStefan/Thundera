import React from 'react'
import { Container, MainContainer, UtilContainer, Text, AddButton, Description } from './SingleProductPageStyles'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../slices/cartSlice';
import User from '../../../stores/userStore';
import ViewProductImages from './ViewProductImages/ViewProductImages';

const SingleProductPage = ({ product }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleAddToCart = async () => {
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
        <Container>
            <h2>{product.product_name}</h2>
            <MainContainer>
                <ViewProductImages product={product} />
                <UtilContainer>
                    <Description>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.</p>
                        <ul>
                            <li>Etiam consequat neque et ligula dignissim sagittis</li>
                            <li>Praesent vel nisl pretium, consectetur lectus eget, commodo odio</li>
                            <li>Nullam in libero id turpis tempor dapibus</li>
                        </ul>
                    </Description>
                    <Text>Price: {product.price} RON</Text>
                    <AddButton onClick={handleAddToCart}>Add to cart</AddButton>
                </UtilContainer>
            </MainContainer>
        </Container>
    )
}

export default SingleProductPage 