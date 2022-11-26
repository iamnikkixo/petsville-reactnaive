import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../features/home/homeSlice";
import { newclientsReducer } from "../features/newclients/newclientsSlice";
import { servicesReducer } from "../features/services/servicesSlice";
import { reservationReducer } from "../features/reservations/reservationsSlice";
import { productsReducer } from "../features/products/productsSlice";
import { cartReducer } from "../features/products/cartSlice";


export const store = configureStore({
    reducer: {
        home: homeReducer,
        newclients: newclientsReducer,
        services: servicesReducer,
        reservation: reservationReducer, 
        products: productsReducer,
        cart: cartReducer,
    }
});