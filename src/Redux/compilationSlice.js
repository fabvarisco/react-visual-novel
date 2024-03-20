import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "compilationController",
  initialState: {
    center_game_screen: "",
  },
  reducers: {
    changeCenterGame(state, { payload }) {
      console.log(payload)
      return { ...state, center_game_screen: payload };
    },

  },
});

export const {
  changeCenterGame,
} = slice.actions;

export const selectCompilation = (state) => state.compilationController;

export default slice.reducer;
