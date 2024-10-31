import { Editor } from "@monaco-editor/react";
import "./style.css";
export default function CodeView({ selectedFolder }) {
  console.log(selectedFolder);
  const execute = () => {
    dispatch(changeCenterGame("display: flex; justify-content:center;"));
  };

  const renderEditor = () => (
    <>
      <button onClick={() => execute()}>Play</button>
      <button onClick={() => selectedFolder = null}>Home</button>
      <h2>{selectedFolder.name}</h2>
      <div className="code-view">
        <Editor
          value={selectedFolder.code}
          defaultLanguage="css"
          theme="vs-dark"
        />
      </div>
    </>
  );

  const renderWelcome = () => <>Welcome dadas</>;

  return <div>{selectedFolder ? renderEditor() : renderWelcome()}</div>;
}
