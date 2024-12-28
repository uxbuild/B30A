import { api } from "../../api/api";

const bookDetailsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBookDetails: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Books"],
    }),
  }),
});

export const { useGetBookDetailsQuery } = bookDetailsApi;
