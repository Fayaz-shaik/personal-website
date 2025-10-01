import React, { useState } from "react";

export default function App() {
  const [showLearn, setShowLearn] = useState(false);

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-blue-500/20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-white">
            ML Engineer<span className="text-blue-400">.</span>
          </span>
          <div className="space-x-8">
            <a
              href="/learn.html"
              rel="noopener noreferrer"
              className="nav-link text-gray-300 hover:text-blue-400 transition-colors"
            >
              Learn
            </a>
          </div>
        </div>
      </nav>

    </div>
  );
}