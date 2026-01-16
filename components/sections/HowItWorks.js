"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  IconEye,
  IconBrain,
  IconShield,
  IconTrendingUp,
} from "@tabler/icons-react";

export function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );

  const steps = [
    {
      number: "01",
      title: "AI Eye Tracking",
      description:
        "Our advanced computer vision technology monitors your eye movements, blink patterns, and strain indicators in real-time.",
      icon: IconEye,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      number: "02",
      title: "Smart Analysis",
      description:
        "Machine learning algorithms analyze your usage patterns, environmental conditions, and personal eye health data.",
      icon: IconBrain,
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      number: "03",
      title: "Adaptive Protection",
      description:
        "Automatically adjusts screen settings, suggests breaks, and provides personalized eye exercises based on your needs.",
      icon: IconShield,
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      number: "04",
      title: "Health Improvement",
      description:
        "Track your progress with detailed analytics, improved comfort, and measurable reduction in eye strain symptoms.",
      icon: IconTrendingUp,
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#2d1b3d] via-[#1a1a2e] to-slate-950 py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"
      />

      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            How{" "}
            <span className="bg-gradient-to-r from-[#C787F6] via-[#B873F8] to-[#9333ea] bg-clip-text text-transparent">
              EyeKon AI
            </span>{" "}
            Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Four intelligent steps to transform your digital eye health
            experience
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: step.delay,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Step Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#C787F6] to-[#B873F8] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C787F6]/20 to-[#B873F8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#C787F6] to-[#B873F8] transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#B873F8] rounded-full transform -translate-y-1/2 translate-x-1"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-[#C787F6] to-[#B873F8] text-white font-semibold py-4 px-8 rounded-xl hover:from-[#B873F8] hover:to-[#9333ea] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Protecting Your Eyes Today
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
