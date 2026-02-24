// lib/env.ts

const isProd = process.env.NODE_ENV === "production";

export const BACKEND_URL = isProd
  ? process.env.NEXT_PUBLIC_PROD_BACKEND_URL!
  : process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL!.split(",")[0];
