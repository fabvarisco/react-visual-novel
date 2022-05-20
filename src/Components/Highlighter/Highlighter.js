import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  changeColision,
  changeEnemies,
  changePlayerPos,
  selectPhaser,
} from "../../Redux/phaserSlice";
import { changeId } from "../../Redux/textGameSlice";

export default function Highlighter({ dataCode }) {
  const dispatch = useDispatch();
  const { showButtons } = useSelector(selectPhaser);
  const [preview, setPreview] = useState(true);
  const [code, setCode] = useState(dataCode);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  function renderPreview() {
    return (
      <SyntaxHighlighter
        language="javascript"
        style={dark}
        className="textGame"
      >
        {code}
      </SyntaxHighlighter>
    );
  }

  function compileCode() {
    const tempCode = code.includes(dataCode.code);
    if (tempCode) {
      if (dataCode.effect === "colision") {
        dispatch(changeColision(true));
        dispatch(changeId(2))
      } else {
        dispatch(changeId(1))
      }
      if (dataCode.effect === "playerPos") {
        dispatch(changePlayerPos({ x: 35409, y: 43289432 }));
      } else {
      }
      if (dataCode.effect === "enemies") {
        dispatch(changeEnemies(true));
      } else {
      }
    }
  }

  function renderButtons() {
    return (
      <Fragment>
        {showButtons && (
          <div className={"buttonContainer"}>
            <div>
              <button onClick={() => setPreview(true)}>
                Visualizar como codigo
              </button>
            </div>
            <div>
              <button onClick={() => setPreview(false)}>Editar codigo</button>
            </div>
            <div>
              <button onClick={() => compileCode()}>Compilar</button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }

  function renderEdit() {
    return (
      <textarea
        className="textGame"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    );
  }

  return (
    <div>
      {preview && renderPreview()}
      {!preview && renderEdit()}
      {renderButtons()}
    </div>
  );
}
