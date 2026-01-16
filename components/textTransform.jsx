import React from "react";
import { FlipWords } from "./ui/flip-words";

export function TextTransform() {
    const words = ["VISION", "दृष्टि", "Visione", "Visão", "Visión"];

    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div
                className="text-5xl md:text-7xl lg:text-8xl font-thin sm:font-thin md:font-extralight tracking-tight font-poppins text-[#F5F3EE]/55">
                Protect Your
                <FlipWords words={words} className="mx-4 text-amber-200" /> <br />
            </div>
        </div>
    );
}
