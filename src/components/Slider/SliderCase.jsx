import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import InfoContainer from "../InfoContainer/InfoContainer";
import NavBtn from "./NavBtn";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import s from "./sliderCase.module.css";
import { slidersData } from "../../data/data";

export default function SliderCase() {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={1.5}
        // navigation
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex)}
      >
        {slidersData.map(({ id, title, infoContainer, image }, idx) => (
          <SwiperSlide key={id}>
            <>
              <p className={s.title}>{title}</p>
              <div
                className={`${s.wrapper} ${
                  swiperActiveIndex === idx && s.activeSlide
                }`}
              >
                <ul className={s.list}>
                  {infoContainer.map((item) => (
                    <li className={s.item} key={item}>
                      <InfoContainer
                        text={item}
                        sliderInActiv={
                          swiperActiveIndex !== idx && s.activeSlide
                        }
                      />
                    </li>
                  ))}
                </ul>
                <p className={s.block}>
                  <img className={s.image} src={image} alt={title} />
                </p>
                <button type="button" className={s.button}>
                  <Arrow className={s.arrow} />
                  <p className={s.btnText}>Watch project</p>
                </button>
              </div>
            </>
          </SwiperSlide>
        ))}
        <NavBtn />
      </Swiper>
    </div>
  );
}
