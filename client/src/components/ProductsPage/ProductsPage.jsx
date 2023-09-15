import React, { useEffect, useState } from 'react'
import ProductsContainer from './ProductsContainer/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import Subcategory from '../../stores/subcategoryStore';
import { Route, Routes } from 'react-router-dom';
import Product from '../../stores/productStore';
import SingleProductPage from './SingleProductPage/SingleProductPage';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const subcategories = useSelector((state) => state.subcategories);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            dispatch(Subcategory.fetchSubcategories());
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);

    useEffect(() => {
        try {
            Product.fetchProducts().then((fetchedProducts) => setProducts(fetchedProducts));
        } catch (err) {
            console.error(err);
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path='/' element={<ProductsContainer />} />
                {subcategories.map((subcategory) => {
                    const subcategoryHlink = subcategory.subcategory_name.toLowerCase().replace(/ /g, '+');
                    return (
                        <Route key={subcategory._id} path={`/${subcategoryHlink}`} element={<ProductsContainer subcategory={subcategory} />} />
                    )
                })}
                {products.map((product) => (
                    <Route key={product._id} path={`/${product._id}`} element={<SingleProductPage product={product} />} />
                ))}
            </Routes>
        </>
    )
}

export default ProductsPage