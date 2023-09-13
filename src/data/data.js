// import uiDes from "../images/services/design.svg";
// import graphic from "../images/services/graphic.svg";
// import logo from "../images/services/logo.svg";
// import motion from "../images/services/motion.svg";
// import ilustration from "../images/services/illustration.svg";
// import threeD from "../images/services/3d.svg";
// import development from "../images/services/development.svg";
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
    id: "uiDes",
    title: "UI/UX Design",
    image: <UiDes className={`${s.image} ${s.show}`} />,
  },
  {
    id: "graphic",
    title: "Graphic <br> Design",
    image: <Graphic className={`${s.image} ${s.show}`} />,
  },
  {
    id: "logo",
    title: "Logo <br>& Identity",
    image: <Logo className={`${s.image} ${s.show}`} />,
  },
  {
    id: "motion",
    title: "Motion<br> Design",
    image: <Motion className={`${s.image} ${s.show}`} />,
  },
  {
    id: "ilustration",
    title: "Illustration",
    image: <Ilustration className={`${s.image} ${s.show}`} />,
  },
  {
    id: "threeD",
    title: "3D Design",
    image: <ThreeD className={`${s.image} ${s.show}`} />,
  },
  {
    id: "development",
    title: "Development<br> and<br> programming",
    image: <Development className={`${s.image} ${s.show}`} />,
  },
];
