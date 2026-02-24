"use client";

import { useEffect, useRef, useState } from "react";

export default function InstructionPDF() {
  const containerRef = useRef(null);
  const [pages, setPages] = useState([1, 2]); // start with 2 pages

  // Generate new page
  const addPage = () => {
    setPages((prev) => [...prev, prev.length + 1]);
  };

  // Infinite scroll logic
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;

      // When user reaches near bottom → add new page
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        addPage();
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="pdf-container"
      className="h-[75vh] overflow-y-auto bg-gray-200 rounded-xl p-6 shadow-inner">
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

          <p className="pdf-text">
            <strong>Blink once to scroll down.</strong>
          </p>

          <p className="pdf-text">
            Eye tracking technology enables precise detection of intentional
            gestures. Temporal analysis helps distinguish deliberate actions
            from natural reflexes.
          </p>

          <p className="pdf-text">
            <strong>
              Perform a long blink (hold for 1 second) to scroll up.
            </strong>
          </p>

          <p className="pdf-text">
            Accessibility-focused systems aim to reduce physical dependency on
            traditional input devices. Blink-driven navigation provides a
            seamless way to browse long documents hands-free.
          </p>
        </div>
      ))}

      {/* Styling */}
      <style jsx>{`
        .pdf-page {
          background: white;
          max-width: 794px;
          width: 100%;
          min-height: 1000px;
          margin: 0 auto 50px auto;
          padding: 70px;
          border-radius: 10px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          color: black;
          font-family: serif;
        }

        .pdf-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .pdf-text {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .pdf-page {
            padding: 30px;
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
