// lib/websocket.ts

import { BACKEND_URL } from "./env";

export function createGestureSocket() {
  const wsProtocol = BACKEND_URL.startsWith("https") ? "wss" : "ws";

  const baseUrl = BACKEND_URL.replace(/^https?:\/\//, "");

  return new WebSocket(`${wsProtocol}://${baseUrl}/ws/gesture`);
}
