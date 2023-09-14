import InfoContainer from "../InfoContainer/InfoContainer";
import s from "./cases.module.css";
import { cases } from "../../data/data";
import { useState } from "react";
import SliderCase from "../Slider/SliderCase";
import Container from "../Container/Container";

export default function Cases() {
  const [active, setActive] = useState("all");

  return (
    <section className={s.container}>
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
        <SliderCase />
      </div>
    </section>
  );
}
