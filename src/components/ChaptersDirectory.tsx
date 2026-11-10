import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Globe, 
  ExternalLink, 
  Bell, 
  Image as ImageIcon, 
  Video, 
  Search, 
  UserCheck, 
  ShieldCheck, 
  Compass, 
  Anchor, 
  FileText,
  Filter
} from 'lucide-react';
import { ANNOUNCEMENTS, OFFICIAL_GALLERY, OFFICIAL_LINKS } from '../data/tgbitoData';
import { OFFICIAL_CHAPTERS_LIST, OfficialChapter, ChapterScope } from '../data/chaptersData';

export const ChaptersDirectory: React.FC = () => {
  const [activeScope, setActiveScope] = useState<ChapterScope>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<OfficialChapter | null>(null);

  // Filtered chapters list
  const filteredChapters = useMemo(() => {
    return OFFICIAL_CHAPTERS_LIST.filter((ch) => {
      // Scope filter
      if (activeScope === 'international' && ch.category !== 'International') return false;
      if (activeScope === 'local' && ch.category !== 'Local / Regional (Philippines)') return false;

      // Text search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        ch.chapterName.toLowerCase().includes(q) ||
        ch.regionOrCountry.toLowerCase().includes(q) ||
        ch.leadership.toLowerCase().includes(q) ||
        ch.leadershipRole.toLowerCase().includes(q) ||
        ch.jurisdiction.toLowerCase().includes(q) ||
        (ch.notes && ch.notes.toLowerCase().includes(q))
      );
    });
  }, [activeScope, searchQuery]);

  // Statistics
  const intlCount = useMemo(() => OFFICIAL_CHAPTERS_LIST.filter(c => c.category === 'International').length, []);
  const localCount = useMemo(() => OFFICIAL_CHAPTERS_LIST.filter(c => c.category === 'Local / Regional (Philippines)').length, []);

  return (
    <section id="chapters" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Official Global &amp; Domestic Registry</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chapters, Leadership &amp; Announcements
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Official roster of recognized International and Philippine Regional Chapters, charter founders, and registered jurisdictions.
          </p>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0038A8]" />
              <strong>{OFFICIAL_CHAPTERS_LIST.length}</strong> Registered Chapters
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <strong>{intlCount}</strong> International Chapters
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <strong>{localCount}</strong> Regional / Domestic
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Chapters Directory (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Toolbar: Filter Tabs & Search Bar */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                
                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
                  <button
                    onClick={() => setActiveScope('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeScope === 'all'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All Chapters ({OFFICIAL_CHAPTERS_LIST.length})
                  </button>
                  <button
                    onClick={() => setActiveScope('international')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      activeScope === 'international'
                        ? 'bg-white text-[#0038A8] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Globe className="w-3 h-3 text-[#0038A8]" />
                    <span>International ({intlCount})</span>
                  </button>
                  <button
                    onClick={() => setActiveScope('local')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      activeScope === 'local'
                        ? 'bg-white text-red-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span>Local / PH ({localCount})</span>
                  </button>
                </div>

                {/* Register Online CTA */}
                <a
                  href={OFFICIAL_LINKS.registerChapterContacts}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0038A8] hover:text-[#002d87] flex items-center gap-1 self-end sm:self-auto"
                >
                  <span>Register / Update Chapter</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search chapter, regional founder, country or region..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent bg-slate-50/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Chapters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredChapters.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChapter(ch)}
                  className={`bg-white border rounded-2xl p-5 shadow-xs hover:border-[#0038A8] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                    selectedChapter?.id === ch.id ? 'border-[#0038A8] ring-2 ring-blue-100' : 'border-slate-200'
                  }`}
                >
                  <div>
                    {/* Top Tag & Scope */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base leading-none">{ch.flagEmoji || '🏛️'}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          ch.category === 'International' 
                            ? 'bg-blue-50 text-[#0038A8] border border-blue-100' 
                            : 'bg-red-50 text-red-700 border border-red-100'
                        }`}>
                          {ch.regionOrCountry}
                        </span>
                      </div>
                      
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        ch.status === 'Interim Jurisdiction'
                          ? 'bg-amber-100 text-amber-800'
                          : ch.status === 'Special Chapter'
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      }`}>
                        {ch.status}
                      </span>
                    </div>

                    {/* Chapter Name */}
                    <h4 className="font-display font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0038A8] transition-colors">
                      {ch.chapterName}
                    </h4>

                    {/* Leadership Badge */}
                    <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0038A8] flex items-center justify-center shrink-0 mt-0.5">
                        <UserCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">
                          {ch.leadership}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {ch.leadershipRole}
                        </div>
                      </div>
                    </div>

                    {/* Jurisdiction */}
                    <p className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed line-clamp-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{ch.jurisdiction}</span>
                    </p>
                  </div>

                  {/* Notes / Remittance Tag if present */}
                  {ch.notes && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{ch.notes}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredChapters.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">No chapters match your query</h4>
                <p className="text-xs text-slate-500 mt-1">Try another keyword, country name, or reset the search filter.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveScope('all'); }}
                  className="mt-3 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* Chapter Officer Register Notice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <h5 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#0038A8]" />
                  <span>Are you a Chapter Officer or Regional Representative?</span>
                </h5>
                <p className="text-xs text-slate-600">
                  Submit official chapter credentials, officer rosters, or request territorial recognition directly to GHQ.
                </p>
              </div>
              <a
                href={OFFICIAL_LINKS.registerChapterContacts}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0038A8] text-white text-xs font-bold hover:bg-[#002d87] transition-all shadow-xs shrink-0 self-stretch sm:self-auto text-center"
              >
                Register Chapter Online
              </a>
            </div>
          </div>

          {/* Right Column: Announcements, Media & Official Registry Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Official Memos & Remittances */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-600" />
                <span>Official Announcements</span>
              </h3>

              <div className="space-y-3">
                {ANNOUNCEMENTS.map((ann, idx) => (
                  <div
                    key={idx}
                    className="bg-amber-50/60 border-l-4 border-amber-500 border-y border-r border-amber-200/50 rounded-xl p-4 text-xs"
                  >
                    <span className="text-[11px] font-bold text-red-700 uppercase tracking-wide block mb-1">
                      {ann.tag}
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {ann.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Maritime & International Info Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span>Seafarer International Chapter</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">
                Worldwide Fleet Brotherhood
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Led by <strong>SNF Malakas</strong> (Regional Chapter Head), connecting Filipino and international maritime officers across global waters and commercial vessels.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-300">
                <span>Chartered under TGBI-TO</span>
                <span className="font-mono">SNF Malakas</span>
              </div>
            </div>

            {/* Official Photo & Video Media */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <h4 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#0038A8]" />
                <span>Official Media &amp; Gallery</span>
              </h4>

              <div className="space-y-2.5">
                {OFFICIAL_GALLERY.map((media) => (
                  <a
                    key={media.title}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between hover:border-amber-400 hover:bg-white hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        {media.type.includes('Photo') ? <ImageIcon className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs text-slate-900 group-hover:text-[#0038A8] transition-colors leading-tight">
                          {media.title}
                        </h5>
                        {media.subtitle && (
                          <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{media.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0038A8] shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
