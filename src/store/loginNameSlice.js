import { createSlice
    
 } from "@reduxjs/toolkit";
export const loginNameSlice = createSlice({
    name: "loginName",
    initialState:{
        name: "",
    },
    reducers: {
        setLoginName: (state, action)=>{
            // console.log('dispatch setSearch');          
            state.name = action.payload;
        },
    }
})

export const { setLoginName } = loginNameSlice.actions
export const getLoginName = (state) => state.loginName.name
export default loginNameSlice.reducer