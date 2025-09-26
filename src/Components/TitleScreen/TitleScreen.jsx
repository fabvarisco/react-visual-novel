import { useDispatch } from "react-redux";
import { changeBackground } from "../../Redux/backgroundSlice";
import { Link } from "react-router-dom";
import CanvasImage from "../CanvasImage/CanvasImage";

export default function TitleScreen() {
  const dispatch = useDispatch();

  return (
    <main>
        <CanvasImage width={121} height={80} />
        <Link
          to="/Game/0"
          onClick={() =>
            dispatch(changeBackground("/startgame/startscreen.png"))
          }
        >
          <button>Start Game</button>
        </Link>
    </main>
  );
}
