import React from "react";
import { featuredProject, secondaryProjects } from "../data/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-200">
      <div className="flex items-center justify-between mb-12 font-mono text-xs">
        <span className="text-gray-500">
          <span className="text-blue-600 font-bold">01 /</span> SELECTED WORK / 2024–2026
        </span>
        <span className="text-gray-400 hidden sm:block uppercase tracking-wider">
          THREE PINNED PROJECTS ↓
        </span>
      </div>

      <h2 className="text-5xl sm:text-6xl font-medium tracking-tight text-black mb-14">
        Good ideas. Real products.
      </h2>

      {/* Featured: Tuinuie Wasichana */}
      <div className="bg-[#eaf0fa] rounded-lg p-6 sm:p-12 mb-14 border border-blue-100 hover:shadow-md transition">
        <div className="flex justify-between items-center mb-6 font-mono text-xs text-gray-500">
          <span>{featuredProject.title.toUpperCase()} / {featuredProject.category}</span>
          <span>{featuredProject.type} · {featuredProject.year}</span>
        </div>

        <div className="bg-white rounded border border-gray-200 shadow-sm p-6 sm:p-10 mb-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            </div>
            <span className="font-mono text-gray-400 text-xs">{featuredProject.domain} · production</span>
            <span className="text-gray-300">🔒</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50/60 p-5 rounded border border-blue-100">
              <div className="font-mono text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wider">
                Community Reach
              </div>
              <div className="text-3xl font-bold text-gray-900">{featuredProject.reach}</div>
              <div className="text-xs text-gray-500 mt-1">{featuredProject.reachLabel}</div>
            </div>
            <div className="bg-blue-50/60 p-5 rounded border border-blue-100">
              <div className="font-mono text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wider">
                Architecture
              </div>
              <div className="text-3xl font-bold text-gray-900">{featuredProject.architecture}</div>
              <div className="text-xs text-gray-500 mt-1">{featuredProject.archLabel}</div>
            </div>
            <div className="bg-blue-50/60 p-5 rounded border border-blue-100">
              <div className="font-mono text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wider">
                Repositories
              </div>
              <div className="text-3xl font-bold text-gray-900">{featuredProject.reposCount}</div>
              <div className="text-xs text-gray-500 mt-1">{featuredProject.reposLabel}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="text-3xl font-semibold text-black">{featuredProject.title}</h3>
              <span className="font-mono text-gray-400 text-xs">{featuredProject.id} /</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.map((tag, i) => (
                <span key={i} className="border border-gray-300 bg-white px-3 py-1 text-xs font-mono rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-blue-600 text-white rounded flex items-center justify-center text-xl hover:bg-blue-700 transition"
              title="View on GitHub"
            >
              ↗
            </a>
          </div>
        </div>
      </div>

      {/* Grid: Kicks Kenya & Patient Recording System */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {secondaryProjects.map((p) => (
          <div key={p.id} className="border-t border-gray-200 pt-8 flex flex-col justify-between">
            {p.id === "02" ? (
              <div className="bg-[#f2f4ec] rounded-lg p-8 mb-6 h-64 flex flex-col justify-between border border-gray-200">
                <div className="flex justify-between items-center font-mono text-xs text-gray-500">
                  <span className="font-bold text-black tracking-wider">{p.title.toUpperCase()}</span>
                  <span>{p.category}</span>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-gray-900 mb-2">{p.subtitle}</div>
                  <p className="text-sm text-gray-600">{p.tagline}</p>
                </div>
                <div className="font-mono text-xs text-emerald-700 font-semibold">{p.statusBadge}</div>
              </div>
            ) : (
              <div className="bg-[#0c1017] text-white rounded-lg p-8 mb-6 h-64 flex flex-col justify-between border border-gray-800">
                <div className="flex justify-between items-center font-mono text-xs text-gray-400">
                  <span className="font-bold text-white tracking-widest">{p.title.toUpperCase()}</span>
                  <span>{p.category}</span>
                </div>
                <pre className="bg-[#151c27] p-4 rounded border border-gray-700 font-mono text-xs text-gray-300 whitespace-pre">
                  {p.codeSnippet}
                  {"\n"}<span className="text-emerald-400">✓ Medical record committed safely</span>
                </pre>
                <div className="font-mono text-xs text-blue-500 font-semibold">{p.statusBadge}</div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold text-black">{p.title}</h3>
                  <span className="font-mono text-xs text-gray-400">{p.id} /</span>
                </div>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-blue-600 text-xl hover:translate-x-1 transition">
                  ↗
                </a>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-mono rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="font-mono text-xs text-gray-400 pt-3 border-t border-gray-100 flex justify-between">
                <span>{p.tagLeft}</span>
                <span>{p.tagRight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
