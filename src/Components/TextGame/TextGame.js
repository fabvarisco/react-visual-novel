import Highlighter from "../Highlighter/Highlighter";
import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { selectPhaser } from "../../Redux/phaserSlice";
import Modal from "../Modal/Modal";
import { selectModal } from "../../Redux/modalSlice";
import { Link } from "react-router-dom";

export default function TextGame() {
  ///TODO - descobrir pq ta vindo undefined
  const { id } = useSelector(selectPhaser);
  const { modal } = useSelector(selectModal);

  const { data } = CodeChallenge;

  return (
    <Fragment>
      <div
        className={"container"}
        style={{ opacity: modal.showModal ? 0.3 : 1 }}
      >
        {!data[id].playGame && (
          <Fragment>
            <Highlighter dataCode={data[id]} />
            <DialogBox
              dialogs={data[id].dialogs}
              codeChallenge={data[id].codeChallenge}
            />
          </Fragment>
        )}
      </div>
      <Modal modal={modal} />
      {data[id].playGame && <Link to="/minigame">Teste o Jogo!</Link>}
    </Fragment>
  );
}
