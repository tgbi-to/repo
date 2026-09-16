import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Download, 
  BookOpen, 
  Search, 
  ShieldCheck, 
  FolderGit2, 
  Layers, 
  CheckCircle2,
  Share2,
  Sparkles
} from 'lucide-react';
import { OFFICIAL_DOCUMENTS, GITHUB_REPO_URL } from '../data/documentsData';
import { OfficialDocument } from '../types';
import { useToast } from './Toast';

interface DocumentsSectionProps {
  onOpenDocument: (doc: OfficialDocument) => void;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ onOpenDocument }) => {
  const { showToast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Documents', count: OFFICIAL_DOCUMENTS.length },
    { id: 'cbl', label: 'Constitution & By-Laws', count: OFFICIAL_DOCUMENTS.filter(d => d.category === 'cbl').length },
    { id: 'ethics', label: 'Code of Ethics', count: OFFICIAL_DOCUMENTS.filter(d => d.category === 'ethics').length },
    { id: 'history', label: 'History & Archives', count: OFFICIAL_DOCUMENTS.filter(d => d.category === 'history').length },
    { id: 'principles', label: 'Creed & Principles', count: OFFICIAL_DOCUMENTS.filter(d => d.category === 'principles').length },
    { id: 'mbc', label: 'Training (MBC)', count: OFFICIAL_DOCUMENTS.filter(d => d.category === 'mbc').length },
    { id: 'contact', label: 'Contacts Directory', count: OFFICIAL_DOCUMENTS.filter(d => d.category === 'contact').length }
  ];

  const filteredDocuments = useMemo(() => {
    return OFFICIAL_DOCUMENTS.filter((doc) => {
      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        doc.title.toLowerCase().includes(q) ||
        doc.desc.toLowerCase().includes(q) ||
        doc.filename.toLowerCase().includes(q) ||
        doc.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyLink = async (doc: OfficialDocument) => {
    try {
      await navigator.clipboard.writeText(doc.githubUrl);
      showToast(`GitHub link for "${doc.title}" copied!`, 'success');
    } catch {
      showToast('Could not copy link', 'error');
    }
  };

  return (
    <section id="documents" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0038A8]" />
            <span>Official Institutional Repository</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Repository Documents &amp; Archive
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All authenticated historical records, Constitution, By-Laws, Code of Ethics, and training courseware synchronized directly with the official GitHub repository at <code className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-mono text-xs font-semibold">tgbi-to/repo</code>.
          </p>

          {/* Quick Repo Direct Action */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`${GITHUB_REPO_URL}/tree/main/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <FolderGit2 className="w-4 h-4 text-amber-400" />
              <span>Browse docs/ Directory on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>10 Verified Repository Files</span>
            </div>
          </div>
        </div>

        {/* Controls: Search, Filter Tabs, and View Switcher */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Live Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search documents by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0038A8]/20 focus:border-[#0038A8] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-end md:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list' 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                List View
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-3 border-t border-slate-100 pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#0038A8] text-white shadow-sm font-semibold'
                    : 'bg-slate-100/70 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-800 text-base">No documents found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No files match your current search &quot;{searchQuery}&quot;. Try clearing filters or using another keyword.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && filteredDocuments.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#0038A8] border border-blue-100">
                      {doc.categoryLabel}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      doc.format === 'MD' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {doc.format}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#0038A8] flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-[#0038A8] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900 leading-snug group-hover:text-[#0038A8] transition-colors">
                        {doc.title}
                      </h3>
                      <span className="font-mono text-[11px] text-slate-400 block mt-0.5 truncate max-w-[220px]">
                        {doc.filename}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {doc.desc}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenDocument(doc)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0038A8] hover:bg-[#002d87] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs min-h-[40px]"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Online</span>
                    </button>

                    <a
                      href={doc.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200 min-h-[40px]"
                      title="View file in GitHub repository"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>

                    <a
                      href={doc.rawUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={doc.filename}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200 flex items-center justify-center min-h-[40px] min-w-[40px]"
                      title="Download file"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyLink(doc)}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200 flex items-center justify-center min-h-[40px] min-w-[40px] cursor-pointer"
                      title="Copy GitHub link"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && filteredDocuments.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12 divide-y divide-slate-100">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0038A8] transition-colors">
                        {doc.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {doc.categoryLabel}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-blue-50 text-[#0038A8]">
                        {doc.format}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {doc.desc}
                    </p>
                    <span className="font-mono text-[11px] text-slate-400 block mt-0.5">
                      docs/{doc.category}/{doc.filename}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <button
                    onClick={() => onOpenDocument(doc)}
                    className="py-2 px-3 rounded-xl bg-[#0038A8] hover:bg-[#002d87] text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer min-h-[38px]"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read</span>
                  </button>

                  <a
                    href={doc.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-slate-200 min-h-[38px]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={doc.rawUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={doc.filename}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200 min-h-[38px] min-w-[38px] flex items-center justify-center"
                    title="Download raw file"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Callout */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-800">
                Official SEC Registered Fraternity Repository
              </p>
              <p className="text-slate-500 mt-0.5">
                All records adhere to SEC Reg. No. 123899 (Dec 10, 1984) and anti-hazing regulations under Republic Act 8049.
              </p>
            </div>
          </div>

          <a
            href={`${GITHUB_REPO_URL}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border border-slate-200 self-end sm:self-auto cursor-pointer"
          >
            Report Issue / Feedback
          </a>
        </div>

      </div>
    </section>
  );
};
