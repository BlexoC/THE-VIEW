import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Photo */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src="/BlexsoC.jpeg"
              alt="Blessing Makau"
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover object-top border border-gray-200 shadow-sm"
            />
            <span className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white"></span>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-8">
          <div className="font-mono text-xs text-gray-500 mb-6">
            <span className="text-blue-600 font-bold">05 /</span> ABOUT
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black leading-tight mb-8">
            Hi, I’m Blessing.
          </h2>
          <div className="space-y-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
            <p>
              I’m a full-stack developer based in Kenya, building with Python/Flask on the backend and React on the front. I enjoy the whole path from a database schema to a polished interface.
            </p>
            <p>
              I’m pursuing a Diploma in Computer Science at Zetech University and completed the Software Engineering programme at Moringa School. I care about clean API contracts, readable code, and software people can rely on.
            </p>
            <p>
              Based in Kenya, working remotely everywhere. If you have a good problem, I’d love to hear it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}