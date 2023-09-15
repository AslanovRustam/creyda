import InfoContainer from "../InfoContainer/InfoContainer";
import Paralax from "../../helpers/Paralax";
import { services } from "../../data/data";
import s from "./services.module.css";

export default function Services() {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <InfoContainer text="What can we offer ?" fontWeight="500" />
      </div>
      <ul className={s.list}>
        {services.map(({ title, image, id }) => (
          <li className={s.item} key={id}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: title }}
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
