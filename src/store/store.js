import { configureStore } from "@reduxjs/toolkit";
import  confirmLoginReducer  from "./ConfirmLoginSlice";

import api from '../api/api'

const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      login: confirmLoginReducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
  
  export default store;