import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: "search key..",
// }

// share state of whether there is a token
export const searchKeySlice = createSlice({
    name: "searchKey",
    initialState:{
        value: "",
    },
    reducers: {
        setSearchKey: (state, action)=>{
            console.log('dispatch setSearch');          
            state.value = action.payload;
        },
    }
})

export const { setSearchKey } = searchKeySlice.actions
export const getSearchKey = (state) => state.searchKey.value
export default searchKeySlice.reducer