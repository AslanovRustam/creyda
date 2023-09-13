import InfoContainer from "../InfoContainer/InfoContainer";
import s from "./services.module.css";
import { services } from "../../data/data";
import { ReactComponent as ThreeD } from "../../images/services/3d.svg";

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
            {image}
            {/* <Image className={`${s.image} ${s.show}`} /> */}
            {/* <svg className={`${s.image} ${s.show}`}>
              <use href={image}></use>
            </svg> */}
            {/* <img className={`${s.image} ${s.show}`} src={image} alt={id} /> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
