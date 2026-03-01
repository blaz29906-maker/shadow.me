import React from 'react';
import { Instagram, Linkedin, Twitter, Award } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

const CREDENTIALS = [
    { institution: 'Google', name: 'Google AI Professional Certificate' },
    { institution: 'IBM', name: 'AI Product Manager' },
    { institution: 'University of Maryland', name: 'Innovation for Entrepreneurs' },
    { institution: 'IE Business School', name: 'Branding: The Creative Journey' },
    { institution: 'Coursera', name: 'Content Creation for TikTok, YouTube, IG' },
    { institution: 'Skillshare', name: 'AI for Business: Branding & Marketing' },
    { institution: 'Skillshare', name: 'Storytelling & Pro-Level Editing' },
    { institution: 'Google', name: 'Data Analytics Specialization' },
    { institution: 'DeepLearning.AI', name: 'Agentic AI for Leaders' },
    { institution: 'Vanderbilt / Coursera', name: 'Prompt Engineering' },
    { institution: 'Google', name: 'Digital Marketing' },
    { institution: 'INSEAD / Coursera', name: 'Blockchain Specialization' }
];

export default function Architect() {
    return (
        <div className="w-full relative py-24 lg:py-32 bg-black px-6 md:px-12">

            {/* 1. THE FOUNDER PORTRAIT & BIO */}
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16 md:mb-24">

                {/* Section Title */}
                <h2 className="text-sm md:text-base text-[#10B981] font-heading font-black tracking-[0.3em] uppercase mb-4">
                    Director / The Architect
                </h2>

                {/* The Circular Portrait Viewfinder */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-10 group rounded-full overflow-hidden border-4 border-white/5 hover:border-[#10B981]/50 transition-colors duration-500">
                    <img
                        src="/founder-cutout.png"
                        alt="Gulraiz Hassan"
                        className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                    />

                    {/* Inner Ring Glow */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                </div>

                {/* The Bio Content */}
                <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight">
                    GULRAIZ HASSAN
                </h3>

                <p className="text-base md:text-lg lg:text-xl text-gray-400 font-body leading-relaxed max-w-3xl px-4 md:px-0 drop-shadow-sm">
                    Gulraiz Hassan is an AI Creative Technologist and Viral Content Visionary. Armed with a BS in Artificial Intelligence from Riphah International University and backed by specialized Coursera certifications, his technical foundation is absolute. He is the architect behind over 30,000,000+ organic views, mastering the intersection of narrative pacing, algorithmic optimization, and high-fidelity AI design. He doesn't just edit content; he engineers digital ecosystems that command absolute attention.
                </p>

            </div>

            {/* 2. THE CREDENTIAL VAULT (Bottom Half) */}
            <div className="w-full max-w-7xl mx-auto">
                <h4 className="text-center font-heading text-sm uppercase tracking-[0.3em] text-[#10B981] mb-8">
                    ACADEMIC & TECHNICAL ARSENAL
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {CREDENTIALS.map((cred, idx) => (
                        <FadeIn key={`cred-${idx}`} delay={idx * 100} className="h-full">
                            <div
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 flex flex-col justify-center relative transition-all duration-500 hover:-translate-y-1 hover:border-[#10B981]/50 group h-full min-h-[100px]"
                            >
                                <Award className="w-4 h-4 text-[#10B981] absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex flex-col pr-6">
                                    <span className="text-[10px] font-heading uppercase tracking-wider text-gray-400 mb-1">
                                        {cred.institution}
                                    </span>
                                    <span className="text-sm font-body font-medium text-gray-200 leading-snug group-hover:text-white transition-colors duration-300">
                                        {cred.name}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

        </div>
    );
}
