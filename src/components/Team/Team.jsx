import React from "react";
import InfoContainer from "../InfoContainer/InfoContainer";
import { ReactComponent as Stain } from "../../images/stain.svg";
import { teamArr } from "../../data/data";
import s from "./team.module.css";

function Team() {
  return (
    <section className={s.container} id="team">
      <InfoContainer text="our team" fontWeight="500" />
      <Stain className={s.stain} />

      <ul className={s.list}>
        {teamArr.map(({ id, name, job, photo }) => (
          <li className={s.item} key={id}>
            <img className={s.photo} src={photo} alt={name} />
            <p className={s.name}>{name}</p>
            <span className={s.job}>{job}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Team;
