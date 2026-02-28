import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
    children: React.ReactNode;
    location: any;
    displayLocation: any;
    onComplete: () => void;
    isAnimating: boolean;
}

export default function PageTransition({ children, location, displayLocation, onComplete, isAnimating }: PageTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isAnimating && displayLocation.pathname !== location.pathname) {
            const tl = gsap.timeline({
                onComplete: () => {
                    onComplete(); // Updates displayLocation

                    // Animate in the new page
                    gsap.fromTo(containerRef.current,
                        { x: '100%', opacity: 1 },
                        { x: '0%', duration: 0.6, ease: 'power3.out' }
                    );
                }
            });

            // Quick film burn flash & scanline
            tl.to(effectRef.current, {
                opacity: 1,
                duration: 0.1,
            })
                .to(containerRef.current, {
                    x: '-100%',
                    duration: 0.5,
                    ease: 'power3.inOut' // Film-reel wipe out left
                }, "<")
                .to(effectRef.current, {
                    opacity: 0,
                    duration: 0.2,
                }, ">-0.1");
        }
    }, [location.pathname, isAnimating, displayLocation.pathname, onComplete]);

    return (
        <div className="relative w-full h-full min-h-screen overflow-hidden">
            {/* Scanline/Burn Overlay */}
            <div
                ref={effectRef}
                className="fixed inset-0 pointer-events-none z-50 bg-emerald-glow mix-blend-overlay opacity-0 flex flex-col"
            >
                <div className="w-full h-1 bg-white animate-pulse" style={{ marginTop: '50vh', boxShadow: '0 0 40px #10F5B8' }} />
            </div>

            <div ref={containerRef} className="w-full h-full min-h-screen">
                {displayLocation.pathname === location.pathname ? children : children}
            </div>
        </div>
    );
}
