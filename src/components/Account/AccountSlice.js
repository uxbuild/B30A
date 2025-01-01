import { api } from "../../api/api";
import { TOKEN_ID } from "../../other/token";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserAccount: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetUserAccountQuery } = accountApi;
