import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  MapPin, 
  Building, 
  Award, 
  GitBranch, 
  UserCheck, 
  Crown, 
  Scale, 
  FileCheck,
  Search,
  ExternalLink
} from 'lucide-react';
import { LEADERSHIP_DATA, ORGANIZATIONAL_INFO, BOARD_OF_DIRECTORS, OFFICIAL_DOCUMENTS } from '../data/tgbitoData';

export const LeadershipSection: React.FC = () => {
  const [boardSearch, setBoardSearch] = useState('');

  const structureLevels = [
    { level: 1, name: 'International Headquarters', desc: 'Philippines (GHQ) & USA (OIC)', highlight: true },
    { level: 2, name: 'Guardians Supreme Council (GSC)', desc: 'Supreme governing policy and oversight body' },
    { level: 3, name: 'Regional Chapters', desc: 'Philippines regions and International jurisdictions' },
    { level: 4, name: 'Provincial Chapters', desc: 'Provincial council leadership and coordination' },
    { level: 5, name: 'Municipal / City Chapters', desc: 'City level chapters and membership committees' },
    { level: 6, name: 'Barangay Chapters', desc: 'Grassroots community service units' }
  ];

  const filteredBoard = BOARD_OF_DIRECTORS.filter((member) => {
    if (!boardSearch.trim()) return true;
    const q = boardSearch.toLowerCase();
    return (
      member.name.toLowerCase().includes(q) ||
      member.callSign.toLowerCase().includes(q) ||
      member.role.toLowerCase().includes(q)
    );
  });

  const chairman = BOARD_OF_DIRECTORS.find(m => m.isChairman);
  const officersAndDirectors = filteredBoard.filter(m => !m.isChairman);

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Governance &amp; Board Secretariat</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Structure, Leadership &amp; Board of Directors
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Official hierarchy, executive officers, and the Board of Directors serving TGBI - The Original worldwide under SEC Reg. No. 123899.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TGBI-TO BOARD OF DIRECTORS (BoD) SECTION                                  */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <Crown className="w-3.5 h-3.5 text-amber-600" />
                <span>Supreme Governing Body</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-2">
                <span>TGBI-TO Board of Directors (BoD)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Governing Board as recorded in official meeting records, Magna Carta, and Board Resolutions.
              </p>
            </div>

            {/* Quick Search for BoD */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={boardSearch}
                onChange={(e) => setBoardSearch(e.target.value)}
                placeholder="Search director, call sign, role..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
              />
              {boardSearch && (
                <button
                  onClick={() => setBoardSearch('')}
                  className="absolute right-2.5 top-1.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* 1. Chairman Card (Prominent Header Card) */}
          {chairman && (!boardSearch || filteredBoard.some(m => m.isChairman)) && (
            <div className="mb-6 bg-gradient-to-br from-[#0d233a] via-[#0038A8] to-[#00246b] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-400/40 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-display font-black text-2xl shadow-lg shrink-0 border-2 border-amber-300">
                    <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold uppercase tracking-wider mb-1">
                      <span>Head of the Board of Directors</span>
                    </div>
                    <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                      {chairman.name}
                    </h4>
                    <div className="text-amber-300 font-bold text-sm sm:text-base flex items-center gap-2 mt-0.5">
                      <span>&ldquo;{chairman.callSign}&rdquo;</span>
                      <span className="text-white/60 text-xs font-normal">| {chairman.prefix}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">
                      {chairman.role} • Original 1984 Incorporator
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-xs text-white text-[11px] font-semibold border border-white/15">
                    <Shield className="w-3 h-3 text-amber-400" />
                    <span>Presiding Officer / Chairman BoD</span>
                  </span>
                  <span className="text-[11px] text-slate-300">
                    S.E.C. Registration No. 123899 (Dec 10, 1984)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Board Directors Grid (1 to 12) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {officersAndDirectors.map((director) => {
              const isOfficer = director.order <= 5;
              return (
                <div
                  key={director.order}
                  className={`rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                    isOfficer
                      ? 'bg-white border-blue-200/80 shadow-xs hover:border-[#0038A8] hover:shadow-md'
                      : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    {/* Top order tag & title */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                          isOfficer ? 'bg-[#0038A8] text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {director.order}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          director.role.includes('IVCA') || director.role.includes('IVCO')
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : director.role.includes('Secretary')
                            ? 'bg-blue-50 text-[#0038A8] border border-blue-100'
                            : director.role.includes('Legal')
                            ? 'bg-purple-50 text-purple-800 border border-purple-200'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {director.role.includes('Director') ? director.role.split('(')[0].trim() : 'Director'}
                        </span>
                      </div>

                      {director.role.includes('Legal') ? (
                        <Scale className="w-4 h-4 text-purple-600 shrink-0" />
                      ) : director.role.includes('Secretary') ? (
                        <FileCheck className="w-4 h-4 text-[#0038A8] shrink-0" />
                      ) : (
                        <UserCheck className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </div>

                    {/* Full Name & Call Sign */}
                    <h4 className="font-display font-bold text-slate-900 text-base leading-tight mb-1">
                      {director.name}
                    </h4>

                    {/* Call Sign Tag */}
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0038A8] bg-blue-50/80 px-2 py-0.5 rounded-md mb-2.5">
                      <span>&ldquo;{director.callSign}&rdquo;</span>
                    </div>

                    {/* Role Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {director.role}
                    </p>
                  </div>

                  {/* Footer status */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>TGBI-TO BoD Member</span>
                    <span className="font-mono">#{director.order}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredBoard.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 p-6">
              <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No board member found matching &ldquo;{boardSearch}&rdquo;</p>
              <button
                onClick={() => setBoardSearch('')}
                className="mt-2 text-xs text-[#0038A8] font-bold underline"
              >
                Clear search filter
              </button>
            </div>
          )}

          {/* Reference Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Ratified and verified in the official <strong>Board of Directors Meeting Minutes &amp; Resolutions</strong> (24 October 2026).
              </span>
            </div>
            <a
              href="#documents"
              className="text-[#0038A8] hover:text-[#002d87] font-semibold text-xs inline-flex items-center gap-1 shrink-0"
            >
              <span>View BoD Minutes &amp; Resolutions in Archive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ORGANIZATIONAL STRUCTURE HIERARCHY (LEVELS 1-6)                           */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-5 h-5 text-[#0038A8]" />
            <h3 className="font-display font-bold text-xl text-slate-900">
              Organizational Structure &amp; Levels
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {structureLevels.map((lvl) => (
              <div
                key={lvl.level}
                className={`p-5 rounded-2xl border transition-all ${
                  lvl.highlight
                    ? 'bg-gradient-to-br from-[#0d233a] to-[#0038A8] text-white border-amber-400/40 shadow-md'
                    : 'bg-white border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    lvl.highlight ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Level {lvl.level}
                  </span>
                </div>
                <h4 className={`font-display font-bold text-base sm:text-lg mb-1 ${lvl.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {lvl.name}
                </h4>
                <p className={`text-xs sm:text-sm ${lvl.highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                  {lvl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOUNDING & INTERNATIONAL EXECUTIVE LEADERSHIP ROSTER                      */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-600" />
            <h3 className="font-display font-bold text-xl text-slate-900">
              Pioneer &amp; Executive Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_DATA.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center mb-4 border border-blue-100">
                    <Shield className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0038A8] block mb-1">
                    {leader.role}
                  </span>
                  
                  <h4 className="font-display font-bold text-lg text-slate-900 leading-tight mb-2">
                    {leader.name}
                  </h4>

                  <span className="text-xs font-semibold text-amber-600 block mb-3">
                    {leader.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OFFICIAL HEADQUARTERS CARDS                                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center shrink-0 border border-blue-100">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0038A8] block">
                Philippines Jurisdiction
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900">
                General Headquarters (GHQ)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-start gap-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  {ORGANIZATIONAL_INFO.ghqAddress.line1}, {ORGANIZATIONAL_INFO.ghqAddress.city}, {ORGANIZATIONAL_INFO.ghqAddress.zipCode} {ORGANIZATIONAL_INFO.ghqAddress.country}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                International Jurisdiction
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900">
                Office of the International Chairman (OIC)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-start gap-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  {ORGANIZATIONAL_INFO.oicAddress.line1}, {ORGANIZATIONAL_INFO.oicAddress.city}, {ORGANIZATIONAL_INFO.oicAddress.stateZip}, {ORGANIZATIONAL_INFO.oicAddress.country}
                </span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
