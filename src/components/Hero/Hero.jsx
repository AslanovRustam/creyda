import InfoContainer from "../InfoContainer/InfoContainer";
import Button from "../Button/Button";
import circle from "../../images/circle.png";
import s from "./hero.module.css";
// import TextWrite from "../../helpers/TextWrite";

export default function Hero() {
  const text = "Smart solutions <br> for your business tasks...";
  const onBtnClick = () => {
    const form = document.getElementById("write");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={s.container}>
      <InfoContainer text="Hello! We are KREYDA!" fontWeight="500" />
      <h2 className={s.title}>
        Smart solutions<br></br> for your business tasks...
      </h2>
      {/* <TextWrite text={text} /> */}
      <img className={s.circle} src={circle} alt="circle" />
      <Button
        text="Write to US"
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
