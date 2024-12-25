import { api } from "../../api/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserAccount: builder.query({
      query: () => ({
        url: '/users/me',
        method: "GET",
        headers:{
            "Content-Type": "applicaton/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      providesTags: ["Account"],
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

export const { useGetUserAccountQuery } = accountApi;