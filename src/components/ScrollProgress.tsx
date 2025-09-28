import { useState, useEffect } from "react";

/**
 * Scroll progress indicator component
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-vanilla-green/20 z-50">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right, #6B8E23, #5C4033)",
        }}
      />
    </div>
  );
}
