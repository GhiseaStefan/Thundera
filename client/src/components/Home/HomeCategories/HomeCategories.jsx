import React, { useEffect, useState } from 'react'
import HomeCategory from './HomeCategory/HomeCategory'
import { BottomSection, Button, ButtonsContainer, Container, Header, TopSection } from './HomeCategoriesStyles'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Subcategory from '../../../stores/subcategoryStore';

const HomeCategories = () => {
    const dispatch = useDispatch();
    const allSubcategories = useSelector((state) => state.subcategories);

    const [subcategories, setSubcategories] = useState([]);
    const [$currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        try {
            dispatch(Subcategory.fetchSubcategories());
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);

    useEffect(() => {
        if (allSubcategories) {
            const filteredSubcategories = Subcategory.getFirstSubcategoryForEachCategory(allSubcategories);
            setSubcategories(filteredSubcategories);
        }
    }, [allSubcategories]);

    const handleLeftButton = () => {
        setCurrentIndex(prevIndex => (prevIndex === subcategories.length - 1 ? 0 : prevIndex + 1));
    };

    const handleRightButton = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? subcategories.length - 1 : prevIndex - 1));
    };

    return (
        <Container>
            <TopSection>
                <Header>Shop by Category</Header>
                <ButtonsContainer>
                    <Button onClick={handleLeftButton}><AiOutlineArrowLeft /></Button>
                    <Button onClick={handleRightButton}><AiOutlineArrowRight /></Button>
                </ButtonsContainer>
            </TopSection>
            <BottomSection>
                {subcategories.map((subcategory, index) => (
                    <HomeCategory key={index} subcategory={subcategory} $currentIndex={$currentIndex} />
                ))}
            </BottomSection>
        </Container>
    )
}

export default HomeCategories