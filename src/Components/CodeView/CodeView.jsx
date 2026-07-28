import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { VscDebugStart } from "react-icons/vsc";
import CustomCssEditor from "../CustomCssEditor";
import "./style.css";

export default function CodeView({ selectedFolder }) {
  const [code, setCode] = useState(selectedFolder.code);
  const dispatch = useDispatch();

  useEffect(() => {
    setCode(selectedFolder.code);
  }, [selectedFolder.id]);

  const execute = () => {
    dispatch(selectedFolder.saveCode(code));
  };

  return (
    <>
      <div className="code-view-top-buttons">
        <h2>{selectedFolder.name}</h2>
        <button className="play-icon" onClick={execute}>
          <VscDebugStart />
        </button>
      </div>
      <div className="code-view">
        <CustomCssEditor key={selectedFolder.id} value={code} onChange={setCode} />
      </div>
    </>
  );
}
