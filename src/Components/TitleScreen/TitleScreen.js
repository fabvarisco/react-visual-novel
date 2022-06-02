import { useDispatch } from "react-redux";
import { changeBackground } from "../../Redux/backgroundSlice";
import CanvasImage from "../CanvasImage/CanvasImage";

export default function TitleScreen() {
  const dispatch = useDispatch();

  return (
    <div className={"container"}>
      <CanvasImage width={121} height={80} />
      <div>
        <a
          href={`/Game/0`}
          onClick={() =>
            dispatch(changeBackground("/startgame/startscreen.png"))
          }
        >
          <button>Start Game</button>
        </a>
      </div>
    </div>
  );
}
