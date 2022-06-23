import {  useSelector } from "react-redux";
import PhaserComponent from "../Phaser/PhaserComponent";
import { selectGame } from "../../Redux/gameSlice";
import { Link } from "react-router-dom";

export default function Minigame() {
  const { continueFrom } = useSelector(selectGame);
  return (
    <div className={"container"}>
      <PhaserComponent />
      <div>
        <Link to={"/"}>
          <button>Voltar para o inicio</button>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <button>Continuar de onde parou (Ainda não implementado)</button>
        </Link>
      </div>

    </div>
  );
}
