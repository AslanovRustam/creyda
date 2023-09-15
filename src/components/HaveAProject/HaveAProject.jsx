import s from "./haveAProject.module.css";
import { ReactComponent as Stain } from "../../images/stain.svg";

export default function HaveAProject() {
  return (
    <section className={s.container}>
      <Stain className={s.stain} />
      <div className={s.titleContainer}>
        <p className={s.title}>Have a project?</p>
        <p className={s.titleGreen}>Let’s talk!</p>
        <button type="button" className={s.button}>
          Write to US
        </button>
      </div>
      <div className={s.imgContainer}></div>
    </section>
  );
}
