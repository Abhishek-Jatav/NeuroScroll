"use client";

import { useEffect, useRef, useState } from "react";

export default function InstructionPDF() {
  const containerRef = useRef(null); // ✅ FIXED (no TypeScript type)
  const [pages, setPages] = useState([1, 2]);

  const addPage = () => {
    setPages((prev) => [...prev, prev.length + 1]);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollTop + clientHeight >= scrollHeight - 200) {
        addPage();
      }
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="pdf-container"
      className="h-[75vh] overflow-y-auto rounded-2xl p-6 bg-gradient-to-b from-slate-800 to-slate-900 shadow-inner">
      {pages.map((pageNumber) => (
        <div key={pageNumber} className="pdf-page">
          <h1 className="pdf-title">
            Reading & Gesture Test – Page {pageNumber}
          </h1>

          <p className="pdf-text">
            Modern interaction systems are evolving toward more natural and
            intuitive control methods. Vision-based interfaces allow users to
            interact without touching a keyboard or mouse.
          </p>

          <p className="pdf-highlight">Blink once to scroll down.</p>

          <p className="pdf-text">
            Eye tracking technology enables precise detection of intentional
            gestures. Temporal analysis helps distinguish deliberate actions
            from natural reflexes.
          </p>

          <p className="pdf-highlight">
            Perform a long blink (hold for 1 second) to scroll up.
          </p>

          <p className="pdf-text">
            Accessibility-focused systems aim to reduce physical dependency on
            traditional input devices. Blink-driven navigation provides a
            seamless way to browse long documents hands-free.
          </p>
        </div>
      ))}

      <style jsx>{`
        .pdf-page {
          background: white;
          max-width: 794px;
          width: 100%;
          min-height: 1000px;
          margin: 0 auto 60px auto;
          padding: 80px;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          color: black;
          font-family: Georgia, serif;
          transition: transform 0.3s ease;
        }

        .pdf-page:hover {
          transform: scale(1.01);
        }

        .pdf-title {
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 40px;
        }

        .pdf-text {
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 18px;
          color: #333;
        }

        .pdf-highlight {
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 18px;
          font-weight: 600;
          background: linear-gradient(90deg, #111, #444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .pdf-page {
            padding: 40px;
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
