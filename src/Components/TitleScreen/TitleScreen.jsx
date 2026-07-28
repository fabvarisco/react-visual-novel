import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeBackground } from "../../Redux/backgroundSlice";
import { Link } from "react-router-dom";
import CanvasImage from "../CanvasImage/CanvasImage";

export default function TitleScreen() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return (
    <main>
        <CanvasImage width={121} height={80} />
        <Link
          to="/Game/0"
          onClick={() =>
            dispatch(changeBackground("/startgame/startscreen.png"))
          }
        >
          <button>{t("ui.startGame")}</button>
        </Link>
        <div className="language-switcher">
          <button
            onClick={() => i18n.changeLanguage("pt")}
            disabled={i18n.resolvedLanguage === "pt"}
          >
            PT
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            disabled={i18n.resolvedLanguage === "en"}
          >
            EN
          </button>
        </div>
    </main>
  );
}
