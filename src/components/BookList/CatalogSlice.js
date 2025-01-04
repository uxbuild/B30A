import { api } from "../../api/api";
import { createSlice } from "@reduxjs/toolkit";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBookList: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformResponse:(result)=>{return result.books},
      transformError: (result)=>result.error.message,
      providesTags: ["books"],
    }),
  }),
});

const initialState = {
  books: [],
  crap: "poop",
};

export const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    updateBookList: (state, action) => {
      state.books = action.payload;
    },
  },
});
export const { useGetBookListQuery } = booksApi;
// Action creators are generated for each reducer function.
export const { updateBookList } = bookListSlice.actions;
// export reducer
export default bookListSlice.reducer;
