import axios from 'axios';
import SERVER from '../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

class Subcategory {
    static fetchSubcategories = createAsyncThunk('subcategories/fetchSubcategories', async () => {
        try {
            const response = await axios.get(`${SERVER}/subcategory`);

            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            throw err;
        }
    });

    static filterByCategory(subcategories, categoryId, count = null) {
        let filteredSubcategories = subcategories.filter((subcategory) => subcategory.parent_category === categoryId);

        if (count !== null && count >= 0) {
            filteredSubcategories = filteredSubcategories.slice(0, count);
        }

        return filteredSubcategories;
    }

    static getFirstSubcategoryForEachCategory(subcategories) {
        const categoryMap = new Map();

        for (const subcategory of subcategories) {
            if (!categoryMap.has(subcategory.parent_category)) {
                categoryMap.set(subcategory.parent_category, subcategory);
            }
        }

        return Array.from(categoryMap.values());
    }
}

export default Subcategory;