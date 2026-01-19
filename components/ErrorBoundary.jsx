// components/ErrorBoundary.jsx
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
        console.error('VisionGuard Error Boundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-6">
                    <Card className="bg-black/40 border-red-500/50 max-w-md w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-400">
                                <AlertTriangle className="w-5 h-5" />
                                Something went wrong
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-300">
                                VisionGuard AI encountered an unexpected error. This might be due to:
                            </p>

                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Camera permission denied</li>
                                <li>• Backend server not running</li>
                                <li>• Network connection issues</li>
                                <li>• Browser compatibility issues</li>
                            </ul>

                            <div className="space-y-2">
                                <Button
                                    onClick={() => window.location.reload()}
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Reload Application
                                </Button>

                                <Button
                                    onClick={() => this.setState({ hasError: false })}
                                    variant="outline"
                                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                                >
                                    Try Again
                                </Button>
                            </div>

                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <details className="text-xs text-gray-500">
                                    <summary className="cursor-pointer">Error Details</summary>
                                    <pre className="mt-2 p-2 bg-gray-900 rounded text-red-400 overflow-auto">
                                        {this.state.error.toString()}
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </details>
                            )}
                        </CardContent>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;