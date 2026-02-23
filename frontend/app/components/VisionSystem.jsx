"use client";

import { useVisionSystem } from "@/hooks/useVisionSystem";

export default function VisionSystem() {
  const { videoRef, canvasRef, status } = useVisionSystem();

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full rounded-xl border border-white/10 shadow-xl"
      />

      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        className="absolute top-0 left-0 w-full rounded-xl"
      />

      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-white/10">
        {status}
      </div>
    </div>
  );
}
