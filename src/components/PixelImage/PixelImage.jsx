import { useState } from "react";

// export default function PixelImage({ src, alt }) {
//   const [size, setSize] = useState(1000);
//   return (
//     <img
//       src={src}
//       width={size}
//       height={size}
//       style={{ cursor: "pointer" }}
//       onMouseEnter={() => setSize(100)}
//       onMouseLeave={() => setSize(1000)}
//     />
//   );
// }

const PixelImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <img
        src={src}
        width={100}
        height={100}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            background: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[...Array(100).keys()].map((i) => (
            <div
              key={i}
              style={{
                width: 1,
                height: 1,
                backgroundColor: `rgb(255, 255, 255, ${i / 100})`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PixelImage;
