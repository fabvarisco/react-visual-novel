import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCompilation } from "../../Redux/compilationSlice";

export default function StyleInjector() {
  const { game_css, styles_css, more_styles_css } =
    useSelector(selectCompilation);

  useEffect(() => {
    let styleEl = document.getElementById("jvc-injected");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "jvc-injected";
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = [game_css, styles_css, more_styles_css].join("\n\n");
  }, [game_css, styles_css, more_styles_css]);

  return null;
}
