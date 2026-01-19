// components/demo/MetricsComponent.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Brain, Activity, AlertTriangle } from "lucide-react";

export function MetricsComponent({ socket }) {
    const [blinkStats, setBlinkStats] = useState({
        blinks: 0,
        blink_rate: 0,
        focus_score: 0,
        efs: 0
    });

    useEffect(() => {
        if (!socket) return;

        const handleBlinkStats = (stats) => {
            setBlinkStats(stats);
        };

        socket.on('blink_stats', handleBlinkStats);

        return () => {
            socket.off('blink_stats', handleBlinkStats);
        };
    }, [socket]);

    const getRiskLevel = (efs) => {
        if (efs < 30) return { level: "Low", color: "bg-green-500", textColor: "text-green-700" };
        if (efs < 60) return { level: "Moderate", color: "bg-yellow-500", textColor: "text-yellow-700" };
        return { level: "High", color: "bg-red-500", textColor: "text-red-700" };
    };

    const risk = getRiskLevel(blinkStats.efs);

    return (
        <div className="space-y-4">
            {/* Eye Fatigue Score */}
            <Card className="bg-black/40 border-gray-700">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                        <Brain className="w-5 h-5" />
                        Eye Fatigue Score
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="relative w-32 h-32 mx-auto mb-4"
                            >
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="60"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        className="text-gray-700"
                                    />
                                    <motion.circle
                                        cx="64"
                                        cy="64"
                                        r="60"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeLinecap="round"
                                        className="text-purple-400"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: blinkStats.efs / 100 }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            strokeDasharray: 377,
                                            strokeDashoffset: 377 * (1 - blinkStats.efs / 100),
                                        }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-bold">{blinkStats.efs.toFixed(1)}</span>
                                </div>
                            </motion.div>
                            <Badge className={`${risk.color} text-white`}>
                                {risk.level} Risk
                            </Badge>
                        </div>

                        {blinkStats.efs > 65 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-3 bg-red-500/20 rounded-lg border border-red-500/30"
                            >
                                <AlertTriangle className="w-5 h-5 text-red-400" />
                                <div className="text-sm text-red-300">
                                    <p className="font-semibold">Take a break!</p>
                                    <p>Look at something 20 feet away for 20 seconds (20-20-20 rule)</p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Detailed Metrics */}
            <Card className="bg-black/40 border-gray-700">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                        <Activity className="w-5 h-5" />
                        Live Metrics
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            className="text-center p-3 bg-blue-500/20 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="text-sm text-blue-300">Total Blinks</p>
                            <p className="text-2xl font-bold text-blue-400">{blinkStats.blinks}</p>
                        </motion.div>
                        <motion.div
                            className="text-center p-3 bg-green-500/20 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="text-sm text-green-300">Blink Rate</p>
                            <p className="text-2xl font-bold text-green-400">{blinkStats.blink_rate.toFixed(1)}</p>
                            <p className="text-xs text-green-300">blinks/min</p>
                        </motion.div>
                        <motion.div
                            className="text-center p-3 bg-blue-400/20 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="text-sm text-white">Focus Score</p>
                            <p className="text-2xl font-bold text-white">{blinkStats.focus_score.toFixed(1)}</p>
                            <p className="text-xs text-white">out of 100</p>
                        </motion.div>
                        <motion.div
                            className="text-center p-3 bg-purple-500/20 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="text-sm text-purple-300">Fatigue Level</p>
                            <p className="text-2xl font-bold text-purple-400">{blinkStats.efs.toFixed(1)}%</p>
                            <p className="text-xs text-purple-300">current level</p>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}