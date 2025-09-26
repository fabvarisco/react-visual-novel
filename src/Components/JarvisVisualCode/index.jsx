import { useState } from "react";
import "./style.css";
import folderIcon from "/public/images/Others/css.svg";
import {
  changeCenterGame,
  selectCompilation,
} from "../../Redux/compilationSlice";
import { useSelector } from "react-redux";
import CodeView from "../CodeView/CodeView";




export default function JarvisVisualCode(props) {
  const { center_game_screen } = useSelector(selectCompilation);

  const files = [
    {
      id: 1,
      name: "Game.css",
      code: center_game_screen,
      saveCode: changeCenterGame,
    },
    {
      id: 2,
      name: "Styles.css",
      code: "sadasdsdsda",
      saveCode: changeCenterGame,
    },
    {
      id: 3,
      name: "MoreStylis.css",
      code: "dasdasdas",
      saveCode: changeCenterGame,
    },
  ];

  const [selectedFolder, setSelectedFolder] = useState(files[0]);


  const handleFolderSelection = (file) => {
    setSelectedFolder(file);
  };

  return (
    <div className="jvc-container">
      <div className="header">
        <div className="title">JVCode</div>
      </div>
      <div className="file-window">
        <div className="sidebar">
          <h2>Files</h2>
          <ul>
            {files.map((file) => (
              <li
                key={file.id}
                className={`${selectedFolder.id === file.id ? "active" : ""
                  } folder-list-item`}
                onClick={() => handleFolderSelection(file)}
              >
                <img
                  src={folderIcon}
                  alt="Folder Icon"
                  className="icon"
                  width={64}
                />
                {file.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <CodeView selectedFolder={selectedFolder} />
        </div>
      </div>
    </div>
  );
}
