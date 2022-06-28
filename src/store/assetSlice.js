import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const initialState = {
  value: false,
  update: [],
};

export const assetSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    isEditing: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      !state.value ? (state.value = true) : (state.value = false);
    },
    assetUpdate(state, action) {
      // "Mutate" the existing state, no return value needed

      if (state.update === null) {
        state.update.push(action.payload);
        console.log(current(state), "curent");
      } else {
        state.update.pop();
        state.update.push(action.payload);
        console.log(current(state), "curr");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { isEditing, assetUpdate } = assetSlice.actions;

export default assetSlice.reducer;
