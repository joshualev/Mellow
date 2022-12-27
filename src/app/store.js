import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import sectionsReducer from "../features/sections/sectionsSlice";
import themeReducer from "../features/theme/themeSlice";
import viewReducer from "../features/view/viewSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sectionsData: sectionsReducer,
    theme: themeReducer,
    view: viewReducer,
  },
});
