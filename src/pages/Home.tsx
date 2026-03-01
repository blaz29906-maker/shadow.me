import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '../components/ui/MagneticButton';
import ScrollTicker from '../components/ui/ScrollTicker';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Home() {
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Reveal animation for headline
        const lines = headlineRef.current?.querySelectorAll('.headline-line');

        if (lines) {
            gsap.fromTo(lines,
                {
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    x: -30,
                    scale: 0.98,
                    opacity: 0,
                },
                {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.03, // Stagger 0.03s as requested
                    ease: 'power4.out',
                    delay: 0.2,
                }
            );
        }
    }, []);

    return (
        <div className="w-full flex flex-col pt-24 md:pt-32">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="relative z-20 max-w-6xl w-full mx-auto">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-glow opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-glow box-glow-emerald"></span>
                        </span>
                        <span className="text-sm font-body tracking-wide font-medium text-white/90 uppercase text-[10px] md:text-xs">
                            30M+ Organic Views Engineered • Live
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 ref={headlineRef} className="font-heading mb-10 text-white leading-none tracking-[-4px] text-[clamp(62px,9vw,120px)] uppercase">
                        <div className="headline-line overflow-hidden origin-left">We Architect</div>
                        <div className="headline-line overflow-hidden origin-left text-emerald-glow text-glow-emerald">Attention</div>
                        <div className="headline-line overflow-hidden origin-left">That Converts.</div>
                    </h1>

                    {/* AI Tools Strip */}
                    <div className="mb-10 w-full overflow-hidden rounded border border-emerald-glow/50 bg-black/40 backdrop-blur-md box-glow-emerald relative">
                        <div className="flex w-fit relative animate-marquee hover:[animation-play-state:paused] hover:border-emerald-glow hover:bg-black/60 transition-colors duration-500 cursor-default py-3">
                            {/* Group 1 */}
                            <div className="flex items-center whitespace-nowrap px-6 flex-shrink-0">
                                <span className="text-white font-heading font-medium tracking-widest uppercase mr-8">EXPERT IN</span>
                                {['ChatGPT', 'Grok', 'Veo 3', 'Kling', 'Seedance', 'Gemini', 'Higgsfield', 'Meshy', 'Nano Banana Pro', 'Claude AI'].map((tool) => (
                                    <React.Fragment key={`${tool}-1`}>
                                        <span className="text-emerald-glow font-heading text-lg mx-6">•</span>
                                        <span className="text-white/90 font-body font-medium text-lg tracking-wide">{tool}</span>
                                    </React.Fragment>
                                ))}
                            </div>
                            {/* Group 2 (Duplicate for seamless loop) */}
                            <div className="flex items-center whitespace-nowrap px-6 flex-shrink-0">
                                <span className="text-emerald-glow font-heading text-lg mx-6 max-2xl:hidden">•</span>
                                <span className="text-white font-heading font-medium tracking-widest uppercase mr-8">EXPERT IN</span>
                                {['ChatGPT', 'Grok', 'Veo 3', 'Kling', 'Seedance', 'Gemini', 'Higgsfield', 'Meshy', 'Nano Banana Pro', 'Claude AI'].map((tool) => (
                                    <React.Fragment key={`${tool}-2`}>
                                        <span className="text-emerald-glow font-heading text-lg mx-6">•</span>
                                        <span className="text-white/90 font-body font-medium text-lg tracking-wide">{tool}</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Subheadline */}
                    <p className="max-w-2xl text-[19px] text-gray-300 font-body mb-12 leading-relaxed">
                        A private studio led by Gulraiz Hassan. Master prompt engineering × cinematic AI craft for creators who refuse to be ignored.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <button
                            className="relative overflow-hidden transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] active:translate-y-1 active:scale-95 active:shadow-none bg-[#10B981] text-black font-bold uppercase tracking-widest px-8 py-4 rounded-md before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-1000"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('ugc')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            Explore The Work
                        </button>
                        <MagneticButton
                            as="a"
                            href="https://wa.me/923095330012?text=Hey%20Gulraiz,%20I%20just%20saw%20the%20Shadow%20Studio%20portfolio%20and%20I%20want%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            className="hover:border-emerald-glow hover:text-emerald-glow"
                        >
                            Talk to Gulraiz
                        </MagneticButton>
                    </div>
                </div>
            </section>

            {/* Trust Bar (Scroll Ticker) */}
            <div className="mt-20 md:mt-0">
                <ScrollTicker
                    speed={40}
                    items={[
                        <span className="text-white/80 font-heading text-lg tracking-widest uppercase">30M+ Organic Views Engineered</span>,
                        <span className="text-white/80 font-heading text-lg tracking-widest uppercase">High-Retention Pacing</span>,
                        <span className="text-white/80 font-heading text-lg tracking-widest uppercase">Studio-Grade AI Cinematics</span>,
                        <span className="text-white/80 font-heading text-lg tracking-widest uppercase">Zero Templates Used</span>,
                        <span className="text-white/80 font-heading text-lg tracking-widest uppercase">Psychological VSLs</span>,
                    ]}
                />
            </div>


        </div>
    );
}
