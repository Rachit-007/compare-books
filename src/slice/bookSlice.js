import { createSlice } from "@reduxjs/toolkit";

/**
 * this is the inital state which holds the books id which is going to be compared
 */
const initialState = {
  books: [],
};

/**
 * this is bookslice which takes action to add a book id to the books array and returns brand new array
 */
export const bookSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    compareBooks: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeCompareBooks: (state, action) => {
      state.books = state.books.filter((book) => book !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { compareBooks, removeCompareBooks } = bookSlice.actions;

export default bookSlice.reducer;
