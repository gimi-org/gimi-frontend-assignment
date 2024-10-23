import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { randomUserApi } from "@/app/api/randomUserApi";

export const store = configureStore({
  reducer: {
    [randomUserApi.reducerPath]: randomUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomUserApi.middleware),
});

setupListeners(store.dispatch);
