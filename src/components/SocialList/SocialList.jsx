import { ReactComponent as Behance } from "../../images/socials/behance.svg";
import { ReactComponent as Upwork } from "../../images/socials/upwork.svg";
import { ReactComponent as Linkedin } from "../../images/socials/linkedin.svg";
import s from "./sociallist.module.css";

export default function SocialList({ modal }) {
  return (
    <ul className={s.socialList}>
      {/* <li className={`${s.socialsItem} ${modal && s.borderModal}`}>
        <a target="_blank" href="https://www.behance.net/kreyda">
          <Behance className={`${s.iconSocial} ${modal && s.colorModal}`} />
        </a>
        <svg
          className={`${s.circle} ${modal && s.strokeModal}`}
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21"
            cy="21"
            r="20"
            fill="none"
            stroke="current"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              from="0"
              to="20"
              dur="2s"
              begin="0s"
              fill="freeze"
            />
          </circle>
        </svg>
      </li> */}

      <li className={`${s.socialsItem} ${modal && s.borderModal}`}>
        <a
          target="_blank"
          href="https://www.upwork.com/agencies/1714200155263229952/"
        >
          <Upwork className={`${s.iconSocial} ${modal && s.colorModal}`} />
        </a>
        <svg
          className={`${s.circle} ${modal && s.strokeModal}`}
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21"
            cy="21"
            r="20"
            fill="none"
            stroke="current"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              from="0"
              to="20"
              dur="2s"
              begin="0s"
              fill="freeze"
            />
          </circle>
        </svg>
      </li>
      <li className={`${s.socialsItem} ${modal && s.borderModal}`}>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/kreyda-agency/about/"
        >
          <Linkedin className={`${s.iconSocial} ${modal && s.colorModal}`} />
        </a>
        <svg
          className={`${s.circle} ${modal && s.strokeModal}`}
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21"
            cy="21"
            r="20"
            fill="none"
            stroke="current"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              from="0"
              to="20"
              dur="2s"
              begin="0s"
              fill="freeze"
            />
          </circle>
        </svg>
      </li>
    </ul>
  );
}
