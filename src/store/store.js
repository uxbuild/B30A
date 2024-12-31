import { configureStore } from "@reduxjs/toolkit";
import confirmLoginReducer from "./confirmLoginSlice";
import loginReducer from "../components/Login/LoginSlice";
import searchKeyReducer from "./searchKeySlice";

import api from "../api/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    confirmLogin: confirmLoginReducer,
    login: loginReducer,
    searchKey: searchKeyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
