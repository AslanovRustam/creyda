import { useState, useEffect } from "react";

export default function Paralax({
  children,
  position = "static",
  top = "0",
  right = "0",
}) {
  const [paralaxPosition, setParalaxPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setParalaxPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(-${paralaxPosition.x / 300}em, -${
      paralaxPosition.y / 300
    }em)`,
    position: position,
    top: top,
    right: right,
    zIndex: -1,
  };

  return <div style={parallaxStyle}>{children}</div>;
}
