"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Shield, Sun, Moon, Sunrise, Sunset } from "lucide-react";

const FILTER_PRESETS = {
    none: {
        name: "No Filter",
        icon: Sun,
        color: "rgb(255, 220, 150)",
        opacity: 0,
        darkOverlay: 0,
        description: "No blue light filtering",
    },
    low: {
        name: "Low Protection",
        icon: Sunrise,
        color: "rgb(255, 210, 140)",
        opacity: 0.06,
        darkOverlay: 0.03,
        description: "Minimal blue light reduction for daytime use",
    },
    medium: {
        name: "Medium Protection",
        icon: Shield,
        color: "rgb(255, 195, 110)",
        opacity: 0.12,
        darkOverlay: 0.06,
        description: "Balanced protection for extended screen time",
    },
    high: {
        name: "High Protection",
        icon: Sunset,
        color: "rgb(255, 175, 85)",
        opacity: 0.18,
        darkOverlay: 0.09,
        description: "Strong filtering for evening use",
    },
    night: {
        name: "Night Mode",
        icon: Moon,
        color: "rgb(255, 160, 70)",
        opacity: 0.25,
        darkOverlay: 0.12,
        description: "Maximum protection for nighttime viewing",
    },
};

export function FilterComponent() {
    const [activeFilter, setActiveFilter] = useState("none");

    const currentFilter = FILTER_PRESETS[activeFilter];

    return (
        <>
            {/* Dark Overlay for Dimming */}
            <div
                className="fixed inset-0 pointer-events-none z-[9997] transition-all duration-500 bg-black"
                style={{
                    opacity: currentFilter.darkOverlay,
                }}
            />

            {/* Warm Filter Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-[9998] transition-all duration-500 mix-blend-screen"
                style={{
                    backgroundColor: currentFilter.color,
                    opacity: currentFilter.opacity,
                }}
            />

            {/* Filter Control Card */}
            <Card className="bg-black/40 mb-6 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-400" />
                        Blue Light Filter
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {Object.entries(FILTER_PRESETS).map(([key, preset]) => {
                            const Icon = preset.icon;
                            const isActive = activeFilter === key;

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveFilter(key)}
                                    className={`
                    relative p-4 rounded-lg border transition-all duration-300
                    ${isActive
                                            ? "bg-blue-500/30 border-blue-400 shadow-lg shadow-blue-500/20"
                                            : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <Icon
                                            className={`w-6 h-6 ${isActive ? "text-blue-400" : "text-gray-400"
                                                }`}
                                        />
                                        <span
                                            className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-300"
                                                }`}
                                        >
                                            {preset.name}
                                        </span>
                                        {isActive && (
                                            <div className="absolute top-2 right-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Filter Description */}
                    <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-300">
                            <span className="font-semibold text-white">Active: </span>
                            {currentFilter.description}
                        </p>
                        {activeFilter !== "none" && (
                            <p className="text-xs text-gray-400 mt-1">
                                Filter intensity: {Math.round(currentFilter.opacity * 100)}%
                            </p>
                        )}
                    </div>

                    {/* Info Box */}
                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <p className="text-xs text-blue-300">
                            💡 <span className="font-semibold">Tip:</span> Blue light filters
                            reduce eye strain by blocking harmful blue light emissions. Use
                            higher protection levels in the evening to improve sleep quality.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
