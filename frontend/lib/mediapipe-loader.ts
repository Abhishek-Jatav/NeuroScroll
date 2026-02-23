// lib/mediapipe-loader.ts

export async function loadMediaPipeScripts() {
  const loadScript = (src: string) =>
    new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.crossOrigin = "anonymous";
      script.onload = () => resolve();
      document.body.appendChild(script);
    });

  await loadScript(
    "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js",
  );
  await loadScript(
    "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
  );
  await loadScript(
    "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
  );
}
