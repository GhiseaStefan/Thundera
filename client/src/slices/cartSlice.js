import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload;
        },
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.find(item => item._id === newItem._id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                newItem.quantity = 1;
                state.push(newItem);
            }
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            const itemIndexToRemove = state.findIndex(item => item._id === itemIdToRemove);

            if (itemIndexToRemove !== -1) {
                return [...state.slice(0, itemIndexToRemove), ...state.slice(itemIndexToRemove + 1)];
            }

            return state;
        }
    }
});

export const { setCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;