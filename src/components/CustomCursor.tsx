import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let animationFrame: number;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.closest('.interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const animateTrail = () => {
      setTrailing((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.22,
        y: prev.y + (targetY - prev.y) * 0.22
      }));
      animationFrame = requestAnimationFrame(animateTrail);
    };

    animationFrame = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <div className={`rounded-full bg-cyan-400 transition-all duration-150 shadow-[0_0_8px_#00f0ff] ${isHovered ? 'w-2.5 h-2.5 bg-yellow-400 shadow-[0_0_10px_#f59e0b]' : 'w-1.5 h-1.5'}`} />
      </div>

      {/* Cyber Reticle Trail Ring */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-150 ease-out"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 flex items-center justify-center ${
            isHovered
              ? 'w-11 h-11 border-cyan-400/80 bg-cyan-500/10 scale-110'
              : 'w-7 h-7 border-cyan-500/40 bg-transparent'
          }`}
        >
          {isHovered && (
            <div className="w-1 h-1 rounded-full bg-cyan-300 animate-ping" />
          )}
        </div>
      </div>
    </>
  );
};
