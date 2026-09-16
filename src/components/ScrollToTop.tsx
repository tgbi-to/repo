import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(progress);
        setIsVisible(totalScroll > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-40 p-3 bg-slate-900 text-white hover:bg-[#0038A8] border border-amber-400/40 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group flex items-center justify-center min-h-[44px] min-w-[44px]"
      title={`Back to top (${Math.round(scrollProgress)}%)`}
    >
      {/* SVG Ring Progress */}
      <svg className="w-9 h-9 -rotate-90 pointer-events-none absolute" viewBox="0 0 36 36">
        <path
          className="text-slate-700"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-amber-400 transition-all duration-100"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <ArrowUp className="w-4 h-4 text-amber-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
    </button>
  );
};
