import { api } from "../../api/api";
import { TOKEN_ID } from "../../other/token";

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
      providesTags: ["book"],
    }),
    updateBookStatus: builder.mutation({
      query: ({id, available}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
        body: {
          available,
        },
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetBookDetailsQuery, useUpdateBookStatusMutation } = bookDetailsApi;
