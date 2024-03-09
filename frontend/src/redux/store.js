import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/ApiSlice";

import authSlice from "./feautare/auth/authSlice";
import movieSlcie from "./feautare/auth/movieSlcie";


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
     auth : authSlice,
     movies : movieSlcie

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

setupListeners(store.dispatch);
export default store;