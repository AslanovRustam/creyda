import { useState } from "react";
import InfoContainer from "../InfoContainer/InfoContainer";
import Container from "../Container/Container";
import SliderCaseSelection from "../Slider/SliderCaseSelection";
import useScreenOrientationPortrait from "../../helpers/orientation";
import { cases } from "../../data/data";
import { slidersData } from "../../data/data";
import s from "./cases.module.css";
import Slider2 from "../Slider2/Slider2";

export default function Cases({ t }) {
  const [active, setActive] = useState("all");
  const screenOrientation = useScreenOrientationPortrait();

  const filteredCases = slidersData.filter((item) =>
    item.name.includes(active)
  );

  return (
    <section className={s.container} id="cases">
      <Container>
        <div className={s.navigation}>
          <div className={s.casesTitle}>
            <InfoContainer text={t("cases.infoContainer")} />
          </div>
          <ul className={s.list}>
            <SliderCaseSelection
              data={cases}
              setActive={setActive}
              active={active}
            />
          </ul>
        </div>
      </Container>
      <div className={s.casesWrapper}>
        <Slider2
          data={filteredCases}
          btnProject
          navBtn
          slidesPerView={screenOrientation ? "1.05" : "1.5"}
          t={t}
        />
      </div>
    </section>
  );
}
