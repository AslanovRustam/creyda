import InfoContainer from "../InfoContainer/InfoContainer";
import Paralax from "../../helpers/Paralax";
import { services } from "../../data/data";
import s from "./services.module.css";
import { useEffect, useState } from "react";

export default function Services() {
  const [orientationPortrait, setOrientationPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  return (
    <section className={s.container}>
      <div className={s.wrapper} id="offer">
        <InfoContainer text="What can we offer ?" fontWeight="500" />
      </div>
      <ul className={s.list}>
        {services.map(({ title, image, id, titleMob }) => (
          <li className={s.item} key={id}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: orientationPortrait ? titleMob : title,
              }}
            ></p>
            <Paralax position="absolute" top="0em" right="-1em">
              {image}
            </Paralax>
          </li>
        ))}
      </ul>
    </section>
  );
}
