"use client";

import { useVisionSystem } from "@/hooks/useVisionSystem";

export default function VisionSystem() {
  const { videoRef, canvasRef, status } = useVisionSystem();

  return (
    <div className="relative group">
      {/* Camera Container */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        <video ref={videoRef} className="w-full rounded-2xl object-cover" />

        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          className="absolute top-0 left-0 w-full rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Status Badge */}
      <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-xl text-sm border border-white/20 shadow-lg">
        <span className="text-gray-300">Status:</span>{" "}
        <span className="font-medium text-white">{status}</span>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition duration-500 pointer-events-none" />
    </div>
  );
}
