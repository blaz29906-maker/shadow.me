import React from 'react';
import { Globe } from 'lucide-react';

const PORTFOLIO_ITEMS = [
    {
        title: "MECHANICAL WATCH DESIRE ENGINEERED",
        desc: "High-Ticket E-Commerce Product Hero",
        video: "/videos/web-design/1.mp4",
    },
    {
        title: "YOUTUBE ALGORITHMIC OPTIMIZATION DESK",
        desc: "YouTube Creator Branding Hero",
        video: "/videos/web-design/2.mp4",
    },
    {
        title: "SaaS DIGITAL FORTRESS VISUALIZED",
        desc: "Corporate SaaS Web Design Hero",
        video: "/videos/web-design/3.mp4",
    },
    {
        title: "GULRAIZ HASSAN portrait brief",
        desc: "Personal Founder Brand Hero",
        video: "/videos/web-design/4.mp4",
    },
    {
        title: "VERDANT SAGA Action Pose Brief",
        desc: "Gaming & Digital Arts Hero",
        video: "/videos/web-design/5.mp4",
    },
    {
        title: "THE ALGORITHM CONFLICT interview still",
        desc: "Documentary Film Portfolio Hero",
        video: "/videos/web-design/6.mp4",
    }
];

export default function WebDesign() {
    return (
        <section id="web-design" className="w-full py-24 lg:py-32 bg-black relative">
            <div className="mb-16 max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <Globe className="w-12 h-12 text-[#10B981] mb-6" strokeWidth={1.5} />
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-white uppercase tracking-tighter mb-6 hover:text-emerald-glow transition-colors duration-500">
                    WEB ARCHITECTURE & ENGINEERING
                </h2>
                <p className="text-lg md:text-xl md:leading-relaxed text-white/60 font-body max-w-4xl mx-auto">
                    We don't just build content; we code the digital fortresses where that content lives. High-fidelity, custom AI-coded web applications designed for absolute conversion.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-6">
                {PORTFOLIO_ITEMS.map((item, idx) => (
                    <div
                        key={idx}
                        className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-900 border border-white/10 relative group transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-[#10B981]/50 cursor-pointer flex flex-col justify-end p-6"
                    >
                        <video
                            src={item.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </div>
        </section>
    );
}
