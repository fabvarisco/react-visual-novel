import Highlighter from "../Highlighter/Highlighter";
import DialogBox from "../DialogBox/DialogBox";
import CodeChallenge from "./codeChallenge.json";
import { useSelector } from "react-redux";
import { selectTextGame } from "../../Redux/textGameSlice";
import { Fragment, useEffect } from "react";
export default function TextGame() {
  ///TODO - descobrir pq ta vindo undefined
  const { tempAID, teste} = useSelector(selectTextGame);
  const { data } = CodeChallenge;

  useEffect(() => {
    console.log(teste);
  }, [teste]);

  return (
    <div className={"container"}>
      {tempAID && (
        <Fragment>
          <Highlighter dataCode={data[tempAID].code} />
          <DialogBox
            dialogs={data[tempAID].dialogs}
            codeChallenge={data[tempAID].codeChallenge}
          />
        </Fragment>
      )}
    </div>
  );
}
