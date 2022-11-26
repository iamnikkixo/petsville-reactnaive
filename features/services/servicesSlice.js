import { SERVICES } from '../../shared/services';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    servicesArray: SERVICES
};

export const servicesSlice = createSlice({
    name: 'services',
    initialState
});

export const servicesReducer = servicesSlice.reducer;

export const allServices = (state) => {
    return state.services.servicesArray;
};