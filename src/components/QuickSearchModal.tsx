import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  FileText, 
  ExternalLink, 
  Compass, 
  BookOpen, 
  Shield, 
  Users, 
  Mail,
  GitBranch
} from 'lucide-react';
import { OFFICIAL_DOCUMENTS, GITHUB_REPO_URL } from '../data/documentsData';
import { OFFICIAL_LINKS, ORGANIZATIONAL_INFO } from '../data/tgbitoData';
import { OfficialDocument } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDocument: (doc: OfficialDocument) => void;
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Section' | 'Document' | 'Form' | 'Contact' | 'Fact';
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onOpenDocument
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle handled outside or here
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateToSection = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const searchItems: SearchItem[] = [
    // Sections
    {
      id: 'sec-about',
      title: 'About TGBI-TO',
      subtitle: 'History, legal identity, SEC Reg. 123899, and acronym meaning',
      category: 'Section',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      action: () => navigateToSection('about'),
      keywords: ['about', 'identity', 'sec', '123899', 'history', 'acronym', 'meaning']
    },
    {
      id: 'sec-principles',
      title: 'The 7 Guiding Principles',
      subtitle: 'Brotherhood, Integrity, Peace, Justice, Equality, Discipline, Service',
      category: 'Section',
      icon: <Compass className="w-4 h-4 text-amber-600" />,
      action: () => navigateToSection('principles'),
      keywords: ['principles', 'seven', 'brotherhood', 'integrity', 'peace', 'justice', 'equality', 'discipline', 'service']
    },
    {
      id: 'sec-creed',
      title: 'Creed, Prayer & Hymn',
      subtitle: 'Liturgical Creed, spiritual Prayer, and Tropang Guardians Hymn',
      category: 'Section',
      icon: <BookOpen className="w-4 h-4 text-emerald-600" />,
      action: () => navigateToSection('creed-prayer-song'),
      keywords: ['creed', 'prayer', 'song', 'hymn', 'anthem', 'tropang guardians', 'lyrics']
    },
    {
      id: 'sec-ethics',
      title: 'Code of Ethics',
      subtitle: 'Duties, honorable conduct, and personal responsibility of members',
      category: 'Section',
      icon: <Shield className="w-4 h-4 text-purple-600" />,
      action: () => navigateToSection('ethics'),
      keywords: ['ethics', 'conduct', 'code', 'moral', 'rules', 'responsibility']
    },
    {
      id: 'sec-history',
      title: 'Historical Timeline',
      subtitle: '1976 Diablo Squad to 1984 SEC registration and modern chapters',
      category: 'Section',
      icon: <BookOpen className="w-4 h-4 text-indigo-600" />,
      action: () => navigateToSection('history'),
      keywords: ['history', 'diablo', '1976', '1984', 'carlomagno', 'abraham', 'origins']
    },
    {
      id: 'sec-documents',
      title: 'Documents Archive',
      subtitle: 'Verified Constitution, By-Laws, MBC courseware, and records',
      category: 'Section',
      icon: <FileText className="w-4 h-4 text-blue-600" />,
      action: () => navigateToSection('documents'),
      keywords: ['documents', 'cbl', 'by-laws', 'mbc', 'course', 'pdf', 'word', 'archive']
    },
    {
      id: 'sec-chapters',
      title: 'Chapters Directory',
      subtitle: 'NCR, Luzon, Visayas, Mindanao, and International Chapters',
      category: 'Section',
      icon: <Users className="w-4 h-4 text-emerald-600" />,
      action: () => navigateToSection('chapters'),
      keywords: ['chapters', 'regions', 'directory', 'ncr', 'brunei', 'qatar', 'cebu', 'downey']
    },
    {
      id: 'sec-join',
      title: 'Join TGBI-TO / Pre-Membership',
      subtitle: '6-Stage recruitment process, qualifications, and application',
      category: 'Section',
      icon: <Users className="w-4 h-4 text-amber-600" />,
      action: () => navigateToSection('join'),
      keywords: ['join', 'apply', 'membership', 'stages', 'mbc', 'bi', 'recruitment', 'sponsor']
    },
    {
      id: 'sec-contact',
      title: 'Official GHQ & Contacts',
      subtitle: 'Quezon City headquarters, international secretariat, and forms',
      category: 'Section',
      icon: <Mail className="w-4 h-4 text-rose-600" />,
      action: () => navigateToSection('contact'),
      keywords: ['contact', 'email', 'address', 'ghq', 'quezon city', 'oscar ozoa']
    },

    // Repository
    {
      id: 'repo-main',
      title: 'Official GitHub Repository (tgbi-to/repo)',
      subtitle: 'https://github.com/tgbi-to/repo — source code, docs, and releases',
      category: 'Document',
      icon: <GitBranch className="w-4 h-4 text-slate-800" />,
      action: () => openUrl(GITHUB_REPO_URL),
      keywords: ['github', 'repository', 'repo', 'source', 'tgbi-to', 'git', 'pull']
    },

    // Documents
    ...OFFICIAL_DOCUMENTS.map((doc) => ({
      id: `doc-${doc.id}`,
      title: doc.title,
      subtitle: `${doc.categoryLabel} • ${doc.filename}`,
      category: 'Document' as const,
      icon: <FileText className="w-4 h-4 text-[#0038A8]" />,
      action: () => {
        onClose();
        onOpenDocument(doc);
      },
      keywords: [
        doc.title.toLowerCase(),
        doc.filename.toLowerCase(),
        doc.category.toLowerCase(),
        doc.type.toLowerCase(),
        'document',
        'read'
      ]
    })),

    // Forms
    {
      id: 'form-apply',
      title: 'Online Membership Application Form',
      subtitle: 'Official Google Form for prospective members and sponsors',
      category: 'Form',
      icon: <ExternalLink className="w-4 h-4 text-amber-600" />,
      action: () => openUrl(OFFICIAL_LINKS.inquiryForm),
      keywords: ['form', 'application', 'google form', 'apply online', 'membership form']
    },
    {
      id: 'form-id-cert',
      title: 'Official ID & Certificate Issuance Form',
      subtitle: 'National ID and Certificate of Membership processing',
      category: 'Form',
      icon: <ExternalLink className="w-4 h-4 text-amber-600" />,
      action: () => openUrl(OFFICIAL_LINKS.idAndCertForm),
      keywords: ['id', 'certificate', 'card', 'issuance', 'verification']
    },
    {
      id: 'form-register-chapter',
      title: 'Register Chapter Contacts',
      subtitle: 'Submit chapter officers and communication lines to GHQ',
      category: 'Form',
      icon: <ExternalLink className="w-4 h-4 text-emerald-600" />,
      action: () => openUrl(OFFICIAL_LINKS.registerChapterContacts),
      keywords: ['register', 'chapter', 'directory update', 'officers submission']
    },

    // Key facts
    {
      id: 'fact-sec',
      title: `SEC Registration: ${ORGANIZATIONAL_INFO.secRegNumber}`,
      subtitle: `Incorporated: ${ORGANIZATIONAL_INFO.secRegDate} • Securities and Exchange Commission`,
      category: 'Fact',
      icon: <Shield className="w-4 h-4 text-emerald-600" />,
      action: () => navigateToSection('about'),
      keywords: ['sec', '123899', 'registration', 'legal', 'incorporation', 'december 10 1984']
    },
    {
      id: 'fact-ghq',
      title: 'General Headquarters (GHQ)',
      subtitle: `${ORGANIZATIONAL_INFO.ghqAddress.line1}, ${ORGANIZATIONAL_INFO.ghqAddress.city}, Philippines`,
      category: 'Fact',
      icon: <Mail className="w-4 h-4 text-blue-600" />,
      action: () => navigateToSection('contact'),
      keywords: ['ghq', 'headquarters', 'bago bantay', 'quezon city', 'address', 'location']
    }
  ];

  const filteredItems = query.trim()
    ? searchItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.includes(q))
        );
      })
    : searchItems.slice(0, 8);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative p-4 border-b border-slate-100 flex items-center bg-white">
          <Search className="w-5 h-5 text-slate-400 absolute left-6 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search documents, By-Laws, forms, history, contacts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full pl-12 pr-10 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No results found for &ldquo;<span className="font-semibold text-slate-800">{query}</span>&rdquo;.
              <div className="mt-2 text-xs text-slate-400">
                Try searching for &quot;By-Laws&quot;, &quot;Ethics&quot;, &quot;Creed&quot;, &quot;MBC&quot;, or &quot;Join&quot;.
              </div>
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-left flex items-start gap-3 cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm border border-slate-200/60 shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-900 group-hover:text-[#0038A8] transition-colors truncate">
                      {item.title}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Navigate portal repository: <strong>tgbi-to/repo</strong></span>
          <span className="hidden sm:inline">Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
