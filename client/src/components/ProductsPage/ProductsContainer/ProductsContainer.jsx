import React, { useEffect, useState } from 'react'
import Product from '../../../stores/productStore';
import ProductPreview from './ProductPreview/ProductPreview';
import { AllProducts, Container, ScrollTop, SelectContainer, UtilContainer } from './ProductsContainerStyles';
import ProductsCustomSelect from './ProductsCustomSelect/ProductsCustomSelect';
import { Link } from 'react-scroll';
import { AiOutlineArrowUp } from 'react-icons/ai';

const sortMethods = ['Newest', 'Ascending Price', 'Descending Price'];

const ProductsContainer = ({ subcategory }) => {
    const [products, setProducts] = useState([]);
    const [sortMethod, setSortMethod] = useState(sortMethods[0]);

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 20;

    const [showScrollButton, setShowScrollButton] = useState(false);

    const fetchProducts = async () => {
        try {
            let subcategoryId = subcategory ? subcategory._id : null;
            let fetchedProducts = [];

            switch (sortMethod) {
                case 'Newest':
                    fetchedProducts = await Product.fetchProducts(null, subcategoryId, page, pageSize);
                    break;
                case 'Ascending Price':
                    fetchedProducts = await Product.fetchProducts('asc', subcategoryId, page, pageSize);
                    break;
                case 'Descending Price':
                    fetchedProducts = await Product.fetchProducts('desc', subcategoryId, page, pageSize);
                    break;
                default:
                    break;
            }

            return fetchedProducts;
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        try {
            setPage(1);
            setHasMore(true);
            fetchProducts().then((fetchedProducts) => setProducts(fetchedProducts));
            if (page !== 1) {
                setProducts([]);
            }
            setShowScrollButton(false);
        } catch (err) {
            console.error(err);
        }
    }, [sortMethod]);

    useEffect(() => {
        try {
            if (!hasMore) return;

            fetchProducts().then((fetchedProducts) => {
                if (fetchedProducts.length === 0) {
                    setHasMore(false);
                } else {
                    setProducts([...products, ...fetchedProducts]);
                }
            });
        } catch (err) {
            console.error(err);
        }
    }, [page]);

    const handleScroll = () => {
        if (!hasMore) return;

        const scrollThreshold = 200;
        const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - scrollThreshold;

        if (isBottom) {
            setPage((prevPage) => prevPage + 1);
            setShowScrollButton(true);
        }
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    useEffect(() => {
        const debounceScroll = debounce(handleScroll, 100);
        window.addEventListener('scroll', debounceScroll);

        return () => {
            window.removeEventListener('scroll', debounceScroll);
        };
    }, [hasMore]);

    return (
        <Container>
            <div>
                <UtilContainer>
                    <h1 id='products-header'>{subcategory ? subcategory.subcategory_name : 'All Products'} <span>({products.length} products)</span></h1>
                    <SelectContainer>
                        <label htmlFor='sort'>Sort by:</label>
                        <ProductsCustomSelect options={sortMethods} selectedOption={sortMethod} setSelectedOption={setSortMethod} />
                    </SelectContainer>
                </UtilContainer>
                <AllProducts>
                    {products.map((product, index) => (
                        <ProductPreview key={index} product={product} />
                    ))}
                </AllProducts>
            </div>
            {showScrollButton &&
                <Link to='products-header' spy={true} smooth={true} offset={-150} duration={700}>
                    <ScrollTop>
                        <AiOutlineArrowUp />
                    </ScrollTop>
                </Link>
            }
        </Container>
    )
}

export default ProductsContainer