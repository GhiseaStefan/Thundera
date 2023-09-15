import { AiOutlineRight } from 'react-icons/ai';
import { CategoryTitle, SubcategoriesContainer } from './NavCategoriesStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Subcategory from '../../../../stores/subcategoryStore';

const NavCategories = ({ category, $isOpen, handleOpenCategory }) => {
    const dispatch = useDispatch();
    const allSubcategories = useSelector((state) => state.subcategories);

    useEffect(() => {
        try {
            dispatch(Subcategory.fetchSubcategories());
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        if (allSubcategories && category) {
            const filteredSubcategories = Subcategory.filterByCategory(allSubcategories, category._id);
            setSubcategories(filteredSubcategories);
        }
    }, [allSubcategories, category])

    return (
        <li>
            <CategoryTitle onClick={handleOpenCategory}>
                {category.category_name} <AiOutlineRight />
            </CategoryTitle>
            {subcategories && $isOpen &&
                <SubcategoriesContainer>
                    {subcategories.map((subcategory, index) => {
                        const subcategoryHlink = subcategory.subcategory_name.toLowerCase().replace(/ /g, '+');

                        return (
                            <li key={index}>
                                <a href={`/products/${subcategoryHlink}`}>
                                    {subcategory.subcategory_name}
                                </a>
                            </li>
                        )
                    })}
                </SubcategoriesContainer>
            }
        </li>
    )
}

export default NavCategories