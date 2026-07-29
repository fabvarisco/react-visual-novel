import EditorImport from "react-simple-code-editor";
import Prism from "prismjs";
const Editor = EditorImport.default ?? EditorImport;
import "prismjs/components/prism-css";
import "prismjs/themes/prism.css";

export default function CustomCssEditor({ value = "", onChange }) {
  return (
    <Editor
      value={value}
      onValueChange={(code) => onChange && onChange(code)}
      highlight={(code) => Prism.highlight(code, Prism.languages.css, "css")}
      padding={12}
      className="custom-css-editor"
      style={{
        fontFamily: "Consolas, Monaco, 'Ubuntu Mono', monospace",
        fontSize: 14,
        minHeight: "100%",
      }}
    />
  );
}
