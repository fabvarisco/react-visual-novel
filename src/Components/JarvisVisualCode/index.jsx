import { useState } from "react";
import "./style.css";
import folderIcon from "/public/images/Others/css.svg";
import {
  changeGameCss,
  changeStylesCss,
  changeMoreStylesCss,
  selectCompilation,
} from "../../Redux/compilationSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CodeView from "../CodeView/CodeView";




export default function JarvisVisualCode(props) {
  const { t } = useTranslation();
  const { game_css, styles_css, more_styles_css } =
    useSelector(selectCompilation);

  const files = [
    {
      id: 1,
      name: "Game.css",
      code: game_css,
      saveCode: changeGameCss,
    },
    {
      id: 2,
      name: "Styles.css",
      code: styles_css,
      saveCode: changeStylesCss,
    },
    {
      id: 3,
      name: "MoreStylis.css",
      code: more_styles_css,
      saveCode: changeMoreStylesCss,
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
          <h2>{t("ui.files")}</h2>
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
                <span className="file-name">{file.name}</span>
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
