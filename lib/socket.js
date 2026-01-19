// lib/socket.js - Socket connection utility
"use client";

import io from "socket.io-client";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

class SocketManager {
  constructor() {
    this.socket = null;
    this.isConnected = false;
    this.callbacks = new Map();
  }

  connect() {
    if (this.socket?.connected) {
      return this.socket;
    }

    this.socket = io(BACKEND_URL, {
      transports: ["websocket", "polling"],
      autoConnect: true,
    });

    this.socket.on("connect", () => {
      this.isConnected = true;
      console.log("Connected to VisionGuard backend");
    });

    this.socket.on("disconnect", () => {
      this.isConnected = false;
      console.log("Disconnected from VisionGuard backend");
    });

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
    }
  }

  emit(event, data) {
    if (this.socket?.connected) {
      this.socket.emit(event, data);
    }
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event, callback) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }

  startVideoStream() {
    this.emit("start_video");
  }

  getConnectionStatus() {
    return this.isConnected;
  }
}

// Singleton instance
const socketManager = new SocketManager();
export default socketManager;
