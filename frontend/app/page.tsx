"use client";

import VisionSystem from "./components/VisionSystem";
import InstructionPDF from "./components/InstructionPDF";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-4 md:px-12 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Button */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            JustBlink NeuroScroll
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            AI Vision Powered Gesture-Based Document Navigation
          </p>

          <a
            href="https://nexabuild-abhishek-jatav.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-2xl font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View Portfolio
          </a>
        </div>

        {/* Responsive Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* PDF Component */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <InstructionPDF />
          </div>

          {/* Vision System */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <VisionSystem />
          </div>
        </div>
      </div>
    </main>
  );
}
