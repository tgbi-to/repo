import React from 'react';
import { Mail, MapPin, Building, ShieldAlert, ExternalLink, MessageSquare, Lightbulb } from 'lucide-react';
import { ORGANIZATIONAL_INFO, OFFICIAL_LINKS } from '../data/tgbitoData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#0038A8]" />
            <span>Official Communications</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out to General Headquarters, the Office of the International Chairman, or use official repository forms.
          </p>
        </div>

        {/* Contact Grid strictly matching repository */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* GHQ Card */}
          <div className="bg-slate-50 border-t-4 border-[#009E5F] border-x border-b border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009E5F] flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2">
              General Headquarters (GHQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-1 mb-4">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                {ORGANIZATIONAL_INFO.ghqAddress.line1}<br />
                {ORGANIZATIONAL_INFO.ghqAddress.city}, {ORGANIZATIONAL_INFO.ghqAddress.zipCode} {ORGANIZATIONAL_INFO.ghqAddress.country}
              </span>
            </p>
            <span className="text-[11px] text-slate-400 uppercase font-semibold">
              Philippines Jurisdiction
            </span>
          </div>

          {/* OIC Card */}
          <div className="bg-slate-50 border-t-4 border-[#0038A8] border-x border-b border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0038A8] flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2">
              Office of the International Chairman
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-1 mb-4">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                {ORGANIZATIONAL_INFO.oicAddress.line1}<br />
                {ORGANIZATIONAL_INFO.oicAddress.city}, {ORGANIZATIONAL_INFO.oicAddress.stateZip}, {ORGANIZATIONAL_INFO.oicAddress.country}
              </span>
            </p>
            <span className="text-[11px] text-slate-400 uppercase font-semibold">
              International Jurisdiction
            </span>
          </div>

          {/* Important Notice Card */}
          <div className="bg-slate-50 border-t-4 border-amber-500 border-x border-b border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2">
              Important Notice
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Internal issues and grievances are handled through the organization&apos;s private grievance machinery and not aired to the public.
            </p>
            <div className="text-xs text-slate-500">
              Email:{' '}
              <a href={`mailto:${ORGANIZATIONAL_INFO.officialEmail}`} className="text-[#0038A8] font-semibold underline">
                {ORGANIZATIONAL_INFO.officialEmail}
              </a>
            </div>
          </div>

        </div>

        {/* Official Repository Interaction Links from CONTACTS.md */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1">
              Official Google Forms &amp; Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct links to authenticated official forms listed in <code className="text-xs bg-slate-200 px-1 py-0.5 rounded">docs/contact/CONTACTS.md</code>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={OFFICIAL_LINKS.contactForm}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0038A8] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#0038A8]" />
                <span className="text-xs font-semibold text-slate-800">Contact Us Form</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={OFFICIAL_LINKS.offerNews}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0038A8] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-slate-800">Offer News Submission</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={OFFICIAL_LINKS.startProject}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0038A8] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-semibold text-slate-800">Start a Project (Idea)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500">
            Executive Secretariat contact: <strong>Oscar Sinco Ozoa</strong> (International Executive Secretary)
          </div>
        </div>

      </div>
    </section>
  );
};
