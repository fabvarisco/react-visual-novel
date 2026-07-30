import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

const isMobileViewport = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(max-width: 768px)").matches ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ));

function MobileWarning() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(isMobileViewport);

  useEffect(() => {
    const handleResize = () => setIsMobile(isMobileViewport());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const html = document.documentElement;
    const { body } = document;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
    };
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div className="mobile-warning">
      <div className="mobile-warning__content">
        <img
          className="mobile-warning__image"
          src="/images/JarvisHouse/jarvis_house_marin.png"
          alt=""
          width="260"   
          height="260"
        />
        <h1 className="mobile-warning__title">{t("ui.mobileWarningTitle")}</h1>
        <p className="mobile-warning__message">
          {t("ui.mobileWarningMessage")}
        </p>
      </div>
    </div>
  );
}

export default MobileWarning;
