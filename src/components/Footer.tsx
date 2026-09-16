import React from 'react';
import { Emblem } from './Emblem';
import { ORGANIZATIONAL_INFO, OFFICIAL_LINKS, GITHUB_REPO_URL } from '../data/tgbitoData';
import { GitBranch, ExternalLink, Mail, Copy, Check } from 'lucide-react';
import { useToast } from './Toast';

export const Footer: React.FC = () => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ORGANIZATIONAL_INFO.officialEmail);
    setCopiedEmail(true);
    showToast(`Copied ${ORGANIZATIONAL_INFO.officialEmail} to clipboard!`, 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-[#0a1827] text-white pt-12 pb-24 sm:pb-12 border-t border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Official Brand Info */}
          <div className="md:col-span-5 space-y-4">
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

            <p className="text-xs text-amber-300/90 font-medium leading-relaxed">
              {ORGANIZATIONAL_INFO.closingTagline}
            </p>

            {/* GitHub Repo Badge */}
            <div className="pt-2">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:border-amber-400/50 transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                <span>github.com/tgbi-to/repo</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
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
              <li><a href="#creed-prayer-song" className="hover:text-amber-400 transition-colors">Official Creed, Prayer &amp; Hymn</a></li>
              <li><a href="#ethics" className="hover:text-amber-400 transition-colors">Code of Ethics</a></li>
              <li><a href="#history" className="hover:text-amber-400 transition-colors">History &amp; Lineage</a></li>
              <li><a href="#documents" className="hover:text-amber-400 transition-colors">Documents &amp; By-Laws</a></li>
              <li><a href="#chapters" className="hover:text-amber-400 transition-colors">Chapters Directory</a></li>
            </ul>
          </div>

          {/* Official Forms & Repository */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Official Links &amp; Repository
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href={OFFICIAL_LINKS.inquiryForm} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Membership Application Form</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.idAndCertForm} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>National ID &amp; Certificate Form</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.registerChapterContacts} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Register Chapter Contacts</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href={`${GITHUB_REPO_URL}/tree/main/docs`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>GitHub Repository docs/ Folder</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href={`${GITHUB_REPO_URL}/issues`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>GitHub Issues &amp; Contributions</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-2 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${ORGANIZATIONAL_INFO.officialEmail}`} className="hover:text-amber-400 transition-colors">
                  {ORGANIZATIONAL_INFO.officialEmail}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-slate-400 space-y-1.5">
          <p>
            &copy; 2026 {ORGANIZATIONAL_INFO.name} - {ORGANIZATIONAL_INFO.legalIdentifier}. SEC Registration No. {ORGANIZATIONAL_INFO.secRegNumber}.
          </p>
          <p className="text-slate-500 text-[11px]">
            Official Repository: <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 underline font-mono">https://github.com/tgbi-to/repo</a>
          </p>
          <p className="text-amber-400/80 italic font-serif text-[11px] pt-1">
            {ORGANIZATIONAL_INFO.closingTagline}
          </p>
        </div>

      </div>
    </footer>
  );
};
