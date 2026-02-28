import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const TECH_STACK = "ADOBE AFTER EFFECTS • MIDJOURNEY V6 • REACT.JS • UNREAL ENGINE • TAILWIND CSS • RUNWAY GEN-2 • ELEVENLABS • DAVINCI RESOLVE • ADOBE AFTER EFFECTS • MIDJOURNEY V6 • REACT.JS • UNREAL ENGINE • TAILWIND CSS • RUNWAY GEN-2 • ELEVENLABS • DAVINCI RESOLVE";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 relative z-10 overflow-hidden">

            {/* Tech Stack Marquee (Slim Profile) */}
            <div className="w-full flex overflow-hidden border-b border-white/5 py-4 bg-white/[0.02]">
                <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
                    <span className="text-xs md:text-sm font-heading uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 mx-4 flex-shrink-0">
                        {TECH_STACK}
                    </span>
                    <span className="text-xs md:text-sm font-heading uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 mx-4 flex-shrink-0">
                        {TECH_STACK}
                    </span>
                    <span className="text-xs md:text-sm font-heading uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 mx-4 flex-shrink-0">
                        {TECH_STACK}
                    </span>
                </div>
            </div>

            {/* The High-End Editorial Footer */}
            <div className="w-full max-w-7xl mx-auto px-6 mt-24 mb-8 border-t border-white/10 pt-12">

                {/* TOP ROW (The Final Call & Contact) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 w-full">
                    {/* Left Side: Brutalist Statement */}
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#10B981] max-w-lg leading-none">
                        READY TO ENGINEER ATTENTION?
                    </h2>
                </div>

                {/* BOTTOM ROW (Copyright & Socials) */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 w-full">

                    {/* Left Side (The Copyright) */}
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] text-center md:text-left">
                        © {new Date().getFullYear()} GULRAIZ HASSAN. ALL SYSTEMS OPERATIONAL.
                    </p>

                    {/* Right Side (The Social Arsenal) */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 z-20">
                        <a href="https://www.instagram.com/shadow.xae/?hl=en" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest hover:text-[#10B981] transition-all duration-300 cursor-pointer">
                            <Instagram className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            <span>INSTAGRAM</span>
                        </a>

                        <a href="https://www.tiktok.com/@shadow_xae888?_r=1&_t=ZS-94J1C2Gs1Qn" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest hover:text-[#10B981] transition-all duration-300 cursor-pointer">
                            {/* Custom SVG for TikTok */}
                            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                            </svg>
                            <span>TIKTOK</span>
                        </a>

                        <a href="https://www.youtube.com/@SHADOWxAE888" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest hover:text-[#10B981] transition-all duration-300 cursor-pointer">
                            <Youtube className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            <span>YOUTUBE</span>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
