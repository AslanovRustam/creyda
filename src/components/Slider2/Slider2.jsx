import { useState } from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import InfoContainer from "../InfoContainer/InfoContainer";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import NavBtn from "../Slider/NavBtn";
import s from "./slider2.module.css";

export default function Slider2({
  data,
  btnProject,
  navBtn,
  slidesPerView,
  t,
}) {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  const translateText = (key) => {
    return t(key);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={"auto"}
        onSlideChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex)}
      >
        {data.map(
          (
            { id, title, infoContainer, image, url, bgClass, imgColor },
            idx
          ) => {
            const translatedName = translateText(title.props.i18nKey);
            return (
              <SwiperSlide key={id}>
                <div className={s.container}>
                  <p className={s.title}>{translatedName}</p>
                  <div className={s.wrapperCards}>
                    <div
                      className={s.wrapperFront}
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <ul className={s.list}>
                        {infoContainer.map((item) => (
                          <li className={s.item} key={item}>
                            <InfoContainer
                              text={item}
                              sliderInActiv={
                                swiperActiveIndex !== idx && s.activeSlide
                              }
                              black
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={s.wrapperBack}
                      style={{ backgroundImage: `url(${imgColor})` }}
                    >
                      {btnProject && (
                        <a target="_blank" href={url}>
                          <button type="button" className={s.button}>
                            <Arrow className={s.arrow} />
                            <p className={s.btnText}>{t("projectBTN")}</p>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
        {navBtn && <NavBtn t={t} />}
      </Swiper>
    </>
  );
}
