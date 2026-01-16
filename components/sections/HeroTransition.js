"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroTransition() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return;

    // Set initial window width on client side
    const width = window.innerWidth;
    setWindowWidth(width);

    // Generate particles data once to avoid re-calculations
    const particleData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(particleData);

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      // Update particle positions on resize
      setParticles((prev) =>
        prev.map((p) => ({ ...p, x: Math.random() * newWidth }))
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300);

  return (
    <section className="relative h-32 bg-gradient-to-b from-slate-950 via-[#1a1a2e] to-[#2d1b3d] overflow-hidden">
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#C787F6]/10 via-[#B873F8]/5 to-[#9333ea]/10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: particle.x,
              y: 128,
            }}
            animate={{
              y: -20,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Subtle eye protection messaging */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.div
            className="text-sm text-purple-300/70 font-light tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ✦ Protecting millions of eyes worldwide ✦
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#2d1b3d"
          />
        </svg>
      </div>
    </section>
  );
}
