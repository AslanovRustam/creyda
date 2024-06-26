import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import InfoContainer from "../InfoContainer/InfoContainer";
import s from "./sliderCase.module.css";
import { useTranslation } from "react-i18next";

export default function SliderCaseSelection({ data, setActive, active }) {
  const { t } = useTranslation();
  const translateText = (key) => {
    return t(key);
  };
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView="auto"
        onSlideChange={() => null}
        onSwiper={(swiper) => null}
      >
        {data.map((item) => {
          const translatedName = translateText(item.name.props.i18nKey);
          return (
            <SwiperSlide key={item.id}>
              <li
                key={item.id}
                className={s.item}
                onClick={() => setActive(item.id)}
              >
                <InfoContainer
                  text={translatedName}
                  activeCase={active === item.id}
                  fontSize
                />
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
