// import s from "../components/Services/services.module.css";
// import uiDes from "../images/services/design.svg";
// import graphic from "../images/services/graphic.svg";
// import logo from "../images/services/logo.svg";
// import motion from "../images/services/motion.svg";
// import ilustration from "../images/services/illustration.svg";
// import threeD from "../images/services/3d.svg";
// import development from "../images/services/development.svg";
// import { ReactComponent as UiDes } from "../images/services/design.svg";
// import { ReactComponent as Graphic } from "../images/services/graphic.svg";
// import { ReactComponent as Logo } from "../images/services/logo.svg";
// import { ReactComponent as Motion } from "../images/services/motion.svg";
// import { ReactComponent as Ilustration } from "../images/services/illustration.svg";
// import { ReactComponent as ThreeD } from "../images/services/3d.svg";
// import { ReactComponent as Development } from "../images/services/development.svg";
import fairspin from "../images/fairspin.png";
import ae from "../images/technologies/AE.png";
import figma from "../images/technologies/Figma.png";
import css from "../images/technologies/css.png";
import react from "../images/technologies/react.png";
import js from "../images/technologies/js.png";
import paint from "../images/technologies/paint.png";
import blender from "../images/technologies/blender.png";
import boat from "../images/technologies/boat.png";
import ps from "../images/technologies/ps.png";
import html from "../images/technologies/html.png";
import ai from "../images/technologies/ai.png";
import procreate from "../images/technologies/procreate.png";
import behance from "../images/socials/behance.png";
import group from "../images/socials/Group.png";
import upwork from "../images/socials/upwork.png";
import linkedin from "../images/socials/linkedin.png";
import instagram from "../images/socials/Instagram.png";
import { ReactComponent as Behance } from "../images/socials/behance.svg";
import { ReactComponent as Group } from "../images/socials/Group.svg";
import { ReactComponent as Upwork } from "../images/socials/upwork.svg";
import { ReactComponent as Linkedin } from "../images/socials/linkedin.svg";
import { ReactComponent as Instagram } from "../images/socials/Instagram.svg";

// export const services = [
//   {
//     id: "ui/ux",
//     title: "UI/UX Design",
//     titleMob: "UI/UX Design",
//     image: <UiDes className={`${s.image} ${s.show}`} />,
//     picture: uiDes,
//   },
//   {
//     id: "graphic design",
//     title: "Graphic <br> Design",
//     titleMob: "Graphic <br> Design",
//     image: <Graphic className={`${s.image} ${s.show}`} />,
//     picture: graphic,
//   },
//   {
//     id: "logo & identity",
//     title: "Logo <br>& Identity",
//     titleMob: "Logo <br>& Identity",
//     image: <Logo className={`${s.image} ${s.show}`} />,
//     picture: logo,
//   },
//   {
//     id: "motion",
//     title: "Motion<br> Design",
//     titleMob: "Motion<br> Design",
//     image: <Motion className={`${s.image} ${s.show}`} />,
//     picture: motion,
//   },
//   {
//     id: "illustration",
//     title: "Illustration",
//     titleMob: "Illustration",
//     image: <Ilustration className={`${s.image} ${s.show}`} />,
//     picture: ilustration,
//   },
//   {
//     id: "3d",
//     title: "3D Design",
//     titleMob: "3D Design",
//     image: <ThreeD className={`${s.image} ${s.show}`} />,
//     picture: threeD,
//   },
//   {
//     id: "development",
//     title: "Development<br> and<br> programming",
//     titleMob: "Development and programming",
//     image: <Development className={`${s.image} ${s.show}`} />,
//     picture: development,
//   },
// ];

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

export const slidersData = [
  {
    id: 0,
    title: "Fairspin landings design1",
    infoContainer: ["Branding", "Design"],
    name: ["all", "graphic design"],
    image: fairspin,
  },
  {
    id: 1,
    title: "Fairspin landings design2",
    infoContainer: ["Development", "Design"],
    name: ["all", "development"],
    image: fairspin,
  },
  {
    id: 2,
    title: "Fairspin landings design3",
    infoContainer: ["Motion", "Design"],
    name: ["all", "motion"],
    image: fairspin,
  },
  {
    id: 3,
    title: "Fairspin landings design4",
    infoContainer: ["Logo", "Design"],
    name: ["all", "logo & identity"],
    image: fairspin,
  },
];

export const technologies = [
  { name: "ae", image: ae, width: false },
  { name: "figma", image: figma, width: false },
  { name: "css", image: css, width: false },
  { name: "react", image: react, width: false },
  { name: "js", image: js, width: false },
  { name: "paint", image: paint, width: false },
  { name: "blender", image: blender, width: false },
  { name: "boat", image: boat, width: false },
  { name: "ps", image: ps, width: false },
  { name: "html", image: html, width: false },
  { name: "ai", image: ai, width: false },
  { name: "procreate", image: procreate, width: false },
];

export const blog = [
  {
    id: 0,
    title: "Title name  - website release and cases introduction",
    image: "",
    infoContainer: ["04.08.2023"],
  },
  {
    id: 1,
    title: "Title name  - website release and cases introduction",
    image: "",
    infoContainer: ["27.07.2023"],
  },
  {
    id: 2,
    title: "Title name  - website release and cases introduction",
    image: "",
    infoContainer: ["09.07.2023"],
  },
];

export const socials = [
  { id: 0, name: "behance", image: behance, imageSvg: <Behance /> },
  { id: 1, name: "group", image: group, imageSvg: <Group /> },
  { id: 2, name: "upwork", image: upwork, imageSvg: <Upwork /> },
  { id: 3, name: "linkedin", image: linkedin, imageSvg: <Linkedin /> },
  { id: 4, name: "instagram", image: instagram, imageSvg: <Instagram /> },
];
