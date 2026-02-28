import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn'; // Assuming you have a cn utility, else we'll fallback

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Single reveal, then unobserve
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={className} // Just append standard React classes if you don't use 'cn'
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
                transition: `all 1000ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
}
