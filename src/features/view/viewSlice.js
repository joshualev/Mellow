import { createSlice, current } from "@reduxjs/toolkit";

export const viewSlice = createSlice({
  name: "view",
  initialState: { view: "board" },
  reducers: {
    toggleView: (state, action) => {
      if (action.payload === "board") {
        state.view = "board";
      } else if (action.payload === "list") {
        state.view = "list";
      }
    },
  },
});

export const { toggleView } = viewSlice.actions;

export default viewSlice.reducer;
