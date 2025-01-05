import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { TOKEN_ID } from "../../other/token";

const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ firstname, lastname, email, password }) => ({
        url: "/users/register",
        method: "POST",
        body: {
          firstname,
          lastname,
          email,
          password,
        },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  console.log('REGISTER register token: ', payload.token);
  localStorage.setItem(TOKEN_ID, payload.token);
};

const registerSlice = createSlice({
  name: "register",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export default registerSlice.reducer;

export const { useRegisterMutation } = registerApi;
