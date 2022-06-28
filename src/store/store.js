import { configureStore } from "@reduxjs/toolkit";
import assetSlice from "./assetSlice";
export const store = configureStore({
  reducer: {
    assets: assetSlice,
  },
});
