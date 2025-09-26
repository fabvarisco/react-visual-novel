import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useSelector } from "react-redux";
import { selectModal } from "../../Redux/modalSlice";
import { useParams } from "react-router-dom";
import { selectCompilation } from "../../Redux/compilationSlice";
import { useLayoutEffect, useRef } from "react";
import JarvisVisualCode from "../JarvisVisualCode";

export default function TextGame() {
  const { data } = CodeChallenge;
  const { id } = useParams();
  const { center_game_screen } = useSelector(selectCompilation);

  const elRef = useRef();

  useLayoutEffect(() => {
    console.log("center_game_screen", center_game_screen);
    if (elRef.current) {
      elRef.current.style.cssText = center_game_screen;
    }
  }, [center_game_screen]);

  function Textgame() {
    return (
      <>
        <JarvisVisualCode dataCode={data} id={id} />
        <DialogBox
          dialogs={data[id]?.dialogs}
          codeChallenge={data[id]?.codeChallenge}
        />
      </>
    );
  }

  if (!data[id]) return;

  return (
    <main
     ref={elRef} className="container" >
      <section >
        {Textgame()}
      </section>
    </main>
  );
}
