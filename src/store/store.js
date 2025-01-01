import { configureStore } from "@reduxjs/toolkit";
import confirmLoginReducer from "./confirmLoginSlice";
import loginReducer from "../components/Login/LoginSlice";
import searchKeyReducer from "./searchKeySlice";
import counterReducer from "../components/Reservations/CounterSlice";
import reservationsReducer from "../components/Reservations/reservationsSlice";
import bookListReducer from "../components/BookList/BookListSlice";

import api from "../api/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    confirmLogin: confirmLoginReducer,
    login: loginReducer,
    searchKey: searchKeyReducer,
    counter: counterReducer,
    reservations: reservationsReducer,
    bookList: bookListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
