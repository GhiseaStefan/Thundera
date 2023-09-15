import React, { useEffect, useState } from 'react'
import { Container, MainImageContainer, PrevImageContainer, PrevImages } from './ViewProductImagesStyles'
import SERVER from '../../../../config';
import Product from '../../../../stores/productStore';

const ViewProductImages = ({ product }) => {
    const [numberOfImages, setNumberOfImages] = useState(null);
    const [$activeImage, setActiveImage] = useState(1);

    const handleGetNumberOfImages = async () => {
        try {
            const response = await Product.getNumberOfImages(product._id);

            if (response.status === 200) {
                setNumberOfImages(response.data.numberOfImages);
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGetNumberOfImages();
    }, [])

    let prevImageContainers = [];

    if (numberOfImages) {
        for (let i = 0; i < numberOfImages; i++) {
            prevImageContainers.push(
                <PrevImageContainer $activeImage={$activeImage === (i + 1)} onClick={() => setActiveImage(i + 1)}>
                    <img src={`${SERVER}/images/products/${product._id}/img${i + 1}.jpg`} alt='' />
                </PrevImageContainer>
            );
        }
    }

    if (!numberOfImages) return;

    return (
        <Container>
            <MainImageContainer>
                <img src={`${SERVER}/images/products/${product._id}/img${$activeImage}.jpg`} alt='' />
            </MainImageContainer>
            <PrevImages>
                {prevImageContainers}
            </PrevImages>
        </Container>
    )
}

export default ViewProductImages