import { useState } from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import InfoContainer from "../InfoContainer/InfoContainer";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import s from "./slider2.module.css";
import NavBtn from "../Slider/NavBtn";

export default function Slider2({ data, btnProject, navBtn, slidesPerView }) {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        onSlideChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex)}
      >
        {data.map(
          (
            {
              id,
              title,
              infoContainer,
              image,
              url,
              bgClass,
              imgColor,
              imgPixeled,
            },
            idx
          ) => {
            return (
              <SwiperSlide key={id}>
                <>
                  <p className={s.title}>{title}</p>
                  {/* <div className={`${s.wrapper} ${s[bgClass]}`}> */}
                  <div className={s.wrapper}>
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

                    <div className={s.imagePixeled}>
                      <span className={s[bgClass]}></span>
                      <span className={s[bgClass]}></span>
                      <span className={s[bgClass]}></span>
                      <span className={s[bgClass]}></span>
                    </div>

                    <p className={s.block}>
                      <img className={s.image} src={image} alt={title} />
                    </p>
                    {btnProject && (
                      <a target="_blank" href={url}>
                        <button type="button" className={s.button}>
                          <Arrow className={s.arrow} />
                          <p className={s.btnText}>Watch project</p>
                        </button>
                      </a>
                    )}
                  </div>
                </>
              </SwiperSlide>
            );
          }
        )}
        {navBtn && <NavBtn />}
      </Swiper>
    </>
  );
}
