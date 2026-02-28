import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../navigation/FilmReelNav';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    children: React.ReactNode;
    variant?: 'solid' | 'outline' | 'ghost';
    className?: string;
    as?: React.ElementType;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function MagneticButton({
    children,
    variant = 'solid',
    className,
    as: Component = 'button',
    href,
    onClick,
    ...props
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | any>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const xTextTo = gsap.quickTo(textRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTextTo = gsap.quickTo(textRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.2);
            yTo(y * 0.2);
            xTextTo(x * 0.1);
            yTextTo(y * 0.1);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            xTo(0);
            yTo(0);
            xTextTo(0);
            yTextTo(0);
            gsap.to(button, { scale: 1, duration: 0.4, ease: "power3.out" });
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
            gsap.to(button, { scale: 1.05, duration: 0.4, ease: "power3.out" });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
            button.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    const variants = {
        solid: "bg-emerald-glow text-black border border-transparent box-glow-emerald hover:bg-emerald-400",
        outline: "bg-transparent text-white border border-white hover:border-emerald-glow hover:text-emerald-glow hover:box-glow-emerald",
        ghost: "bg-transparent text-white hover:text-emerald-glow"
    };

    return (
        <Component
            ref={buttonRef}
            href={href}
            onClick={onClick}
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-heading tracking-wide uppercase transition-colors duration-300",
                variants[variant],
                className
            )}
            {...props}
        >
            <span ref={textRef} className="relative z-10 flex items-center gap-2 pointer-events-none">
                {children}
            </span>
        </Component>
    );
}
