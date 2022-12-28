import useEventListener from "@hooks/useEventListener";
import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicLayoutEffect";
import { useEffect, useState } from "react";

export function useCheckMobileScreen() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 639);
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (windowSize.width >= 639) setIsMobile(true);
    else setIsMobile(false);
  }, [windowSize]);

  useEventListener("resize", handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isMobileScreen: isMobile,
    windowDimensions: windowSize,
  };
}
