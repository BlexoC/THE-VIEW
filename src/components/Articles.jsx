import React from "react";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section className="bg-[#f5f4f0] py-20 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-gray-500 mb-4">
              <span className="text-blue-600 font-bold">06 /</span> THINKING OUT LOUD
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-black mb-3">
              Notes from the workbench.
            </h2>
            <p className="text-sm text-gray-600">A few things learned while building for the web.</p>
          </div>

          <div className="lg:col-span-8 divide-y divide-stone-300 border-t border-stone-300">
            {articles.map((note, idx) => (
              <a
                key={idx}
                href={note.link}
                target="_blank"
                rel="noreferrer"
                className="py-6 flex items-center justify-between group"
              >
                <div>
                  <span className="font-mono text-[11px] text-blue-600 block mb-1 uppercase tracking-wider">
                    {note.tag}
                  </span>
                  <span className="text-xl font-medium text-black group-hover:text-blue-600 transition">
                    {note.title}
                  </span>
                </div>
                <span className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition text-lg">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
