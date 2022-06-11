import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "modal",
  initialState: {
    modal: {
      choices: [],
      showModal: false,
      modalConfig:{}
    },
  },
  reducers: {
    changeModal(state, { payload }) {
      return { ...state, modal: payload };
    },
  },
});

export const { changeModal } = slice.actions;

export const selectModal = (state) => state.modal;

export default slice.reducer;
