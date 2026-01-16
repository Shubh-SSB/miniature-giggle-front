"use client";

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconEye } from "@tabler/icons-react";

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const features = [
    {
      title: "AI-Powered Eye Health Dashboard",
      description:
        "Real-time monitoring with smart analytics, personalized recommendations, and comprehensive health insights all in one place.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Smart Environmental Controls",
      description:
        "Automatic blue light filtering, brightness adjustment, and workspace optimization based on your daily patterns.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Interactive Eye Care Learning",
      description:
        "Gamified exercises, tutorial videos, and progress tracking to make eye health engaging and effective.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Global Health Network & Insurance",
      description:
        "Connect with professionals worldwide, access AI-based risk scoring, and get personalized coverage recommendations.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    // Original background: bg-[#2d1b3d]
    <section
      ref={ref}
      className="bg-gradient-to-b from-slate-950 via-[#1a1a2e] to-[#2d1b3d] py-10 lg:py-40 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-[#C787F6]/5 via-transparent to-[#B873F8]/5 pointer-events-none"
      />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 max-w-7xl mx-auto"
      >
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
            <span className="bg-gradient-to-r from-[#C787F6] via-[#B873F8] to-[#9333ea] bg-clip-text text-transparent">
              Advanced Eye Protection
            </span>{" "}
            Features
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-gray-300 text-center font-normal">
            From real-time strain detection to personalized exercise routines,
            EyeKon AI provides comprehensive protection for your digital eye
            health.
          </p>
        </div>
        <div className="relative ">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-black">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-gray-300 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          {/* Main Dashboard */}
          <div className="h-full w-full bg-gradient-to-br from-[#C787F6]/20 via-[#B873F8]/10 to-[#9333ea]/20 rounded-sm p-4">
            {/* Top Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-[#C787F6]/30 to-[#B873F8]/20 rounded-lg p-3 text-center">
                <div className="text-sm font-semibold text-white">
                  Eye Fatigue
                </div>
                <div className="text-xl font-bold text-white">32%</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-lg p-3 text-center">
                <div className="text-sm font-semibold text-white">
                  Blink Rate
                </div>
                <div className="text-xl font-bold text-white">Normal</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-lg p-3 text-center">
                <div className="text-sm font-semibold text-white">
                  Screen Time
                </div>
                <div className="text-xl font-bold text-white">4.2h</div>
              </div>
            </div>

            {/* Central Eye Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C787F6] to-[#B873F8] rounded-full flex items-center justify-center">
                <IconEye className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Bottom Features Row */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-purple-600/20 rounded p-2 text-white text-center">
                AI Strain Detection
              </div>
              <div className="bg-purple-600/20 rounded p-2 text-white text-center">
                Smart Breaks
              </div>
              <div className="bg-purple-600/20 rounded p-2 text-white text-center">
                Workspace Analysis
              </div>
              <div className="bg-purple-600/20 rounded p-2 text-white text-center">
                Health Insights
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="text-xs text-gray-300 mb-1">
                Next break in 15 min
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-3/4 h-2 bg-gradient-to-r from-[#C787F6] to-[#B873F8] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-[#2d1b3d] via-[#1a1a2e] to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-slate-950 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image p-4">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-3 relative">
          {/* Video Tutorial Section */}
          <div className="bg-gradient-to-br from-[#C787F6]/30 via-[#B873F8]/20 to-[#9333ea]/30 rounded-lg p-4 flex-1">
            <div className="flex items-center justify-center h-full relative">
              <IconEye className="h-12 w-12 text-[#C787F6] z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-sm font-semibold mb-1">
                    Eye Exercise Tutorial
                  </div>
                  <div className="text-xs opacity-80">
                    20-20-20 Rule & Blinking
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gamification Elements */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="bg-green-500/20 rounded-lg p-3 text-center">
              <div className="text-xs text-white font-semibold">
                Daily Streak
              </div>
              <div className="text-lg text-white">🔥 7</div>
            </div>
            <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
              <div className="text-xs text-white font-semibold">XP Points</div>
              <div className="text-lg text-white">⭐ 340</div>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3 text-center">
              <div className="text-xs text-white font-semibold">Exercises</div>
              <div className="text-lg text-white">👁️ 12</div>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-3 text-center">
              <div className="text-xs text-white font-semibold">Level</div>
              <div className="text-lg text-white">🏆 3</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-800/50 rounded-lg p-2">
            <div className="text-xs text-gray-300 mb-1">
              Weekly Goal Progress
            </div>
            <div className="w-full h-2 bg-gray-600 rounded-full">
              <div className="w-3/5 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const bluelightLevels = [
    { time: "6 AM", level: 100, color: "from-blue-500 to-blue-600" },
    { time: "12 PM", level: 75, color: "from-yellow-500 to-orange-500" },
    { time: "6 PM", level: 50, color: "from-orange-500 to-red-500" },
    { time: "10 PM", level: 25, color: "from-red-500 to-purple-500" },
    { time: "12 AM", level: 10, color: "from-purple-500 to-indigo-900" },
  ];

  const cardVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* Blue light filter levels throughout the day */}
      <div className="flex flex-row -ml-20">
        {bluelightLevels.map((item, idx) => (
          <motion.div
            variants={cardVariants}
            key={"bluelight-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-black border border-neutral-100 shrink-0 overflow-hidden"
          >
            <div
              className={`rounded-lg h-20 w-20 md:h-40 md:w-40 bg-gradient-to-br ${item.color} flex flex-col items-center justify-center text-white text-xs font-bold`}
            >
              <div>{item.time}</div>
              <div>{item.level}%</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {bluelightLevels.reverse().map((item, idx) => (
          <motion.div
            key={"bluelight-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={cardVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <div
              className={`rounded-lg h-20 w-20 md:h-40 md:w-40 bg-gradient-to-br ${item.color} flex flex-col items-center justify-center text-white text-xs font-bold`}
            >
              <div>{item.time}</div>
              <div>{item.level}%</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-[#1a1a2e] to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-[#1a1a2e]  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.78, 0.45, 0.97], // Purple marker color for eye care centers
      glowColor: [1, 1, 1],
      markers: [
        // Major eye care centers worldwide
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 }, // New York
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
