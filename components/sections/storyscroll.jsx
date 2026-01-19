import React from 'react'
import { Skiper19 } from '../ui/skiper-ui/skiper19'
import { SpotlightNew } from '../ui/Spotlight'
import FlipBook from '../flipbook'
import { DragCards } from '../ui/dragCards'

const StoryScroll = () => {
    return (
        <div className='min-h-screen'>
            <Skiper19 />
            <div className="pointer-events-none absolute inset-0 top-500 h-screen z-20">
                <img
                    src="/images/eye.jpeg"
                    alt="Digital Eye"
                    className="h-full w-full object-cover mix-blend-screen"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className='absolute bg-transparent top-380 left-0 z-99'><FlipBook /></div>
            <div className='absolute bg-transparent left-0 z-50 h-screen w-1/2' style={{ top: '2600px' }}><DragCards /></div>


            {/* <SpotlightNew /> */}
        </div>
    )
}

export default StoryScroll
