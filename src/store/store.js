import { configureStore } from "@reduxjs/toolkit";
import confirmLoginReducer from "./confirmLoginSlice";
import loginReducer from "../components/Login/LoginSlice";
import searchKeyReducer from "./searchKeySlice";
import reservationsReducer from "../components/Reservations/reservationsSlice";
import catalogReducer from "../components/Catalog/CatalogSlice";
import registerReducer from "../components/Register/RegisterSlice";
import loginNameReducer from "./LoginNameSlice";

import api from "../api/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    confirmLogin: confirmLoginReducer,
    login: loginReducer,
    searchKey: searchKeyReducer,
    // counter: counterReducer,
    reservations: reservationsReducer,
    catalog: catalogReducer,
    register: registerReducer,
    loginName: loginNameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
