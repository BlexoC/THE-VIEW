import React from "react";

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="bg-[#0c1017] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16 font-mono text-xs">
          <span className="text-gray-400">
            <span className="text-blue-500 font-bold">07 /</span> WHAT'S NEXT?
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-gray-300">OPEN TO NEW OPPORTUNITIES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-9">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
              Have a good problem?<br />Let’s solve it.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              A new product, a tricky build, or just an interesting conversation. My inbox is open.
            </p>
            <a
              href="mailto:makaublessing929@gmail.com"
              className="text-2xl sm:text-4xl text-white font-mono hover:text-blue-500 transition border-b border-gray-700 pb-1 inline-block"
            >
              makaublessing929@gmail.com
            </a>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <a
              href="mailto:makaublessing929@gmail.com"
              className="w-32 h-32 bg-blue-600 rounded flex items-center justify-center text-white text-5xl hover:bg-blue-700 transition"
              title="Send email"
            >
              ↗
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-gray-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs">
          <div>
            <div className="text-gray-500 mb-2 uppercase tracking-wider text-[10px]">
              ELSEWHERE ON THE INTERNET
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/BlexoC"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:makaublessing929@gmail.com"
                className="text-gray-300 hover:text-white transition"
              >
                Email ↗
              </a>
              <span className="text-gray-500">NAIROBI, KENYA · OPEN TO THE WORLD</span>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500">
          <div>© 2026 BLESSING MAKAU</div>
          <div className="my-2 sm:my-0 uppercase tracking-wider">
            THOUGHTFULLY DESIGNED. CAREFULLY BUILT.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition flex items-center gap-1 cursor-pointer"
          >
            BACK TO TOP <span>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
