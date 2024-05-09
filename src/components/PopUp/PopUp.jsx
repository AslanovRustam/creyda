import React, { useEffect } from "react";
import letter from "../../images/letter.png";
import useScreenOrientationPortrait from "../../helpers/orientation";
import s from "./popup.module.css";

function PopUp({ t, notification, setVisible }) {
  const screenOrientation = useScreenOrientationPortrait();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onOkClick = () => {
    setVisible(false);
  };

  const leterImg = screenOrientation ? null : (
    <img className={s.image} src={letter} alt="letter logo" />
  );
  return (
    <div className={s.container}>
      <div className={s.cookie}>
        {leterImg}
        <p className={s.title}>{notification}</p>
      </div>
      <button type="button" className={s.btnOK} onClick={onOkClick}>
        {t("cookies.btnOK")}
      </button>
    </div>
  );
}

export default PopUp;
