// hooks/useVisionSystem.ts

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { loadMediaPipeScripts } from "@/lib/mediapipe-loader";
import { createGestureSocket } from "@/lib/websocket";

export function useVisionSystem() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    async function init() {
      setStatus("Loading AI Models...");
      await loadMediaPipeScripts();

      setStatus("Starting Camera...");

      const faceMesh = new (window as any).FaceMesh({
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      wsRef.current = createGestureSocket();

      wsRef.current.onopen = () => {
        setStatus("Connected");
        toast.success("Vision System Connected");
      };

      wsRef.current.onerror = () => {
        setStatus("Connection Failed");
        toast.error("WebSocket Connection Failed");
      };

      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (!data.gesture) return;

        const container = document.getElementById("pdf-container");

        if (data.gesture === "BLINK") {
          toast("Scroll Down", { icon: "⬇️" });
          container?.scrollBy({ top: 300, behavior: "smooth" });
        }

        if (data.gesture === "LONG_BLINK") {
          toast("Scroll Up", { icon: "⬆️" });
          container?.scrollBy({ top: -300, behavior: "smooth" });
        }
      };

      faceMesh.onResults((results: any) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!results.multiFaceLandmarks?.length) return;

        const landmarks = results.multiFaceLandmarks[0];

        (window as any).drawConnectors(
          ctx,
          landmarks,
          (window as any).FACEMESH_TESSELATION,
          { color: "#00FFFF", lineWidth: 1 },
        );

        const leftEyeIndices = [33, 160, 158, 133, 153, 144];
        const rightEyeIndices = [362, 385, 387, 263, 373, 380];

        const left_eye = leftEyeIndices.map((i) => [
          landmarks[i].x,
          landmarks[i].y,
        ]);

        const right_eye = rightEyeIndices.map((i) => [
          landmarks[i].x,
          landmarks[i].y,
        ]);

        if (wsRef.current?.readyState === 1) {
          wsRef.current.send(JSON.stringify({ left_eye, right_eye }));
        }
      });

      const camera = new (window as any).Camera(videoRef.current, {
        onFrame: async () => {
          await faceMesh.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });

      camera.start();
    }

    init();
  }, []);

  return { videoRef, canvasRef, status };
}
