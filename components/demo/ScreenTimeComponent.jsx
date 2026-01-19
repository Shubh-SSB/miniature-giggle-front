// components/demo/ScreenTimeComponent.jsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Monitor, Clock, Cpu } from "lucide-react";

export function ScreenTimeComponent({ socket }) {
    const [windowInfo, setWindowInfo] = useState({
        title: "",
        process: "",
        usage_time: 0
    });

    useEffect(() => {
        if (!socket) return;

        const handleWindowInfo = (info) => {
            setWindowInfo(info);
        };

        socket.on('window_info', handleWindowInfo);

        return () => {
            socket.off('window_info', handleWindowInfo);
        };
    }, [socket]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    };

    return (
        <Card className="bg-black/40 border-gray-700">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                    <Monitor className="w-5 h-5" />
                    Active Application Tracking
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-indigo-500/20 rounded-lg border border-indigo-500/20">
                        <div className="flex items-center justify-center mb-2">
                            <Monitor className="w-5 h-5 text-indigo-400" />
                        </div>
                        <p className="text-sm text-indigo-300">Current Application</p>
                        <p className="text-lg font-semibold text-white truncate" title={windowInfo.title}>
                            {windowInfo.title || 'No application detected'}
                        </p>
                    </div>

                    <div className="text-center p-4 bg-cyan-500/20 rounded-lg border border-cyan-500/20">
                        <div className="flex items-center justify-center mb-2">
                            <Cpu className="w-5 h-5 text-cyan-400" />
                        </div>
                        <p className="text-sm text-cyan-300">Process</p>
                        <p className="text-lg font-semibold text-white truncate" title={windowInfo.process}>
                            {windowInfo.process || 'N/A'}
                        </p>
                    </div>

                    <div className="text-center p-4 bg-pink-500/20 rounded-lg border border-pink-500/20">
                        <div className="flex items-center justify-center mb-2">
                            <Clock className="w-5 h-5 text-pink-400" />
                        </div>
                        <p className="text-sm text-pink-300">Session Time</p>
                        <p className="text-lg font-semibold text-white">
                            {windowInfo.usage_time ? formatTime(windowInfo.usage_time) : '0s'}
                        </p>
                    </div>
                </div>

                {windowInfo.usage_time > 1800 && ( // 30 minutes
                    <div className="mt-4 p-3 bg-orange-500/20 rounded-lg border border-orange-500/30">
                        <p className="text-sm text-orange-300 text-center">
                            ⚠️ You've been using this application for over 30 minutes. Consider taking a break!
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}