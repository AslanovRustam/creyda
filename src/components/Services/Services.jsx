import InfoContainer from "../InfoContainer/InfoContainer";
import Paralax from "../../helpers/Paralax";
import { services } from "../../data/data";
import s from "./services.module.css";
import useScreenOrientationPortrait from "../../helpers/orientation";

export default function Services() {
  const screenOrientation = useScreenOrientationPortrait();

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
                __html: screenOrientation ? titleMob : title,
              }}
            ></p>
            {/* <Paralax position="absolute" top="0em" right="-1em"> */}
            {image}
            {/* </Paralax> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
