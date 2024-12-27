import { api } from "../../api/api";
// import { TOKEN_ID } from "../../other/token";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBookList: builder.query({
      query: () => ({
        url: '/books',
        method: "GET",
        headers:{
            "Content-Type": "applicaton/json",
            // Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
      }),
      providesTags: ["Books"],
    }),

    // updateUser: builder.mutation({
    //   query: ({ id, email }) => ({
    //     url: `/user/${id}`,
    //     method: "PUT",
    //     body: {
    //       email,
    //     },
    //   }),
    //   providesTags: ["User"],
    // }),
  }),
});

export const { useGetBookList } = booksApi;