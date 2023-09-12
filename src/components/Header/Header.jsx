import s from "./header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <p className={s.logo}>Kreyda</p>
      <div className={s.menu}>
        <div className={s.dots}>
          <p className={s.dot}>.</p>
          <p className={s.dot}>.</p>
          <p className={s.dot}>.</p>
        </div>
        <p className={s.text}>Menu</p>
      </div>
    </header>
  );
}
