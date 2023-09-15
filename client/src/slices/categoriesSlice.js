import { createSlice } from '@reduxjs/toolkit';
import Category from '../stores/categoryStore';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Category.fetchCategories.fulfilled, (state, action) => {
                return action.payload;
            });
    },

});

export default categoriesSlice.reducer;