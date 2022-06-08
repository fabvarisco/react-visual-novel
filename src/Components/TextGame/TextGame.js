import Highlighter from "../Highlighter/Highlighter";
import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { selectPhaser } from "../../Redux/phaserSlice";
import { Fragment } from "react";
import { selectModal } from "../../Redux/modalSlice";
import { Link } from "react-router-dom";

export default function TextGame() {
  ///TODO - descobrir pq ta vindo undefined
  const { data } = CodeChallenge;
  const { id } = useSelector(selectPhaser);
  const { modal } = useSelector(selectModal);

  const Minigame = () => <Link to="/minigame">Teste o Jogo!</Link>;

  const Textgame = () => (
    <Fragment>
      <Highlighter dataCode={data[id]} />
      <DialogBox
        dialogs={data[id]?.dialogs}
        codeChallenge={data[id]?.codeChallenge}
      />
    </Fragment>
  );

  return (
    <Fragment>
      <div
        className={"container"}
        style={{ opacity: modal.showModal ? 0.3 : 1 }}
      >
        {data[id] ? Textgame() : Minigame()}
        
      </div>
      <Modal modal={modal} />
    </Fragment>
  );
}
