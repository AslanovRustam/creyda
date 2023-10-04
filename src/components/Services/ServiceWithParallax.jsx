import InfoContainer from "../InfoContainer/InfoContainer";
import useScreenOrientationPortrait from "../../helpers/orientation";
import s from "./serviceWithParalax.module.css";
import { ReactComponent as UiDes } from "../../images/services/design.svg";
import { ReactComponent as Graphic } from "../../images/services/graphic.svg";
import { ReactComponent as Logo } from "../../images/services/logo.svg";
import { ReactComponent as Motion } from "../../images/services/motion.svg";
import { ReactComponent as Ilustration } from "../../images/services/illustration.svg";
import { ReactComponent as ThreeD } from "../../images/services/3d.svg";
import { ReactComponent as Development } from "../../images/services/development.svg";
import ParallaxOnScroll from "../../helpers/ParallaxOnScroll";

export default function ServiceWithParallax() {
  const screenOrientation = useScreenOrientationPortrait();

  return (
    <section className={s.container}>
      <div className={s.wrapper} id="offer">
        <InfoContainer text="What can we offer ?" fontWeight="500" />
      </div>
      <ul className={s.list}>
        <ParallaxOnScroll parallaxValue={1} offsetX={0.01} offsetY={0}>
          <li className={`${s.item} ${s.itemFirst}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: "UI/UX Design" }}
            ></p>
            <UiDes className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>

        <ParallaxOnScroll parallaxValue={-1} offsetX={0.01} offsetY={0}>
          <li className={`${s.item} ${s.itemSecond}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: "Graphic <br> Design" }}
            ></p>
            <Graphic className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>

        <ParallaxOnScroll parallaxValue={1} offsetX={0.02} offsetY={0}>
          <li className={`${s.item} ${s.itemThird}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: "Logo <br>& Identity" }}
            ></p>
            <Logo className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>

        <ParallaxOnScroll parallaxValue={1} offsetX={0.02} offsetY={-0.01}>
          <li className={`${s.item} ${s.itemFourth}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: "Motion<br> Design" }}
            ></p>
            <Motion className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>

        <ParallaxOnScroll parallaxValue={-1} offsetX={0.0169} offsetY={0}>
          <li className={`${s.item} ${s.itemFifth}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: "Illustration" }}
            ></p>
            <Ilustration className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>

        <ParallaxOnScroll parallaxValue={1} offsetX={0.01} offsetY={0}>
          <li className={`${s.item} ${s.itemSix}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{ __html: "3D Design" }}
            ></p>
            <ThreeD className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>

        <ParallaxOnScroll parallaxValue={-1} offsetX={0.01} offsetY={0}>
          <li className={`${s.item} ${s.itemSeven}`}>
            <p
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: screenOrientation
                  ? "Development and programming"
                  : "Development<br> and<br> programming",
              }}
            ></p>
            <Development className={`${s.image} ${s.show}`} />
          </li>
        </ParallaxOnScroll>
      </ul>
    </section>
  );
}
