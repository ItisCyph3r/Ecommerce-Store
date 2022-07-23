import { combineReducers } from 'redux'
import authSlice from "./auth-slice";
import cartSlice from "./cart-Slice";
import counterSlice from './counter-Slice';
import uiSlice from "./ui-slice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    counter: counterSlice.reducer
})

