import { createPortal } from "react-dom";
import { useEffect } from "react";
import { ReactComponent as Behance } from "../../images/socials/behance.svg";
import { ReactComponent as Group } from "../../images/socials/Group.svg";
import { ReactComponent as Upwork } from "../../images/socials/upwork.svg";
import { ReactComponent as Linkedin } from "../../images/socials/linkedin.svg";
import { ReactComponent as Instagram } from "../../images/socials/Instagram.svg";
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
            <a href="#write">write to us</a>
          </li>
        </ul>
        <div className={s.lang}>EN</div>
        <div className={s.socialsContainer}>
          <p className={s.subTitleSocials}>We in socials:</p>
          <ul className={s.socialList}>
            <li className={s.socialsItem}>
              <a href="#">
                <Behance className={s.iconSocial} />
              </a>
            </li>
            <li className={s.socialsItem}>
              <a href="#">
                <Group className={s.iconSocial} />
              </a>
            </li>
            <li className={s.socialsItem}>
              <a href="#">
                <Upwork className={s.iconSocial} />
              </a>
            </li>
            <li className={s.socialsItem}>
              <a href="#">
                <Linkedin className={s.iconSocial} />
              </a>
            </li>
            <li className={s.socialsItem}>
              <a href="#">
                <Instagram className={s.iconSocial} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
