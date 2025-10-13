import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";

export default function CustomCssEditor() {
  const editorRef = useRef(null);
  const monacoInstance = useRef(null);

  useEffect(() => {
    monaco.languages.register({ id: "simpleCss" });

    monaco.languages.setMonarchTokensProvider("simpleCss", {
      tokenizer: {
        root: [
          [/[a-zA-Z\-]+(?=\s*:)/, "keyword"],
          [/:/, "delimiter"],
          [/[a-zA-Z0-9#\.\%\(\)\s\-]+(?=;|$)/, "string"],
          [/;/, "delimiter"],
        ],
      },
    });

    monaco.languages.setLanguageConfiguration("simpleCss", {
      comments: { lineComment: "//", blockComment: ["/*", "*/"] },
    });

    if (editorRef.current) {
      monacoInstance.current = monaco.editor.create(editorRef.current, {
        value: `color: red;\nbackground-color: blue;\nwidth: 100%;`,
        language: "simpleCss",
        theme: "vs-light",
        automaticLayout: true,
      });
    }

    return () => {
      if (monacoInstance.current) {
        monacoInstance.current.dispose();
      }
    };
  }, []);

  return <div ref={editorRef} style={{ width: "600px", height: "300px", border: "1px solid #ccc" }} />;
}
