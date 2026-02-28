import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TIERS = [
    {
        name: "THE CATALYST",
        vibe: "bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-[#10B981]/30",
        target: "Aggressive Short-Form Growth.",
        price: "Starting at $1,500 / month",
        features: ["15 High-Retention Edits", "Click-Obsessed Hooks", "Algorithmic Positioning", "Bi-Weekly Strategy"],
        ctaStyle: "ghost",
        ctaText: "SECURE SLOT",
        isPopular: false
    },
    {
        name: "THE ECOSYSTEM",
        vibe: "bg-black border border-[#10B981] shadow-[0_0_40px_rgba(16,185,129,0.15)] lg:scale-105 z-10",
        target: "Total Brand & Web Overhaul.",
        price: "Starting at $3,500 / month",
        features: ["Full Web Architecture", "2 Cinematic Commercials", "Complete Brand Identity Kit", "Priority Development"],
        ctaStyle: "solid",
        ctaText: "DEPLOY ECOSYSTEM",
        isPopular: true
    },
    {
        name: "THE RETAINER",
        vibe: "bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-[#10B981]/30",
        target: "Infinite Creative Arsenal.",
        price: "Starting at $5,000 / month",
        features: ["Unlimited Short-Form", "1 VSL per month", "AI Influencer Renders", "Full-Funnel Ad Strategy"],
        ctaStyle: "ghost",
        ctaText: "APPLY FOR RETAINER",
        isPopular: false
    }
];

export default function Pricing() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <div id="packages-components" ref={sectionRef} className="w-full relative py-24 lg:py-32 bg-black px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-white uppercase tracking-tighter mb-6 hover:text-[#10B981] transition-colors duration-500">
                        Engagement Models
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 font-body max-w-3xl">
                        Partner with Shadow Studio. We strictly limit our bandwidth to 3 new clients per month to ensure absolute quality.
                    </p>
                </div>

                {/* TOP ROW: The 3 Fixed Tiers */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
                    {TIERS.map((tier, idx) => (
                        <div key={idx} className={`rounded-2xl p-8 lg:p-10 flex flex-col relative transition-all duration-500 hover:-translate-y-2 h-full ${tier.vibe}`}>
                            {tier.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10B981] text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs py-1.5 px-5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] whitespace-nowrap z-20">
                                    Recommended
                                </div>
                            )}
                            <h3 className={`text-3xl lg:text-4xl font-heading uppercase mb-2 mt-2 tracking-tight ${tier.isPopular ? 'text-[#10B981]' : 'text-white'}`}>
                                {tier.name}
                            </h3>
                            <p className="text-white/80 font-body mb-4 text-base">
                                {tier.target}
                            </p>
                            <p className="text-gray-300 italic text-sm font-medium mb-8 font-body">
                                {tier.price}
                            </p>

                            <hr className="border-white/10 mb-8" />

                            <div className="flex-1 w-full space-y-5 mb-12">
                                {tier.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="mt-0.5 shrink-0">
                                            <Check className="w-5 h-5 text-[#10B981]" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-white/90 text-sm md:text-base font-body font-medium leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full mt-auto flex justify-center">
                                {tier.ctaStyle === 'solid' ? (
                                    <a
                                        href="https://calendly.com/loidray7/shadow-studio-private-strategy-call"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 text-center block rounded-full bg-[#10B981] text-black font-heading uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-sm md:text-base font-bold"
                                    >
                                        {tier.ctaText}
                                    </a>
                                ) : (
                                    <a
                                        href="https://calendly.com/loidray7/shadow-studio-private-strategy-call"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 text-center block rounded-full border border-white/20 text-white font-heading uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base hover:border-white font-bold"
                                    >
                                        {tier.ctaText}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ROW: The Custom Tier Banner */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 mt-8 lg:mt-12 rounded-2xl bg-gradient-to-r from-zinc-950 to-zinc-900 border border-white/10 relative overflow-hidden group">
                    {/* Subtle Right Glow */}
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#10B981]/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex flex-col max-w-2xl relative z-10 mb-8 md:mb-0">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase tracking-tighter mb-4">
                            WHAT'S ON YOUR MIND?
                        </h3>
                        <p className="text-gray-400 font-body text-base lg:text-lg leading-relaxed">
                            Need a custom AI Influencer? A complex web application? Or a full documentary film? Pitch your exact vision and let's engineer it from the ground up.
                        </p>
                    </div>

                    <div className="w-full md:w-auto shrink-0 relative z-10">
                        <a
                            href="https://calendly.com/loidray7/shadow-studio-private-strategy-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-[280px] py-5 px-8 text-center block rounded-full border border-[#10B981]/50 text-[#10B981] font-heading uppercase tracking-widest hover:bg-[#10B981] hover:text-black transition-all duration-500 text-sm lg:text-base font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                        >
                            PITCH YOUR VISION →
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
