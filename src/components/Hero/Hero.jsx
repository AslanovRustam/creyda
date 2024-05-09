import InfoContainer from "../InfoContainer/InfoContainer";
import Button from "../Button/Button";
import circle from "../../images/circle.png";
import s from "./hero.module.css";
// import TextWrite from "../../helpers/TextWrite";

export default function Hero({ t, Trans }) {
  const text = <Trans i18nKey="hero.title" />;
  const onBtnClick = () => {
    const form = document.getElementById("write");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={s.container}>
      <InfoContainer text={t("hero.infoContainer")} fontWeight="500" />
      <h2 className={s.title}>
        <Trans i18nKey="hero.title" />
      </h2>
      {/* <TextWrite text={text} /> */}
      <img className={s.circle} src={circle} alt="circle" />
      <Button
        text={t("hero.btn")}
        type="button"
        onBtnClick={onBtnClick}
        colorBlack
      />

      {/* <div className={s.circle}>
        <Circle />
      </div> */}
    </section>
  );
}
