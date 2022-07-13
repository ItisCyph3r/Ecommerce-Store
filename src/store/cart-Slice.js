import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'auth',
    initialState: { 
        itemList: [],
        totalQuantity: 0,
        displayCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload

            const existingItem = state.itemList.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            }
            else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeFromCart() {

        },
        setDisplayCart(state) {
            state.displayCart = !state.displayCart;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;