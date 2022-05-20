import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "textGameController",
  initialState: {
    a: false,
  },
  reducers: {
    changeA(state, { payload }) {
      return { ...state, a: payload };
    },

  },
});

export const {
  changeA,
} = slice.actions;

export const selectTextGame = (state) => state.textGameController;

export default slice.reducer;
