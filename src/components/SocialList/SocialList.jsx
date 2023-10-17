import { ReactComponent as Behance } from "../../images/socials/behance.svg";
import { ReactComponent as Group } from "../../images/socials/Group.svg";
import { ReactComponent as Upwork } from "../../images/socials/upwork.svg";
import { ReactComponent as Linkedin } from "../../images/socials/linkedin.svg";
import { ReactComponent as Instagram } from "../../images/socials/Instagram.svg";
import s from "./sociallist.module.css";

export default function SocialList({ modal }) {
  return (
    <ul className={s.socialList}>
      <li className={`${s.socialsItem} ${modal && s.borderModal}`}>
        <a href="#">
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
      </li>
      {/* <li className={`${s.socialsItem} ${modal && s.borderModal}`}>
        <a href="#">
          <Group className={`${s.iconSocial} ${modal && s.colorModal}`} />
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
        <a href="#">
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
        <a href="#">
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
      {/* <li className={`${s.socialsItem} ${modal && s.borderModal}`}>
        <a href="#">
          <Instagram className={`${s.iconSocial} ${modal && s.colorModal}`} />
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
    </ul>
  );
}
