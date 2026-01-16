import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Storysection() {
  // Story data with image paths (excluding cover page)
  const storyPages = [
    { id: 1, image: "/images/story/StoryBook-Eyekon-02.jpg" },
    { id: 2, image: "/images/story/StoryBook-Eyekon-03.jpg" },
    { id: 3, image: "/images/story/StoryBook-Eyekon-04.jpg" },
    { id: 4, image: "/images/story/StoryBook-Eyekon-05.jpg" },
    { id: 5, image: "/images/story/StoryBook-Eyekon-06.jpg" },
    { id: 6, image: "/images/story/StoryBook-Eyekon-07.jpg" },
    { id: 7, image: "/images/story/StoryBook-Eyekon-08.jpg" },
    { id: 8, image: "/images/story/StoryBook-Eyekon-09.jpg" },
    { id: 9, image: "/images/story/StoryBook-Eyekon-10.jpg" },
    { id: 10, image: "/images/story/StoryBook-Eyekon-11.jpg" },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-20 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-red-300 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-blue-300 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel-decorative text-orange-400 mb-6">
            The Digital Eye Story
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Follow the journey of how digital screens impact our vision and
            discover the revolutionary solution
          </p>
        </motion.div>

        {/* Staggered Pair Layout */}
        <div className="space-y-20 lg:space-y-24">
          {/* Group pages into pairs */}
          {Array.from(
            { length: Math.ceil(storyPages.length / 2) },
            (_, pairIndex) => (
              <div key={pairIndex} className="relative">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
                  {/* First card in pair - positioned up */}
                  {storyPages[pairIndex * 2] && (
                    <motion.div
                      className={`w-full relative lg:-translate-y-8 ${
                        [1, 4, 5, 8, 9].includes(storyPages[pairIndex * 2].id)
                          ? "max-w-[240px] lg:max-w-[280px] xl:max-w-[320px]"
                          : "max-w-xs lg:max-w-sm xl:max-w-md"
                      }`}
                      initial={{ opacity: 0, y: 60, rotate: -3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: pairIndex * 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{
                          scale: 1.05,
                          rotate: 2,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Decorative background */}
                        <div
                          className={`absolute -inset-3 bg-gradient-to-br opacity-15 rounded-2xl blur-lg group-hover:opacity-25 group-hover:scale-105 transition-all duration-300 ease-out ${
                            (pairIndex * 2) % 4 === 0
                              ? "from-blue-400 to-purple-500"
                              : (pairIndex * 2) % 4 === 1
                              ? "from-amber-400 to-orange-500"
                              : (pairIndex * 2) % 4 === 2
                              ? "from-green-400 to-teal-500"
                              : "from-pink-400 to-red-500"
                          }`}
                        />

                        {/* Page number indicator */}
                        <div
                          className={`absolute -top-3 -left-3 w-14 h-14 bg-gradient-to-br ${
                            (pairIndex * 2) % 4 === 0
                              ? "from-blue-500 to-purple-600"
                              : (pairIndex * 2) % 4 === 1
                              ? "from-amber-500 to-orange-600"
                              : (pairIndex * 2) % 4 === 2
                              ? "from-green-500 to-teal-600"
                              : "from-pink-500 to-red-600"
                          } rounded-full flex items-center justify-center text-white font-bold text-base shadow-xl z-10 rotate-12`}
                        >
                          {storyPages[pairIndex * 2].id}
                        </div>

                        {/* Story image */}
                        <div className="relative bg-black/20 backdrop-blur-sm border border-gray-400/30 rounded-xl p-2 shadow-xl group-hover:shadow-2xl transition-all duration-300 ease-out">
                          <Image
                            src={storyPages[pairIndex * 2].image}
                            alt={`Story page ${storyPages[pairIndex * 2].id}`}
                            width={300}
                            height={300}
                            className={`w-full rounded-lg shadow-md ${
                              [1, 4, 5, 8, 9].includes(
                                storyPages[pairIndex * 2].id
                              )
                                ? "h-[280px] object-cover"
                                : "h-auto"
                            }`}
                            priority={pairIndex < 2}
                          />
                          <div className="absolute inset-3 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg pointer-events-none" />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Second card in pair - positioned down */}
                  {storyPages[pairIndex * 2 + 1] && (
                    <motion.div
                      className={`w-full relative lg:translate-y-8 ${
                        [1, 4, 5, 8, 9].includes(
                          storyPages[pairIndex * 2 + 1].id
                        )
                          ? "max-w-[240px] lg:max-w-[280px] xl:max-w-[320px]"
                          : "max-w-xs lg:max-w-sm xl:max-w-md"
                      }`}
                      initial={{ opacity: 0, y: 60, rotate: 3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: pairIndex * 0.2 + 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{
                          scale: 1.05,
                          rotate: -2,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Decorative background */}
                        <div
                          className={`absolute -inset-3 bg-gradient-to-br opacity-15 rounded-2xl blur-lg group-hover:opacity-25 group-hover:scale-105 transition-all duration-300 ease-out ${
                            (pairIndex * 2 + 1) % 4 === 0
                              ? "from-blue-400 to-purple-500"
                              : (pairIndex * 2 + 1) % 4 === 1
                              ? "from-amber-400 to-orange-500"
                              : (pairIndex * 2 + 1) % 4 === 2
                              ? "from-green-400 to-teal-500"
                              : "from-pink-400 to-red-500"
                          }`}
                        />

                        {/* Page number indicator */}
                        <div
                          className={`absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br ${
                            (pairIndex * 2 + 1) % 4 === 0
                              ? "from-blue-500 to-purple-600"
                              : (pairIndex * 2 + 1) % 4 === 1
                              ? "from-amber-500 to-orange-600"
                              : (pairIndex * 2 + 1) % 4 === 2
                              ? "from-green-500 to-teal-600"
                              : "from-pink-500 to-red-600"
                          } rounded-full flex items-center justify-center text-white font-bold text-base shadow-xl z-10 -rotate-12`}
                        >
                          {storyPages[pairIndex * 2 + 1].id}
                        </div>

                        {/* Story image */}
                        <div className="relative bg-black/20 backdrop-blur-sm border border-gray-400/30 rounded-xl p-2 shadow-xl group-hover:shadow-2xl transition-all duration-300 ease-out">
                          <Image
                            src={storyPages[pairIndex * 2 + 1].image}
                            alt={`Story page ${
                              storyPages[pairIndex * 2 + 1].id
                            }`}
                            width={300}
                            height={300}
                            className={`w-full rounded-lg shadow-md ${
                              [1, 4, 5, 8, 9].includes(
                                storyPages[pairIndex * 2 + 1].id
                              )
                                ? "h-[280px] object-cover"
                                : "h-auto"
                            }`}
                            priority={pairIndex < 2}
                          />
                          <div className="absolute inset-2 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg pointer-events-none" />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {/* <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-purple-900/90 border border-blue-400/20 rounded-3xl p-12 lg:p-16 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            ={" "}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
            </div>
            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                The Future of Digital Eye Care
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  {" "}
                  is Here
                </span>
              </h3>

              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                This story doesn't have to be your story. With EyeKon AI, we're
                pioneering a new era of intelligent eye protection that adapts
                to your unique needs, learns from your habits, and safeguards
                your vision before problems begin.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    Proactive Protection
                  </h4>
                  <p className="text-blue-200 text-sm">
                    Prevention before problems arise
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    AI Intelligence
                  </h4>
                  <p className="text-blue-200 text-sm">
                    Smart adaptation to your patterns
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    Lifetime Vision
                  </h4>
                  <p className="text-blue-200 text-sm">
                    Preserve your sight for years to come
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Protecting Your Eyes Today</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                </motion.button>
              </div>

              <p className="text-blue-200/70 text-sm mt-8 italic">
                "Your eyes are irreplaceable. Your vision is invaluable. Let
                EyeKon AI be your digital guardian."
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
