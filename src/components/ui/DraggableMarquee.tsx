import React, { useRef, useState, useEffect, useCallback, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface DraggableMarqueeProps {
  children: ReactNode;
  speed?: number; // Pixels per frame
  direction?: 'left' | 'right';
  className?: string; // Appended to container
  contentClassName?: string; // Appended to the inner wrappers
  pauseOnHover?: boolean;
}

export default function DraggableMarquee({
  children,
  speed = 1,
  direction = 'left',
  className,
  contentClassName,
  pauseOnHover = true,
}: DraggableMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const isHovered = useRef(false);
  
  const x = useRef(0);
  const rafRef = useRef<number | null>(null);

  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasMoved = useRef(false);

  // Measure content
  const contentWidth = useRef(0);

  const updateWidth = useCallback(() => {
    if (scrollerRef.current && scrollerRef.current.firstChild) {
      contentWidth.current = (scrollerRef.current.firstChild as HTMLElement).offsetWidth;
    }
  }, []);

  const animate = useCallback(() => {
    if (!scrollerRef.current || !contentWidth.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
    }

    if (!isDragging && (!pauseOnHover || !isHovered.current)) {
      if (direction === 'left') {
        x.current -= speed;
        if (x.current <= -contentWidth.current) {
            x.current += contentWidth.current;
        }
      } else {
        x.current += speed;
        if (x.current >= 0) {
            x.current -= contentWidth.current;
        }
      }
      scrollerRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [direction, speed, pauseOnHover, isDragging]);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    // Auto update width if children change size (images loading)
    let observer: ResizeObserver;
    if (scrollerRef.current && scrollerRef.current.firstChild) {
      observer = new ResizeObserver(() => {
        updateWidth();
      });
      observer.observe(scrollerRef.current.firstChild as Element);
    }
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateWidth);
      if (observer) observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, updateWidth]);

  // Touch/Mouse handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    hasMoved.current = false;
    startX.current = clientX;
    scrollLeftStart.current = x.current;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !contentWidth.current || !scrollerRef.current) return;
    
    const dx = clientX - startX.current;
    if (Math.abs(dx) > 5) {
        hasMoved.current = true;
    }

    let nextX = scrollLeftStart.current + dx;
    
    // Soft Wrap around
    if (nextX <= -contentWidth.current) {
        startX.current -= contentWidth.current;
        scrollLeftStart.current -= contentWidth.current;
        nextX += contentWidth.current;
    } else if (nextX > 0) {
        startX.current += contentWidth.current;
        scrollLeftStart.current += contentWidth.current;
        nextX -= contentWidth.current;
    }

    x.current = nextX;
    scrollerRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn('w-full overflow-hidden shrink-0 flex items-center', className)}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { 
        isHovered.current = false; 
        if (isDragging) handleDragEnd(); 
      }}
      
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => {
          if (isDragging) {
              e.preventDefault();
          }
          handleDragMove(e.clientX);
      }}
      onMouseUp={handleDragEnd}

      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}

      // Prevent native HTML5 drag and drop of images
      onDragStart={(e) => e.preventDefault()}
      
      // Stop clicks if we are dragging
      onClickCapture={(e) => {
          if (hasMoved.current) {
              e.stopPropagation();
              e.preventDefault();
          }
      }}
    >
      <div
        ref={scrollerRef}
        className="flex w-max items-center justify-start flex-nowrap will-change-transform"
      >
        <div className={cn("flex w-max items-center justify-start flex-nowrap shrink-0", contentClassName)}>
          {children}
        </div>
        <div className={cn("flex w-max items-center justify-start flex-nowrap shrink-0", contentClassName)} aria-hidden="true">
           {children}
        </div>
      </div>
    </div>
  );
}
