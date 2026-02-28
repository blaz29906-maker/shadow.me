import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './LazyVideo';
import { Play } from 'lucide-react';
import { cn } from '../navigation/FilmReelNav';

interface VideoCardProps {
    videoUrl: string;
    posterUrl?: string;
    title?: string;
    subtitle?: string;
    aspectRatio?: '16:9' | '9:16';
    className?: string;
}

export default function VideoCard({
    videoUrl,
    posterUrl,
    title,
    subtitle,
    aspectRatio = '16:9',
    className
}: VideoCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (containerRef.current) gsap.to(containerRef.current, { y: -10, duration: 0.4, ease: 'power3.out' });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (containerRef.current) gsap.to(containerRef.current, { y: 0, duration: 0.4, ease: 'power3.out' });
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative rounded-lg overflow-hidden group bg-studio-dark border border-white/5 transition-colors duration-300",
                isHovered && "border-white/20 box-glow-emerald",
                className
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={cn(
                "relative w-full bg-black overflow-hidden",
                aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[9/16]'
            )}>
                {/* Film Grain & Vignette Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
                <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 150%)' }} />

                <LazyVideo
                    src={videoUrl}
                    poster={posterUrl}
                    className={cn(
                        "transition-transform duration-700",
                        isHovered && "scale-105"
                    )}
                />
            </div>

            {(title || subtitle) && (
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-black via-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-1">
                    {title && <h3 className="text-xl text-white font-heading font-bold tracking-wide">{title}</h3>}
                    {subtitle && <p className="text-sm text-white/70 font-body">{subtitle}</p>}
                </div>
            )}
        </div>
    );
}
