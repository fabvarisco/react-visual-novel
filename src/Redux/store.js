import { configureStore } from "@reduxjs/toolkit";

import phaserReducer from "./phaserSlice";
import backgroundReducer from "./backgroundSlice";
import gameTextReducer from "./textGameSlice";
import modalReducer from "./modalSlice";
import dialogBoxReducer from "./dialogBoxSlice";

export default configureStore({
  reducer: {
    phaserController: phaserReducer,
    backgroundController: backgroundReducer,
    gameTextController: gameTextReducer,
    modal: modalReducer,
    dialogBox: dialogBoxReducer,
  },
});
