import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JustBlink | Abhishek Jatav",
  description:
    "A personal project by Abhishek Jatav, showcasing a collection of my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-[#0c0f14] via-[#0f172a] to-[#020617] text-white antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#111827",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
