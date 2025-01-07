import { createSlice } from "@reduxjs/toolkit";

export const LoginNameSlice = createSlice({
  name: "loginName",
  initialState: {
    name: "GUEST",
  },
  reducers: {
    setLoginName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setLoginName } = LoginNameSlice.actions;
export const getLoginName = (state) => state.loginName.name;
export default LoginNameSlice.reducer;
