import axios from 'axios';
import SERVER from '../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

class Category {
    static fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
        try {
            const response = await axios.get(`${SERVER}/category`);

            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            throw err;
        }
    });
}

export default Category;