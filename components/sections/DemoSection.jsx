"use client";

import React from 'react'
import { EyeIndicator } from '../ui/eye-indicator'
import { BrainCircuit } from 'lucide-react'
import Image from 'next/image'
import RippleCursor from '../ui/TrailCursor'

const DemoSection = () => {
    return (
        <div className="min-h-screen font-poppins rounded-2xl mx-2 bg-gradient-to-br from-black via-amber-200 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-5xl md:text-6xl font-semibold text-white mb-6`}>
                        See the Difference
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Experience EYEKON's powerful features designed to protect and enhance your vision
                    </p>
                </div>

                {/* Demo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {/* Card 1 */}
                    <div className="group relative bg-black/80 backdrop-blur-xl rounded-xl p-8 border border-amber-200/20 hover:border-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 to-amber-200/0 group-hover:from-amber-200/10 group-hover:to-amber-200/5 rounded-xl transition-all duration-300"></div>
                        <div className="relative flex items-center flex-col gap-2">
                            <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                            <p className="text-gray-400 text-center">Continuously tracks your screen time and provides instant feedback to reduce eye strain</p>
                            <EyeIndicator />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-black/80 backdrop-blur-xl rounded-xl p-8 border border-amber-200/20 hover:border-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 to-amber-200/0 group-hover:from-amber-200/10 group-hover:to-amber-200/5 rounded-xl transition-all duration-300"></div>
                        <div className="relative flex flex-col items-center ">
                            <h3 className="text-xl font-semibold text-white mb-3">Smart Protection</h3>
                            <p className="text-gray-400">Intelligent filters and adjustments automatically optimize your screen for comfort</p>
                            <Image src="/images/Shield.gif" alt="Demo" width={78} height={78} className='mx-auto' />

                            {/* <LiquidLens /> */}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-black/80 backdrop-blur-xl rounded-xl p-8 border border-amber-200/20 hover:border-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 to-amber-200/0 group-hover:from-amber-200/10 group-hover:to-amber-200/5 rounded-xl transition-all duration-300"></div>
                        <div className="relative flex flex-col items-center gap-2">
                            <h3 className="text-xl font-semibold text-white mb-3">Detailed Analytics</h3>
                            <p className="text-gray-400">Get comprehensive insights into your eye health patterns and trends</p>
                            <BrainCircuit height={40} width={40} className='text-center mt-8' />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center flex justify-center">
                    {/* <SubscribeButton /> */}
                    <button className='flex flex-row items-center gap-1  text-black font-semibold py-4 px-8 rounded-lg'>
                        Want To Have A <a href="/demo" className='hover:text-white font-bold hover:scale-105 transition-all mx-2'>Demo</a>
                        <div className='transition-transform duration-300 -rotate-24 -ml-24 mt-12  hover:-rotate-48'>
                            <Image src="/images/scribble.png" alt="Demo" width={64} height={64} className='mx-auto pointer-events-auto' />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DemoSection
