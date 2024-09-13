import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer } from "./slices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage: storage,
    whiteList:["user"],
}

const rootReducer = combineReducers({
    user:userReducer,
    product:productReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
});


export const persistedStore =persistStore(store);