import s from "./header.module.css";
import { ReactComponent as Dot } from "../../images/dot.svg";

export default function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>Kreyda</h1>
      <div className={s.menu}>
        <div className={s.dots}>
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
        <p className={s.text}>Menu</p>
      </div>
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
    </header>
  );
}
