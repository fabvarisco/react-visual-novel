import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "backgroundController",
  initialState: {
    background: "/startgame/startscreen.png",
  },
  reducers: {
    changeBackground(state, { payload }) {
      return { ...state, background: payload };
    },
  },
});

export const { changeBackground } = slice.actions;

export const selectBackground = (state) => state.backgroundController;

export default slice.reducer;
