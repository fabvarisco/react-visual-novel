import GameConfig from "./game.json";
import { useParams } from "react-router-dom";
import CanvasImage from "../CanvasImage/CanvasImage";
import DialogBox from "../DialogBox/DialogBox";
import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useRef } from "react";
import { selectCompilation } from "../../Redux/compilationSlice";

function Game() {
  const { id } = useParams();
  const { data } = GameConfig;
  const { center_game_screen } = useSelector(selectCompilation);

  const elRef = useRef();
  useEffect (() => {
    console.log("center_game_screen", center_game_screen);
    if (elRef.current) {
      elRef.current.style.cssText = center_game_screen;
      elRef.current.style.width = "-299px";
    }
  }, [center_game_screen]);


  return (
    <main ref={elRef} className="container">
        <CanvasImage width={75} height={61} />
        <DialogBox dialogs={data[id]?.dialogs} choices={data[id]?.choices} />
    </main>
  );
}
export default Game;
