import React from "react";

export default function MetricsBanner() {
  return (
    <section className="bg-[#f5f4f0] border-y border-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-mono text-xs text-gray-500 block mb-2 uppercase tracking-wider">
            FULL COMMITMENT
          </span>
          <p className="text-base font-semibold text-gray-900">
            A product mindset. An engineer’s attention to detail.
          </p>
        </div>
        <div className="border-l border-stone-300 pl-6">
          <div className="text-4xl font-semibold text-gray-900 mb-1">100%</div>
          <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider">
            FOCUS ON RELIABLE SOFTWARE
          </span>
        </div>
        <div className="border-l border-stone-300 pl-6">
          <div className="text-4xl font-semibold text-gray-900 mb-1">03+</div>
          <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider">
            PRODUCTION APPS SHIPPED
          </span>
        </div>
        <div className="border-l border-stone-300 pl-6">
          <div className="text-4xl font-semibold text-gray-900 mb-1">02</div>
          <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider">
            ACADEMIC & CODE INSTITUTIONS
          </span>
        </div>
      </div>
    </section>
  );
}
