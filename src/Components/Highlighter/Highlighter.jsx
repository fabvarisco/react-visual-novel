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

export default function Highlighter(props) {
  const { dataCode, id } = props;
  const dispatch = useDispatch();
  const { showButtons } = useSelector(selectPhaser);
  const [preview, setPreview] = useState(true);
  const [code, setCode] = useState(dataCode[id]?.code || "");

  useEffect(() => {
    setCode(dataCode[id]?.code || "");
  }, [id, dataCode]);

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
    let modal = {
      choices: [],
      showModal: false,
      modalConfig: {},
      continueFrom: "",
    };

    const percentage = compareTwoStrings(code, dataCode[id].codeResolve);
    if (percentage >= 0.99) {
      if (dataCode[id].effect === "center") {
        dispatch(changeCenter(true));
      }

      if (dataCode[id].effect === "enemies") {
        dispatch(changeEnemies(true));
      }

      modal = {
        showModal: true,
        choices: dataCode[id]?.successChoices,
        modalConfig: dataCode[id]?.modalConfigOnSuccess,
        continueFrom: dataCode[id]?.continueFrom,
      };
    } else {
      modal = {
        showModal: true,
        choices: dataCode[id]?.errorChoices,
        modalConfig: dataCode[id]?.modalConfigOnError,
        continueFrom: dataCode[id]?.continueFrom,
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
