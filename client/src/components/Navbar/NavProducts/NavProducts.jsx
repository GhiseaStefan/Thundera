import React, { useState } from 'react'
import { Container, Anchor, DropdownContainer, CategoryList } from './NavProductsStyles'
import { useLocation } from 'react-router-dom';
import MenuCategory from './NavCategories/NavCategories';

const NavProducts = ({ categories }) => {
    const location = useLocation();
    const $isActive = location.pathname === '/products';
    const [openCategory, setOpenCategory] = useState(null);

    const handleOpenCategory = (categoryName) => {
        if (openCategory === categoryName) {
            setOpenCategory(null);
        } else {
            setOpenCategory(categoryName);
        }
    }

    return (
        <Container $isActive={$isActive}>
            <Anchor $isActive={$isActive} href='/products'>
                Products
            </Anchor>
            <DropdownContainer>
                <CategoryList>
                    {categories.map((category, index) => (
                        <MenuCategory key={index} category={category} $isOpen={openCategory === category.category_name} handleOpenCategory={() => handleOpenCategory(category.category_name)} />
                    ))}
                </CategoryList>
            </DropdownContainer>
        </Container>
    )
}

export default NavProducts