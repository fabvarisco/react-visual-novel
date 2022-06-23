import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { changeModal } from "../../Redux/modalSlice";
import {
  changeCenter, 
  changeEnemies,
  selectPhaser,
} from "../../Redux/phaserSlice";
import { compareTwoStrings } from "string-similarity";

export default function Highlighter({ dataCode }) {
  const dispatch = useDispatch();
  const { showButtons } = useSelector(selectPhaser);
  const [preview, setPreview] = useState(true);
  const [code, setCode] = useState(dataCode?.code || "");

  useEffect(()=>{
    console.log(dataCode)
  },[])

  function renderPreview() {
    return (
      <SyntaxHighlighter
        showLineNumbers={true}
        wrapLongLines={true}
        language="javascript"
        style={vscDarkPlus}
        className="textGame"
      >
        {code}
      </SyntaxHighlighter>
    );
  }

  function compileCode() {
    ///TODO - Mostrar modal e redirecionar para pagina devida
    let modal = {
      choices: [],
      showModal: false,
      modalConfig: {},
      continueFrom: "",
    };

    const percentage = compareTwoStrings(code, dataCode.codeResolve);
    if (percentage >= 0.99) {
      if (dataCode.effect === "center") {
        dispatch(changeCenter(true));
      }

      if (dataCode.effect === "enemies") {
        dispatch(changeEnemies(true));
      }

      modal = {
        showModal: true,
        choices: dataCode?.successChoices,
        modalConfig: dataCode?.modalConfigOnSuccess,
        continueFrom: dataCode?.continueFrom,
      };
    } else {
      modal = {
        showModal: true,
        choices: dataCode?.errorChoices,
        modalConfig: dataCode?.modalConfigOnError,
        continueFrom: dataCode?.continueFrom,
      };
    }
    dispatch(changeModal(modal));
  }

  function renderButtons() {
    return (
      <Fragment>
        {showButtons && (
          <div className={"buttonContainer"}>
            <div className="buttonItem">
              <button onClick={() => setPreview(true)}>
                Visualizar como codigo
              </button>
            </div>
            <div className="buttonItem">
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
