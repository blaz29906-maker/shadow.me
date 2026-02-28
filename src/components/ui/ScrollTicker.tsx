import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ScrollTickerProps {
    items: React.ReactNode[];
    speed?: number;
}

export default function ScrollTicker({ items, speed = 20 }: ScrollTickerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // A simple infinite scroll ticker implementation
        const totalWidth = container.scrollWidth / 2; // Assuming content is duplicated

        gsap.to(container, {
            x: -totalWidth,
            ease: 'none',
            duration: speed,
            repeat: -1,
        });
    }, [speed]);

    return (
        <div className="w-full overflow-hidden border-y border-white/10 py-4 bg-studio-dark/50 backdrop-blur-sm z-20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-studio-darker to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-studio-darker to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap" ref={containerRef}>
                <div className="flex gap-16 px-8 items-center">
                    {items.map((item, i) => (
                        <div key={`item-1-${i}`} className="flex items-center gap-16">
                            {item}
                            <span className="text-emerald-glow font-heading text-xl">•</span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-16 px-8 items-center" aria-hidden="true">
                    {items.map((item, i) => (
                        <div key={`item-2-${i}`} className="flex items-center gap-16">
                            {item}
                            <span className="text-emerald-glow font-heading text-xl">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
