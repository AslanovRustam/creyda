import { useEffect, useState } from "react";
import useScreenOrientationPortrait from "../../helpers/orientation";
import cookie from "../../images/cookie.png";
import s from "./cookies.module.css";
import { useLocalStorage } from "../../helpers/useLocalStorage";

export default function Cookies() {
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
        <p className={s.title}>This site uses cookies, do you agree?</p>
      </div>
      <div className={s.buttons}>
        <button type="button" className={s.btnOK} onClick={onCookieClick}>
          OK
        </button>
        <button type="button" className={s.btnCancel} onClick={onCookieClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
