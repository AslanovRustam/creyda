import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "../Modal/Modal";
import { ReactComponent as Dot } from "../../images/dot.svg";
import logo from "../../images/circle.png";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import s from "./header.module.css";

export default function Header({ t }) {
  const [showModal, setShowmodal] = useState(false);
  const [showLanguageList, setShowLanguageList] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") === "ua" ? "ua" : "en"
  );
  // const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const togleModal = () => {
    setShowmodal(!showModal);
  };

  const togleLanguageList = () => {
    setShowLanguageList(!showLanguageList);
  };

  const handleCooseLang = (e) => {
    const lang = e.currentTarget.getAttribute("name");
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className={s.header}>
        <h1 className={s.logo}>
          <img className={s.logoIcon} src={logo} alt="Creyda logo" />
          <a href="#">Kreyda</a>
        </h1>
        <div
          className={`${s.menu} ${showModal && s.widthDecrease}`}
          onClick={togleModal}
        >
          <div className={`${s.dots} ${showModal && s.widthDecrease}`}>
            <p className={s.dot}>
              <Dot className={s.dotMenu} />
            </p>
            <p className={s.dot}>
              <Dot className={s.dotMenu} />
            </p>
            <p className={s.dot}>
              <Dot className={s.dotMenu} />
            </p>
          </div>

          <p className={s.textAnim}>
            <CSSTransition
              in={showModal}
              timeout={1000} // Должно совпадать с продолжительностью анимации в CSS
              classNames={{
                enter: s.showTextEntering,
                enterActive: s.showTextEntered,
                exit: s.hideTextExiting,
                exitActive: s.hideTextExited,
              }}
            >
              {showModal ? (
                <span className={`${s.text}`}>X</span>
              ) : (
                <span className={`${s.text}`}>{t("header.menu")}</span>
              )}
            </CSSTransition>
          </p>
        </div>
        <ul className={s.list}>
          <li className={s.item} data-text={t("header.links.offer")}>
            <a href="#offer">{t("header.links.offer")}</a>
          </li>
          <li className={s.item} data-text={t("header.links.cases")}>
            <a href="#cases">{t("header.links.cases")}</a>
          </li>
          <li className={s.item} data-text={t("header.links.technologies")}>
            <a href="#technologies">{t("header.links.technologies")}</a>
          </li>
          <li className={s.item} data-text={t("header.links.team")}>
            <a href="#team">{t("header.links.team")}</a>
          </li>
          <li className={s.item}>
            <div className={s.lang} onClick={togleLanguageList}>
              {language}
            </div>
            <ul
              className={`${s.languageList} ${
                showLanguageList && s.showLanguageList
              }`}
            >
              <li
                className={`${s.languageitem} ${language === "en" && s.hide}`}
                name="en"
                onClick={handleCooseLang}
              >
                <div className={s.lang} onClick={togleLanguageList}>
                  {t("header.languageName.en")}
                </div>
              </li>
              <li
                className={`${s.languageitem} ${language === "ua" && s.hide}`}
                name="ua"
                onClick={handleCooseLang}
              >
                <div className={s.lang} onClick={togleLanguageList}>
                  {t("header.languageName.ua")}
                </div>
              </li>
            </ul>
          </li>
          <li className={s.item} data-text="write to us">
            <a href="#write">
              <Button text={t("header.links.btn")} colorBlack size="1.125em" />
            </a>
          </li>
        </ul>
        {/* <a href="#write">
          <Button text="make it great" colorBlack size="1.125em" />
        </a> */}

        {/* <div className={s.lang}>EN</div> */}
      </header>
      <Modal onClose={togleModal} showModal={showModal} t={t} />
    </>
  );
}
