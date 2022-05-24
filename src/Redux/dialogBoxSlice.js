import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "dialogBox",
  initialState: {
    dialog: 0,
    tip: false,
    dialogButtons: false,
    goToChallengeCode: false,
  },
  reducers: {
    changeDialog(state, { payload }) {
      return { ...state, dialog: payload };
    },
    changeTip(state, { payload }) {
      return { ...state, tip: payload };
    },
    changeDialogButtons(state, { payload }) {
      return { ...state, dialogButtons: payload };
    },
    changeGoToChallengeCode(state, { payload }) {
      return { ...state, goToChallengeCode: payload };
    },
  },
});

export const { changeDialog, changeTip, changeDialogButtons, changeGoToChallengeCode } = slice.actions;

export const selectDialogBox = (state) => state.dialogBox;

export default slice.reducer;
