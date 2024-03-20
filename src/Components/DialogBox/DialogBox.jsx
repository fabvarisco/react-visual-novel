import "./style.css";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBackground } from "../../Redux/backgroundSlice";
import { changeCodeButtons } from "../../Redux/phaserSlice";
import {
  changeDialog,
  changeTip,
  selectDialogBox,
} from "../../Redux/dialogBoxSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const getCharacterProps = {
  Marin: { color: "rgb(180 227 87)", face: "marin_face.png" },
  Jarvis: { color: "rgb(241 186 55)", face: "jarvis_face.png" },
  Tommy: { color: "rgb(164 35 54)", face: "tommy_face.png" },
  Temaki: { color: "rgb(166 159 150)", face: "temaki_face.png" },
  Geraldo: { color: "rgb(43 173 150)", face: "geraldo_face.png" },
  "Green Bot": { color: "rgb(43 173 150)", face: "greenbot_face.png" },
};

export default function DialogBox({ dialogs, choices, codeChallenge }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dialog, tip, goToChallengeCode } = useSelector(selectDialogBox);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    dispatch(changeBackground(dialogs[dialog]?.background));
  }, [dialog]);

  useEffect(() => {
    dispatch(changeDialog(0));
    dispatch(changeBackground(dialogs[dialog]?.background));
  }, [id]);

  useEffect(() => {
    if (dialog === 0) {
      dispatch(changeTip(false));
      setShowChoices(false);
    }
    background();
  }, [dialog]);

  function nextDialog() {
    const size = dialogs.length - 1;

    if (size === dialog) {
      if (choices) {
        setShowChoices(true);
      }
      if (codeChallenge) {
        dispatch(changeTip(true));
        dispatch(changeCodeButtons(true));
      }
      return;
    }
    dispatch(changeDialog(dialog + 1));
  }

  function backDialog() {
    if (0 === dialog) return;

    dispatch(changeDialog(dialog - 1));
  }

  function background() {
    if (dialogs[dialog]?.nextBackground) {
      dispatch(changeBackground(dialogs[dialog]?.background));
    }
  }

  function renderBackNextButtons() {
    return (
      <div className="buttonContainer">
        <div className="buttonItem">
          {dialog > 0 && <button onClick={() => backDialog()}>Voltar</button>}
        </div>
        <div>
          <button onClick={() => nextDialog()}>Próximo</button>
        </div>
      </div>
    );
  }

  function renderGoToChallengeCodeButton() {
    return (
      <div className="buttonContainer">
        <button onClick={() => {}}>Ver codigo do Jarvis</button>
      </div>
    );
  }

  function renderChoices() {
    return (
      <div>
        <div>
          <p>
            <b>Escolhas</b>
          </p>
        </div>
        {choices.choiceDialog?.map(({ choiceText, choiceGoTo }) => (
          <div key={choiceGoTo}>
            <li>
              <Link onClick={() => dispatch(changeDialog(0))} to={choiceGoTo}>
                {choiceText}
              </Link>
            </li>
          </div>
        ))}
      </div>
    );
  }

  function renderTip() {
    return (
      <div>
        <p>
          <b>Dica</b>
        </p>
        <p>{codeChallenge?.codeTip}</p>
      </div>
    );
  }

  function renderDialog() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              width={80}
              height={80}
              alt={dialogs[dialog]?.characterName}
              src={`/faces/${
                getCharacterProps[dialogs[dialog]?.characterName].face
              }`}
              style={{
                imageRendering: "pixelated",
                background:
                  getCharacterProps[dialogs[dialog]?.characterName].color,
              }}
            />
          </div>
          <div style={{ paddingLeft: "8px" }}>
            <p>
              <b>{dialogs[dialog]?.characterName}</b>
            </p>
          </div>
        </div>
        <p>{dialogs[dialog]?.characterDialog}</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={"card"}>
        {showChoices && renderChoices()}
        {!showChoices && renderDialog()}
        {tip && renderTip()}
      </div>
      {!tip && !showChoices && renderBackNextButtons()}
      {goToChallengeCode && renderGoToChallengeCodeButton()}
    </Fragment>
  );
}
