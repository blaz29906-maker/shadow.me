import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../navigation/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Setup Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
            {/* Persistent Global Video Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-black/75 z-10" /> {/* Dark overlay black/75 */}
                <video
                    src="/videos/background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Global Film Grain opacity 0.04 */}
                <div className="absolute inset-0 z-20 mix-blend-overlay opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
            </div>

            {/* Top Navbar */}
            <Navbar />

            {/* Main Content Area */}
            <div className="flex-1 w-full relative z-10 flex flex-col min-h-screen">
                {children}
            </div>
        </div>
    );
}
