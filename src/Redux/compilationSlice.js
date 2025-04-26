import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "compilationController",
  initialState: {
    center_game_screen: `
  .container {
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  display: centerblock;
  transform: translate(-0%, -0%);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
`,
  },
  reducers: {
    changeCenterGame(state, { payload }) {
      return { ...state, center_game_screen: payload };
    },
  },
});

export const { changeCenterGame } = slice.actions;

export const selectCompilation = (state) => state.compilationController;

export default slice.reducer;
