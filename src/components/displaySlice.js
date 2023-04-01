import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await fetch("https://www.reddit.com/hot.json");
    const data = await response.json();
    return data;
  }
);

export const searchReddit = createAsyncThunk(
  "content/searchContent",
  async (searchString) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${searchString}`
    );
    const data = await response.json();
    return data;
  }
);

// https://www.reddit.com/search.json?q=${searchString}

const displaySlice = createSlice({
  name: "content",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchReddit.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchReddit.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(searchReddit.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default displaySlice.reducer;
// export const { searchResultsUpdated, searchQueryUpdated } =
//   displaySlice.actions;
