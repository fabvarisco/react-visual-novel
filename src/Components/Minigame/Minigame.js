import { Link } from "react-router-dom";
import DialogBox from "../DialogBox/DialogBox";
import PhaserComponent from "../Phaser/PhaserComponent";

export default function Minigame() {
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
    </div>
  );
}
