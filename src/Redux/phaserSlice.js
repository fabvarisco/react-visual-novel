import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "phaserController",
  initialState: {
    center: false,
    enemies: false,
    showButtons: false,
  },
  reducers: {
    changeCenter(state, { payload }) {
      debugger
      return { ...state, center: payload };
    },
    changeEnemies(state, { payload }) {
      debugger
      return { ...state, enemies: payload };
    },
    changeCodeButtons(state, { payload }) {
      ///TODO - Passar isso para o componente de highlighter
      return { ...state, showButtons: payload };
    },
  },
});

export const {
  changeCenter,
  changeEnemies,
  changeCodeButtons,
} = slice.actions;

export const selectPhaser = (state) => state.phaserController;

export default slice.reducer;
