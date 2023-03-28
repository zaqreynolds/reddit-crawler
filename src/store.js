import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./components/displaySlice";

export const store = configureStore({
  reducer: {
    content: displayReducer,
  },
});
