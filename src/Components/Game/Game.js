import { useEffect, useState, useRef, Fragment } from "react";
import GameConfig from "./game.json";
import { useParams } from "react-router-dom";
import CanvasImage from "../CanvasImage/CanvasImage";
import DialogBox from "../DialogBox/DialogBox";



function Game() {
  const { id } = useParams();
  const { data } = GameConfig;
  return (
    <Fragment>
      <div className={"container"}>
        <CanvasImage width={75} height={61} />
        <DialogBox dialogs={data[id]?.dialogs} choices={data[id]?.choices} />
      </div>
    </Fragment>
  );
}
export default Game;
