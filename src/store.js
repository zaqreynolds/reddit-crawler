import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./components/slices/contentSlice";
import settingsReducer from "./components/slices/settingsSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    settings: settingsReducer,
  },
});
