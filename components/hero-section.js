"use client";

import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowRightFromLineIcon,
  Eye,
  PlayIcon,
} from "lucide-react";
import { Navbar } from "./layout/navbar";
import {
  Skiper67,
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerTimeRange,
} from "./ui/skiper-ui/skiper67";
import { TextTransform } from "./textTransform";
// import VideoPlayer from "./videoplayer";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrollPosition(latest);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      <Navbar />
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 100% 50px at 50% 100%, transparent 50%, black 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 50px at 50% 100%, transparent 50%, black 60%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/videos/blink.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl items-center justify-center mx-auto px-8 text-center md:mt-28">
        <TextTransform />
      </div>
      {/* Watch Demo Button - Bottom Left */}
      <div className="absolute z-20 bottom-10 left-4">
        <Skiper67 />
      </div>
      {/* EYEKON-AI Brand Text - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-right">
          <h2
            className={`text-4xl md:text-5xl tracking-wider text-[#F5F3EE] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-default select-none font-playfair font-thin`}
          >
            EYEKON
            <span className="text-amber-200">-</span>AI
          </h2>
          <div className="text-xs font-medium text-[#F5F3EE]/70 tracking-[0.2em] uppercase mt-1">
            Digital Eye Protection
          </div>
        </div>
      </div>
    </div>
  );
}
