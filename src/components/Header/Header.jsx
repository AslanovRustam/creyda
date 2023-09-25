import s from "./header.module.css";
import { ReactComponent as Dot } from "../../images/dot.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Header() {
  const [showModal, setShowmodal] = useState(false);

  const togleModal = () => {
    setShowmodal(!showModal);
  };

  return (
    <>
      <header className={s.header}>
        <h1 className={s.logo}>
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
          {/* <p className={s.text}>{showModal ? "X" : "Menu"}</p> */}
          {/* <p className={`${s.text} ${showModal ? s.showText : s.hideText}`}>
            {showModal ? "X" : "Menu"}
          </p> */}
          <p>
            <span
              className={`${s.text} ${showModal ? s.showText : s.hideText}`}
            >
              X
            </span>
            <span
              className={`${s.text} ${showModal ? s.hideText : s.showText}`}
            >
              Menu
            </span>
          </p>
        </div>
        <ul className={s.list}>
          <li className={s.item} data-text="What can we offer ?">
            <a href="#offer">What can we offer ?</a>
          </li>
          <li className={s.item} data-text="Best cases">
            <a href="#cases">Best cases</a>
          </li>
          <li className={s.item} data-text="Technologies we use">
            <a href="#technologies">Technologies we use</a>
          </li>
          <li className={s.item} data-text="write to us">
            <a href="#write">write to us</a>
          </li>
        </ul>
        <div className={s.lang}>EN</div>
      </header>
      <Modal onClose={togleModal} showModal={showModal} />
    </>
  );
}
