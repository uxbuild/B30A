import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

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
        invalidatesTags: ["User"],
      }),
    }),
  });
  
  const storeToken = (state, { payload }) => {
    console.log('register slice token saved: ', payload.token);
    localStorage.setItem("token", payload.token);
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