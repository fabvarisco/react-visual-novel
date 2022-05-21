import Highlighter from "../Highlighter/Highlighter";
import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { selectPhaser } from "../../Redux/phaserSlice";
import Modal from "../Modal/Modal";
import { selectModal } from "../../Redux/modalSlice";
import { selectDialogBox } from "../../Redux/dialogBoxSlice";
import { Link } from "react-router-dom";

export default function TextGame() {
  ///TODO - descobrir pq ta vindo undefined
  const { id } = useSelector(selectPhaser);
  const { modal } = useSelector(selectModal);
  const { dialog } = useSelector(selectDialogBox);

  const { data } = CodeChallenge;

  useEffect(() => {
    console.log("id: " + id);
  }, [id]);
  useEffect(() => {
    console.log("dialog: " + dialog);
  }, [dialog]);
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
      {data[id].playGame && <Link to="/phaser">Teste o Jogo!</Link>}
    </Fragment>
  );
}
