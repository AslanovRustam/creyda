import React from "react";
import InfoContainer from "../InfoContainer/InfoContainer";
import { ReactComponent as Stain } from "../../images/stain.svg";
import { teamArr } from "../../data/data";
import s from "./team.module.css";

function Team({ t }) {
  const translateText = (key) => {
    return t(key);
  };

  return (
    <section className={s.container} id="team">
      <InfoContainer text={t("teamINFOContainer")} fontWeight="500" />
      <Stain className={s.stain} />

      <ul className={s.list}>
        {teamArr.map(({ id, name, job, photo }) => {
          const translatedName = translateText(name.props.i18nKey);
          const translatedJob = translateText(job.props.i18nKey);
          return (
            <li className={s.item} key={id}>
              <img className={s.photo} src={photo} alt={translatedName} />
              <p className={s.name}>{translatedName}</p>
              <span className={s.job}>{translatedJob}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Team;
