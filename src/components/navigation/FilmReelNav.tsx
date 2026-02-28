import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Play, Home, Briefcase, Paintbrush, Fingerprint, Clapperboard, User } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/work', label: 'The Work', icon: Briefcase },
    { path: '/arsenal', label: 'Arsenal', icon: Paintbrush },
    { path: '/identity', label: 'Identity Lab', icon: Fingerprint },
    { path: '/documentary', label: 'Documentary', icon: Clapperboard },
    { path: '/architect', label: 'The Architect', icon: User },
];

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function FilmReelNav() {
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const location = useLocation();

    return (
        <>
            {/* Desktop Film Reel */}
            <nav className="fixed top-0 left-0 h-screen w-24 bg-studio-dark border-r border-white/5 hidden md:flex flex-col items-center py-8 z-50">
                <div className="flex-1 w-full flex flex-col justify-center gap-12 relative">

                    {/* Film sprockets left */}
                    <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-between py-4">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={`l-${i}`} className="w-2 h-3 bg-black rounded-sm border border-white/10" />
                        ))}
                    </div>

                    {/* Film sprockets right */}
                    <div className="absolute right-1 top-0 bottom-0 flex flex-col justify-between py-4">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={`r-${i}`} className="w-2 h-3 bg-black rounded-sm border border-white/10" />
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 z-10 w-full px-4">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            const isHovered = hoveredPath === link.path;
                            const Icon = link.icon;

                            return (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onMouseEnter={() => setHoveredPath(link.path)}
                                    onMouseLeave={() => setHoveredPath(null)}
                                    className="relative group w-full aspect-square bg-studio-darker border border-white/10 rounded overflow-hidden flex items-center justify-center transition-all duration-300"
                                >
                                    <div className={cn(
                                        "absolute inset-0 bg-emerald-glow/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out",
                                        isActive && "translate-y-0 bg-emerald-glow/20"
                                    )} />

                                    <Icon className={cn(
                                        "w-6 h-6 text-white/50 transition-all duration-300 relative z-10",
                                        (isActive || isHovered) && "text-emerald-glow scale-110 drop-shadow-[0_0_8px_rgba(16,245,184,0.8)]"
                                    )} />

                                    {isActive && (
                                        <div className="absolute inset-0 border border-emerald-glow rounded box-glow-emerald pointer-events-none" />
                                    )}

                                    {/* Tooltip */}
                                    <div className={cn(
                                        "absolute left-full ml-4 px-3 py-1.5 bg-studio-darker border border-white/10 rounded text-xs whitespace-nowrap opacity-0 -translate-x-2 transition-all duration-300 pointer-events-none flex items-center gap-2",
                                        isHovered && "opacity-100 translate-x-0"
                                    )}>
                                        <span className="text-white font-heading tracking-widest uppercase">{link.label}</span>
                                        {isActive && (
                                            <span className="text-[10px] text-emerald-glow flex items-center gap-1 font-body">
                                                <Play className="w-3 h-3 fill-emerald-glow" /> NOW PLAYING
                                            </span>
                                        )}
                                    </div>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Nav (Bottom Bar) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-studio-dark border-t border-white/10 z-50 flex items-center justify-around px-4">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;

                    return (
                        <NavLink key={link.path} to={link.path} className="relative p-3 flex flex-col items-center gap-1">
                            <Icon className={cn("w-5 h-5 text-white/50 transition-colors", isActive && "text-emerald-glow")} />
                            {isActive && <div className="absolute -top-1 w-1 h-1 rounded-full bg-emerald-glow box-glow-emerald" />}
                        </NavLink>
                    );
                })}
            </nav>
        </>
    );
}
