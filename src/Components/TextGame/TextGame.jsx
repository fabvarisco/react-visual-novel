import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useParams } from "react-router-dom";
import JarvisVisualCode from "../JarvisVisualCode";

export default function TextGame() {
  const { data } = CodeChallenge;
  const { id } = useParams();

  if (!data[id]) return;

  return (
    <main className="container">
      <section>
        <JarvisVisualCode dataCode={data} id={id} />
        <DialogBox
          dialogs={data[id]?.dialogs}
          codeChallenge={data[id]?.codeChallenge}
        />
      </section>
    </main>
  );
}
