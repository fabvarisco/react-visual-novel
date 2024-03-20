import { useDispatch } from "react-redux";
import { changeBackground } from "../../Redux/backgroundSlice";
import { Link } from "react-router-dom";
import CanvasImage from "../CanvasImage/CanvasImage";
import "./style.css";

export default function TitleScreen() {
  const dispatch = useDispatch();

  return (
    <main>
      <section className="container">
        <CanvasImage width={121} height={80} />

        <button><Link
          className="start-button button"
          to="/Game/0"
          onClick={() =>
            dispatch(changeBackground("/startgame/startscreen.png"))
          }
        >
          Start Game
        </Link>
        </button>
      </section>
    </main >
  );
}
