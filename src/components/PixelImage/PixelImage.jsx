import { Pixelify } from "react-pixelify";
import s from "./pixelImage.module.css";
import { useState, useEffect } from "react";
const PixelateImage = ({ src }) => {
  const primaryPixel = 50;
  const [pixelSize, setPixelSize] = useState(primaryPixel);
  const [hovered, setHovered] = useState(true);
  useEffect(() => {
    if (hovered) {
      // setPixelSize(0);
      let timerId = setInterval(() => {
        setPixelSize((prev) => {
          if (prev === 0) {
            clearInterval(timerId);
            return 0;
          }
          return prev - 5;
        });
      }, 100);
      return;
    }

    setPixelSize(primaryPixel);
  }, [hovered]);
  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={s.container}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <Pixelify src={src} pixelSize={pixelSize} />
    </div>
  );
};
export default PixelateImage;
