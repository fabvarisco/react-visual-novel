import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBackground } from "../../Redux/backgroundSlice";
import { changeCodeButtons } from "../../Redux/phaserSlice";
import {
  changeDialog,
  changeTip,
  selectDialogBox,
} from "../../Redux/dialogBoxSlice";
export default function DialogBox({ dialogs, choices, codeChallenge }) {
  const dispatch = useDispatch();
  const { dialog, tip, goToChallengeCode } = useSelector(selectDialogBox);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    dispatch(changeBackground(dialogs[dialog]?.background));
  }, []);

  useEffect(() => {
    if (dialog === 0) {
      dispatch(changeTip(false));
      setShowChoices(false);
    }
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
    background();
  }

  function backDialog() {
    if (0 === dialog) return;
    dispatch(changeDialog(dialog - 1));
    background();
  }

  function background() {
    if (dialogs[dialog]?.nextBackground) {
      dispatch(changeBackground(dialogs[dialog]?.background));
    }
  }

  function renderBackNextButtons() {
    return (
      <div className={"buttonContainer"}>
        <div>
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
      <div className={"buttonContainer"}>
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
            <a href={choiceGoTo}>{choiceText}</a>
          </div>
        ))}
      </div>
    );
  }

  function renderTip() {
    return (
      <div>
        <div>
          <p>
            <b>Dica</b>
          </p>
          <p>{codeChallenge?.codeTip}</p>
        </div>
      </div>
    );
  }

  function renderDialog() {
    return (
      <div>
        <p>
          <img
            width={80}
            height={80}
            alt={dialogs[dialog]?.characterName}
            src={dialogs[dialog]?.characterImage}
            style={{ imageRendering: "pixelated" }}
          />
          <b>{dialogs[dialog]?.characterName}</b>
        </p>
        <p>{dialogs[dialog]?.characterDialog}</p>
      </div>
    );
  }

  return (
    <div className={"card"}>
      {showChoices && renderChoices()}
      {!showChoices && renderDialog()}
      {tip && renderTip()}
      {!tip && !showChoices && renderBackNextButtons()}
      {goToChallengeCode && renderGoToChallengeCodeButton()}
    </div>
  );
}
