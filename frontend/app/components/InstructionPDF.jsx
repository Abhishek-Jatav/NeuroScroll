"use client";

export default function InstructionPDF() {
  return (
    <div
      id="pdf-container"
      className="h-[75vh] overflow-y-auto bg-gray-200 rounded-xl p-6 shadow-inner">
      {/* PAGE 1 */}
      <div className="pdf-page">
        <h1 className="pdf-title">NeuroScroll™ Vision Control System</h1>

        <p className="pdf-text">
          NeuroScroll™ is an AI-powered hands-free document navigation system
          designed for accessibility, research, and advanced human-computer
          interaction environments. The system leverages real-time facial
          landmark detection and blink pattern analysis to enable seamless
          scrolling and interaction without physical input devices.
        </p>

        <h2 className="pdf-heading">1. System Overview</h2>
        <p className="pdf-text">
          The system uses MediaPipe FaceMesh to extract 468 facial landmarks.
          Eye Aspect Ratio (EAR) is calculated continuously to detect blink
          intensity, duration, and timing patterns.
        </p>

        <p className="pdf-text">
          Detected gestures are transmitted to a backend AI engine through
          WebSocket communication. The backend processes the eye coordinates,
          applies threshold logic and state machine transitions, and sends
          gesture commands back to the frontend interface.
        </p>

        <h2 className="pdf-heading">2. Core Features</h2>
        <ul className="pdf-list">
          <li>Real-time FaceMesh tracking</li>
          <li>High precision blink detection</li>
          <li>WebSocket-based low latency communication</li>
          <li>Smooth document scroll interaction</li>
          <li>Automatic calibration system</li>
        </ul>
      </div>

      {/* PAGE 2 */}
      <div className="pdf-page">
        <h2 className="pdf-heading">3. Gesture Controls</h2>

        <ul className="pdf-list">
          <li>
            <strong>Single Blink:</strong> Scroll Down
          </li>
          <li>
            <strong>Long Blink (≥1 second):</strong> Scroll Up
          </li>
          <li>
            <strong>Double Blink:</strong> Reserved for Click Actions
          </li>
        </ul>

        <p className="pdf-text">
          Gesture detection is based on temporal thresholds and EAR variance
          analysis. The system distinguishes between natural involuntary blinks
          and intentional interaction gestures.
        </p>

        <h2 className="pdf-heading">4. Calibration Process</h2>
        <p className="pdf-text">
          During the first three seconds after system initialization, the
          software measures your average open-eye EAR. This baseline is used to
          dynamically adjust blink sensitivity for different users.
        </p>

        <p className="pdf-text">For optimal performance:</p>

        <ul className="pdf-list">
          <li>Maintain consistent lighting</li>
          <li>Keep your face centered in the camera frame</li>
          <li>Avoid rapid head movements</li>
          <li>Maintain a neutral expression during calibration</li>
        </ul>

        <h2 className="pdf-heading">5. System Architecture</h2>
        <p className="pdf-text">
          The system is composed of three primary layers:
        </p>

        <ul className="pdf-list">
          <li>Frontend Vision Interface (Next.js + Canvas rendering)</li>
          <li>AI Processing Backend (WebSocket server)</li>
          <li>Gesture State Machine Engine</li>
        </ul>
      </div>

      {/* PAGE 3 */}
      <div className="pdf-page">
        <h2 className="pdf-heading">6. Performance Optimization</h2>
        <p className="pdf-text">
          NeuroScroll™ operates at real-time frame processing speeds.
          Performance depends on camera resolution, lighting conditions, and
          device hardware acceleration capabilities.
        </p>

        <p className="pdf-text">Recommended minimum specifications:</p>

        <ul className="pdf-list">
          <li>720p camera resolution</li>
          <li>8GB RAM</li>
          <li>Modern browser with WebGL support</li>
          <li>Stable internet connection (for backend processing)</li>
        </ul>

        <h2 className="pdf-heading">7. Accessibility Applications</h2>
        <p className="pdf-text">
          This system is designed to assist individuals with limited mobility,
          enabling document reading and browsing without keyboard or mouse.
        </p>

        <p className="pdf-text">It can also be integrated into:</p>

        <ul className="pdf-list">
          <li>Medical environments</li>
          <li>Research laboratories</li>
          <li>Touchless public kiosks</li>
          <li>VR/AR interaction systems</li>
        </ul>

        <h2 className="pdf-heading">8. Legal & Copyright</h2>
        <p className="pdf-text">
          © 2026 NeuroScroll Vision Systems. All rights reserved. Unauthorized
          duplication or distribution is prohibited.
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

        .pdf-heading {
          font-size: 20px;
          font-weight: 600;
          margin-top: 30px;
          margin-bottom: 12px;
        }

        .pdf-text {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .pdf-list {
          font-size: 16px;
          line-height: 1.8;
          padding-left: 20px;
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
