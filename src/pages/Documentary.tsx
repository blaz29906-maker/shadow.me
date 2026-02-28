import React from 'react';
import { Play } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';

const DOCUMENTARIES = [
    {
        id: 1,
        title: 'THE ALGORITHM CONFLICT',
        subtitle: 'Inside the Multi-Million Dollar Creator Wars',
        image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2564&auto=format&fit=crop',
        video: '/videos/DIALOGUE.mp4',
        duration: '1:12:04',
    }
];

export default function Documentary() {
    return (
        <div className="w-full">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
                <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4 flex items-center gap-4">
                    <div className="w-2 h-8 bg-emerald-glow" />
                    Documentary & Storytelling
                </h2>
                <p className="text-xl text-white/60 font-body">Deep, emotional cinematic cuts for elite YouTubers.</p>
            </div>

            <div className="w-full flex flex-col gap-0">
                {DOCUMENTARIES.map((doc, idx) => (
                    <div key={doc.id} className="relative w-full aspect-[21/9] bg-black overflow-hidden group border-y border-white/5 cursor-pointer">

                        {/* Extremely dark cinematic vignette edges */}
                        <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_200px_100px_rgba(0,0,0,0.95)]" />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700 z-10" />

                        {doc.video ? (
                            <video
                                src={doc.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-linear"
                            />
                        ) : (
                            <img
                                src={doc.image}
                                alt={doc.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-linear"
                            />
                        )}

                        {/* Sub Text */}
                        <div className="absolute inset-x-0 bottom-[10%] z-30 flex flex-col items-center justify-center transition-all duration-700 pointer-events-none">
                            {/* New Subtle Hover Text */}
                            <span className="text-emerald-glow/80 font-heading tracking-[0.3em] text-xs md:text-sm uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                MULTI MILLION DOLLARS STORY TELLING
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
