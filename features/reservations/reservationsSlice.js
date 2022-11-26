import { RESERVATION } from '../../shared/reservations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservationArray: RESERVATION
};

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState
});

export const reservationReducer = reservationSlice.reducer;

export const allRooms = (state) => {
    return state.reservation.reservationArray;
};



