import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { changeModal } from "../../Redux/modalSlice";
import {
  changeCenter,
  changeEnemies,
  changePlayerPos,
  selectPhaser,
} from "../../Redux/phaserSlice";

import { compareTwoStrings } from "string-similarity";

export default function Highlighter({ dataCode }) {
  const dispatch = useDispatch();
  const { showButtons } = useSelector(selectPhaser);
  const [preview, setPreview] = useState(true);
  const [code, setCode] = useState(dataCode?.code || "");
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

  function similar(a, b) {
    var equivalency = 0;
    var minLength = a.length > b.length ? b.length : a.length;
    var maxLength = a.length < b.length ? b.length : a.length;
    for (var i = 0; i < minLength; i++) {
      if (a[i] == b[i]) {
        equivalency++;
      }
    }

    var weight = equivalency / maxLength;
    return weight * 100 + "%";
  }

  function compileCode() {
    ///TODO - Mostrar modal e redirecionar para pagina devida
    let modal = {
      title: "",
      image: "",
      text: "",
      buttonText: "",
      showModal: false,
      goTo: 3,
    };

    const percentage = compareTwoStrings(code, dataCode.codeResolve);

    if (percentage > 0.99) {
      if (dataCode.challengeName === "center") {
        dispatch(changeCenter(true));
        modal = {
          title: "Compilado!",
          text: "Yeah! Agora falta só mais dois desafios!",
          goTo: 3,
          buttonText: "Proximo",
          showModal: true,
        };
      }

      if (dataCode.effect === "playerPos") {
        dispatch(changePlayerPos({ x: 35409, y: 43289432 }));
      }
      if (dataCode.effect === "enemies") {
        dispatch(changeEnemies(true));
      }
    } else {
      modal = {
        title: "ERRO!",
        text: "Droga! Não era isso!",
        goTo: 3,
        buttonText: "Proximo",
        showModal: true,
      };
    }
    dispatch(changeModal(modal));
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
