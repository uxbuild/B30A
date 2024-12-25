import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";



const loginApi = api.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation({
        query: ({ email, password }) => ({
          url: "/users/login",
          method: "POST",
          body: {
            email,
            password,
          },
        }),
        invalidatesTags: ["User"],
      }),
    }),
  });
  
  const storeToken = (state, { payload }) => {
    localStorage.setItem("token", payload.token);
  };
  
  const loginSlice = createSlice({
    name: "login",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
      builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
    },
  });
  
  export default loginSlice.reducer;
  
  export const { useLoginMutation } = loginApi;