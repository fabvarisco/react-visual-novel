import { Fragment, useState } from 'react';
import './style.css';
import folderIcon from '/public/images/Others/css.svg'
import Highlighter from '../Highlighter/Highlighter';
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Editor } from '@monaco-editor/react';

export default function JarvisVisualCode(props) {
    console.log(props)
    const [selectedFolder, setSelectedFolder] = useState(null);

    // Sample folders and files data
    const folders = [
        { id: 1, name: 'Game.css', files: ['File 1'] },
        { id: 2, name: 'Styles.css', files: ['File 3'] },
        { id: 3, name: 'MoreStylis.css', files: ['File 5'] }
    ];

    // Function to handle folder selection
    const handleFolderSelection = (folderId) => {
        setSelectedFolder(folderId);
    };
    return (
        <div className='jvc-container'>
            <div className="header">
                <div className="title">JVCode</div>
            </div>
            <div className="file-window">
                <div className="sidebar">
                    <h2>Styles</h2>
                    <ul>
                        {/* Render list of folders */}
                        {folders.map(folder => (
                            <li key={folder.id} className={`${selectedFolder === folder.id ? 'active' : ''} folder-list-item`} onClick={() => handleFolderSelection(folder.id)}>
                                <img src={folderIcon} alt="Folder Icon" className="icon" width={64} />
                                {folder.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main-content">
                    {selectedFolder && (
                        <div>
                            <h2>{folders.find(folder => folder.id === selectedFolder).name}</h2>
                            {folders.find(folder => folder.id === selectedFolder).files.map((file, index) => (
                                <div key={index} style={{ overflow: 'hidden', height:'300px' }}>
                                    <Editor
                                        
                                        defaultLanguage="css"
                                        theme='vs-dark'
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
