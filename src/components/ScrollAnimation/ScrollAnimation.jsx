import React, { useEffect, useRef, useState } from "react";
import s from "./scrollAnimation.module.css";

const ScrollAnimation = ({ children, x, y }) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  const containerStyles = {
    "--translate-x": `${x}%`,
    "--translate-y": `${y}%`,
  };
  return (
    <div
      ref={containerRef}
      style={containerStyles}
      className={`${s.animation} ${isVisible ? s.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
