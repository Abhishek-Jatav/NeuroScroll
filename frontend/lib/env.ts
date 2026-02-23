// lib/env.ts

const isProduction = process.env.NODE_ENV === "production";

const localUrls = process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL?.split(",") || [];

const prodUrl = process.env.NEXT_PUBLIC_PROD_BACKEND_URL || "";

/**
 * Automatically select backend URL
 * - In development → use first local URL
 * - In production → use production URL
 */
export const BACKEND_URL = isProduction
  ? prodUrl
  : localUrls[0] || "http://localhost:8000";

export const DISABLE_DEVTOOLS = process.env.DISABLE_DEVTOOLS === "1";
