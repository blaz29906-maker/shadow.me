import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if cursor is over a button, link, or any interactive element
            const isInteractive = target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateHoverState);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateHoverState);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div className="hidden md:block">
            {/* The Flame */}
            <img
                src="/custom-cursor.png"
                alt="cursor"
                className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-transform duration-150 ease-out"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) ${isHovering ? 'scale(1.25) rotate(12deg)' : 'scale(1) rotate(0deg)'}`,
                }}
            />
        </div>
    );
}
