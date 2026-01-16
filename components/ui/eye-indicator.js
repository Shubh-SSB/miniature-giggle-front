"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function EyeIndicator({
  size = "default",
  showBlink = true,
  showFloat = true,
  // irisColor = "from-[#C787F6] via-[#B873F8] to-[#9333ea]",
  irisColor = "from-amber-300 via-red-300 to-orange-300",
  className = "",
  transformToChat = false,
  onClick = null,
  followCursor = true,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  useEffect(() => {
    if (!followCursor) return;

    const handleMouseMove = (e) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        // Limit the movement to keep the iris within the eye bounds
        const maxDistance = 15; // Adjust this value to control how far the iris can move
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > 0) {
          const scale = Math.min(maxDistance / distance, 1);
          setMousePosition({
            x: deltaX * scale,
            y: deltaY * scale,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followCursor]);
  // Size variants
  const sizeVariants = {
    small: {
      width: "w-12",
      height: "h-8",
      iris: "w-5 h-5",
      pupil: "w-2.5 h-2.5",
    },
    default: {
      width: "w-20",
      height: "h-12",
      iris: "w-9 h-9",
      pupil: "w-4.5 h-4.5",
    },
    large: {
      width: "w-36",
      height: "h-24",
      iris: "w-18 h-18",
      pupil: "w-10.5 h-10.5",
    },
  };

  const currentSize = sizeVariants[size] || sizeVariants.default;

  if (transformToChat) {
    return (
      <motion.div
        className={`relative ${currentSize.width} ${currentSize.height} flex items-center justify-center cursor-pointer ${className}`}
        onClick={onClick}
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="bg-gradient-to-br from-[#C787F6] via-[#B873F8] to-[#9333ea] rounded-full p-3 shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={eyeRef}
      className={`relative ${currentSize.width} ${currentSize.height} overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
      animate={showFloat ? { y: [0, -5, 0] } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        clipPath: "ellipse(50% 50% at 50% 50%)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Eye background (white of the eye) */}
      <div
        className="absolute inset-0 bg-slate-100 shadow-inner"
        style={{
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        }}
      />

      {/* Iris */}
      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${currentSize.iris} bg-gradient-to-br ${irisColor} rounded-full shadow-lg`}
        animate={{
          scale: [1, 0.9, 1],
          x: followCursor ? mousePosition.x : 0,
          y: followCursor ? mousePosition.y : 0,
        }}
        transition={{
          scale: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
          y: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        }}
      >
        {/* Pupil */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${currentSize.pupil} bg-black rounded-full`}
        >
          {/* Light reflection */}
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
        </div>
      </motion.div>

      {showBlink && (
        <>
          {/* Upper eyelid */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-slate-800 origin-bottom"
            style={{
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
            animate={{
              scaleY: [0, 0, 1, 1, 0, 0],
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 0.15,
              times: [0, 0.1, 0.4, 0.6, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 2.85,
              ease: [0.4, 0, 0.2, 1],
            }}
          />

          {/* Lower eyelid */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-full bg-slate-800 origin-top"
            style={{
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
            animate={{
              scaleY: [0, 0, 0.25, 0.25, 0, 0],
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 0.15,
              times: [0, 0.15, 0.45, 0.55, 0.85, 1],
              repeat: Infinity,
              repeatDelay: 2.85,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </>
      )}

      {/* Eye outline */}
      <div
        className="absolute inset-0 border-2 border-slate-600/50"
        style={{
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        }}
      />
    </motion.div>
  );
}
