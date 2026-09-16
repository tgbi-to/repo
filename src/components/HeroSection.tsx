import React from 'react';
import { 
  Shield, 
  ChevronDown, 
  Award, 
  Users, 
  BookOpen, 
  ExternalLink, 
  GitBranch, 
  Copy,
  Check
} from 'lucide-react';
import { Emblem } from './Emblem';
import { ORGANIZATIONAL_INFO, OFFICIAL_LINKS, GITHUB_REPO_URL } from '../data/tgbitoData';
import { useToast } from './Toast';

export const HeroSection: React.FC = () => {
  const { showToast } = useToast();
  const [copiedSec, setCopiedSec] = React.useState(false);

  const handleCopySec = () => {
    navigator.clipboard.writeText(ORGANIZATIONAL_INFO.secRegNumber);
    setCopiedSec(true);
    showToast(`Copied SEC Reg. No. ${ORGANIZATIONAL_INFO.secRegNumber} to clipboard!`, 'success');
    setTimeout(() => setCopiedSec(false), 2000);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#0d233a] via-[#102a45] to-[#0a1827] text-white py-12 sm:py-20 lg:py-24 border-b border-amber-500/20">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#dfb15b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Color Glows matching Philippine flag: Blue & Red & Gold */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0038A8]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C8102E]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Official Repository Logo with Gold Ring */}
        <div className="flex justify-center mb-6">
          <div className="p-1 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-2xl">
            <Emblem size="xl" showBorder={false} />
          </div>
        </div>

        {/* SEC Badge with 1-click copy */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
          <Shield className="w-4 h-4 text-amber-400 shrink-0" />
          <span>SEC Registration No. {ORGANIZATIONAL_INFO.secRegNumber} • Registered: {ORGANIZATIONAL_INFO.secRegDate}</span>
          <button
            onClick={handleCopySec}
            className="ml-1 p-1 hover:bg-amber-400/20 rounded transition-colors text-amber-200 cursor-pointer"
            title="Copy SEC Registration Number"
          >
            {copiedSec ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Main Headings strictly from repo */}
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 uppercase leading-tight">
          {ORGANIZATIONAL_INFO.name}
        </h1>

        <h2 className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-amber-400 tracking-wider mb-4 uppercase">
          {ORGANIZATIONAL_INFO.legalIdentifier}
        </h2>

        {/* Official Motto */}
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic text-amber-200/95 font-medium mb-3 max-w-3xl mx-auto">
          &ldquo;{ORGANIZATIONAL_INFO.motto}&rdquo;
        </blockquote>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans tracking-wide max-w-2xl mx-auto mb-8">
          {ORGANIZATIONAL_INFO.tagline}
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#join"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>How to Join TGBI-TO</span>
            <Users className="w-4 h-4" />
          </a>

          <a
            href="#documents"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#0038A8] hover:bg-[#002d87] text-white font-semibold text-sm sm:text-base shadow-md transition-all transform hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Official Documents</span>
            <BookOpen className="w-4 h-4" />
          </a>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700 transition-all min-h-[44px] flex items-center justify-center gap-2 cursor-pointer"
            title="Official GitHub repository tgbi-to/repo"
          >
            <GitBranch className="w-4 h-4 text-amber-400" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={OFFICIAL_LINKS.inquiryForm}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm sm:text-base shadow-md transition-all min-h-[44px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply Online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
              <Award className="w-4 h-4" />
              <span>Historic Roots (1976)</span>
            </div>
            <p className="text-xs text-slate-300">
              Forged in the jungles of Mindanao as Diablo Squad by Leborio Jangao Jr. (BFG Abraham).
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
              <Shield className="w-4 h-4" />
              <span>Legal Foundation (1984)</span>
            </div>
            <p className="text-xs text-slate-300">
              Officially incorporated under Philippine law with SEC Registration No. 123899.
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
              <Users className="w-4 h-4" />
              <span>Seven Principles</span>
            </div>
            <p className="text-xs text-slate-300">
              Brotherhood, Integrity, Peace, Discipline, Service, Equality, and Justice.
            </p>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="p-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Scroll to About Section"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
