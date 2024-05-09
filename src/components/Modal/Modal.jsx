import { createPortal } from "react-dom";
import { useEffect } from "react";
import SocialList from "../SocialList/SocialList";
import s from "./modal.module.css";
import { useTranslation } from "react-i18next";

const modalRoot = document.querySelector("#modal");

export default function Modal({ onClose, showModal, t }) {
  const { i18n } = useTranslation();

  const handleCooseLang = (e) => {
    const lang = e.currentTarget.getAttribute("name");
    console.log(e.currentTarget.getAttribute("name"));
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add(s.overvlow);
      return;
    }
    document.body.classList.remove(s.overvlow);
  }, [showModal]);

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.opacity : ""}`}
      onClick={() => onClose()}
    >
      <div className={`${s.container} ${showModal && s.containerActive}`}>
        <ul className={s.list}>
          <li className={s.item}>
            <a href="#offer">{t("modal.links.offer")}</a>
          </li>
          <li className={s.item}>
            <a href="#cases">{t("modal.links.cases")}</a>
          </li>
          <li className={s.item}>
            <a href="#technologies">{t("modal.links.technologies")}</a>
          </li>
          <li className={s.item}>
            <a href="#team">{t("modal.links.team")}</a>
          </li>
        </ul>

        <ul className={`${s.languageList} `}>
          <li className={s.lang} name="en" onClick={handleCooseLang}>
            {t("header.languageName.en")}
          </li>
          <li className={s.lang} name="ua" onClick={handleCooseLang}>
            {t("header.languageName.ua")}
          </li>
        </ul>
        {/* <div className={s.lang}>EN</div> */}
        <div className={s.socialsContainer}>
          <p className={s.subTitleSocials}>{t("modal.links.socials")}</p>
          <SocialList modal />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
