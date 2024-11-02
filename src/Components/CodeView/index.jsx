import { Editor } from "@monaco-editor/react";
import "./style.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function CodeView({ selectedFolder }) {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  console.log(selectedFolder);

  const execute = () => {
    dispatch(selectedFolder.saveCode(code));
  };

  const renderEditor = () => (
    <>
      <div className="code-view-top-buttons">
        <button onClick={() => execute()}>Play</button>
        <button>Home</button>
      </div>
      <h2>{selectedFolder.name}</h2>
      <div className="code-view">
        <Editor
          value={selectedFolder.code}
          defaultLanguage="css"
          theme="vs-dark"
          onChange={(e) => setCode(e)}
        />
      </div>
    </>
  );

  const renderWelcome = () => <>Welcome dadas</>;

  return <div>{selectedFolder ? renderEditor() : renderWelcome()}</div>;
}
