// components/demo/VideoStreamComponent.jsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Eye, PlayCircle, StopCircle } from "lucide-react";

export function VideoStreamComponent({ socket, isConnected }) {
    const [videoFrame, setVideoFrame] = useState("");
    const [isVideoActive, setIsVideoActive] = useState(false);

    useEffect(() => {
        if (!socket) return;

        const handleVideoFrame = (frameData) => {
            setVideoFrame(`data:image/jpeg;base64,${frameData}`);
        };

        const handleDisconnect = () => {
            setIsVideoActive(false);
            setVideoFrame("");
        };

        socket.on('video_frame', handleVideoFrame);
        socket.on('disconnect', handleDisconnect);

        return () => {
            socket.off('video_frame', handleVideoFrame);
            socket.off('disconnect', handleDisconnect);
        };
    }, [socket]);

    const startVideoStream = () => {
        if (socket && isConnected) {
            socket.emit('start_video');
            setIsVideoActive(true);
        }
    };

    const stopVideoStream = () => {
        setIsVideoActive(false);
        setVideoFrame("");
    };

    return (
        <Card className="bg-black/40 border-gray-700">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                    <Eye className="w-5 h-5" />
                    Live Video Feed
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                    {videoFrame ? (
                        <img
                            src={videoFrame}
                            alt="Video stream"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <div className="text-center">
                                <Eye className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                <p>No video stream active</p>
                                <p className="text-sm mt-2">Make sure your webcam is connected</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-2">
                    {!isVideoActive ? (
                        <Button
                            onClick={startVideoStream}
                            disabled={!isConnected}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600"
                        >
                            <PlayCircle className="w-4 h-4" />
                            Start Monitoring
                        </Button>
                    ) : (
                        <Button
                            onClick={stopVideoStream}
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                        >
                            <StopCircle className="w-4 h-4" />
                            Stop Monitoring
                        </Button>
                    )}
                    <div className="text-sm text-gray-400 flex items-center">
                        {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}