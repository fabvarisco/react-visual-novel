import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "textGameController",
  initialState: {
    tempAID: 0,
    teste: false,
  },
  reducers: {
    changeId(state, { payload }) {
      return { ...state, tempAID: payload };
    },
    changeTeste(state, { payload }) {
      return { ...state, teste: payload };
    },
  },
});

export const { changeId } = slice.actions;

export const selectTextGame = (state) => state.textGameController;

export default slice.reducer;
