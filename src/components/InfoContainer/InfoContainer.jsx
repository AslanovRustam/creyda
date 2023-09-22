import s from "./infoContainer.module.css";

export default function InfoContainer({
  text,
  fontWeight = 500,
  activeCase,
  sliderInActiv,
  fontSize,
}) {
  return (
    <div
      className={`${s.container} ${activeCase && s.active} ${
        sliderInActiv && s.sliderInActiv
      } ${fontSize && s.changeFontSize}`}
      style={{ fontWeight: fontWeight }}
    >
      {text}
    </div>
  );
}
