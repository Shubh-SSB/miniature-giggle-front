import React from "react";
import { TextGenerateEffectDemo } from "../generate-text";
import { InfiniteMovingCardsDemo } from "../moving-cards";

const RevealSection = () => {
  return (
    <div className="py-20 min-h-screen flex flex-col">
      <div className="flex items-center justify-center min-h-[60vh]">
        <TextGenerateEffectDemo />
      </div>
      <div className="flex-1 -mt-40">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default RevealSection;
