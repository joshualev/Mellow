import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const thumbsUpSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = thumbsUpSlice.actions;

export default thumbsUpSlice.reducer;
