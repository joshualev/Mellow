import { createSlice, current } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "light" },
  reducers: {
    toggleTheme: (state, action) => {
      if (action.payload === "light") {
        state.theme = "light";
      } else if (action.payload === "dark") {
        state.theme = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
