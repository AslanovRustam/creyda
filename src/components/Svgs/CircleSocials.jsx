import s from "./svgs.module.css";

export default function CircleSocials({ top, left }) {
  return (
    <svg
      style={{ top: top, left: left }}
      className={s.circle}
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
  );
}
