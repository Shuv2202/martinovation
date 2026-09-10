import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface FloatingRegisterButtonProps {
  onOpenRegister: () => void;
}

export const FloatingRegisterButton: React.FC<FloatingRegisterButtonProps> = ({
  onOpenRegister
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const registerEl = document.getElementById('register');

      // Show after scrolling past 300px
      if (scrollY > 300) {
        if (registerEl) {
          const rect = registerEl.getBoundingClientRect();
          // Hide if the register section is currently in view
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setVisible(false);
            return;
          }
        }
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:hidden animate-fade-in">
      <button
        onClick={onOpenRegister}
        className="px-5 py-3 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white font-orbitron font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(255,23,68,0.6)] active:scale-95 transition-transform"
        aria-label="Register for Martinovation 2026"
      >
        <Sparkles className="w-4 h-4 animate-spin-slow" />
        <span>Register Now</span>
      </button>
    </div>
  );
};
