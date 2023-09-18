import InfoContainer from "../InfoContainer/InfoContainer";
import { cases } from "../../data/data";
import { useState } from "react";
import Slider from "../Slider/Slider";
import Container from "../Container/Container";
import { slidersData } from "../../data/data";
import s from "./cases.module.css";

export default function Cases() {
  const [active, setActive] = useState("all");

  return (
    <section className={s.container} id="cases">
      <Container>
        <div className={s.navigation}>
          <InfoContainer text="Best cases" />
          <ul className={s.list}>
            {cases.map((data) => (
              <li
                key={data.id}
                className={s.item}
                onClick={() => setActive(data.id)}
              >
                <InfoContainer
                  text={data.name}
                  activeCase={active === data.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className={s.casesWrapper}>
        <Slider data={slidersData} btnProject navBtn slidesPerView="1.5" />
      </div>
    </section>
  );
}
