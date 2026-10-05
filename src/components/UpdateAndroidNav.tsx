import { useEffect } from "react";

export const useThemeColor = () => {
  useEffect(() => {
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const metaTag = document.querySelector('meta[name="theme-color"]');

      if (metaTag) {
        metaTag.setAttribute("content", isDark ? "#000000" : "#FFFFFF");
      }
    };

    updateThemeColor();

    // Watch for the class change on <html>
    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
};
