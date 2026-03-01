import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MODULES = [
    {
        title: "01 / ATTENTION",
        subtitle: "Algorithmic Short-Form & UGC",
        specs: [
            "[ TYPE: High-Retention Reels ]",
            "[ ENGINE: AI-Optimized Pacing ]",
            "[ OUTPUT: Viral Growth & CTR ]"
        ]
    },
    {
        title: "02 / CINEMATICS",
        subtitle: "Hyper-Realistic 3D & VFX",
        specs: [
            "[ TYPE: Commercial Product Renders ]",
            "[ ENGINE: Unreal x AI Compositing ]",
            "[ OUTPUT: Visual Authority ]"
        ]
    },
    {
        title: "03 / ARCHITECTURE",
        subtitle: "Web Platforms & UI/UX",
        specs: [
            "[ TYPE: High-Fidelity Frontends ]",
            "[ ENGINE: React.js & Tailwind ]",
            "[ OUTPUT: Absolute Conversion ]"
        ]
    },
    {
        title: "04 / SYNTHESIS",
        subtitle: "Digital Avatars & Voice Cloning",
        specs: [
            "[ TYPE: Synthetic Brand Identity ]",
            "[ ENGINE: 11Labs x Custom Models ]",
            "[ OUTPUT: Automated Workflows ]"
        ]
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

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="packages-components" ref={sectionRef} className="w-full relative py-24 lg:py-32 bg-black px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* THE NEW HEADER */}
                <div className="flex flex-col items-center text-center mb-12">
                    <p className="text-[#10B981] text-xs font-bold uppercase tracking-[0.3em] mb-2">
                        SYSTEM ARCHITECTURE
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        DEPLOYMENT MODULES
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl">
                        Select your required infrastructure. No templates. Only bespoke engineering.
                    </p>
                </div>

                {/* THE 2x2 MODULAR GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto my-12">
                    {MODULES.map((mod, idx) => (
                        <div key={idx} className="relative p-8 rounded-xl bg-zinc-900/40 backdrop-blur-sm border border-white/5 flex flex-col justify-start group hover:-translate-y-1 hover:border-[#10B981]/50 transition-all duration-500">
                            <h3 className="text-xl font-bold text-white mb-1">{mod.title}</h3>
                            <p className="text-sm text-gray-500 mb-6">{mod.subtitle}</p>
                            <div className="flex flex-col gap-2">
                                {mod.specs.map((spec, sIdx) => (
                                    <span key={sIdx} className="font-mono text-xs text-[#10B981]">{spec}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* THE FINAL HOOK (Smooth Scroll Trigger) */}
                <div className="w-full max-w-7xl mx-auto mb-20">
                    <button
                        onClick={scrollToContact}
                        className="w-full py-6 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-bold uppercase tracking-[0.2em] hover:bg-[#10B981] hover:text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] active:scale-[0.98]"
                    >
                        COMPILE CUSTOM ARCHITECTURE
                    </button>
                </div>

                {/* BOTTOM ROW: The Custom Tier Banner (Untouched) */}
                <div id="contact-section" className="w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 mt-8 lg:mt-12 rounded-2xl bg-gradient-to-r from-zinc-950 to-zinc-900 border border-white/10 relative overflow-hidden group">
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
