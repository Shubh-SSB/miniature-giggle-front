"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 pt-2 inset-x-0 z-100 bg-linear-to-b from-black/50 to-transparent">
      <div className="flex mx-auto max-w-screen px-10 items-center h-16 justify-between">
        <Link
          href="/"
          className="text-5xl font-semibold text-amber-200 font-playfair"
        >
          EYEKON
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-200 font-poppins hover:text-amber-200 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/auth/signin"
            className="text-sm font-medium bg-amber-200 hover:bg-orange-300 text-black px-4 py-2 rounded-md transition-colors"
          >
            Sign In
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 transition"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-transparent backdrop-blur-md border-b border-white/10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-4 pt-2">
            <a
              href="/auth/signin"
              className="text-sm font-medium bg-amber-200 hover:bg-orange-300 text-black px-4 py-2 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
