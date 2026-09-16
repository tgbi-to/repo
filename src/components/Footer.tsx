import React from 'react';
import { Emblem } from './Emblem';
import { ORGANIZATIONAL_INFO, OFFICIAL_LINKS } from '../data/tgbitoData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1827] text-white pt-12 pb-24 sm:pb-12 border-t border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Official Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Emblem size="md" />
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                  {ORGANIZATIONAL_INFO.name}
                </h3>
                <p className="font-display text-xs text-amber-400 font-semibold tracking-wider">
                  {ORGANIZATIONAL_INFO.legalIdentifier}
                </p>
                <p className="text-[11px] text-slate-400">
                  SEC Registration No. {ORGANIZATIONAL_INFO.secRegNumber} • December 10, 1984
                </p>
              </div>
            </div>

            <blockquote className="font-serif italic text-xs sm:text-sm text-slate-300 max-w-md">
              &ldquo;{ORGANIZATIONAL_INFO.motto}&rdquo;
            </blockquote>

            <p className="text-xs text-amber-300/90 font-medium">
              {ORGANIZATIONAL_INFO.closingTagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Organization
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About TGBI-TO</a></li>
              <li><a href="#mission" className="hover:text-amber-400 transition-colors">Mission &amp; 8 Vision Pillars</a></li>
              <li><a href="#principles" className="hover:text-amber-400 transition-colors">7 Guiding Principles</a></li>
              <li><a href="#creed-prayer" className="hover:text-amber-400 transition-colors">Official Creed &amp; Prayer</a></li>
              <li><a href="#ethics" className="hover:text-amber-400 transition-colors">Code of Ethics</a></li>
              <li><a href="#history" className="hover:text-amber-400 transition-colors">History &amp; Lineage</a></li>
              <li><a href="#structure" className="hover:text-amber-400 transition-colors">Structure &amp; Leadership</a></li>
            </ul>
          </div>

          {/* Official Forms & Contacts */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Official Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href={OFFICIAL_LINKS.inquiryForm} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Membership Inquiry Form
                </a>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.contactForm} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Official Contact Form
                </a>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.registerChapterContacts} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Register Chapter Contacts
                </a>
              </li>
              <li>
                <a href="mailto:theguardiansv@gmail.com" className="hover:text-amber-400 transition-colors">
                  theguardiansv@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar strictly matching repository footer */}
        <div className="pt-6 text-center text-xs text-slate-400 space-y-1">
          <p>
            &copy; 2026 {ORGANIZATIONAL_INFO.name} - {ORGANIZATIONAL_INFO.legalIdentifier}. All rights reserved.
          </p>
          <p className="text-amber-400/80 italic font-serif text-[11px]">
            {ORGANIZATIONAL_INFO.closingTagline}
          </p>
        </div>

      </div>
    </footer>
  );
};
