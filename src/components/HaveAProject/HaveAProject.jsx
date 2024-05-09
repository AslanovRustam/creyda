import s from "./haveAProject.module.css";
import PixelsCursor from "../PixelCursor/PixelCursor";
import Button from "../Button/Button";
import { ReactComponent as Stain } from "../../images/stain.svg";

export default function HaveAProject({ t }) {
  const onBtnClick = () => {
    const form = document.getElementById("write");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={s.container}>
      <Stain className={s.stain} />
      <div className={s.titleContainer}>
        <p className={s.title}>{t("haveAProject.title")}</p>
        <p className={s.titleGreen}>{t("haveAProject.titleGreen")}</p>
        <Button
          text={t("haveAProject.btnText")}
          type="button"
          onBtnClick={onBtnClick}
        />
      </div>
      <div className={s.imgContainer}>
        <PixelsCursor />
      </div>
    </section>
  );
}
