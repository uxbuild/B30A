import { configureStore } from "@reduxjs/toolkit";
import  confirmLoginReducer  from "./ConfirmLoginSlice";
import loginReducer from "../components/Login/LoginSlice";

import api from '../api/api'

const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      confirmLogin: confirmLoginReducer,
      login: loginReducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
  
  export default store;