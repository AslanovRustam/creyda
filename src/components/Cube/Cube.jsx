import s from "./cube.module.css";
import React, { useState } from "react";

export default function Cube({ src }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleHover = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div
      className={`${s.cube} ${isRotated ? s.rotated : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={s.front}>Front</div>
      {/* <div className={s.back}>Back</div>
      <div className={s.left}>Left</div> */}
      <div className={s.right}>
        <img className={s.imageCube} src={src} alt="qwe" />
      </div>
      {/* <div className={s.top}>Top</div> */}
      {/* <div className={s.bottom}>Bottom</div> */}
    </div>
  );
}
