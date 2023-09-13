import s from "./infoContainer.module.css";

export default function InfoContainer({ text, fontWeight }) {
  return (
    <div className={s.container} style={{ fontWeight: fontWeight }}>
      {text}
    </div>
  );
}
