"use client";
import React from "react";

export function FontWeightTest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Font Weight Test - Thin Fonts
        </h1>

        {/* Poppins Weights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            Poppins Font (All Weights)
          </h2>
          <div className="space-y-4">
            <p className="font-poppins font-thin text-5xl text-white">
              Poppins Thin (100) - EYEKON
            </p>
            <p className="font-poppins font-extralight text-5xl text-white">
              Poppins ExtraLight (200) - EYEKON
            </p>
            <p className="font-poppins font-light text-5xl text-white">
              Poppins Light (300) - EYEKON
            </p>
            <p className="font-poppins font-normal text-5xl text-white">
              Poppins Normal (400) - EYEKON
            </p>
          </div>
        </div>

        {/* Raleway Weights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Raleway Font (All Weights)
          </h2>
          <div className="space-y-4">
            <p className="font-raleway font-thin text-5xl text-white">
              Raleway Thin (100) - EYEKON
            </p>
            <p className="font-raleway font-extralight text-5xl text-white">
              Raleway ExtraLight (200) - EYEKON
            </p>
            <p className="font-raleway font-light text-5xl text-white">
              Raleway Light (300) - EYEKON
            </p>
            <p className="font-raleway font-normal text-5xl text-white">
              Raleway Normal (400) - EYEKON
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20">
          <h2 className="text-2xl font-semibold text-pink-400 mb-6">
            Side-by-Side Comparison (Thinnest)
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Poppins Thin (100):</p>
              <p className="font-poppins font-thin text-6xl text-white">
                Introducing EYEKON
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Raleway Thin (100):</p>
              <p className="font-raleway font-thin text-6xl text-white">
                Introducing EYEKON
              </p>
            </div>
          </div>
        </div>

        {/* Current Selection */}
        <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
          <h2 className="text-2xl font-semibold text-green-400 mb-6">
            ✅ Current Selection in generate-text.js
          </h2>
          <p className="font-poppins font-thin text-7xl text-white text-center">
            Introducing EYEKON
          </p>
          <p className="text-center text-gray-400 mt-4 text-sm">
            font-poppins font-thin (weight: 100)
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-amber-400 mb-3">
            How to Change Font Weight
          </h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>
              • Use{" "}
              <code className="text-pink-400 bg-black/30 px-2 py-1 rounded">
                font-thin
              </code>{" "}
              for weight 100 (thinnest)
            </p>
            <p>
              • Use{" "}
              <code className="text-pink-400 bg-black/30 px-2 py-1 rounded">
                font-extralight
              </code>{" "}
              for weight 200
            </p>
            <p>
              • Use{" "}
              <code className="text-pink-400 bg-black/30 px-2 py-1 rounded">
                font-light
              </code>{" "}
              for weight 300
            </p>
            <p>
              • Change between{" "}
              <code className="text-blue-400 bg-black/30 px-2 py-1 rounded">
                font-poppins
              </code>{" "}
              or{" "}
              <code className="text-blue-400 bg-black/30 px-2 py-1 rounded">
                font-raleway
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
