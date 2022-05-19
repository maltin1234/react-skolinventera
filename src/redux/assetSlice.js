import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAssetsAsync = createAsyncThunk(
  "todos/getAssetsAsync",
  async () => {
    const resp = await fetch("http://localhost:3004/assets");
    if (resp.ok) {
      const assets = await resp.json();
      return { assets };
    }
  }
);

export const assetSlice = createSlice({
  name: "assets",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAssetsAsync.fulfilled]: (state, action) => {
      return action.payload.assets;
    },
  },
});

export default assetSlice.reducer;
