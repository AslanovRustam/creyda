import { Pixelify } from "react-pixelify";

import s from "./pixelImage.module.css";
const PixelateImage = ({ src, srcColor, alt }) => {
  return (
    <div className={s.container}>
      <Pixelify src={src} pixelSize={5} />
    </div>
  );
};
export default PixelateImage;
