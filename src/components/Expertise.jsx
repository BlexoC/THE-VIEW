import React from "react";
import { skillCategories } from "../data/skills";

export default function Expertise() {
  return (
    <section id="skills" className="bg-[#0c1017] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="font-mono text-xs text-gray-400 mb-8">
          <span className="text-blue-500 font-bold">02 /</span> WHAT I BRING
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-5xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              End to end.<br />Not just the edges.
            </h2>
          </div>
          <div className="lg:col-span-4 text-gray-400 text-base leading-relaxed">
            The best software bridges how an interface feels with how reliably the backend runs. I craft across both boundaries.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <div className="w-10 h-10 border border-blue-500/30 rounded flex items-center justify-center text-blue-500 mb-6 font-mono font-bold">
                {cat.badge}
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{cat.description}</p>
              <ul className="space-y-2.5 text-sm text-gray-300 font-mono mb-8">
                {cat.skills.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-500">+</span> {s}
                  </li>
                ))}
              </ul>
              <div className="font-mono text-[10px] text-gray-500 pt-4 border-t border-gray-800">
                {cat.footerTag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
