import InfoContainer from "../InfoContainer/InfoContainer";
import s from "./hero.module.css";
import circle from "../../images/circle.png";
import Circle from "../Svgs/Circle";
import Paralax from "../../helpers/Paralax";
import ParalaxOnScroll from "../../helpers/ParalaxOnScroll";

export default function Hero() {
  return (
    <section className={s.container}>
      <InfoContainer text="Hello! We are KREYDA!" fontWeight="500" />
      <h2 className={s.title}>
        Smart solutions<br></br> for your business tasks...
      </h2>
      <img className={s.circle} src={circle} alt="circle" />

      {/* <div className={s.circle}>
        <Circle />
      </div> */}
    </section>
  );
}
