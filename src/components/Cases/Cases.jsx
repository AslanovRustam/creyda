import InfoContainer from "../InfoContainer/InfoContainer";
import { cases } from "../../data/data";
import { useState } from "react";
import Slider from "../Slider/Slider";
import Container from "../Container/Container";
import { slidersData } from "../../data/data";
import s from "./cases.module.css";
import SliderCaseSelection from "../Slider/SliderCaseSelection";
import useScreenOrientationPortrait from "../../helpers/orientation";

export default function Cases() {
  const [active, setActive] = useState("all");
  const screenOrientation = useScreenOrientationPortrait();

  return (
    <section className={s.container} id="cases">
      <Container>
        <div className={s.navigation}>
          <div className={s.casesTitle}>
            <InfoContainer text="Best cases" />
          </div>
          <ul className={s.list}>
            <SliderCaseSelection
              data={cases}
              setActive={setActive}
              active={active}
            />
            {/* {cases.map((data) => (
              <li
                key={data.id}
                className={s.item}
                onClick={() => setActive(data.id)}
              >
                <InfoContainer
                  text={data.name}
                  activeCase={active === data.id}
                  fontSize
                />
              </li>
            ))} */}
          </ul>
        </div>
      </Container>
      <div className={s.casesWrapper}>
        <Slider
          data={slidersData}
          btnProject
          navBtn
          slidesPerView={screenOrientation ? "0.9" : "1.5"}
        />
      </div>
    </section>
  );
}
