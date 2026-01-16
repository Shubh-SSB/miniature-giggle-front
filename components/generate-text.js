"use client";
import React, { useState, useEffect, useRef } from "react";

export function TextGenerateEffectDemo() {
  const [showIntroducing, setShowIntroducing] = useState(false);
  const [showEyekon, setShowEyekon] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start animation sequence when in viewport
          const timer1 = setTimeout(() => {
            setShowIntroducing(true);
          }, 300);

          const timer2 = setTimeout(() => {
            setShowEyekon(true);
          }, 1000);

          return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
          };
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full h-full items-center justify-center px-2 text-center text-4xl sm:px-8 md:text-5xl lg:text-6xl"
    >
      <div className="flex flex-wrap items-end justify-center gap-4">
        {/* Thin font for "Introducing" */}
        <div
          className={`transition-all duration-1000 ease-out font-poppins font-thin leading-none -translate-y-4 ${
            showIntroducing
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          Interesting
        </div>

        {/* Raleway font for "EYEKON" in amber */}
        <div
          className={`text-amber-200 transition-all duration-1000 ease-out ${
            showEyekon
              ? "opacity-100 transform translate-y-0 scale-100"
              : "opacity-0 transform translate-y-4 scale-95"
          }`}
          style={{
            fontFamily:
              "Poppins, ui-sans-serif, system-ui, -apple-system, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: 0.9,
          }}
        >
          Storyboard
        </div>
      </div>
    </div>
  );
}
