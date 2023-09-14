import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./sliderCase.module.css";
import InfoContainer from "../InfoContainer/InfoContainer";
import fairspin from "../../images/fairspin.png";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import NavBtn from "./NavBtn";

export default function SliderCase() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1.5}
        // navigation
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <p className={s.title}>Fairspin landings design</p>
            <div className={s.wrapper}>
              <ul className={s.list}>
                <li className={s.item}>
                  <InfoContainer text="Branding" />
                </li>
                <li className={s.item}>
                  <InfoContainer text="Design" />
                </li>
              </ul>
              <p className={s.block}>
                <img className={s.image} src={fairspin} alt="logo" />
              </p>
              <button type="button" className={s.button}>
                <Arrow className={s.arrow} />
                <p className={s.btnText}>Watch project</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className={s.title}>Fairspin landings design</p>
            <div>
              <ul className={s.list}>
                <li className={s.item}>
                  <InfoContainer text="Branding" />
                </li>
                <li className={s.item}>
                  <InfoContainer text="Design" />
                </li>
              </ul>
              <p className={s.block}>
                <img className={s.image} src={fairspin} alt="logo" />
              </p>

              <button type="button" className={s.button}>
                <Arrow className={s.arrow} />
                <p className={s.btnText}>Watch project</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className={s.title}>Fairspin landings design</p>
            <div>
              <ul className={s.list}>
                <li className={s.item}>
                  <InfoContainer text="Branding" />
                </li>
                <li className={s.item}>
                  <InfoContainer text="Design" />
                </li>
              </ul>
              <p className={s.block}>
                <img className={s.image} src={fairspin} alt="logo" />
              </p>
              <button type="button" className={s.button}>
                <Arrow className={s.arrow} />
                <p className={s.btnText}>Watch project</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className={s.title}>Fairspin landings design</p>
            <div>
              <ul className={s.list}>
                <li className={s.item}>
                  <InfoContainer text="Branding" />
                </li>
                <li className={s.item}>
                  <InfoContainer text="Design" />
                </li>
              </ul>
              <p className={s.block}>
                <img className={s.image} src={fairspin} alt="logo" />
              </p>
              <button type="button" className={s.button}>
                <Arrow className={s.arrow} />
                <p className={s.btnText}>Watch project</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <NavBtn />
      </Swiper>
    </div>
  );
}
