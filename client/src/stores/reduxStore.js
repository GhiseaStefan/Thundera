import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../slices/categoriesSlice';
import subcategoriesReducer from '../slices/subcategoriesSlice';
import userReducer from '../slices/userSlice';
import cartReducer from '../slices/cartSlice';

const reduxStore = configureStore({
    reducer: {
        categories: categoriesReducer,
        subcategories: subcategoriesReducer,
        user: userReducer,
        cart: cartReducer,
    }
});

export default reduxStore;