import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import authReducer from "../src/slices/authSlice"
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { commentsApi } from "./commentsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware, userApi.middleware, commentsApi.middleware)
})

setupListeners(store.dispatch);