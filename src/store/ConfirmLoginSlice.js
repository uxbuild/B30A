import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_ID } from "../other/token";

const initialState = {
    // value: false,
    value: localStorage.getItem(TOKEN_ID) ? true : false
}

// share state of whether there is a token
export const confirmLoginSlice = createSlice({
    name: "confirmLogin",
    initialState,
    reducers: {
        confirmLogin: (state)=>{
            console.log('dispatch confirmLogin');          
            state.value = true;
        },
        confirmLogout: (state)=>{
            state.value = false;
            console.log('dispatch confirmLogout');
        },
    }
})

export const { confirmLogin, confirmLogout } = confirmLoginSlice.actions
export const getLogin = (state) => state.confirmLogin.value
export default confirmLoginSlice.reducer