import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log("FILTER", state.content.filter);
    const response = await fetch(
      `https://api.reddit.com/${state.content.filter}.json`
    );
    const data = await response.json();
    return data;
  }
);

export const searchReddit = createAsyncThunk(
  "content/searchContent",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log("FILTERSEARCH", state.content.filter);
    const response = await fetch(
      `https://api.reddit.com/search.json?q=${state.content.searchString}&sort=${state.content.filter}`
    );
    const data = await response.json();
    return data;
  }
);

export const prevList = createAsyncThunk(
  "content/prevContent",
  async (before, thunkAPI) => {
    const state = thunkAPI.getState();
    let response;
    if (state.content.searchString) {
      response = await fetch(
        `https://api.reddit.com/search.json?q=${state.content.searchString}&before=${before}&count=${state.content.pageCount}`
      );
    } else {
      response = await fetch(
        `https://api.reddit.com/hot.json?before=${before}`
      );
    }
    const data = await response.json();
    return data;
  }
);

export const nextList = createAsyncThunk(
  "content/nextContent",
  async (after, thunkAPI) => {
    const state = thunkAPI.getState();
    let response;
    if (state.content.searchString) {
      response = await fetch(
        `https://api.reddit.com/search.json?q=${state.content.searchString}&after=${after}&count=${state.content.pageCount}`
      );
    } else {
      response = await fetch(
        `https://api.reddit.com/hot.json?after=${after}&count=${state.content.pageCount}`
      );
    }

    const data = await response.json();
    return data;
  }
);

const displaySlice = createSlice({
  name: "content",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    pageCount: "1",
    filter: "hot",
    searchString: "",
  },
  reducers: {
    incrementPageCount: (state) => {
      state.pageCount += 1;
    },
    decrementPageCount: (state) => {
      state.pageCount -= 1;
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

export const {
  incrementPageCount,
  decrementPageCount,
  selectFilter,
  setSearchString,
} = displaySlice.actions;
