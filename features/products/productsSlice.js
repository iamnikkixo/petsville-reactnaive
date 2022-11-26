import { PRODUCTS } from '../../shared/products';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsArray: PRODUCTS
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
})

export const productsReducer = productsSlice.reducer;

export const allProducts = (state) => {
    return state.products.productsArray
};
