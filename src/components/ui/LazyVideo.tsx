import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    className?: string;
    threshold?: number;
}

export default function LazyVideo({ src, className, threshold = 0.5, ...props }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldPreload, setShouldPreload] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldPreload(true);
                        // Optional chaining because the browser could potentially block autoplay
                        videoElement.play().catch(() => { });
                    } else {
                        // Pause the video when it leaves the viewport to save CPU
                        videoElement.pause();
                    }
                });
            },
            {
                // Trigger when `threshold` logic is met
                threshold: threshold,
            }
        );

        observer.observe(videoElement);

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, [threshold]);

    return (
        <video
            ref={videoRef}
            src={src}
            className={cn("w-full h-full object-cover", className)}
            preload={shouldPreload ? "auto" : "none"}
            muted
            loop
            playsInline
            {...props}
        />
    );
}
