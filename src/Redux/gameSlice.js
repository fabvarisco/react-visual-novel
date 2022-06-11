import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "game",
  initialState: {
    continueFrom: "/",
  },
  reducers: {
    changeContinueFrom(state, { payload }) {
      return { ...state, continueFrom: payload };
    },
  },
});

export const { changeContinueFrom } = slice.actions;

export const selectGame = (state) => state.game;

export default slice.reducer;
