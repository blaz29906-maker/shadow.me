import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        title: "CINEMATIC COMMERCIALS & TRAILERS",
        desc: "Studio-grade production engineered for maximum impact.",
        subServices: ["Cinematic Product Ads", "Documentary Storytelling", "Teaser Trailers", "Direct Response VSLs"]
    },
    {
        title: "ALGORITHMIC SHORT-FORM & UGC",
        desc: "Attention engineered for the modern feed.",
        subServices: ["High-Retention TikToks/Reels", "YouTube Shorts Editing", "High-ROAS UGC Ad Engineering"]
    },
    {
        title: "CUSTOM AI INFLUENCERS & RENDERS",
        desc: "The future of digital brand representation.",
        subServices: ["Photorealistic AI Influencer Design", "Hyper-Realistic Product Renders", "AI Voice Cloning", "Audio Design"]
    },
    {
        title: "WEB ARCHITECTURE & UI/UX",
        desc: "Custom digital fortresses designed for absolute conversion.",
        subServices: ["Full-Stack Web Design", "Conversion-Optimized Landing Pages", "UI/UX Interface Design", "E-commerce Optimization"]
    },
    {
        title: "DIGITAL & SOCIAL MARKETING",
        desc: "Complete ecosystem domination and traffic generation.",
        subServices: ["Digital Marketing Strategy", "Social Media Management", "Paid Media Buying (Meta/TikTok)", "SEO & Positioning"]
    },
    {
        title: "AUTOMATION & AI WORKFLOWS",
        desc: "Replacing manual labor with algorithmic precision.",
        subServices: ["Custom AI Chatbots", "Zapier Workflow Automations", "Email & SMS Funnel Automation", "Prompt Engineering"]
    },
    {
        title: "BRAND IDENTITY & PACKAGING",
        desc: "Visual ecosystems that command authority.",
        subServices: ["Click-Obsessed YouTube Thumbnails", "Channel Banners", "Logo Architecture", "Complete Brand Kits"]
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
        <div id="services-component" ref={sectionRef} className="w-full relative py-24 lg:py-32 bg-black px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto mb-16">
                <h2 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-tighter mb-6 hover:text-emerald-glow transition-colors duration-500">
                    Studio Capabilities
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-body max-w-3xl mb-0">
                    From comprehensive brand architecture to algorithmic video engineering. Everything you need to dominate.
                </p>
            </div>

            <div className="max-w-[1600px] mx-auto w-full flex flex-col border-t border-white/10">
                {SERVICES.map((item, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                        <div
                            key={idx}
                            id={item.title === "WEB ARCHITECTURE & UI/UX" ? "web-design" : undefined}
                            className="w-full border-b border-white/10 py-8 md:py-12 cursor-pointer group transition-colors duration-500 hover:bg-white/[0.02] px-4 md:px-8 relative overflow-hidden"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h3 className={`text-3xl lg:text-5xl font-heading uppercase tracking-tighter font-bold transition-colors duration-500 w-[90%] break-words ${isHovered ? 'text-[#10B981]' : 'text-white'}`}>
                                    {item.title}
                                </h3>
                                <div className={`hidden md:flex p-4 rounded-full border border-white/20 transition-all duration-500 ${isHovered ? 'bg-[#10B981] border-[#10B981] rotate-45 scale-110' : 'bg-transparent text-white'}`}>
                                    <ArrowUpRight className={`w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-black' : 'text-white'}`} />
                                </div>
                            </div>

                            <div
                                className={`grid transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-6 md:mt-10' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden flex flex-col xl:flex-row gap-6 xl:gap-24 justify-between">
                                    <p className="text-xl lg:text-2xl text-white/70 font-body max-w-2xl leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 w-full xl:max-w-xl">
                                        {item.subServices.map((sub, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-[#10B981]/10 hover:border-[#10B981]/50 text-gray-300 hover:text-white"
                                            >
                                                <span className="text-sm font-body font-medium uppercase tracking-wider">{sub}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
