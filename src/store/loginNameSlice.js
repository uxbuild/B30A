import { createSlice } from "@reduxjs/toolkit";

export const LoginNameSlice = createSlice({
  name: "loginName",
  initialState: {
    name: "JAMES BOND",
  },
  reducers: {
    setLoginName: (state, action) => {
      // console.log('dispatch setSearch');
      state.name = action.payload;
    },
  },
});

export const { setLoginName } = LoginNameSlice.actions;
export const getLoginName = (state) => state.loginName.name;
export default LoginNameSlice.reducer;
