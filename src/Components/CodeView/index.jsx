import { Editor } from "@monaco-editor/react";
import "./style.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { VscDebugStart } from "react-icons/vsc";

export default function CodeView({ selectedFolder }) {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  const execute = () => {
    dispatch(selectedFolder.saveCode(code));
  };

  const renderEditor = () => (
    <>
      <div className="code-view-top-buttons">
        <h2>{selectedFolder.name}</h2>
        <button className="play-icon" onClick={() => execute()}><VscDebugStart /></button>
      </div>
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

  return renderEditor();
}
