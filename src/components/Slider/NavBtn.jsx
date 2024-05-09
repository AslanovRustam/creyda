import { useSwiper } from "swiper/react";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import s from "./sliderCase.module.css";

export default function NavBtn({ t }) {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <div className={s.btnPrev} onClick={() => swiper.slidePrev()}>
        <Arrow className={s.arrowNavBtnPrev} />
        {t("sliderBTNPrev")}
      </div>
      <div className={s.btnNext} onClick={() => swiper.slideNext()}>
        {t("sliderBTNNext")}
        <Arrow className={s.arrowNavBtnNext} />
      </div>
    </div>
  );
}
