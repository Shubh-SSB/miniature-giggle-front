"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative w-full min-h-screen bg-slate-950 text-slate-100 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Aurora Background - Contained to component */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#654358_10%,#17092A_15%,#2F0D64_20%,#C787F6_25%,#170928_30%)",

            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",

            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

            "--purple-600": "#654358",
            "--purple-900": "#17092A",
            "--purple-800": "#2F0D64",
            "--purple-400": "#C787F6",
            "--purple-950": "#170928",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
          }}
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute inset-0 w-full h-full [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-70 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--purple-600)_10%,var(--purple-900)_15%,var(--purple-800)_20%,var(--purple-400)_25%,var(--purple-950)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:w-full after:h-full after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
      </div>

      {/* Content - Always on top */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
