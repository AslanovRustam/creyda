import { useState } from "react";
import { technologies } from "../../data/data";
import InfoContainer from "../InfoContainer/InfoContainer";
import SliderTech from "../Slider/SliderTech";
import useScreenOrientationPortrait from "../../helpers/orientation";
import s from "./technologies.module.css";

export default function Technologies({ t }) {
  const [portrait, setPortrait] = useState(useScreenOrientationPortrait());

  return (
    <section className={s.container} id="technologies">
      <InfoContainer text={t("technologies")} />
      <ul className={s.list}>
        {portrait ? (
          <SliderTech data={technologies} />
        ) : (
          technologies.map(({ name, image, width }) => (
            <li className={s.item} key={name}>
              <img className={s.image} src={image} alt={name} loading="lazy" />
              <svg
                className={`${s.dots} ${!width && s.smallItem}`}
                viewBox="0 0 480 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={s.dotsTechLevitate}
                  d="M451.824 44.7975H447.492V40.4383H451.824V44.7975Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M467.417 50.0283H463.086V45.6691H467.417V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M509 18.6423H504.669V14.2831H509V18.6423Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M462.22 23.8731H457.888V19.5139H462.22V23.8731Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M492.301 36.9977H487.97V32.6385H492.301V36.9977Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M436.23 29.1044H431.899V24.7453H436.23V29.1044Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M503.802 34.3353H499.471V29.9761H503.802V34.3353Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M436.23 39.5661H431.899V35.2069H436.23V39.5661Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M457.022 39.5661H452.69V35.2069H457.022V39.5661Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M509 39.5661H504.669V35.2069H509V39.5661Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M451.824 44.7975H447.492V40.4383H451.824V44.7975Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M457.022 50.0283H452.69V45.6691H457.022V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M467.417 50.0283H463.086V45.6691H467.417V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M483.011 50.0283H478.679V45.6691H483.011V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M503.802 50.0283H499.471V45.6691H503.802V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M451.824 44.7975H447.492V40.4383H451.824V44.7975Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M451.391 39.1302H447.925V35.6429H451.391V39.1302Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M451.391 12.4369H447.925V8.9496H451.391V12.4369Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M451.174 33.6814H448.142V30.63H451.174V33.6814Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M467.417 58.9779H463.086V54.6188H467.417V58.9779Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M466.984 44.361H463.519V40.8737H466.984V44.361Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M466.768 38.9122H463.736V35.8608H466.768V38.9122Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M483.011 50.0283H478.679V45.6691H483.011V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M483.011 50.0283H478.679V45.6691H483.011V50.0283Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M482.578 44.361H479.113V40.8737H482.578V44.361Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M482.361 38.9122H479.329V35.8608H482.361V38.9122Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M503.802 34.3353H499.471V29.9761H503.802V34.3353Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M503.802 34.3353H499.471V29.9761H503.802V34.3353Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M503.369 28.6685H499.904V25.1812H503.369V28.6685Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M503.152 23.2192H500.12V20.1678H503.152V23.2192Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M509 18.6423H504.669V14.2831H509V18.6423Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M509 18.6423H504.669V14.2831H509V18.6423Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M508.567 12.9755H505.102V9.4882H508.567V12.9755Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M508.35 7.5262H505.318V4.47479H508.35V7.5262Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M416.305 40.4379H420.637V44.7971H416.305V40.4379Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M400.712 45.6693H405.043V50.0284H400.712V45.6693Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M405.91 19.5141H410.241V23.8732H405.91V19.5141Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M431.899 24.7453H436.23V29.1044H431.899V24.7453Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M431.899 51.9877H436.231V56.3468H431.899V51.9877Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M411.108 35.2071H415.439V39.5662H411.108V35.2071Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M416.305 40.4379H420.637V44.7971H416.305V40.4379Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M411.108 54.6189H415.439V58.9781H411.108V54.6189Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M400.712 45.6693H405.043V50.0284H400.712V45.6693Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M416.305 40.4379H420.637V44.7971H416.305V40.4379Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M416.739 35.643H420.204V39.1303H416.739V35.643Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M416.955 30.6301H419.987V33.6815H416.955V30.6301Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M400.712 45.6693H405.043V50.0284H400.712V45.6693Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M401.145 40.8738H404.61V44.3611H401.145V40.8738Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M401.362 35.8609H404.394V38.9123H401.362V35.8609Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M266.41 35.6521H270.742V31.2929H266.41V35.6521Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M250.817 40.8829H255.148V36.5237H250.817V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M256.014 14.7277H260.346V10.3685H256.014V14.7277Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M225.933 27.8522H230.264V23.4931H225.933V27.8522Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M282.004 19.959H286.335V15.5999H282.004V19.959Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M282.004 30.4207H286.335V26.0615H282.004V30.4207Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M261.212 30.4207H265.544V26.0615H261.212V30.4207Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M209.234 30.4207H213.566V26.0615H209.234V30.4207Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M266.41 35.6521H270.742V31.2929H266.41V35.6521Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M261.212 49.8325H265.544V45.4734H261.212V49.8325Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M250.817 40.8829H255.148V36.5237H250.817V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.223 40.8829H239.555V36.5237H235.223V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M214.432 40.8829H218.763V36.5237H214.432V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M266.41 35.6521H270.742V31.2929H266.41V35.6521Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M266.843 56.8337H270.309V53.3464H266.843V56.8337Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M267.06 24.536H270.092V21.4846H267.06V24.536Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M250.817 40.8829H255.148V36.5237H250.817V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M251.25 35.2156H254.715V31.7283H251.25V35.2156Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M251.466 29.7668H254.499V26.7154H251.466V29.7668Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.223 40.8829H239.555V36.5237H235.223V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.223 40.8829H239.555V36.5237H235.223V40.8829Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M225.935 51.222H230.266V46.8629H225.935V51.222Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.656 35.2156H239.121V31.7283H235.656V35.2156Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.873 29.7668H238.905V26.7154H235.873V29.7668Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.873 7.51104H238.905V4.45963H235.873V7.51104Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M235.873 56.9813H238.905V53.9299H235.873V56.9813Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M214.865 56.4404H218.33V52.9531H214.865V56.4404Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M221.539 14.0739H224.571V11.0225H221.539V14.0739Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M209.234 49.4552H213.566V45.096H209.234V49.4552Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M209.234 20.0977H213.565V15.7385H209.234V20.0977Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M209.667 10.8971H213.132V7.40979H209.667V10.8971Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M209.884 5.44791H212.916V2.3965H209.884V5.44791Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M301.929 31.2925H297.597V35.6516H301.929V31.2925Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M379.896 31.0745H375.565V35.4337H379.896V31.0745Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M317.522 36.5239H313.191V40.883H317.522V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M312.324 10.3686H307.993V14.7278H312.324V10.3686Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M286.335 15.5999H282.004V19.959H286.335V15.5999Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M374.699 15.5995H370.367V19.9586H374.699V15.5995Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M353.907 20.8303H349.576V25.1894H353.907V20.8303Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M286.335 26.0615H282.004V30.4207H286.335V26.0615Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M286.335 40.2738H282.003V44.633H286.335V40.2738Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M286.335 53.6983H282.003V58.0574H286.335V53.6983Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M307.127 26.0617H302.795V30.4208H307.127V26.0617Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M359.105 26.0617H354.773V30.4208H359.105V26.0617Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M301.929 31.2925H297.597V35.6516H301.929V31.2925Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M364.303 31.2925H359.971V35.6516H364.303V31.2925Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M379.896 31.2925H375.565V35.6516H379.896V31.2925Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M395.49 31.2925H391.158V35.6516H395.49V31.2925Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M307.127 36.5239H302.795V40.883H307.127V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M317.522 36.5239H313.191V40.883H317.522V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M333.115 36.5239H328.784V40.883H333.115V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M353.907 36.5239H349.576V40.883H353.907V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M364.303 49.9483H359.971V54.3075H364.303V49.9483Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M369.501 36.5239H365.169V40.883H369.501V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M379.896 42.1174H375.565V46.4765H379.896V42.1174Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M301.929 31.2925H297.597V35.6516H301.929V31.2925Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M301.496 44.3969H298.03V47.8842H301.496V44.3969Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M286.173 48.1048H282.708V51.5921H286.173V48.1048Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M301.279 21.4847H298.247V24.5361H301.279V21.4847Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M317.522 52.1857H313.191V56.5449H317.522V52.1857Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M317.089 31.7284H313.624V35.2157H317.089V31.7284Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M316.872 26.7155H313.84V29.7669H316.872V26.7155Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M341.49 47.7462H338.458V50.7976H341.49V47.7462Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M333.115 36.5239H328.784V40.883H333.115V36.5239Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M333.115 52.1857H328.784V56.5449H333.115V52.1857Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M332.683 47.3903H329.217V50.8776H332.683V47.3903Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M332.466 42.3774H329.434V45.4288H332.466V42.3774Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M353.907 20.8303H349.576V25.1894H353.907V20.8303Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M379.896 31.0745H375.565V35.4337H379.896V31.0745Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M379.896 31.0745H375.565V35.4337H379.896V31.0745Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M28.1761 53.5511H32.5076V49.1919H28.1761V53.5511Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M12.5828 58.7819H16.9143V54.4228H12.5828V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-29 27.3959H-24.6685V23.0367H-29V27.3959Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M17.7804 32.6267H22.112V28.2675H17.7804V32.6267Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M43.7696 37.8581H48.1012V33.4989H43.7696V37.8581Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-13.4067 37.8581H-9.07517V33.4989H-13.4067V37.8581Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-23.8023 43.0889H-19.4708V38.7297H-23.8023V43.0889Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M43.7696 48.3197H48.1012V43.9606H43.7696V48.3197Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M22.9781 48.3197H27.3097V43.9606H22.9781V48.3197Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M22.9781 4.35915H27.3097V0H22.9781V4.35915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-29 48.3197H-24.6685V43.9606H-29V48.3197Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M28.1761 53.5511H32.5076V49.1919H28.1761V53.5511Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M22.9781 58.7819H27.3097V54.4228H22.9781V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M12.5828 58.7819H16.9143V54.4228H12.5828V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-3.01081 58.7819H1.32073V54.4228H-3.01081V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-23.8023 58.7819H-19.4708V54.4228H-23.8023V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M28.1761 53.5511H32.5076V49.1919H28.1761V53.5511Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M28.6094 47.8838H32.0746V44.3965H28.6094V47.8838Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M28.8257 42.435H31.8577V39.3836H28.8257V42.435Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M12.5828 58.7819H16.9143V54.4228H12.5828V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M13.0158 53.1146H16.4811V49.6273H13.0158V53.1146Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M13.2324 47.6659H16.2645V44.6145H13.2324V47.6659Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-3.01081 58.7819H1.32073V54.4228H-3.01081V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-3.01081 58.7819H1.32073V54.4228H-3.01081V58.7819Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-2.578 53.1146H0.887224V49.6273H-2.578V53.1146Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-2.36119 47.6659H0.670881V44.6145H-2.36119V47.6659Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-13.4067 37.6396H-9.07517V33.2804H-13.4067V37.6396Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-13.4067 37.6396H-9.07517V33.2804H-13.4067V37.6396Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-12.9736 31.9728H-9.5084V28.4855H-12.9736V31.9728Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-12.7568 26.5241H-9.72474V23.4727H-12.7568V26.5241Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-23.8023 43.0889H-19.4708V38.7297H-23.8023V43.0889Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-23.8023 43.0889H-19.4708V38.7297H-23.8023V43.0889Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-23.369 37.4222H-19.9038V33.9348H-23.369V37.4222Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-23.1524 31.9728H-20.1204V28.9214H-23.1524V31.9728Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-29 27.3959H-24.6685V23.0367H-29V27.3959Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-29 27.3959H-24.6685V23.0367H-29V27.3959Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-28.5672 21.7291H-25.102V18.2418H-28.5672V21.7291Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M-28.3504 16.2798H-25.3183V13.2284H-28.3504V16.2798Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M177.83 27.8318H173.499V32.1909H177.83V27.8318Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M63.6948 49.1915H59.3633V53.5507H63.6948V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.662 48.9736H137.331V53.3327H141.662V48.9736Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M167.651 54.4229H163.32V58.782H167.651V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M79.2881 54.4229H74.9566V58.782H79.2881V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M74.0904 28.2677H69.7589V32.6268H74.0904V28.2677Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M146.86 28.2677H142.528V32.6268H146.86V28.2677Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M162.454 28.2677H158.122V32.6268H162.454V28.2677Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M178.047 28.2677H173.716V32.6268H178.047V28.2677Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M48.1012 33.4989H43.7696V37.8581H48.1012V33.4989Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M38.6257 19.4775H34.2941V23.8366H38.6257V19.4775Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M105.277 33.4985H100.946V37.8577H105.277V33.4985Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M136.464 33.4985H132.133V37.8577H136.464V33.4985Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M162.454 33.4985H158.122V37.8577H162.454V33.4985Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M204.036 33.4985H199.705V37.8577H204.036V33.4985Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M115.673 38.7293H111.342V43.0885H115.673V38.7293Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M146.86 38.7293H142.528V43.0885H146.86V38.7293Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M188.443 38.7293H184.111V43.0885H188.443V38.7293Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M48.1012 43.9606H43.7696V48.3197H48.1012V43.9606Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M68.8925 43.9607H64.5609V48.3199H68.8925V43.9607Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M120.871 43.9607H116.539V48.3199H120.871V43.9607Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M63.6948 49.1915H59.3633V53.5507H63.6948V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M126.069 49.1915H121.737V53.5507H126.069V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.662 49.1915H137.331V53.5507H141.662V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M157.255 49.1915H152.924V53.5507H157.255V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M178.047 49.1915H173.716V53.5507H178.047V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M193.641 49.1915H189.309V53.5507H193.641V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M68.8925 54.4229H64.5609V58.782H68.8925V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M79.2881 54.4229H74.9566V58.782H79.2881V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M94.8814 54.4229H90.5499V58.782H94.8814V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M115.673 54.4229H111.342V58.782H115.673V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M126.069 54.4229H121.737V58.782H126.069V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M131.266 54.4229H126.935V58.782H131.266V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.662 54.4229H137.331V58.782H141.662V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M167.651 54.4229H163.32V58.782H167.651V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M63.6948 49.1915H59.3633V53.5507H63.6948V49.1915Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M63.2614 44.3966H59.7962V47.8839H63.2614V44.3966Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M63.0449 39.3837H60.0128V42.4351H63.0449V39.3837Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M79.2881 54.4229H74.9566V58.782H79.2881V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M78.855 49.6274H75.3898V53.1147H78.855V49.6274Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M78.6382 44.6145H75.6061V47.666H78.6382V44.6145Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M78.6382 8.94978H75.6061V12.0012H78.6382V8.94978Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M94.8814 54.4229H90.5499V58.782H94.8814V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M94.8814 54.4229H90.5499V58.782H94.8814V54.4229Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M94.4486 49.6274H90.9834V53.1147H94.4486V49.6274Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M94.2321 44.6145H91.2V47.666H94.2321V44.6145Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M105.277 33.2805H100.946V37.6397H105.277V33.2805Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M105.277 33.2805H100.946V37.6397H105.277V33.2805Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M104.844 28.4854H101.379V31.9728H104.844V28.4854Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M115.673 38.7293H111.342V43.0885H115.673V38.7293Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M115.673 38.7293H111.342V43.0885H115.673V38.7293Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M115.24 33.9344H111.775V37.4217H115.24V33.9344Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M115.023 28.9215H111.991V31.9729H115.023V28.9215Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.662 48.9736H137.331V53.3327H141.662V48.9736Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.662 48.9736H137.331V53.3327H141.662V48.9736Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.229 44.1786H137.764V47.666H141.229V44.1786Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M141.012 39.1658H137.98V42.2172H141.012V39.1658Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M162.454 28.2677H158.122V32.6268H162.454V28.2677Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M162.454 28.2677H158.122V32.6268H162.454V28.2677Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M167.651 54.6408H163.32V59H167.651V54.6408Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M167.651 54.6408H163.32V59H167.651V54.6408Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M167.218 49.8454H163.753V53.3327H167.218V49.8454Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M167.002 44.8325H163.97V47.8839H167.002V44.8325Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M177.83 27.6138H173.499V31.973H177.83V27.6138Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M177.83 27.6138H173.499V31.973H177.83V27.6138Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M204.036 33.4985H199.705V37.8577H204.036V33.4985Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M204.036 33.4985H199.705V37.8577H204.036V33.4985Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M203.603 28.7036H200.138V32.1909H203.603V28.7036Z"
                  fill="current"
                />
                <path
                  className={s.dotsTechLevitate}
                  d="M182.595 54.6408H179.563V57.6923H182.595V54.6408Z"
                  fill="current"
                />
              </svg>
            </li>
          ))
        )}
      </ul>
      {/* <LevitateDots /> */}
    </section>
  );
}
