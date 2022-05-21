import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "dialogBox",
  initialState: {
    dialog: 0,
  },
  reducers: {
    changeDialog(state, { payload }) {
      return { ...state, dialog: payload };
    },
  },
});

export const { changeDialog } = slice.actions;

export const selectDialogBox = (state) => state.dialogBox;

export default slice.reducer;
