import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: API_URL,
    }),
    // INQUIRY = how do tags work?
    tagTypes: ["user","books", "book"],
    endpoints: () => ({}),
  });
  
  export default api;