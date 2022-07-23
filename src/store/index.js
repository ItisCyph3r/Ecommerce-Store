// import { configureStore } from "@reduxjs/toolkit";

// import { reducer } from "./combineReducer";


// const store = configureStore({
//     reducer: reducer
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from "./combineReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [] // items we only want persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store);

export default store;