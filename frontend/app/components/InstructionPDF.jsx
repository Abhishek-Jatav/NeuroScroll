"use client";

export default function InstructionPDF() {
  return (
    <div
      id="pdf-container"
      className="h-[75vh] overflow-y-auto bg-gray-200 rounded-xl p-6 shadow-inner">
      {/* PAGE 1 */}
      <div className="pdf-page">
        <h1 className="pdf-title">Reading & Gesture Test – Page 1</h1>

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
          gestures. Temporal analysis helps distinguish deliberate actions from
          natural reflexes.
        </p>

        <p className="pdf-text">
          <strong>
            Perform a long blink (hold for 1 second) to scroll up.
          </strong>
        </p>
      </div>

      {/* PAGE 2 */}
      <div className="pdf-page">
        <h1 className="pdf-title">Reading & Gesture Test – Page 2</h1>

        <p className="pdf-text">
          Accessibility-focused systems aim to reduce physical dependency on
          traditional input devices. Blink-driven navigation provides a seamless
          way to browse long documents hands-free.
        </p>

        <p className="pdf-text">
          <strong>Blink once to scroll down.</strong>
        </p>

        <p className="pdf-text">
          Reliable gesture detection depends on stable lighting and accurate eye
          landmark tracking. Consistent head positioning improves system
          responsiveness and accuracy.
        </p>

        <p className="pdf-text">
          <strong>
            Perform a long blink (hold for 1 second) to scroll up.
          </strong>
        </p>
      </div>

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
