import { useState, useEffect } from "react";

export default function ParalaxOnScroll({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return <div style={parallaxStyle}>{children}</div>;
}
