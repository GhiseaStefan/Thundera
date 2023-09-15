import React, { useEffect, useRef, useState } from 'react'
import { Container } from './AddProductStyles'
import { useDispatch, useSelector } from 'react-redux';
import Subcategory from '../../../stores/subcategoryStore';
import axios from 'axios';
import SERVER from '../../../config';

const AddProduct = () => {
    const dispatch = useDispatch();
    const subcategories = useSelector((state) => state.subcategories);

    const fileInputRef = useRef(null);

    useEffect(() => {
        try {
            dispatch(Subcategory.fetchSubcategories());
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);

    const [data, setData] = useState({
        product_name: '',
        parent_subcategory: '',
        price: '',
        quantity: '',
        images: []
    });

    useEffect(() => {
        if (subcategories.length > 0) {
            setData(prevdata => ({
                ...prevdata,
                parent_subcategory: subcategories[0]._id
            }))
        }
    }, [subcategories]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'images') {
            setData({ ...data, [name]: Array.from(files) });
        } else {
            setData({ ...data, [name]: value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER}/product`, {
                product_name: data.product_name,
                parent_subcategory: data.parent_subcategory,
                price: data.price,
                quantity: data.quantity
            }, { headers: { 'Content-Type': 'application/json' } });
            const productId = response.data._id;

            if (response.status === 201) {
                const formData = new FormData();
                formData.append('_id', productId);
                data.images.forEach((image) => {
                    formData.append('images', image);
                });

                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setData((prevdata) => ({
                    ...prevdata,
                    product_name: '',
                    images: []
                }))

                await axios.post(`${SERVER}/product/image`, formData);
            }

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='parent_subcategory'>Subcategory:</label>
                    <select name='parent_subcategory' id='parent_subcategory' onChange={handleChange}>
                        {subcategories.map((subcategory) => (
                            <option key={subcategory._id} value={subcategory._id}>{subcategory.subcategory_name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='product_name'>Product Name:</label>
                    <input type='text' value={data.product_name} name='product_name' id='product_name' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input type='text' value={data.price} name='price' id='price' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='quantity'>Quantity:</label>
                    <input type='text' value={data.quantity} name='quantity' id='quantity' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='images'>Product Images:</label>
                    <input ref={fileInputRef} type='file' name='images' id='images' multiple onChange={handleChange} />
                </div>
                <div>
                    <input type='submit' value='Add Product' />
                </div>
            </form>
        </Container>
    )
}

export default AddProduct