import { createSlice } from "@reduxjs/toolkit";
import {
  GAME_CSS_DEFAULT,
  STYLES_CSS_DEFAULT,
  MORE_STYLES_CSS_DEFAULT,
} from "../Components/InjectedStyles/defaults";

export const slice = createSlice({
  name: "compilationController",
  initialState: {
    game_css: GAME_CSS_DEFAULT,
    styles_css: STYLES_CSS_DEFAULT,
    more_styles_css: MORE_STYLES_CSS_DEFAULT,
  },
  reducers: {
    changeGameCss(state, { payload }) {
      return { ...state, game_css: payload };
    },
    changeStylesCss(state, { payload }) {
      return { ...state, styles_css: payload };
    },
    changeMoreStylesCss(state, { payload }) {
      return { ...state, more_styles_css: payload };
    },
  },
});

export const { changeGameCss, changeStylesCss, changeMoreStylesCss } =
  slice.actions;

export const selectCompilation = (state) => state.compilationController;

export default slice.reducer;
