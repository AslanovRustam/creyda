import uiDes from "../images/services/design.svg";
import graphic from "../images/services/graphic.svg";
import logo from "../images/services/logo.svg";
import motion from "../images/services/motion.svg";
import ilustration from "../images/services/illustration.svg";
import threeD from "../images/services/3d.svg";
import development from "../images/services/development.svg";
import { ReactComponent as UiDes } from "../images/services/design.svg";
import { ReactComponent as Graphic } from "../images/services/graphic.svg";
import { ReactComponent as Logo } from "../images/services/logo.svg";
import { ReactComponent as Motion } from "../images/services/motion.svg";
import { ReactComponent as Ilustration } from "../images/services/illustration.svg";
import { ReactComponent as ThreeD } from "../images/services/3d.svg";
import { ReactComponent as Development } from "../images/services/development.svg";
import s from "../components/Services/services.module.css";

export const services = [
  {
    id: "ui/ux",
    title: "UI/UX Design",
    image: <UiDes className={`${s.image} ${s.show}`} />,
    picture: uiDes,
  },
  {
    id: "graphic design",
    title: "Graphic <br> Design",
    image: <Graphic className={`${s.image} ${s.show}`} />,
    picture: graphic,
  },
  {
    id: "logo & identity",
    title: "Logo <br>& Identity",
    image: <Logo className={`${s.image} ${s.show}`} />,
    picture: logo,
  },
  {
    id: "motion",
    title: "Motion<br> Design",
    image: <Motion className={`${s.image} ${s.show}`} />,
    picture: motion,
  },
  {
    id: "illustration",
    title: "Illustration",
    image: <Ilustration className={`${s.image} ${s.show}`} />,
    picture: ilustration,
  },
  {
    id: "3d",
    title: "3D Design",
    image: <ThreeD className={`${s.image} ${s.show}`} />,
    picture: threeD,
  },
  {
    id: "development",
    title: "Development<br> and<br> programming",
    image: <Development className={`${s.image} ${s.show}`} />,
    picture: development,
  },
];

export const cases = [
  { id: "all", name: "all" },
  { id: "ui/ux", name: "ui/ux" },
  { id: "graphic design", name: "graphic design" },
  { id: "logo & identity", name: "logo & identity" },
  { id: "motion", name: "motion" },
  { id: "illustration", name: "illustration" },
  { id: "3d", name: "3d" },
  { id: "development", name: "development" },
];
