import { useDispatch, useSelector } from "react-redux";
import PhaserComponent from "../Phaser/PhaserComponent";
import { selectGame } from "../../Redux/gameSlice";

export default function Minigame() {
  const { continueFrom } = useSelector(selectGame);

  return (
    <div>
      <PhaserComponent />
      <div>
        <a href={"/"}>
          <button>Voltar para o inicio</button>
        </a>
      </div>
      <div>
        <a href={"/textgame"}>
          <button>Tentar arrumar o codigo de jarvis novamente</button>
        </a>
      </div>
      <div>
        <a href={continueFrom}>
          <button>Continuar (Ainda não implementado)</button>
        </a>
      </div>
    </div>
  );
}
