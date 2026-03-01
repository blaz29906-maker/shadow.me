import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    immediate?: boolean;
}

export default function ScrollReveal({ children, delay = 0, immediate = false }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(immediate);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (immediate) return; // If immediate is true, it's already visible

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, [immediate]);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
