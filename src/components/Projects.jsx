import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="px-6 py-16 max-w-3xl mx-auto text-gray-200 font-sans"
    >
      <h2 className="text-3xl font-pixel text-accent mb-8 text-center">
        Projects
      </h2>

      {/* Minecraft Network Project */}
      <div
        onClick={() => setExpanded(!expanded)}
        className={`cursor-pointer border border-gray-700 rounded-lg p-6 mb-6 
          bg-dark/70 backdrop-blur-sm transition-all duration-300 
          hover:bg-dark/90 hover:scale-[1.02] hover:shadow-accent/10 hover:shadow-lg
          ${expanded ? "ring-1 ring-accent/40" : ""}
        `}
      >
        <h3
          className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
            expanded ? "text-accent" : "text-white"
          }`}
        >
          Minecraft Networks
        </h3>

        <p className="text-gray-400 text-sm">
          Large-scale multiplayer infrastructure engineered from the ground up,
          supporting thousands of concurrent users globally.
        </p>
        <p className="text-xs text-gray-500 mt-1 italic">
          Founded, developed, and scaled independently.
        </p>

        {/* Expandable Section */}
        <div
          className={`transition-all overflow-hidden duration-500 ease-in-out ${
            expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-5 space-y-5">
            {/* Zonix */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300">
                <strong>Network Name:</strong> Zonix.us
              </p>
              <p className="text-sm text-gray-300">
                <strong>Average Players:</strong> 300–5,000 daily
              </p>
              <p className="text-sm text-gray-300">
                <strong>Regions:</strong> North America, Europe, AU
              </p>
              <p className="text-sm text-gray-300">
                <strong>Monthly Revenue:</strong> $10,000+
              </p>
            </div>

            {/* PvPTemple */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300">
                <strong>Network Name:</strong> PvPTemple
              </p>
              <p className="text-sm text-gray-300">
                <strong>Average Players:</strong> 300–5,000 daily
              </p>
              <p className="text-sm text-gray-300">
                <strong>Regions:</strong> Europe, AU
              </p>
              <p className="text-sm text-gray-300">
                <strong>Monthly Revenue:</strong> $10,000+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="border border-gray-700 rounded-lg p-6 bg-dark/70 backdrop-blur-sm hover:bg-dark/90 hover:scale-[1.02] hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold text-white mb-2">
          poccha.co
        </h3>
        <p className="text-gray-400 text-sm">
          Personal portfolio built with React, Vite, and TailwindCSS v4 — designed and
          engineered from the ground up with performance, minimalism, and scalability in
          mind.
        </p>
        <p className="text-xs text-gray-500 mt-1 italic">
          Fully self-developed and deployed.
        </p>
      </div>
    </section>
  );
}
