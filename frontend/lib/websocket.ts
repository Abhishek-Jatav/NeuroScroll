import { BACKEND_URL } from "./env";

export function createGestureSocket() {
  const cleanUrl = BACKEND_URL.replace(/\/$/, "");

  const wsProtocol = cleanUrl.startsWith("https") ? "wss" : "ws";
  const baseUrl = cleanUrl.replace(/^https?:\/\//, "");

  return new WebSocket(`${wsProtocol}://${baseUrl}/ws/gesture`);
}
