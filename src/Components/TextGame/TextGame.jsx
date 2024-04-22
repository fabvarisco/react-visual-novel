import Highlighter from "../Highlighter/Highlighter";
import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { selectModal } from "../../Redux/modalSlice";
import { useParams } from "react-router-dom";
import { selectCompilation } from "../../Redux/compilationSlice";
import { useLayoutEffect, useRef } from "react";
import JarvisVisualCode from "../JarvisVisualCode";

export default function TextGame() {
  const { data } = CodeChallenge;
  const { id } = useParams();
  const { modal } = useSelector(selectModal);
  const { center_game_screen } = useSelector(selectCompilation);


  const elRef = useRef();

  useLayoutEffect(() => {
    if (elRef.current) elRef.current.style.cssText = center_game_screen;
  });


  function Textgame() {
    return (
      <>
        <JarvisVisualCode dataCode={data} id={id} />
        {/* <Highlighter dataCode={data} id={id} /> */}
        <DialogBox
          dialogs={data[id]?.dialogs}
          codeChallenge={data[id]?.codeChallenge}
        />
      </>
    );
  }

  return (
    <main
      ref={elRef}
      style={{ opacity: modal.showModal ? 0.3 : 1 }}>
      <section className="container">
        {data[id] && Textgame()}
        <Modal modal={modal} />
      </section>
    </main>
  );
}
