import { Trans } from "react-i18next";
import education from "../images/cases/education.png";
import planty from "../images/cases/planty.png";
import iceDate from "../images/cases/iceDate.png";
import citf from "../images/cases/citf.png";
import educationHover from "../images/cases/education2.png";
import plantyHover from "../images/cases/planty2.png";
import iceDateHover from "../images/cases/iceDate2.png";
import citfHover from "../images/cases/citf2.png";
import educationPixeled from "../images/cases/education2_pixeled.png";
import plantyPixeled from "../images/cases/planty2_pixeled.png";
import iceDatePixeled from "../images/cases/iceDate2_pixeled.png";
import citfPixeled from "../images/cases/citf2_pixeled.png";
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
import bereza from "../images/team/Berezovskyi.png";
import bogdanov from "../images/team/Bogdanov.png";
import lymarchuk from "../images/team/Lymarchuk.png";
import diankin from "../images/team/Diankin.png";

export const cases = [
  {
    id: "all",
    name: <Trans i18nKey="data.cases.all" />,
  },
  {
    id: "ui/ux",
    name: <Trans i18nKey="data.cases.ui/ux" />,
  },
  {
    id: "graphic design",
    name: <Trans i18nKey="data.cases.graphic design" />,
  },
  {
    id: "logo & identity",
    name: <Trans i18nKey="data.cases.logo & identity" />,
  },
  {
    id: "motion",
    name: <Trans i18nKey="data.cases.motion" />,
  },
  {
    id: "illustration",
    name: <Trans i18nKey="data.cases.illustration" />,
  },
  {
    id: "3d",
    name: <Trans i18nKey="data.cases.3d" />,
  },
  {
    id: "development",
    name: <Trans i18nKey="data.cases.development" />,
  },
];

export const slidersData = [
  {
    id: 0,
    bgClass: "education",
    title: <Trans i18nKey="data.slidersData.education.title" />,
    infoContainer: ["ui/ux", "motion"],
    name: ["all", "graphic design", "motion"],
    image: education,
    imgColor: educationHover,
    imgPixeled: educationPixeled,
    url: "https://www.behance.net/gallery/181428829/Education-Learning-Platform-(LMS)",
  },
  {
    id: 1,
    bgClass: "planty",
    title: <Trans i18nKey="data.slidersData.planty.title" />,
    infoContainer: ["ui/ux", "motion"],
    name: ["all", "graphic design", "motion"],
    image: planty,
    imgColor: plantyHover,
    imgPixeled: plantyPixeled,
    url: "https://www.behance.net/gallery/181434729/PLANTY-Plant-care-mobile-application",
  },
  {
    id: 2,
    bgClass: "icedate",
    title: <Trans i18nKey="data.slidersData.icedate.title" />,
    infoContainer: ["ui/ux"],
    name: ["all", "graphic design"],
    image: iceDate,
    imgColor: iceDateHover,
    imgPixeled: iceDatePixeled,
    url: "https://www.behance.net/gallery/181514835/Ice-Dating-Dating-Website",
  },
  {
    id: 3,
    bgClass: "citf",
    title: <Trans i18nKey="data.slidersData.citf.title" />,
    infoContainer: ["ui/ux", "motion", "3d", "development"],
    name: ["all", "graphic design", "motion", "development"],
    image: citf,
    imgColor: citfHover,
    imgPixeled: citfPixeled,
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

export const teamArr = [
  {
    id: 1,
    name: <Trans i18nKey="data.team.berezovskyi.name" />,
    job: <Trans i18nKey="data.team.berezovskyi.job" />,
    photo: bereza,
  },
  {
    id: 2,
    name: <Trans i18nKey="data.team.bogdanov.name" />,
    job: <Trans i18nKey="data.team.bogdanov.job" />,
    photo: bogdanov,
  },
  {
    id: 3,
    name: <Trans i18nKey="data.team.lymarchuk.name" />,
    job: <Trans i18nKey="data.team.lymarchuk.job" />,
    photo: lymarchuk,
  },
  // {
  //   id: 4,
  //   name: <Trans i18nKey="data.team.diankin.name" />,
  //   job: <Trans i18nKey="data.team.diankin.job" />,
  //   photo: diankin,
  // },
];
