import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'auth',
    initialState: { 
        clock: 24
    },
    reducers: {
        increase(state) {
            state.clock++;
        },
        decrease(state) {
            state.clock--;
        },
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;