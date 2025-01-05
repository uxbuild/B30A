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
            console.log('dispatch confirmLogin IN');          
            state.value = true;
        },
        confirmLogout: (state)=>{
            console.log('dispatch confirmLogout OUT');
            state.value = false;
        },
    }
})

export const { confirmLogin, confirmLogout } = confirmLoginSlice.actions
export const getLogin = (state) => state.confirmLogin.value
export default confirmLoginSlice.reducer