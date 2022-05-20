import { configureStore } from "@reduxjs/toolkit";

import phaserReducer from "./phaserSlice";
import backgroundReducer from "./backgroundSlice";
import gameTextReducer from "./textGameSlice";
export default configureStore({
  reducer: {
    phaserController: phaserReducer,
    backgroundController: backgroundReducer,
    gameTextController: gameTextReducer,
  },
});
