import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "phaserController",
  initialState: {
    center: false,
    enemies: false,
    showButtons: true,
    gameState: true,
  },
  reducers: {
    changeGameState(state, { payload }) {
      return { ...state, center: payload };
    },
    changeCenter(state, { payload }) {
      return { ...state, center: payload };
    },
    changeEnemies(state, { payload }) {
      return { ...state, enemies: payload };
    },
    changeCodeButtons(state, { payload }) {
      return { ...state, showButtons: payload };
    },
  },
});

export const {
  changeCenter,
  changeEnemies,
  changeCodeButtons,
  changeGameState,
} = slice.actions;

export const selectPhaser = (state) => state.phaserController;

export default slice.reducer;
