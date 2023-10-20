import education from "../images/cases/education.png";
import planty from "../images/cases/planty.png";
import iceDate from "../images/cases/iceDate.png";
import citf from "../images/cases/citf.png";
import educationHover from "../images/cases/education2.png";
import plantyHover from "../images/cases/planty2.png";
import iceDateHover from "../images/cases/iceDate2.png";
import citfHover from "../images/cases/citf2.png";
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
import upwork from "../images/socials/upwork.png";
import linkedin from "../images/socials/linkedin.png";
import { ReactComponent as Behance } from "../images/socials/behance.svg";
import { ReactComponent as Upwork } from "../images/socials/upwork.svg";
import { ReactComponent as Linkedin } from "../images/socials/linkedin.svg";

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
    bgClass: "education",
    title: "Education - Learning Platform (LMS)",
    infoContainer: ["ui/ux", "motion"],
    name: ["all", "graphic design", "motion"],
    image: education,
    imgColor: educationHover,
    url: "https://www.behance.net/gallery/181428829/Education-Learning-Platform-(LMS)",
  },
  {
    id: 1,
    bgClass: "planty",
    title: "Plant care mobile application",
    infoContainer: ["ui/ux", "motion"],
    name: ["all", "graphic design", "motion"],
    image: planty,
    imgColor: plantyHover,
    url: "https://www.behance.net/gallery/181434729/PLANTY-Plant-care-mobile-application",
  },
  {
    id: 2,
    bgClass: "icedate",
    title: "Ice Dating - Dating Website",
    infoContainer: ["ui/ux"],
    name: ["all", "graphic design"],
    image: iceDate,
    imgColor: iceDateHover,
    url: "https://www.behance.net/gallery/181514835/Ice-Dating-Dating-Website",
  },
  {
    id: 3,
    bgClass: "citf",
    title: "Cyprus IT Conference Site",
    infoContainer: ["ui/ux", "motion", "3d", "development"],
    name: ["all", "graphic design", "motion", "development"],
    image: citf,
    imgColor: citfHover,
    url: "https://www.behance.net/gallery/181686469/CITF-Cyprus-IT-Conference-Site",
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
  // { id: 1, name: "group", image: group, imageSvg: <Group /> },
  { id: 2, name: "upwork", image: upwork, imageSvg: <Upwork /> },
  { id: 3, name: "linkedin", image: linkedin, imageSvg: <Linkedin /> },
  // { id: 4, name: "instagram", image: instagram, imageSvg: <Instagram /> },
];
