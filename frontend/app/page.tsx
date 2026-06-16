import ManualBackendCheck from "@/hooks/manualBackendCheck/ManualBackendCheck";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-5xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              👁️ JustBlink
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
              AI Vision-Based Document Control System
            </p>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              Control documents using your eyes. JustBlink uses AI-powered blink
              detection, MediaPipe FaceMesh, WebSockets, and FastAPI to
              transform eye gestures into real-time document navigation
              commands.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-white font-semibold text-lg mb-3">
                👁 Eye Gestures
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>Single Blink → Scroll Down</li>
                <li>Long Blink → Scroll Up</li>
                <li>Double Blink → Click Action</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-white font-semibold text-lg mb-3">
                🧠 AI Processing
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>EAR Calculation</li>
                <li>Blink State Machine</li>
                <li>Gesture Classification</li>
                <li>Noise Resistant Detection</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-white font-semibold text-lg mb-3">
                ⚡ Real-Time System
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>MediaPipe FaceMesh</li>
                <li>WebSocket Streaming</li>
                <li>FastAPI Backend</li>
                <li>Low Latency Response</li>
              </ul>
            </div>
          </div>

          {/* Architecture Preview */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 backdrop-blur-md">
            <h2 className="text-white text-xl font-semibold mb-4">
              🏗 System Flow
            </h2>

            <div className="text-center text-gray-300 leading-loose">
              Frontend
              <span className="mx-2 text-cyan-400">→</span>
              MediaPipe
              <span className="mx-2 text-cyan-400">→</span>
              WebSockets
              <span className="mx-2 text-cyan-400">→</span>
              FastAPI
              <span className="mx-2 text-cyan-400">→</span>
              EAR Engine
              <span className="mx-2 text-cyan-400">→</span>
              Gesture Recognition
              <span className="mx-2 text-cyan-400">→</span>
              Document Control
            </div>
          </div>

          {/* Backend Wake Section */}
          <div className="max-w-md mx-auto">
            <div className="bg-[#0f172a]/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10">
              <ManualBackendCheck />
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Backend is hosted on a free server and may take a few moments to
              wake up before starting the AI vision system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
