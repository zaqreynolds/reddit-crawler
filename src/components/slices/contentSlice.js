import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    thunkAPI.dispatch(resetPageCount());
    const response = await fetch(
      `https://api.reddit.com/${state.content.filter}.json`,
    );
    const data = await response.json();
    return data;
  },
);

export const searchReddit = createAsyncThunk(
  "content/searchContent",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    thunkAPI.dispatch(resetPageCount());
    const response = await fetch(
      `https://api.reddit.com/search.json?q=${state.content.searchString}&sort=${state.content.filter}`,
    );
    const data = await response.json();
    return data;
  },
);

export const nextList = createAsyncThunk(
  "content/nextContent",
  async (after, thunkAPI) => {
    const state = thunkAPI.getState();
    let response;
    if (state.content.searchString) {
      response = await fetch(
        `https://api.reddit.com/search.json?q=${state.content.searchString}&after=${after}&count=${state.content.pageCount}`,
      );
    } else {
      response = await fetch(
        `https://api.reddit.com/hot.json?after=${after}&count=${state.content.pageCount}`,
      );
    }
    const data = await response.json();
    return data;
  },
);

export const fetchDetails = createAsyncThunk(
  "content/fetchDetails",
  async (id) => {
    let response;
    response = await fetch(`https://api.reddit.com/comments/${id}.json`);
    const details = await response.json();
    return details;
  },
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    data: {},
    status: "idle",
    detailStatus: "loading",
    error: null,
    pageCount: 0,
    filter: "hot",
    searchString: "",
    details: {},
  },
  reducers: {
    incrementPageCount: (state) => {
      state.pageCount += 1;
    },
    decrementPageCount: (state) => {
      state.pageCount -= 1;
    },
    resetPageCount: (state) => {
      state.pageCount = 0;
    },
    selectFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
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
      .addCase(nextList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(nextList.fulfilled, (state, action) => {
        state.data.data.children.push(...action.payload.data.children);
        state.data.data.after = action.payload.data.after;
        state.status = "succeeded";
      })
      .addCase(nextList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetails.pending, (state) => {
        state.detailStatus = "loading";
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.details = action.payload;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default contentSlice.reducer;

export const {
  incrementPageCount,
  decrementPageCount,
  resetPageCount,
  selectFilter,
  setSearchString,
} = contentSlice.actions;
