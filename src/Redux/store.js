import { configureStore } from "@reduxjs/toolkit";

import phaserReducer from "./phaserSlice";
import backgroundReducer from "./backgroundSlice";
import modalReducer from "./modalSlice";
import dialogBoxReducer from "./dialogBoxSlice";
import gameReducer from "./gameSlice";



export default configureStore({
  reducer: {
    phaserController: phaserReducer,
    backgroundController: backgroundReducer,
    modal: modalReducer,
    dialogBox: dialogBoxReducer,
    game: gameReducer
  },
});
