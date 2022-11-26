import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotalQty: 0,
    cartTotalAmt: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            // itemIndex returns the positions of the item
            // if the item is in cart, index will be 0 or higher
            // no item in cart, index will be -1
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQty += 1;
            } else {
                const tempProduct = { ...action.payload, cartQty: 1 };
                state.cartItems.push(tempProduct);
            }
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQty > 1) {
                state.cartItems[itemIndex].cartQty -= 1;
            } else if (state.cartItems[itemIndex].cartQty === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems
            }
        },
        clearCart: (state, action ) => {
            state.cartItems = []
        },
        getTotal: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQty } = cartItem;
                    const itemTotal = price * cartQty

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQty

                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0
                }
            );

            state.cartTotalQty = quantity;
            state.cartTotalAmt = total;
        }
    }
});


export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = cartSlice.actions;

