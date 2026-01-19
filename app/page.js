"use client";

import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import { HeroSection } from "@/components/hero-section";
import RevealSection from "@/components/sections/reveal";
import StoryScroll from "@/components/sections/storyscroll";
import DemoSection from "@/components/sections/DemoSection";
import { Contact } from "@/components/sections/contact";
import { Exercise } from "@/components/sections/Exercise";
import RippleCursor from "@/components/ui/TrailCursor";

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleConnectWithUs = () => {
    // Option 1: Open contact modal
    setIsContactModalOpen(true);

    // Option 2: Scroll to contact section (alternative)
    // handleSmoothScroll("#contact");

    // Option 3: Open email client (alternative)
    // window.location.href = "mailto:contact@eyecon-ai.com?subject=Connect With Us";
  };

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: true,
      }}
    >
      <main className="min-h-screen">
        <section className="relative">
          <HeroSection />
          {/* Curved Line Divider - Just below hero */}
          {/* <CurvedLine
          variant={5}
          className="absolute bottom-0 left-0 right-0 z-20"
        /> */}
        </section>
        <section className="min-h-screen">
          <StoryScroll />
        </section>
        <section id="demo" className="relative overflow-hidden">
          <DemoSection />
        </section>
        <section className="min-h-screen">
          <RevealSection />
        </section>
        <section className="min-h-screen">
          <Exercise />
        </section>
        <section>
          <Contact />
        </section>

        {/* Contact Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Connect With Us
                </h2>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows="4"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Thank you! We'll get back to you soon.");
                      setIsContactModalOpen(false);
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </ReactLenis>
  );
};

export default Home;
