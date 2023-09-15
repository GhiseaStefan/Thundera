import { createSlice } from '@reduxjs/toolkit';
import Subcategory from '../stores/subcategoryStore';

const subcategoriesSlice = createSlice({
    name: 'subcategories',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Subcategory.fetchSubcategories.fulfilled, (state, action) => {
                return action.payload;
            });
    }
});

export default subcategoriesSlice.reducer;