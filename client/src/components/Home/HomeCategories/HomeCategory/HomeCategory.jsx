import React from 'react'
import { Container, Desc, HLink, Image, ImageContainer, TextContainer, Title } from './HomeCategoryStyles'
import { AiOutlineRight } from 'react-icons/ai';

const HomeCategory = ({ subcategory, $currentIndex }) => {
    const subcategoryHlink = subcategory.subcategory_name.toLowerCase().replace(/ /g, '+');

    return (
        <Container $currentIndex={$currentIndex}>
            <TextContainer>
                <Title>
                    {subcategory.subcategory_name}
                </Title>
                <Desc>
                    Nam rhoncus nisi id iaculis egestas. Sed tristique vehicula mauris. Ut mollis, nisl gravida.
                </Desc>
                <HLink href={`/products/${subcategoryHlink}`}>
                    View {subcategory.subcategory_name} <AiOutlineRight />
                </HLink>
            </TextContainer>
            <ImageContainer>
                <Image src={`/images/home_categories/${subcategory.subcategory_name}.png`} />
            </ImageContainer>
        </Container>
    )
}

export default HomeCategory