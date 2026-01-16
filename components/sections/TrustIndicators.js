"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Zap } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security",
    },
    {
      icon: Award,
      title: "FDA Recognized",
      description: "Clinically validated technology",
    },
    {
      icon: Users,
      title: "10K+ Users",
      description: "Trusted by professionals",
    },
    {
      icon: Zap,
      title: "Real-time AI",
      description: "Instant health insights",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-gradient-to-r from-purple-950/50 to-violet-950/50 border-y border-purple-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Trusted by Healthcare Professionals Worldwide
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {indicator.title}
                </h4>
                <p className="text-xs text-gray-400">{indicator.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
