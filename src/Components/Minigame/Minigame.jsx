import { Link } from "react-router-dom";


export default function Minigame() {
  return (
    <div className="container">
      JOGO
      <div>
        <Link href="/">
          <button>Voltar para o inicio</button>
        </Link>
      </div>
      <div>
        <Link to="/">
          <button>Continuar de onde parou (Ainda não implementado)</button>
        </Link>
      </div>

    </div>
  );
}
