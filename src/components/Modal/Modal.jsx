import { createPortal } from "react-dom";
import { useEffect } from "react";
import SocialList from "../SocialList/SocialList";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal");

export default function Modal({ onClose, showModal }) {
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
            <a href="#offer">What can we offer ?</a>
          </li>
          <li className={s.item}>
            <a href="#cases">Best cases</a>
          </li>
          <li className={s.item}>
            <a href="#technologies">Technologies we use</a>
          </li>
          <li className={s.item}>
            <a href="#team">Our team</a>
          </li>
        </ul>
        {/* <div className={s.lang}>EN</div> */}
        <div className={s.socialsContainer}>
          <p className={s.subTitleSocials}>We in socials:</p>
          <SocialList modal />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
