import { createSlice } from "@reduxjs/toolkit";
import { NEWCLIENTS } from '../../shared/newclients';

const initialState = {
    newclientsArray: NEWCLIENTS
};

export const newclientsSlice = createSlice({
    name: 'newclients',
    initialState
});

export const newclientsReducer = newclientsSlice.reducer;

export const NewClientsArray = (state) => {
    return state.newclients.newclientsArray;
};
