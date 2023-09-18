import s from "./contacts.module.css";
import { ReactComponent as Design } from "../../images/services/graphic.svg";

export default function Contacts() {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <p className={s.title}>Contact us</p>

        <label className={s.label}>
          <p className={s.name}>Enter your name</p>
          <input
            className={s.input}
            name="name"
            type="text"
            placeholder="NAME"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your phone number</p>
          <input
            className={s.input}
            name="number"
            type="tel"
            placeholder="NUMBER"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your email</p>
          <input
            className={s.input}
            name="email"
            type="email"
            placeholder="EMAIL"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your message</p>
          <input
            className={s.input}
            name="message"
            type="text"
            placeholder="Message"
          />
        </label>
      </form>
      <div className={s.imageContainer}>
        <Design className={s.icon} />
      </div>
    </div>
  );
}
