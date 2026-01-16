"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Placeholder Auth Button - will be replaced with custom auth
export function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex items-center gap-4"
    >
      {!isLoggedIn ? (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="border-2 cursor-pointer border-purple-400 w-fit p-3 rounded-md 
                     bg-gradient-to-r from-purple-600 to-pink-600 
                     hover:from-purple-500 hover:to-pink-500 hover:via-violet-500 
                     hover:text-white transition-all duration-300"
        >
          Sign In
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-purple-300">Welcome!</span>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </motion.div>
  );
}

// User Profile Component placeholder
export function UserProfile() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
        <span className="text-black font-bold text-sm">U</span>
      </div>
      <span className="text-purple-300">User</span>
    </div>
  );
}

// Welcome Message Component
export function WelcomeMessage({ userName = "User" }) {
  return (
    <motion.h1
      className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 animate-shimmer bg-[length:200%_100%]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to EyeKon AI, {userName}!
    </motion.h1>
  );
}
