import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "../../services/requestHandler";
const initialState = {
  gists: [],
  gistDetails:[],
  loading: false,
};

export const fetchGists = createAsyncThunk("getGists", async (data) => {
  try {
    const response = await apiServices.readGists(data);
    if (response?.status === 200) {
      return response?.data;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
});
export const fetchGistDetails = createAsyncThunk("getGistDetails", async (data) => {
  try {
    const response = await apiServices.readGistDetail(data);
    if (response?.status === 200) {
      return response?.data;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
});

const githubGistSlice = createSlice({
  name: "Github Gist Slice",
  initialState: initialState,

  extraReducers: {
    [fetchGists.pending]: (state) => {
      state.loading = true;
    },
    [fetchGists.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gists = payload;
    },
    [fetchGists.rejected]: (state) => {
      state.loading = false;
    },
    [fetchGistDetails.pending]: (state) => {
      state.loading = true;
    },
    [fetchGistDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gistDetails = payload;
    },
    [fetchGistDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const gistSlice = githubGistSlice.reducer;
