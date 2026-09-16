import React from 'react';
import { Home, Shield, FileText, UserPlus, Search } from 'lucide-react';

interface MobileBottomBarProps {
  activeSection: string;
  onOpenSearch?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ activeSection, onOpenSearch }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-lg border-t border-amber-500/30 py-1 px-2 shadow-2xl">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        <button
          onClick={() => scrollTo('home')}
          className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeSection === 'home' ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-0.5">Home</span>
        </button>

        <button
          onClick={() => scrollTo('about')}
          className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeSection === 'about' ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="About"
        >
          <Shield className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-0.5">About</span>
        </button>

        <button
          onClick={() => scrollTo('documents')}
          className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeSection === 'documents' ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Documents"
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-0.5">Docs</span>
        </button>

        {onOpenSearch && (
          <button
            onClick={onOpenSearch}
            className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] py-1 px-2 rounded-xl text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-amber-300" />
            <span className="text-[10px] tracking-tight mt-0.5">Search</span>
          </button>
        )}

        <button
          onClick={() => scrollTo('join')}
          className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] py-1 px-2 rounded-xl text-amber-300 font-bold transition-colors cursor-pointer"
          aria-label="Join Us"
        >
          <div className="bg-amber-400/20 px-2.5 py-0.5 rounded-full text-amber-300">
            <UserPlus className="w-4 h-4" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5">Join</span>
        </button>
      </div>
    </nav>
  );
};
