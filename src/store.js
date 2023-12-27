import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../src/api/productsApi";
import authReducer from "../src/slices/authSlice"
import { authApi } from "../src/api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { userApi } from "../src/api/userApi";
import { commentsApi } from "../src/api/commentsApi";

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