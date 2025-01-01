// CREATE SLICE

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  names:["bob", "jim"],
  books: [{title:"Lord of the Rings"}, {title: "Lord of the Flies"}]
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    updateBooks: (state, action)=>{
        state.books = action.payload; // do we have to manage array assignment?
    },
    addBook: (state, action)=>{
        state.books.push(action.payload);
    },
  },
});

// Action creators are generated for each reducer function.
export const { increment, decrement, incrementByAmount, addBook, updateBooks} = counterSlice.actions;
// export reducer
export default counterSlice.reducer;