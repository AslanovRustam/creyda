import s from "./infoContainer.module.css";

export default function InfoContainer({
  text,
  fontWeight = 500,
  activeCase,
  sliderInActiv,
}) {
  return (
    <div
      className={`${s.container} ${activeCase && s.active} ${
        sliderInActiv && s.sliderInActiv
      }`}
      style={{ fontWeight: fontWeight }}
    >
      {text}
    </div>
  );
}
