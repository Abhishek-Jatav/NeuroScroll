import VisionSystem from "./components/VisionSystem";
import InstructionPDF from "./components/InstructionPDF";

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          NeuroScroll AI Vision Control
        </h1>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <VisionSystem />
          </div>

          <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <InstructionPDF />
          </div>
        </div>
      </div>
    </main>
  );
}
