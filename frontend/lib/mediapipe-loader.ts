// lib/mediapipe-loader.ts

let isLoaded = false;

export async function loadMediaPipeScripts() {
  if (isLoaded) return;
  if (typeof window === "undefined") return;

  // If already available, skip
  if ((window as any).FaceMesh) {
    isLoaded = true;
    return;
  }

  const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
      // Prevent duplicate script injection
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.crossOrigin = "anonymous";
      script.onload = () => resolve();
      script.onerror = reject;
      document.body.appendChild(script);
    });

  // Order matters
  await loadScript(
    "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
  );

  await loadScript(
    "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
  );

  await loadScript(
    "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js",
  );

  isLoaded = true;
}
