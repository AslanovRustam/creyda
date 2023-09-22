import { useState, useEffect } from "react";

export default function useScreenOrientationPortrait() {
  const [orientation, setOrientation] = useState(getScreenOrientation());

  function getScreenOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    function handleOrientationChange() {
      setOrientation(getScreenOrientation());
    }
    window.addEventListener("orientationchange", handleOrientationChange);
    handleOrientationChange();
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return orientation;
}
