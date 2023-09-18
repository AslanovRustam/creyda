import s from "./haveAProject.module.css";
import { ReactComponent as Stain } from "../../images/stain.svg";
import PixelsCursor from "../PixelCursor/PixelCursor";

export default function HaveAProject() {
  return (
    <section className={s.container} id="write">
      <Stain className={s.stain} />
      <div className={s.titleContainer}>
        <p className={s.title}>Have a project?</p>
        <p className={s.titleGreen}>Let’s talk!</p>
        <button type="button" className={s.button}>
          Write to US
        </button>
      </div>
      <div className={s.imgContainer}>
        <PixelsCursor />
      </div>
    </section>
  );
}
