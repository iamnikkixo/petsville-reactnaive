import { HOME } from '../../shared/home';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homeArray: HOME
};

const homeSlice = createSlice({
    name: 'home',
    initialState
});

export const homeReducer = homeSlice.reducer;

export const allHomeContent = (state) => {
    return state.home.homeArray;
};