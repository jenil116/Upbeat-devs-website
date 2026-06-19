"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const el = document.getElementById("scroll-progress");
      if (!el) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      el.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return null;
}
