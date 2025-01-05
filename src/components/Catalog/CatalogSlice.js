import { api } from "../../api/api";
import { createSlice } from "@reduxjs/toolkit";

const catalogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCatalog: builder.query({
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
  catalog: [],
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    updateCatalog: (state, action) => {
      state.catalog = action.payload;
    },
  },
});
export const { useGetCatalogQuery } = catalogApi;
// Action creators are generated for each reducer function.
export const { updateCatalog } = catalogSlice.actions;
// export reducer
export default catalogSlice.reducer;
