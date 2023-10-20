import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    viewMode: "linear",
    isMobile: false,
  },
  reducers: {
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === "linear" ? "masonry" : "linear";
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export default settingsSlice.reducer;

export const { setIsMobile, setViewMode, toggleViewMode } =
  settingsSlice.actions;
