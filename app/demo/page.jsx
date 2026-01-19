"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { VideoStreamComponent } from "../../components/demo/VideoStreamComponent";
import { MetricsComponent } from "../../components/demo/MetricsComponent";
import { ScreenTimeComponent } from "../../components/demo/ScreenTimeComponent";
import { FilterComponent } from "../../components/demo/FilterComponent";
import ErrorBoundary from "../../components/ErrorBoundary";

// Socket connection
const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"],
  timeout: 20000,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

function DemoContent() {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState("");

  useEffect(() => {
    // Connection handlers
    socket.on("connect", () => {
      console.log("Connected to VisionGuard AI backend");
      setIsConnected(true);
      setConnectionError("");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from backend");
      setIsConnected(false);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
      setConnectionError(
        "Backend server not responding. Please ensure the backend is running on port 5000."
      );
      setIsConnected(false);
    });

    socket.on("error", (error) => {
      console.error("Socket error:", error);
      setConnectionError(
        error.message || "An error occurred with the backend connection."
      );
    });

    // Cleanup
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.off("error");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-poppins font-bold mb-4 bg-gradient-to-r from-black to-black via-amber-200 bg-clip-text text-transparent">
            EyeKon AI Demo
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real-time eye tracking and fatigue monitoring using computer vision
            and AI
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${isConnected ? "bg-green-400 animate-pulse" : "bg-red-400"
                }`}
            />
            <span className="text-sm text-gray-300">
              {isConnected
                ? "Connected to Backend"
                : "Connecting to Backend..."}
            </span>
          </div>

          {connectionError && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm max-w-md mx-auto">
              ⚠️ {connectionError}
            </div>
          )}
        </div>

        {/* Connection Instructions */}
        {!isConnected && (
          <Card className="mb-6 bg-yellow-500/20 border-yellow-500/30">
            <CardContent className="p-4">
              <h3 className="font-semibold text-yellow-300 mb-2">
                Backend Setup Required
              </h3>
              <p className="text-yellow-200 text-sm mb-3">
                To use VisionGuard AI, please ensure the backend server is
                running:
              </p>
              <div className="bg-black/40 p-3 rounded text-yellow-100 text-xs font-mono">
                <p>1. Open terminal in the backend folder</p>
                <p>
                  2. Run:{" "}
                  <span className="text-green-400">
                    python start_backend.py
                  </span>
                </p>
                <p>
                  3. Or double-click:{" "}
                  <span className="text-green-400">start_visionguard.bat</span>
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Video Stream */}
          <VideoStreamComponent socket={socket} isConnected={isConnected} />

          {/* Real-time Metrics */}
          <MetricsComponent socket={socket} />
        </div>

        {/* Blue Light Filter */}
        <FilterComponent />

        {/* Screen Time Tracking */}
        <ScreenTimeComponent socket={socket} />

        {/* Instructions */}
        <Card className="mt-6 bg-black/40 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              How to Use VisionGuard AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">
                  1. Start Monitoring
                </h3>
                <p>
                  Click "Start Monitoring" to begin real-time eye tracking and
                  fatigue detection.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Ensure your webcam is connected and functioning.
                </p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">
                  2. Monitor Your Eyes
                </h3>
                <p>
                  Keep your face visible in the camera frame. The AI will track
                  your blinks and focus levels.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Position yourself 18-24 inches from the screen.
                </p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">
                  3. Take Breaks
                </h3>
                <p>
                  When fatigue score exceeds 65%, follow the 20-20-20 rule for
                  eye health.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Look at something 20 feet away for 20 seconds every 20
                  minutes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Info */}
        <Card className="mt-6 bg-black/40 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Technical Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-3">
                  Backend Technologies
                </h3>
                <ul className="space-y-2">
                  <li>
                    • <span className="text-blue-400">OpenCV</span> - Computer
                    vision processing
                  </li>
                  <li>
                    • <span className="text-green-400">MediaPipe</span> - Face
                    and eye landmark detection
                  </li>
                  <li>
                    • <span className="text-yellow-400">Flask-SocketIO</span> -
                    Real-time communication
                  </li>
                  <li>
                    • <span className="text-purple-400">Python</span> - Core
                    backend logic
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">
                  Frontend Technologies
                </h3>
                <ul className="space-y-2">
                  <li>
                    • <span className="text-blue-400">Next.js 16</span> - React
                    framework
                  </li>
                  <li>
                    • <span className="text-green-400">Socket.IO Client</span> -
                    Real-time updates
                  </li>
                  <li>
                    • <span className="text-yellow-400">Framer Motion</span> -
                    Smooth animations
                  </li>
                  <li>
                    • <span className="text-purple-400">Tailwind CSS</span> -
                    Modern styling
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function DemoPage() {
  return (
    <ErrorBoundary>
      <DemoContent />
    </ErrorBoundary>
  );
}
