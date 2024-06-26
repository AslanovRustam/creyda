import InfoContainer from "../InfoContainer/InfoContainer";
import useScreenOrientationPortrait from "../../helpers/orientation";
// import { services } from "../../data/data";
import s from "./services.module.css";
import { ReactComponent as UiDes } from "../../images/services/design.svg";
import { ReactComponent as Graphic } from "../../images/services/graphic.svg";
import { ReactComponent as Logo } from "../../images/services/logo.svg";
import { ReactComponent as Motion } from "../../images/services/motion.svg";
import { ReactComponent as Ilustration } from "../../images/services/illustration.svg";
import { ReactComponent as ThreeD } from "../../images/services/3d.svg";
import { ReactComponent as Development } from "../../images/services/development.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function Services({ t, Trans }) {
  const screenOrientation = useScreenOrientationPortrait();
  const devDesctop = t("services.options.developmentDESCTOP");
  const devMob = <Trans i18nKey="services.options.developmentMOB" />;
  const development = screenOrientation ? devDesctop : devMob;
  // console.log(devDesctop);
  // console.log(devMob);
  return (
    <section className={s.container}>
      <div className={s.wrapper} id="offer">
        <InfoContainer text={t("services.infoContainer")} fontWeight="500" />
      </div>
      <ul className={s.list}>
        <ScrollAnimation x={-100} y={0}>
          <li className={s.item}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: t("services.options.design") }}
            ></p>
            <UiDes className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
        <ScrollAnimation x={100} y={0}>
          <li className={s.item}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: t("services.options.graphic"),
              }}
            ></p>
            <Graphic className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
        <ScrollAnimation x={-100} y={0}>
          <li className={s.item}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: t("services.options.logo"),
              }}
            ></p>
            <Logo className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
        <ScrollAnimation x={0} y={5}>
          <li className={s.item}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: t("services.options.motion") }}
            ></p>
            <Motion className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
        <ScrollAnimation x={100} y={0}>
          <li className={s.item}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: t("services.options.illustration"),
              }}
            ></p>
            <Ilustration className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
        <ScrollAnimation x={-100} y={0}>
          <li className={s.item}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: t("services.options.3D") }}
            ></p>
            <ThreeD className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
        <ScrollAnimation x={100} y={0}>
          <li className={s.item}>
            <p
              className={s.title}
              // dangerouslySetInnerHTML={{
              //   __html: screenOrientation ? devDesctop : devMob,
              // }}
            >
              {development}
            </p>
            <Development className={`${s.image} ${s.show}`} />
          </li>
        </ScrollAnimation>
      </ul>
    </section>
  );
}
{
  /* <ul className={s.list}>
  {services.map(({ title, image, id, titleMob }) => (
    <li className={s.item} key={id}>
      <p
        className={s.title}
        dangerouslySetInnerHTML={{
          __html: screenOrientation ? titleMob : title,
        }}
      ></p>
      {image}
    </li>
  ))}
</ul>; */
}
