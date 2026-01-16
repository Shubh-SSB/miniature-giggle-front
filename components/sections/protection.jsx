"use client";
import React from 'react'
import { EyeIndicator } from "@/components/ui/eye-indicator";
import UnicornScene from "unicornstudio-react";
import LiquidLens from '../LiquidLens';


const Protect = () => {
    return (
        <section className="flex min-h-screen items-center justify-center py-20 bg-black/50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                {/* Story Timeline */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center mb-16">
                        <h2
                            className={`text-4xl md:text-5xl lg:text-6xl font-thin text-white/95 leading-none mb-8 font-poppins`}
                        >
                            Why Your Eyes Need
                            <span className="text-amber-200 font-playfair"> Protection?</span>
                        </h2>
                    </div>
                    <div className="relative w-screen h-screen bg-black flex items-center justify-center">
                        {/* <img src="/images/EYE.png" alt='EYE' className="absolute max-w-xl" /> */}
                        <LiquidLens />
                    </div>

                    {/* <EyeIndicator size="large" /> */}
                    {/* <UnicornScene projectId="lZgZnZr4AXGTm7vYF972" width={400} height={400} className='bg-black' /> */}


                </div>
            </div>
            {/* Story Steps */}
        </section>
    )
}

export default Protect
