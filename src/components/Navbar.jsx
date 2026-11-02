import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm h-16"
          : "bg-white border-gray-100 h-20"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-2xl font-bold tracking-tight text-black">
            bm<span className="text-blue-600 group-hover:animate-ping inline-block">.</span>
          </span>
          <span className="font-mono text-[11px] tracking-wider uppercase text-gray-500 hidden sm:inline">
            BLESSING MAKAU
          </span>
        </a>

        <nav className="flex items-center gap-6 md:gap-8 text-sm font-medium text-gray-600">
          <a href="#work" className="hover:text-black transition">Work</a>
          <a href="#skills" className="hover:text-black transition">Expertise</a>
          <a href="#education" className="hover:text-black transition">Education</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-black font-semibold hover:text-blue-600 transition"
          >
            Let’s talk <span className="text-xs">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
