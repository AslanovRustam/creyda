import s from "./button.module.css";

export default function Button({ text, type, onBtnClick, colorBlack }) {
  return (
    <div className={s.btnContainer}>
      <button
        type={type}
        className={`${s.button} ${colorBlack && s.colorBlack}`}
        onClick={onBtnClick}
      >
        {text}
        <div
          className={`${s.buttonBorderFirst} ${
            colorBlack && s.colorBlackBorder
          }`}
        ></div>
        <div
          className={`${s.buttonBorderSecond} ${
            colorBlack && s.colorBlackBorder
          }`}
        ></div>
        <div
          className={`${s.buttonBorderThird} ${
            colorBlack && s.colorBlackBorder
          }`}
        ></div>
      </button>
    </div>
  );
}
