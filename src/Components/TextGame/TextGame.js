import Highlighter from "../Highlighter/Highlighter";
import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { selectPhaser } from "../../Redux/phaserSlice";

export default function TextGame() {
  ///TODO - descobrir pq ta vindo undefined
  const { id } = useSelector(selectPhaser);
  const { data } = CodeChallenge;


  return (
    <div className={"container"}>
      <Fragment>
        <Highlighter dataCode={data[id]} />
        <DialogBox
          dialogs={data[id].dialogs}
          codeChallenge={data[id].codeChallenge}
        />
      </Fragment>
    </div>
  );
}
