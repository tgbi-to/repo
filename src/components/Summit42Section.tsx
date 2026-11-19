import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Maximize2,
  X,
  Clock,
  Award
} from 'lucide-react';
import { SUMMIT_42_INFO } from '../data/tgbitoData';

export const Summit42Section: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  // Base URL aware path for GitHub Pages subfolder support (/repo/)
  const envBase = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || './';
  const basePath = envBase.endsWith('/') ? envBase : `${envBase}/`;
  const posterSrc = `${basePath}assets/aistudio/913275585_1657983775724207_3654643030254968495_n_32496322.jpg`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPosterOpen) {
        setIsPosterOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPosterOpen]);

  return (
    <section
      id="summit-42"
      className="py-16 sm:py-24 bg-[#FBF9F5] text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-3">
            42nd Founding Anniversary &amp; Summit <span aria-hidden="true">·</span> December 12–13, 2026 <span aria-hidden="true">·</span> Dumaguete City
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
            &ldquo;{SUMMIT_42_INFO.theme}&rdquo;
          </h2>
          <p className="mt-3 font-serif italic text-lg sm:text-xl text-slate-700">
            {SUMMIT_42_INFO.subtitle}
          </p>
        </div>

        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Official Invitation Poster */}
          <div className="lg:col-span-5">
            <figure className="bg-[#0d233a] p-3 rounded-2xl shadow-lg border border-slate-300/60">
              {!imgError ? (
                <button
                  type="button"
                  onClick={() => setIsPosterOpen(true)}
                  className="relative block w-full overflow-hidden rounded-xl group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-label="Enlarge 42nd Founding Anniversary invitation poster"
                >
                  <img
                    src={posterSrc}
                    alt="Official Invitation Poster for TGBI-TO 42nd Founding Anniversary and Summit in Dumaguete City, December 12-13, 2026"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 text-white text-xs font-semibold backdrop-blur-xs border border-white/15">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>View Full Poster</span>
                  </span>
                </button>
              ) : (
                <div className="aspect-[2/3] w-full rounded-xl bg-gradient-to-b from-[#0d233a] via-[#102a45] to-[#0a1827] text-white p-8 flex flex-col items-center justify-center text-center border border-amber-400/30">
                  <Award className="w-12 h-12 text-amber-400 mb-4" />
                  <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-2">
                    Official Invitation
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-white mb-2">
                    42nd Founding Anniversary
                  </h3>
                  <p className="font-serif italic text-amber-200 text-base mb-4">
                    &ldquo;{SUMMIT_42_INFO.theme}&rdquo;
                  </p>
                  <p className="text-xs text-slate-300">
                    {SUMMIT_42_INFO.dates} · {SUMMIT_42_INFO.primaryVenue}, {SUMMIT_42_INFO.hostCity}
                  </p>
                </div>
              )}
              <figcaption className="mt-3 px-1 pb-1 text-xs font-serif italic text-slate-300 flex items-center justify-between gap-2">
                <span>Official Summit Invitation · Host: {SUMMIT_42_INFO.hostChapter}</span>
                <span className="font-sans not-italic text-[11px] text-amber-300 font-semibold whitespace-nowrap">
                  {SUMMIT_42_INFO.mantra}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Right Column: Event Overview, Schedule & Official T-Shirt Order */}
          <div className="lg:col-span-7 space-y-8">
            {/* Invitation Prose */}
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>{SUMMIT_42_INFO.invitationLead}</p>
              <p className="text-slate-600">
                {SUMMIT_42_INFO.closingNote}
              </p>
            </div>

            {/* Key Logistics Definition List */}
            <dl className="border-y border-slate-200 divide-y divide-slate-200 text-sm">
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="font-semibold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0038A8] shrink-0" />
                  <span>Dates</span>
                </dt>
                <dd className="sm:col-span-2 text-slate-700 tabular-nums">
                  <strong className="text-slate-900">{SUMMIT_42_INFO.dates}</strong>{' '}
                  <span className="text-slate-500">
                    (Early arrivals starting {SUMMIT_42_INFO.earlyArrivals})
                  </span>
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="font-semibold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Host Chapter</span>
                </dt>
                <dd className="sm:col-span-2 text-slate-700">
                  <strong className="text-slate-900">{SUMMIT_42_INFO.hostChapter}</strong>{' '}
                  <span className="text-slate-500">· {SUMMIT_42_INFO.hostCity}</span>
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="font-semibold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Venues</span>
                </dt>
                <dd className="sm:col-span-2 text-slate-700 space-y-1">
                  <div>
                    <strong className="text-slate-900">{SUMMIT_42_INFO.primaryVenue}</strong>{' '}
                    <span className="text-slate-500">(Daytime Summit &amp; Assembly)</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">{SUMMIT_42_INFO.eveningVenue}</strong>{' '}
                    <span className="text-slate-500">(Evening Program &amp; Commander&apos;s Time)</span>
                  </div>
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="font-semibold text-slate-900">Formal Attire</dt>
                <dd className="sm:col-span-2 text-slate-700">{SUMMIT_42_INFO.attire}</dd>
              </div>
            </dl>

            {/* 2-Day Program Highlights */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Summit Program Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SUMMIT_42_INFO.schedule.map((dayBlock) => (
                  <div
                    key={dayBlock.day}
                    className="bg-white border border-slate-200 rounded-xl p-5 space-y-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0038A8]">
                      {dayBlock.day}
                    </div>
                    <div className="space-y-3 divide-y divide-slate-100">
                      {dayBlock.sessions.map((session) => (
                        <div key={session.title} className="pt-2.5 first:pt-0">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-800 tabular-nums">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{session.time}</span>
                          </div>
                          <div className="font-semibold text-sm text-slate-900 mt-1">
                            {session.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {session.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full-Size Poster Lightbox Modal */}
      {isPosterOpen && !imgError && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsPosterOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="42nd Founding Anniversary Official Poster"
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPosterOpen(false)}
              className="self-end mb-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer min-h-[40px]"
              aria-label="Close poster view"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
            <img
              src={posterSrc}
              alt="Official Invitation Poster for TGBI-TO 42nd Founding Anniversary and Summit"
              referrerPolicy="no-referrer"
              className="max-h-[82vh] w-auto rounded-xl shadow-2xl border border-amber-400/40 object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
