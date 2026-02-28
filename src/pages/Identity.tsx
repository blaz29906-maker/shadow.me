import React from 'react';
import LazyVideo from '../components/ui/LazyVideo';

const CAROUSEL_ITEMS = [
    { video: '/videos/identity/_model_googleveo31_4k_202601270501.mp4', width: 600, height: 337 },
    { video: '/videos/identity/3.mp4', width: 600, height: 337 },
    { video: '/videos/identity/4.mp4', width: 600, height: 337 },
    { video: '/videos/identity/5.mp4', width: 600, height: 337 },
    { video: '/videos/identity/6.mp4', width: 600, height: 337 },
    { video: '/videos/identity/9.mp4', width: 600, height: 337 },
    { video: '/videos/identity/44.mp4', width: 600, height: 337 },
    { video: '/videos/identity/55.mp4', width: 600, height: 337 },
    { video: '/videos/identity/333.mp4', width: 600, height: 337 },
    { video: '/videos/identity/444.mp4', width: 600, height: 337 }
];

export default function Identity() {
    return (
        <div className="w-full relative py-24 lg:py-32 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
                <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4 flex items-center gap-4 relative z-10">
                    <div className="w-2 h-8 bg-emerald-glow" />
                    Cinematic World-Building
                </h2>
                <p className="text-xl text-white/60 font-body relative z-10 max-w-3xl">High-fidelity conceptual trailers and uncompromising narrative tension. Engineered frame by frame.</p>
            </div>



            {/* Cinematic Strip Section */}
            <div className="w-full flex flex-col gap-6 overflow-hidden py-12 md:py-16 mt-8">
                <div className="flex gap-4 sm:gap-6 px-4 animate-marquee hover:[animation-play-state:paused] w-max">
                    {/* Group 1 */}
                    {CAROUSEL_ITEMS.map((item, idx) => (
                        <div key={`c1-g1-${idx}`} className="w-[400px] sm:w-[500px] lg:w-[600px] xl:w-[800px] shrink-0 relative aspect-video overflow-hidden rounded group bg-studio-dark cursor-pointer shadow-lg border border-white/5">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                            <LazyVideo
                                src={item.video}
                                className="transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                            />
                        </div>
                    ))}
                    {/* Group 2 (Duplicate for loop) */}
                    {CAROUSEL_ITEMS.map((item, idx) => (
                        <div key={`c1-g2-${idx}`} className="w-[400px] sm:w-[500px] lg:w-[600px] xl:w-[800px] shrink-0 relative aspect-video overflow-hidden rounded group bg-studio-dark cursor-pointer shadow-lg border border-white/5">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                            <LazyVideo
                                src={item.video}
                                className="transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
