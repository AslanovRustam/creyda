import s from "./haveAProject.module.css";
import PixelsCursor from "../PixelCursor/PixelCursor";
import Button from "../Button/Button";
import { ReactComponent as Stain } from "../../images/stain.svg";

export default function HaveAProject() {
  const onBtnClick = () => {
    const form = document.getElementById("write");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={s.container}>
      <Stain className={s.stain} />
      <div className={s.titleContainer}>
        <p className={s.title}>Have a project?</p>
        <p className={s.titleGreen}>Let’s talk!</p>
        <Button text="Write to US" type="button" onBtnClick={onBtnClick} />
      </div>
      <div className={s.imgContainer}>
        <PixelsCursor />
      </div>
    </section>
  );
}
