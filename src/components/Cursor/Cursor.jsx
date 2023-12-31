import { useState, useEffect } from "react";
import styles from "./cursor.module.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false); ////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
  const [click, setClick] = useState(false); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
  const [linkHover, setLinkHover] = useState(false); ///НЕ ОБЯЗАТЕЛЬНО - для стилизации ховера

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter); ////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
      document.addEventListener("mouseleave", mLeave); ////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
      document.addEventListener("mousedown", mDown); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
      document.addEventListener("mouseup", mUp); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter); ////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
      document.addEventListener("mouseleave", mLeave); ////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
      document.addEventListener("mousedown", mDown); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
      document.addEventListener("mouseup", mUp); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };
    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("label").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);

  return (
    <div className={styles.wraper}>
      <div
        className={`${hidden ? styles.hidden : styles.cursor} ${
          click ? styles.click : ""
        } ${linkHover ? styles.linkHovered : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className={hidden ? styles.hidden : styles.cursor2}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
}
