import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: API_URL,
    }),
    // how to handle multiple endpoints??
    tagTypes: ["Books, Account"],
    endpoints: () => ({}),
  });
  
  export default api;