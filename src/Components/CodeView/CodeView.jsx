import { Editor } from "@monaco-editor/react";
import "./style.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import CustomCssEditor from "../CustomCssEditor";

export default function CodeView({ selectedFolder }) {
  const [code, setCode] = useState(selectedFolder.code);
  const dispatch = useDispatch();

  const execute = () => {
    console.log("code", code);
    console.log("selectedFolder", selectedFolder);

    dispatch(selectedFolder.saveCode(code));
  };

  const renderEditor = () => (
    <>
      <div className="code-view-top-buttons">
        <h2>{selectedFolder.name}</h2>
        <button className="play-icon" onClick={() => execute()}><VscDebugStart /></button>
      </div>
      <div className="code-view">
        <CustomCssEditor />
      </div>
    </>
  );

  return renderEditor();
}
