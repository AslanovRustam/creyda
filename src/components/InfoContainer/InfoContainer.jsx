import s from "./infoContainer.module.css";

export default function InfoContainer({ text, fontWeight = 500, activeCase }) {
  return (
    <div
      className={`${s.container} ${activeCase && s.active}`}
      style={{ fontWeight: fontWeight }}
    >
      {text}
    </div>
  );
}
