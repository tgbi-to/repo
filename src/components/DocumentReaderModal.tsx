import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { OfficialDocument } from '../types';
import { useToast } from './Toast';

interface DocumentReaderModalProps {
  document: OfficialDocument | null;
  onClose: () => void;
  onSelectDocument?: (doc: OfficialDocument) => void;
  allDocuments?: OfficialDocument[];
}

export const DocumentReaderModal: React.FC<DocumentReaderModalProps> = ({
  document,
  onClose,
  onSelectDocument,
  allDocuments = []
}) => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!document) return null;

  const handleCopyText = async () => {
    if (!document.readContent) return;
    try {
      await navigator.clipboard.writeText(document.readContent);
      setCopied(true);
      showToast('Document text copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Unable to copy text', 'error');
    }
  };

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(document.githubUrl);
      showToast('GitHub document link copied!', 'success');
    } catch {
      showToast('Unable to copy link', 'error');
    }
  };

  const fontSizeClass = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    xlarge: 'text-lg sm:text-xl leading-loose'
  }[fontSize];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0d233a] text-white px-5 py-4 border-b border-amber-400/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {document.categoryLabel}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {document.format}
                </span>
                {document.dateOrVersion && (
                  <span className="text-[10px] text-slate-300 hidden sm:inline">
                    • {document.dateOrVersion}
                  </span>
                )}
              </div>
              <h2 className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                {document.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 shrink-0">
          {/* In-Doc Search */}
          <div className="relative flex-1 min-w-[180px] max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in document..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0038A8]"
            />
          </div>

          {/* Controls: Zoom, Copy, GitHub, Download */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Font size toggle */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 text-xs font-semibold rounded ${fontSize === 'normal' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 text-sm font-semibold rounded ${fontSize === 'large' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
              title="Copy text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleShareLink}
              className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
              title="Copy GitHub Link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <a
              href={document.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#0038A8] hover:bg-[#002d87] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Open file in GitHub repository"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={document.rawUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={document.filename}
              className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Download file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-slate-50/50">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm font-sans text-slate-800">
            {/* File Info Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Audited Institutional Document</span>
              </div>
              <span className="font-mono text-slate-400">
                docs/{document.category}/{document.filename}
              </span>
            </div>

            {/* Rendered Text */}
            <div className={`prose max-w-none ${fontSizeClass} text-slate-800 whitespace-pre-wrap`}>
              {document.readContent}
            </div>
          </div>
        </div>

        {/* Footer with document quick switcher */}
        {allDocuments.length > 1 && onSelectDocument && (
          <div className="bg-slate-100 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 text-xs text-slate-600 shrink-0 overflow-x-auto">
            <span className="font-semibold text-slate-700 whitespace-nowrap">Other Documents:</span>
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {allDocuments
                .filter((d) => d.id !== document.id)
                .slice(0, 4)
                .map((d) => (
                  <button
                    key={d.id}
                    onClick={() => onSelectDocument(d)}
                    className="px-2.5 py-1 bg-white hover:bg-blue-50 text-slate-700 hover:text-[#0038A8] border border-slate-200 rounded-lg whitespace-nowrap font-medium text-[11px] transition-colors cursor-pointer"
                  >
                    {d.title}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
