import React from "react";

const steps = [
  {
    num: "01",
    title: "Ask better questions.",
    desc: "Get close to the problem, the people, and the constraints. Agree on what success actually looks like.",
    tag: "DISCOVERY / SHARED DIRECTION"
  },
  {
    num: "02",
    title: "Make it tangible.",
    desc: "Map schemas, design the API contracts, and prototype the critical path before assumptions turn expensive.",
    tag: "PROTOTYPE / TECHNICAL PLAN"
  },
  {
    num: "03",
    title: "Build in the open.",
    desc: "Small iterations, clear pull requests, and working software. No big surprises. No black boxes.",
    tag: "ITERATIVE BUILDS / FEEDBACK"
  },
  {
    num: "04",
    title: "Ship. Learn. Refine.",
    desc: "Launch with confidence, check real user telemetry, optimize queries, and leave the codebase cleaner.",
    tag: "RELEASE / HANDOVER"
  }
];

export default function Process() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-200">
      <div className="font-mono text-xs text-gray-500 mb-8">
        <span className="text-blue-600 font-bold">03 /</span> HOW I WORK
      </div>
      <h2 className="text-5xl sm:text-6xl font-medium tracking-tight text-black mb-6">
        Less ceremony. More clarity.
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl font-normal leading-relaxed mb-16">
        A collaborative process that keeps the important things in focus — and the work moving forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="border-t border-gray-200 pt-6">
            <div className="text-4xl font-mono text-blue-600 font-semibold mb-4">{step.num}</div>
            <h3 className="text-xl font-medium text-black mb-3">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{step.desc}</p>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">{step.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
