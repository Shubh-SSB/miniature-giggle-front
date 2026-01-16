import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId, offset = 80) => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return;

    const element = document.getElementById(elementId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToHref = useCallback(
    (href) => {
      // Check if we're in the browser environment
      if (typeof window === "undefined") return;

      if (href.startsWith("#")) {
        const elementId = href.substring(1);
        scrollToElement(elementId);
      } else {
        window.location.href = href;
      }
    },
    [scrollToElement]
  );

  const scrollToTop = useCallback(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return {
    scrollToElement,
    scrollToHref,
    scrollToTop,
  };
};
