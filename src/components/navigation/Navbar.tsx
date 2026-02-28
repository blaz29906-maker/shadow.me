
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from './FilmReelNav';
import MagneticButton from '../ui/MagneticButton';

const links = [
  { id: 'reels', label: 'SHOWREEL' },
  { id: 'thumbnails', label: 'THUMBNAILS' },
  { id: 'commercials', label: 'COMMERCIALS' },
  { id: 'ugc', label: 'UGC ADS' },
  { id: 'cinematics', label: 'CINEMATICS' },
  { id: 'documentary', label: 'DOCUMENTARY' },
  { id: 'web-design', label: 'WEB DESIGN' },
  { id: 'services', label: 'SERVICES' },
  { id: 'packages', label: 'PACKAGES' },
  { id: 'testimonials', label: 'IMPACT' },
  { id: 'director', label: 'DIRECTOR' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Super simple intersection observer logic for active states could go here
      // For now, based on scroll position approximation to trigger "active"
      const sections = links.map(l => document.getElementById(l.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If not on home page, push to home with hash
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-colors duration-300",
          isScrolled
            ? "bg-black border-b border-emerald-500 py-4 shadow-[0_4px_20px_rgba(16,245,184,0.1)]"
            : "bg-black/40 backdrop-blur-xl border-b border-white/5 py-6"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-xl md:text-2xl font-heading font-bold uppercase tracking-[0.2em] text-white flex items-center gap-3 group"
          >
            <img
              src="/shadow-icon-transparent.png"
              alt="Shadow Studio"
              className="w-8 h-8 rounded object-cover border border-white/20 group-hover:border-emerald-glow group-hover:box-glow-emerald transition-all duration-300"
            />
            SHADOW STUDIO
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex flex-row flex-nowrap items-center justify-center gap-2 lg:gap-4">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={cn(
                    "font-body text-[9px] lg:text-[10px] font-medium transition-colors hover:text-emerald-glow tracking-[0.2em] uppercase whitespace-nowrap",
                    isActive ? "text-emerald-glow" : "text-white/70"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Button (Desktop) */}
          <div className="hidden lg:block">
            <MagneticButton
              as="a"
              href="https://calendly.com/loidray7/shadow-studio-private-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              className="px-4 py-2 text-[10px] leading-tight text-center flex flex-col items-center justify-center"
            >
              <span>BOOK</span>
              <span>STRATEGY</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 lg:hidden flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={cn(
                "text-[10px] md:text-xs font-heading font-medium tracking-[0.2em] uppercase transition-colors",
                isActive ? "text-emerald-glow" : "text-white hover:text-emerald-glow"
              )}
            >
              {link.label}
            </a>
          );
        })}
        <div className="mt-8">
          <MagneticButton
            as="a"
            href="https://calendly.com/loidray7/shadow-studio-private-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
          >
            Book Strategy Call
          </MagneticButton>
        </div>
      </div>
    </>
  );
}
