import s from "./infoContainer.module.css";

export default function InfoContainer({ text }) {
  return <div className={s.container}>{text}</div>;
}
