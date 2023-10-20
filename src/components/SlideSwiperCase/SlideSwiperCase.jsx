import s from "./slideSwiperCase.module.css";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import InfoContainer from "../InfoContainer/InfoContainer";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

export default function SlideSwiperCase({
  title,
  infoContainer,
  image,
  url,
  idx,
  swiperActiveIndex,
  btnProject,
  imgColor,
}) {
  const [hovered, setHovered] = useState(false);
  const backgroundImage = hovered ? "red" : "none";
  return (
    <SwiperSlide>
      <>
        <p className={s.title}>{title}</p>
        <div
          // className={`${s.wrapper} ${
          //   swiperActiveIndex === idx && s.activeSlide
          // }`}
          className={s.wrapper}
          style={{
            backgroundImage: hovered ? `url(${imgColor})` : "none",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ul className={s.list}>
            {infoContainer.map((item) => (
              <li className={s.item} key={item}>
                <InfoContainer
                  text={item}
                  sliderInActiv={swiperActiveIndex !== idx && s.activeSlide}
                />
              </li>
            ))}
          </ul>
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
