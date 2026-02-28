import React from 'react';
import { Star, Quote } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

const REVIEWS = [
    {
        metric: "+40% CTR INCREASE",
        quote: "Shadow Studio completely overhauled our aesthetic. Our click-through rate jumped by 40% in a week. The visual tension they engineer is unreal.",
        name: "ALEX CHEN",
        role: "E-Commerce Founder"
    },
    {
        metric: "2.4M ORGANIC VIEWS",
        quote: "Their understanding of the YouTube algorithm is unmatched. The documentary pacing they implemented got our latest upload to 2.4 million views organically.",
        name: "SARAH JENKINS",
        role: "Content Creator (1.2M Subs)"
    },
    {
        metric: "$120K REVENUE GENERATED",
        quote: "The Direct-Response VSL they scripted and engineered generated more revenue in 48 hours than our entire previous quarter. Elite tier architecture.",
        name: "MARCUS T.",
        role: "SaaS Enterprise Partner"
    },
    {
        metric: "3X RETENTION RATE",
        quote: "Gulraiz doesn't just edit; he designs digital ecosystems. The AI avatars and custom UI/UX design he built for us tripled our user retention.",
        name: "DAVID ROE",
        role: "Tech Startup CEO"
    },
    {
        metric: "140% ROAS BUMP",
        quote: "We deployed the cinematic product commercials Shadow Studio rendered for us on Meta Ads. Our Return on Ad Spend skyrocketed immediately.",
        name: "ELENA ROSTOVA",
        role: "Luxury Brand Director"
    },
    {
        metric: "ALGORITHMIC DOMINANCE",
        quote: "From click-obsessed thumbnails to high-fidelity web architecture, partnering with this studio was the highest ROI decision we made this year.",
        name: "JAMES L.",
        role: "Digital Media Agency"
    }
];

export default function Testimonials() {
    return (
        <div id="testimonials" className="w-full relative py-24 lg:py-32 bg-black px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto min-h-[500px]">
                <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tight mb-6 flex items-center gap-4">
                    <div className="w-2 h-10 bg-emerald-glow" />
                    The Impact
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-body max-w-2xl mb-16">
                    Don't just take our word for it. Here is what happens when you engineer attention.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-6 mt-12">
                    {REVIEWS.map((review, idx) => (
                        <FadeIn key={`review-${idx}`} delay={idx * 150} className="h-full">
                            <div className="relative p-8 rounded-2xl bg-zinc-900/30 backdrop-blur-md border border-white/5 flex flex-col justify-between group overflow-hidden hover:-translate-y-2 hover:border-[#10B981]/40 transition-all duration-500 h-full">

                                {/* Background Watermark */}
                                <Quote className="text-[#10B981] opacity-5 absolute -top-4 -right-4 w-32 h-32" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Upper section */}
                                    <div>
                                        {/* 1. The Stars */}
                                        <div className="flex gap-1 mb-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
                                            ))}
                                        </div>

                                        {/* 2. The Quote */}
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-6 mb-8">
                                            "{review.quote}"
                                        </p>

                                        {/* 3. The Metric Badge */}
                                        <div className="inline-block px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                                            {review.metric}
                                        </div>
                                    </div>

                                    {/* 4. The Client Identity */}
                                    <div className="flex items-center gap-3 mt-auto pt-6">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10B981]/80 to-[#10B981]/20 flex-shrink-0"></div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium text-sm uppercase tracking-wide">{review.name}</span>
                                            <span className="text-gray-500 text-xs">{review.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
