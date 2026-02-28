import React from 'react';
import MagneticButton from '../components/ui/MagneticButton';
import LazyVideo from '../components/ui/LazyVideo';
import VideoCard from '../components/ui/VideoCard';

const TRAFFIC_VIDEOS = [
    { views: '1M', videoSrc: '/videos/1.mp4' },
    { views: '7M', videoSrc: '/videos/2.mp4' },
    { views: '5M', videoSrc: '/videos/3.mp4' },
    { views: '30M', videoSrc: '/videos/30m_replacement.mp4' },
    { views: '5M', videoSrc: '/videos/5.mp4' },
];

const THUMBNAILS = [
    { title: 'The Perfect Package', image: '/images/thumbnails/2.jpeg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/13.jpg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/16.jpg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/20.jpg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/22.jpeg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/23.png' },
    { title: 'The Perfect Package', image: '/images/thumbnails/27.jpg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/36.jpeg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/40.jpg' },
    { title: 'The Perfect Package', image: '/images/thumbnails/26.jpeg' }
];

export default function Work() {
    return (
        <div className="w-full flex flex-col gap-32">

            {/* SECTION 1: Traffic Engine (Viral Short-Form) */}
            <section id="reels" className="w-full overflow-hidden pt-12">
                <div className="mb-12 max-w-[1600px] mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4 flex items-center gap-4">
                        <div className="w-2 h-8 bg-emerald-glow" />
                        High-Retention Viral Editing
                    </h2>
                    <p className="text-xl text-white/60 font-body">Shorts and Reels engineered to hack the algorithm.</p>
                </div>

                {/* Horizontal Marquee Container */}
                <div className="w-full flex overflow-hidden">
                    <div className="flex gap-4 sm:gap-6 px-4 py-8 animate-marquee hover:[animation-play-state:paused] w-max">
                        {/* Group 1 */}
                        {TRAFFIC_VIDEOS.map((video, idx) => (
                            <div key={`g1-${idx}`} className="w-[280px] sm:w-[320px] lg:w-[380px] shrink-0 aspect-[9/16] relative group rounded-xl overflow-hidden bg-studio-dark border border-white/5 shadow-2xl">
                                <VideoCard
                                    videoUrl={video.videoSrc}
                                    aspectRatio="9:16"
                                />
                                {/* Overlay details */}
                                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white/90 text-sm font-heading tracking-widest">
                                    {video.views} VIEWS
                                </div>
                            </div>
                        ))}
                        {/* Group 2 (Duplicate for loop) */}
                        {TRAFFIC_VIDEOS.map((video, idx) => (
                            <div key={`g2-${idx}`} className="w-[280px] sm:w-[320px] lg:w-[380px] shrink-0 aspect-[9/16] relative group rounded-xl overflow-hidden bg-studio-dark border border-white/5 shadow-2xl">
                                <VideoCard
                                    videoUrl={video.videoSrc}
                                    aspectRatio="9:16"
                                />
                                {/* Overlay details */}
                                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white/90 text-sm font-heading tracking-widest">
                                    {video.views} VIEWS
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Click Engine (Thumbnails) */}
            <section id="thumbnails">
                <div className="mb-12 max-w-[1600px] mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4 flex items-center gap-4">
                        <div className="w-2 h-8 bg-emerald-glow" />
                        High CTR thumbnail
                    </h2>
                    <p className="text-xl text-white/60 font-body">MrBeast-tier thumbnails. If they don't click, the video is dead.</p>
                </div>

                <div className="w-full flex flex-col gap-6 overflow-hidden">
                    {/* Strip 1: Left to Right (Reverse Marquee) */}
                    <div className="flex gap-4 sm:gap-6 px-4 animate-marquee-reverse hover:[animation-play-state:paused] w-max">
                        {/* Group 1 */}
                        {THUMBNAILS.slice(0, 5).map((thumb, idx) => (
                            <div key={`s1-g1-${idx}`} className="w-[300px] sm:w-[400px] lg:w-[500px] shrink-0 relative aspect-[16/9] overflow-hidden rounded group bg-studio-dark cursor-pointer shadow-lg border border-white/5">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={thumb.image}
                                    alt={thumb.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                        {/* Group 2 (Duplicate for loop) */}
                        {THUMBNAILS.slice(0, 5).map((thumb, idx) => (
                            <div key={`s1-g2-${idx}`} className="w-[300px] sm:w-[400px] lg:w-[500px] shrink-0 relative aspect-[16/9] overflow-hidden rounded group bg-studio-dark cursor-pointer shadow-lg border border-white/5">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={thumb.image}
                                    alt={thumb.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Strip 2: Right to Left (Standard Marquee) */}
                    <div className="flex gap-4 sm:gap-6 px-4 animate-marquee hover:[animation-play-state:paused] w-max">
                        {/* Group 1 */}
                        {THUMBNAILS.slice(5).map((thumb, idx) => (
                            <div key={`s2-g1-${idx}`} className="w-[300px] sm:w-[400px] lg:w-[500px] shrink-0 relative aspect-[16/9] overflow-hidden rounded group bg-studio-dark cursor-pointer shadow-lg border border-white/5">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={thumb.image}
                                    alt={thumb.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                        {/* Group 2 (Duplicate for loop) */}
                        {THUMBNAILS.slice(5).map((thumb, idx) => (
                            <div key={`s2-g2-${idx}`} className="w-[300px] sm:w-[400px] lg:w-[500px] shrink-0 relative aspect-[16/9] overflow-hidden rounded group bg-studio-dark cursor-pointer shadow-lg border border-white/5">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={thumb.image}
                                    alt={thumb.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Sales Engine (Cinematic Commercials) */}
            <section id="commercials">
                <div className="mb-12 max-w-[1600px] mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4 flex items-center gap-4">
                        <div className="w-2 h-8 bg-emerald-glow" />
                        Cinematic AI Commercials & VSLs
                    </h2>
                    <p className="text-xl text-white/60 font-body">E-commerce ads and Video Sales Letters that print money.</p>
                </div>

                <div className="w-full flex overflow-hidden max-w-[1800px] mx-auto">
                    <div className="flex gap-4 sm:gap-6 px-4 py-8 animate-marquee w-max">
                        {/* Group 1 */}
                        {[
                            '/videos/ads/1ST AD.mp4',
                            '/videos/ads/2.mp4',
                            '/videos/ads/BENNIE AD.mp4',
                            '/videos/ads/Medical explainer.mp4',
                            '/videos/ads/4.mp4',
                            '/videos/ads/5.mp4',
                            '/videos/ads/6.mp4'
                        ].map((src, idx) => (
                            <div key={`c1-${idx}`} className="w-[400px] sm:w-[500px] lg:w-[600px] shrink-0 aspect-[16/9] bg-studio-dark border border-white/5 rounded-xl overflow-hidden relative group cursor-pointer hover:border-emerald-glow/50 transition-colors duration-500 shadow-xl">
                                <LazyVideo
                                    src={src}
                                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Progress Bar Container */}
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-6 pb-4">
                                    <div className="w-full h-1 bg-white/20 rounded overflow-hidden relative">
                                        <div className="absolute top-0 left-0 h-full bg-emerald-glow w-1/3 group-hover:w-full transition-all duration-1000 ease-in-out" />
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Group 2 (Duplicate for infinite loop) */}
                        {[
                            '/videos/ads/1ST AD.mp4',
                            '/videos/ads/2.mp4',
                            '/videos/ads/BENNIE AD.mp4',
                            '/videos/ads/Medical explainer.mp4',
                            '/videos/ads/4.mp4',
                            '/videos/ads/5.mp4',
                            '/videos/ads/6.mp4'
                        ].map((src, idx) => (
                            <div key={`c2-${idx}`} className="w-[400px] sm:w-[500px] lg:w-[600px] shrink-0 aspect-[16/9] bg-studio-dark border border-white/5 rounded-xl overflow-hidden relative group cursor-pointer hover:border-emerald-glow/50 transition-colors duration-500 shadow-xl">
                                <LazyVideo
                                    src={src}
                                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Progress Bar Container */}
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-6 pb-4">
                                    <div className="w-full h-1 bg-white/20 rounded overflow-hidden relative">
                                        <div className="absolute top-0 left-0 h-full bg-emerald-glow w-1/3 group-hover:w-full transition-all duration-1000 ease-in-out" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </div>
    );
}
