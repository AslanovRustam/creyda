import React, { useState, useEffect } from "react";
import s from "./textWrite.module.css";

export default function TextWrite({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <h2 className={s.title}>
      <span dangerouslySetInnerHTML={{ __html: displayText }} />
    </h2>
  );
}
