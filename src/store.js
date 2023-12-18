import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import authReducer from "../src/slices/authSlice"
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch);