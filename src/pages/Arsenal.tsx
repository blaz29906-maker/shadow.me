import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from '../components/ui/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const UGC_REELS = [
    { id: 1, title: 'High-ROAS Campaign 1', category: 'Performance Ad', video: '/videos/ugc/1.mp4' },
    { id: 2, title: 'High-ROAS Campaign 2', category: 'Performance Ad', video: '/videos/ugc/2.mp4' },
    { id: 3, title: 'High-ROAS Campaign 3', category: 'Performance Ad', video: '/videos/ugc/3.mp4' },
    { id: 4, title: 'High-ROAS Campaign 4', category: 'Performance Ad', video: '/videos/ugc/4.mp4' },
    { id: 5, title: 'High-ROAS Campaign 5', category: 'Performance Ad', video: '/videos/ugc/5.mp4' },
    { id: 6, title: 'High-ROAS Campaign 6', category: 'Performance Ad', video: '/videos/ugc/6.mp4' },
    { id: 7, title: 'High-ROAS Campaign 7', category: 'Performance Ad', video: '/videos/ugc/7.mp4' },
    { id: 8, title: 'High-ROAS Campaign 8', category: 'Performance Ad', video: '/videos/ugc/8.mp4' }
];

export default function Arsenal() {
    // Simple 3D Tilt calculation
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000,
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    return (
        <div className="min-h-screen w-full relative bg-black flex flex-col items-center justify-center py-24 lg:py-32 px-6 md:px-12">

            {/* Header Section */}
            <div className="w-full max-w-[1600px] mb-16 mt-12">
                <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4 flex items-center gap-4">
                    <div className="w-2 h-8 bg-emerald-glow" />
                    High-ROAS Advertising
                </h2>
                <p className="text-xl text-white/80 font-body max-w-2xl">
                    AI-engineered talking heads and premium product visualization. Designed to stop the scroll and force the sale.
                </p>
            </div>

            {/* Perfect Center Grid for 8 Vertical items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1600px]">
                {UGC_REELS.map((card) => (
                    <div
                        key={card.id}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative group cursor-pointer w-full"
                        style={{
                            aspectRatio: '9/16'
                        }}
                    >
                        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-emerald-glow/50 transition-colors shadow-2xl bg-studio-dark">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                            <LazyVideo
                                src={card.video}
                                className="transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                            />

                            {/* Overlay Glass Panel */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                                <p className="text-emerald-glow text-xs font-heading tracking-widest uppercase mb-1">{card.category}</p>
                                <h3 className="text-white text-xl font-heading leading-tight">{card.title}</h3>
                            </div>
                        </div>

                        {/* Soft Shadow Base */}
                        <div className="absolute -bottom-10 left-[10%] w-[80%] h-4 bg-emerald-glow/30 blur-2xl rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </div>

        </div>
    );
}
