"use client";

import VisionSystem from "./components/VisionSystem";
import InstructionPDF from "./components/InstructionPDF";

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
          JustBlink NeuroScroll AI Vision Control
        </h1>

        {/* Responsive layout */}
        <div className="flex flex-col xl:flex-row gap-8 h-[calc(100vh-160px)]">
          {/* Instruction PDF */}
          <div className="flex-1 xl:flex-1 h-[30vh] xl:h-auto">
            <InstructionPDF />
          </div>

          {/* Vision System */}
          <div className="flex-1">
            <VisionSystem />
          </div>
        </div>
      </div>
    </main>
  );
}
