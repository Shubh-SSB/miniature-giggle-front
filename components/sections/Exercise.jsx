"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function Exercise() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Eye Relaxation",
        thumbnail:
            "/images/exercise/image.png",
    },
    {
        title: "Focus Training",
        thumbnail:
            "/images/exercise/image copy.png",
    },
    {
        title: "Blinking Exercise",
        thumbnail:
            "/images/exercise/image copy 2.png",
    },

    {
        title: "Distance Viewing",
        thumbnail:

            "/images/exercise/image copy 3.png",
    },
    {
        title: "Eye Movement",
        thumbnail:

            "/images/exercise/image copy 4.png",
    },
    {
        title: "Screen Break",
        thumbnail:

            "/images/exercise/image copy 5.png",
    },

    {
        title: "Zoom Focus",
        thumbnail:

            "/images/exercise/image copy 6.png",
    },
    {
        title: "Figure 8 Tracking",
        thumbnail:

            "/images/exercise/image copy 7.png",
    },
    {
        title: "Color Therapy",
        thumbnail:
            "/images/exercise/image copy 8.png",
    },
    {
        title: "Palming Exercise",
        thumbnail:
            "/images/exercise/image copy 9.png",
    },
    {
        title: "Near Far Focus",
        thumbnail:
            "/images/exercise/image copy 10.png",
    },
];
