import { useEffect, useState } from "react";
import useScreenOrientationPortrait from "../../helpers/orientation";
import cookie from "../../images/cookie.png";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import s from "./cookies.module.css";

export default function Cookies({ t }) {
  const [visible, setVisible] = useState(false);
  const [cookieCheck, setCookieCheck] = useLocalStorage("cookie", false);
  const screenOrientation = useScreenOrientationPortrait();

  const onCookieClick = () => {
    setVisible(false);
    setCookieCheck(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const cookieImg = screenOrientation ? null : (
    <img className={s.image} src={cookie} alt="cookie logo" />
  );

  if (!visible) {
    return null;
  }
  if (cookieCheck) {
    return null;
  }
  return (
    <div className={s.container}>
      <div className={s.cookie}>
        {cookieImg}
        <p className={s.title}>{t("cookies.text")}</p>
      </div>
      <div className={s.buttons}>
        <button type="button" className={s.btnOK} onClick={onCookieClick}>
          {t("cookies.btnOK")}
        </button>
        <button type="button" className={s.btnCancel} onClick={onCookieClick}>
          {t("cookies.btnCANCEL")}
        </button>
      </div>
    </div>
  );
}
