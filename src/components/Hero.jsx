import React from "react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 border-b border-gray-200">
      <div className="flex items-center justify-between mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
          INDEPENDENT FULL-STACK DEVELOPER
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-medium">
            AVAILABLE FOR SELECT PROJECTS
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-black leading-[1.05] mb-8">
            Built with care.<br />Made to <span className="text-blue-600">matter.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl font-normal leading-relaxed mb-10">
            I’m Blessing. I turn complex problems into clear digital experiences — from responsive user interfaces to dependable backend APIs.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded text-sm font-medium hover:bg-blue-700 transition"
            >
              Explore selected work <span>↗</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition px-4 py-3.5"
            >
              A little about me <span>↗</span>
            </a>
          </div>
        </div>

        {/* Isometric Wireframe Stack Graphic */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end">
          <svg className="w-72 h-72 text-blue-600 opacity-80" viewBox="0 0 200 200" fill="none" stroke="currentColor">
            <polygon points="100,20 180,60 100,100 20,60" strokeWidth="1.2" />
            <polygon points="100,50 180,90 100,130 20,90" strokeWidth="1.2" />
            <polygon points="100,80 180,120 100,160 20,120" strokeWidth="1.2" />
            <line x1="20" y1="60" x2="20" y2="120" strokeWidth="1.2" />
            <line x1="180" y1="60" x2="180" y2="120" strokeWidth="1.2" />
            <line x1="100" y1="100" x2="100" y2="160" strokeWidth="1.2" />
            <circle cx="100" cy="115" r="3" fill="#2563EB" />
          </svg>
          <span className="font-mono text-gray-400 mt-2 text-[10px] tracking-widest uppercase">
            FIG. 01 — THE FULL STACK
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-20 pt-8 border-t border-gray-100 text-gray-400 text-xs font-mono">
        <span>BASED IN KENYA · WORKING REMOTELY EVERYWHERE</span>
        <a href="#work" className="hover:text-black flex items-center gap-1 transition">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </div>
    </section>
  );
}
