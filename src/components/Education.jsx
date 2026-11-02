import React from "react";
import { educationTimeline } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="bg-[#f5f4f0] border-b border-stone-300 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-gray-500 mb-6">
              <span className="text-blue-600 font-bold">04 /</span> THE JOURNEY & EDUCATION
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-8 leading-tight">
              A little background.
            </h2>
            <a
            href="/Blessing_Makau_CV.pdf"
            download="Blessing_Makau_CV.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-blue-600 transition"
            >
            Download résumé <span>↗</span>
            </a>
          </div>

          <div className="lg:col-span-8 divide-y divide-stone-300 border-t border-stone-300">
            {educationTimeline.map((item, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4">
                  <span className="font-mono text-blue-600 font-semibold text-xs">{item.period}</span>
                  <span className={`block font-mono text-[11px] mt-1 font-medium ${item.badgeColor}`}>
                    {item.statusBadge}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                  <div className="text-sm text-gray-600 mb-2 font-mono">{item.institution}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
