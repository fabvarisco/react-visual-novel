import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import JarvisVisualCode from "../JarvisVisualCode";

export default function TextGame() {
  const { data } = CodeChallenge;
  const { id } = useParams();
  const { t } = useTranslation();

  if (!data[id]) return;

  return (
    <main className="container">
      <section>
        <JarvisVisualCode dataCode={data} id={id} />
        <DialogBox
          dialogs={data[id]?.dialogs}
          codeChallenge={data[id]?.codeChallenge}
        />
        {/* Fase pré-Marin: enquanto Tommy e Jarvis tentam sozinhos.
            Quando existir um flag de "já visitou a Marin", dá pra alternar
            entre este botão e um "Validar solução" ativo. */}
        <div className="jvc-actions">
          <Link to="/game/3" className="jvc-action-link">
            <button>{t("ui.askMarin")}</button>
          </Link>
          <button disabled>{t("ui.validateSolution")}</button>
        </div>
      </section>
    </main>
  );
}
