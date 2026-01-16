"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="medium"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Every day your eyes collect tiny stars of health. EyeKon plants these stars in a magical garden where they grow into beautiful flowers. Watch your vision garden bloom with colors, each petal showing how strong and sparkly your eyes are becoming!",
    name: "EYEKON_AI",
    title: "Growing a Vision Rainbow",
    highlightWord: "grow",
  },
  {
    quote:
      "Goldilocks found the perfect chair—not too close, not too far. EyeKon is your space detective, helping you find your perfect cloud to sit on while watching screens. Not too near where everything's blurry, not too far where magic fades away!",
    name: "EYEKON-AI",
    title: "Finding Your Perfect Cloud",
    highlightWord: "perfect",
  },
  {
    quote:
      "Your eyelids are like butterfly wings—they need to flutter and fly! But screens make them forget to dance. EyeKon is the gentle garden keeper who reminds your little butterfly wings to flutter, keeping your eyes dewy and bright like morning flowers.",
    name: "EYE",
    title: "Butterfly Wings for Your Eyes",
    highlightWord: "flutter",
  },
  {
    quote:
      "Imagine a tiny fairy that sits on your screen, watching over your sleepy eyes. When they get tired from staring too long, the fairy giggles and says 'Time for a break, little dreamer!' EyeKon is like that magical friend who never forgets to remind you.",
    name: "KON_AI",
    title: "Your Eyes' Best Friend",
    highlightWord: "break",
  },
  {
    quote:
      "Did you know screens glow with secret blue sparkles? Some sparkles are happy, some are grumpy! EyeKon is like a wise wizard who catches the grumpy sparkles before they bother your eyes, letting only the friendly ones through to dance on your screen.",
    name: "",
    title: "Magic Light Keeper",
    highlightWord: "wizard",
  },
];
