import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  const layout = document.getElementById("layout");

  useEffect(() => {
    if (!layout) return;

    const updatePosition = () => {
      setScroll(layout.scrollTop);
    };

    layout.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => layout.removeEventListener("scroll", updatePosition);
  }, [layout]);

  return scroll;
};
