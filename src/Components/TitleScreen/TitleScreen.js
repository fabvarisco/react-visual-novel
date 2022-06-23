import { useDispatch } from "react-redux";
import { changeBackground } from "../../Redux/backgroundSlice";
import CanvasImage from "../CanvasImage/CanvasImage";
import { Link } from "react-router-dom";

export default function TitleScreen() {
  const dispatch = useDispatch();

  return (
    <div className={"container"}>
      <CanvasImage width={121} height={80} />
      <div>
        <Link
          to={`/Game/0`}
          onClick={() =>
            dispatch(changeBackground("/startgame/startscreen.png"))
          }
        >
          <button>Start Game</button>
        </Link>
      </div>
    </div>
  );
}
