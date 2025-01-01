import { api } from "../../api/api";

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
      providesTags: ["books"],
    }),
  }),
});

export const { useGetBookListQuery } = booksApi;
