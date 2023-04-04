import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await fetch("https://api.reddit.com/hot.json");
    const data = await response.json();
    console.log("Raw Dog", data);
    return data;
  }
);

export const searchReddit = createAsyncThunk(
  "content/searchContent",
  async (searchString) => {
    const response = await fetch(
      `https://api.reddit.com/search.json?q=${searchString}`
    );
    const data = await response.json();
    return data;
  }
);

export const prevList = createAsyncThunk(
  "content/prevContent",
  async (before) => {
    const response = await fetch(
      `https://api.reddit.com/hot.json?before=${before}`
    );
    const data = await response.json();
    return data;
  }
);

export const nextList = createAsyncThunk(
  "content/nextContent",
  async (after) => {
    const response = await fetch(
      // TODO: count needs to be stored in state and incremented
      `https://api.reddit.com/hot.json?after=${after}&count=25`
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
      })
      .addCase(prevList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(prevList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(prevList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(nextList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(nextList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(nextList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default displaySlice.reducer;
