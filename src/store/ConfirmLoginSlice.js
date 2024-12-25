import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

// share state of whether there is a token
export const ConfirmLoginSlice = createSlice({
    name: "confirmLogin",
    initialState,
    reducers: {
        login: (state)=>{
            state.value = true;
        },
        logout: (state)=>{
            state.value = false;
        },
    }
})

export const { login, logout } = ConfirmLoginSlice.actions
export default ConfirmLoginSlice.reducer