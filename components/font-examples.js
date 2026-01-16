"use client";
import React from "react";
import { italianno, raleway } from "@/app/layout";

export function FontExamples() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Font Examples
        </h1>

        {/* Italianno Examples */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">
            Italianno Font
          </h2>

          {/* Using utility class */}
          <p className="italianno-regular text-4xl text-white mb-3">
            Elegant Italianno Script - Using .italianno-regular class
          </p>

          {/* Using font-italianno utility */}
          <p className="font-italianno text-4xl text-white mb-3">
            Beautiful Italianno Text - Using .font-italianno class
          </p>

          {/* Using Next.js font directly */}
          <p className={`${italianno.className} text-4xl text-white mb-3`}>
            Gorgeous Italianno Style - Using Next.js font directly
          </p>

          <code className="text-xs text-gray-400 block mt-4">
            className="italianno-regular" or className="font-italianno"
          </code>
        </div>

        {/* Raleway Examples */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Raleway Font
          </h2>

          {/* Different weights with font-raleway */}
          <p className="font-raleway text-3xl font-light text-white mb-2">
            Raleway Light (300) - Clean & Modern
          </p>

          <p className="font-raleway text-3xl font-normal text-white mb-2">
            Raleway Regular (400) - Elegant Sans-Serif
          </p>

          <p className="font-raleway text-3xl font-medium text-white mb-2">
            Raleway Medium (500) - Professional Look
          </p>

          <p className="font-raleway text-3xl font-semibold text-white mb-2">
            Raleway Semibold (600) - Strong Presence
          </p>

          <p className="font-raleway text-3xl font-bold text-white mb-2">
            Raleway Bold (700) - Maximum Impact
          </p>

          {/* Using Next.js font directly */}
          <p
            className={`${raleway.className} text-3xl font-black text-white mb-2`}
          >
            Raleway Black (900) - Using Next.js font
          </p>

          <code className="text-xs text-gray-400 block mt-4">
            className="font-raleway font-[weight]"
          </code>
        </div>

        {/* Combined Example */}
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20">
          <h2 className="font-raleway text-3xl font-bold text-purple-300 mb-4">
            Combined Typography Example
          </h2>

          <p className="italianno-regular text-5xl text-pink-300 mb-4">
            Elegant Handwritten Headlines
          </p>

          <p className="font-raleway text-lg font-normal text-gray-200 leading-relaxed">
            Paired with clean, modern body text in Raleway for perfect
            readability and visual hierarchy. This combination creates a
            sophisticated and professional design that works great for luxury
            brands, invitations, and premium content.
          </p>
        </div>

        {/* Usage Guide */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="font-raleway text-xl font-bold text-green-400 mb-3">
            Quick Usage Guide
          </h3>

          <div className="space-y-2 text-sm text-gray-300 font-mono">
            <p>
              • Italianno:{" "}
              <span className="text-pink-400">.italianno-regular</span> or{" "}
              <span className="text-pink-400">.font-italianno</span>
            </p>
            <p>
              • Raleway: <span className="text-blue-400">.font-raleway</span> +{" "}
              <span className="text-blue-400">font-[weight]</span>
            </p>
            <p>
              • Import directly:{" "}
              <span className="text-yellow-400">
                import &#123; italianno, raleway &#125; from "@/app/layout"
              </span>
            </p>
            <p>
              • Use className:{" "}
              <span className="text-yellow-400">
                className=&#123;italianno.className&#125;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
