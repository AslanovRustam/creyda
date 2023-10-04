import { useEffect, useState } from "react";

function ParallaxOnScroll({ children, parallaxValue, offsetX, offsetY }) {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardStyle = {
    transform: `translate(${offsetX * scrollY * parallaxValue}em, ${
      offsetY * scrollY * parallaxValue
    }em)`,
  };

  return <div style={cardStyle}>{children}</div>;
}

export default ParallaxOnScroll;
