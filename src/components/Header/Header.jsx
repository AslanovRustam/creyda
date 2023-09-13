import s from "./header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>Kreyda</h1>
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
