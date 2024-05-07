import React from "react";
import bereza from "../../images/team/Berezovskyi.png";
import bogdanov from "../../images/team/Bogdanov.png";
import lymarchuk from "../../images/team/Lymarchuk.png";
import diankin from "../../images/team/Diankin.png";
import InfoContainer from "../InfoContainer/InfoContainer";
import { ReactComponent as Stain } from "../../images/stain.svg";
import s from "./team.module.css";

const teamArr = [
  {
    id: 1,
    name: "Berezovskyi Oleksandr",
    job: "Chief Executive Officer",
    photo: bereza,
  },
  {
    id: 2,
    name: "Bogdanov Dmitry",
    job: "co-founder, managing partner",
    photo: bogdanov,
  },
  { id: 3, name: "Lymarchuk Alexandr", job: "co-founder", photo: lymarchuk },
  { id: 4, name: "Diankin Kostantin", job: "co-founder", photo: diankin },
];

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
