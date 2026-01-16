import React from "react";

export const CurvedLine = ({ variant = 1, className = "" }) => {
  // Variant 1: SVG Curved Line with Gradient
  if (variant === 1) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          width="100%"
          height="20"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="curveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#dc2626" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,10 Q300,2 600,10 T1200,10"
            stroke="url(#curveGradient1)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // Variant 2: CSS-only curved line using clip-path
  if (variant === 2) {
    return (
      <div className={`w-full h-1 ${className}`}>
        <div
          className="w-full h-full bg-gradient-to-r from-amber-200 via-orange-400 to-red-500"
          style={{
            clipPath: "ellipse(80% 100% at 50% 0%)",
            transform: "scaleY(0.5)",
          }}
        />
      </div>
    );
  }

  // Variant 3: Wavy line using CSS
  if (variant === 3) {
    return (
      <div className={`w-full h-2 overflow-hidden ${className}`}>
        <div
          className="w-full h-4 bg-gradient-to-r from-amber-200 via-orange-400 to-red-500"
          style={{
            borderRadius: "50%",
            transform: "scaleY(0.25)",
          }}
        />
      </div>
    );
  }

  // Variant 4: Complex SVG with multiple curves
  if (variant === 4) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          width="100%"
          height="30"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="curveGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.1" />
              <stop offset="20%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
              <stop offset="80%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,15 Q200,5 400,15 T800,15 Q1000,25 1200,15"
            stroke="url(#curveGradient4)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // Variant 5: Thick curved line similar to your image
  if (variant === 5) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="curveGradient5"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="20%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="80%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q600,5 1200,100"
            stroke="url(#curveGradient5)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Variant 6: Curved line with gradient fade beneath
  if (variant === 6) {
    return (
      <div className={`w-full overflow-hidden relative ${className}`}>
        {/* Gradient fade beneath the line */}
        <div
          className="absolute inset-0 w-full h-32 opacity-60"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(251, 191, 36, 0.1) 20%, rgba(220, 38, 38, 0.2) 50%, rgba(251, 191, 36, 0.1) 80%, transparent 100%)",
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 90% 95%, 80% 85%, 70% 75%, 60% 70%, 50% 65%, 40% 70%, 30% 75%, 20% 85%, 10% 95%, 0 100%)",
          }}
        />
        {/* The curved line itself */}
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full relative z-10"
        >
          <defs>
            <linearGradient
              id="curveGradient6"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="20%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="80%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q600,5 1200,100"
            stroke="url(#curveGradient6)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return null;
};
