import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  CheckCircle2, 
  Shield, 
  ExternalLink, 
  Send, 
  Check, 
  Copy, 
  Download, 
  Mail, 
  Phone, 
  Clock, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { JOINING_PROCESS, OFFICIAL_LINKS, ORGANIZATIONAL_INFO, REGIONS_DATA } from '../data/tgbitoData';
import { useToast } from './Toast';

interface InquiryRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  preferredRegion: string;
  sponsor: string;
  message: string;
  timestamp: string;
  status: 'Submitted' | 'Under Review';
}

const STORAGE_KEY = 'tgbi_saved_inquiries';

export const JoinUsSection: React.FC<{ isModal?: boolean; onClose?: () => void }> = ({ isModal = false, onClose }) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    preferredRegion: 'National Capital Region (NCR)',
    sponsor: '',
    message: '',
    agreedToCode: false
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<InquiryRecord | null>(null);
  const [pastInquiries, setPastInquiries] = useState<InquiryRecord[]>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');

  // Load past inquiries from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setPastInquiries(parsed);
        }
      }
    } catch {
      // Fallback gracefully
    }
  }, []);

  const generateReferenceId = () => {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `TGBI-INQ-${dateStr}-${rand}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToCode) {
      showToast('Please check the affirmation acknowledging the 7 Principles and R.A. 8049.', 'error');
      return;
    }

    const newRecord: InquiryRecord = {
      id: generateReferenceId(),
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      location: formData.location.trim(),
      preferredRegion: formData.preferredRegion,
      sponsor: formData.sponsor.trim() || 'Open Application (Seeking Local Sponsor)',
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      status: 'Submitted'
    };

    // Save to state and localStorage
    const updated = [newRecord, ...pastInquiries];
    setPastInquiries(updated);
    setSubmittedInquiry(newRecord);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Handle quota
    }

    showToast(`Inquiry #${newRecord.id} generated and recorded!`, 'success');
  };

  const getEmailUrl = (record: InquiryRecord) => {
    const subject = encodeURIComponent(`[TGBI-TO Membership Inquiry] ${record.fullName} (${record.id})`);
    const body = encodeURIComponent(
      `OFFICIAL MEMBERSHIP INQUIRY
The Guardians Brotherhood, Inc. - The Original (TGBI-TO)
SEC Registration No. ${ORGANIZATIONAL_INFO.secRegNumber}
Reference No.: ${record.id}
Date Submitted: ${record.timestamp}

APPLICANT INFORMATION:
- Full Name: ${record.fullName}
- Email: ${record.email}
- Contact / Mobile: ${record.phone}
- Current Residence / Location: ${record.location}
- Preferred Region / Chapter: ${record.preferredRegion}
- Sponsoring Member: ${record.sponsor}

STATEMENT OF INTENT & BACKGROUND:
${record.message}

AFFIRMATION:
The applicant affirms willingness to submit to the 6-Stage Process, undergo Background Investigation (BI), complete the 12-hour Mandatory Basic Course (MBC), uphold the 7 Guiding Principles, and strictly respect Republic Act 8049 (Anti-Hazing Act).`
    );

    return `mailto:${ORGANIZATIONAL_INFO.officialEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyReceipt = (record: InquiryRecord) => {
    const text = `TGBI-TO OFFICIAL MEMBERSHIP INQUIRY RECEIPT
Reference ID: ${record.id}
Date: ${record.timestamp}
Applicant: ${record.fullName}
Email: ${record.email}
Contact Number: ${record.phone}
Location: ${record.location}
Region / Chapter: ${record.preferredRegion}
Sponsor: ${record.sponsor}

Statement of Intent:
${record.message}

Official Secretariat: theguardiansv@gmail.com
SEC Reg. No. ${ORGANIZATIONAL_INFO.secRegNumber} • Registered Dec 10, 1984`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast('Inquiry receipt copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadReceipt = (record: InquiryRecord) => {
    const content = `=======================================================
THE GUARDIANS BROTHERHOOD, INC. - THE ORIGINAL (TGBI-TO)
SEC Registration No. ${ORGANIZATIONAL_INFO.secRegNumber}
Registered: December 10, 1984
=======================================================
OFFICIAL MEMBERSHIP INQUIRY RECEIPT

Reference Number: ${record.id}
Date of Submission: ${record.timestamp}
Status: ${record.status}

APPLICANT DETAILS:
Full Name: ${record.fullName}
Email Address: ${record.email}
Contact / Mobile: ${record.phone}
Location: ${record.location}
Target Region / Chapter: ${record.preferredRegion}
Sponsoring Member: ${record.sponsor}

STATEMENT OF INTENT:
${record.message}

NEXT STEPS FOR APPLICANTS:
1. Presentation to Local Chapter Membership Committee
2. Background Investigation (BI)
3. Orientation Seminar
4. 12-Hour Mandatory Basic Course (MBC)
5. Indoctrination Rites

Official Secretariat Email: ${ORGANIZATIONAL_INFO.officialEmail}
General Headquarters: ${ORGANIZATIONAL_INFO.ghqAddress.line1}, ${ORGANIZATIONAL_INFO.ghqAddress.city}
=======================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TGBI-TO-Inquiry-${record.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded application summary receipt!', 'success');
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0038A8] text-xs font-bold uppercase tracking-wider mb-3">
          <UserCheck className="w-3.5 h-3.5 text-[#0038A8]" />
          <span>Membership Enrollment</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          How to Join TGBI-TO
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          The verified six-stage recruitment protocol established in the Amended By-Laws and MBC doctrine.
        </p>
      </div>

      {/* Requirements & 6-Stage Process Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        
        {/* Eligibility Requirements */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-display font-bold text-xl text-slate-900 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#0038A8]" />
            <span>Eligibility Requirements</span>
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Under Section 1 &amp; 2, Article III of the Amended By-Laws:
          </p>

          <ul className="space-y-3.5">
            {JOINING_PROCESS.eligibility.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {req}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Official Repository Forms
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={OFFICIAL_LINKS.inquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0038A8] text-xs font-semibold flex items-center justify-between transition-colors"
                title="Open Google Forms Application"
              >
                <span>Membership Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={OFFICIAL_LINKS.idAndCertForm}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold flex items-center justify-between transition-colors"
                title="National ID and Certificate Request"
              >
                <span>ID &amp; Certificate Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Six-Stage Process */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
            The Six-Stage Process
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Every candidate must complete all six verified stages before formal acceptance into the Brotherhood:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {JOINING_PROCESS.stages.map((stage) => (
              <div
                key={stage.step}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/80 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-[#0038A8] text-white text-xs font-bold flex items-center justify-center">
                    {stage.step}
                  </span>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {stage.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Official Membership Inquiry Form & Receipts */}
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative">
        
        {/* Navigation Tabs if there are past submissions */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6 flex-wrap gap-3">
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
              Membership Inquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Submit your candidate application directly to the National Secretariat &amp; Screening Committee.
            </p>
          </div>

          {pastInquiries.length > 0 && (
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => {
                  setActiveTab('form');
                  setSubmittedInquiry(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'form' && !submittedInquiry
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                New Application
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'history'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Submitted ({pastInquiries.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* View 1: Inquiry Submission Receipt */}
        {submittedInquiry ? (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">
                    Application Recorded Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Reference ID: <strong className="font-mono">{submittedInquiry.id}</strong> • {submittedInquiry.timestamp}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed mb-4">
                Your inquiry has been generated and saved locally. To ensure immediate processing by the General Headquarters (GHQ) and your local chapter committee, choose one of the official dispatch options below:
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={getEmailUrl(submittedInquiry)}
                  className="py-3 px-4 rounded-xl bg-[#0038A8] hover:bg-[#002d87] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email to GHQ</span>
                </a>

                <a
                  href={OFFICIAL_LINKS.inquiryForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <span>Open Google Forms Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopyReceipt(submittedInquiry)}
                  className="py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Receipt Copied!' : 'Copy Summary Receipt'}</span>
                </button>

                <button
                  onClick={() => handleDownloadReceipt(submittedInquiry)}
                  className="py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt File</span>
                </button>
              </div>
            </div>

            {/* Applicant Details Review Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Full Name:</span>
                <span className="font-bold text-slate-900">{submittedInquiry.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Email:</span>
                <span className="font-bold text-slate-900">{submittedInquiry.email}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Phone:</span>
                <span className="font-bold text-slate-900">{submittedInquiry.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Location / Region:</span>
                <span className="font-bold text-slate-900">{submittedInquiry.location} ({submittedInquiry.preferredRegion})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Sponsor:</span>
                <span className="font-bold text-slate-900">{submittedInquiry.sponsor}</span>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 font-semibold block mb-1">Statement of Purpose:</span>
                <p className="text-slate-700 italic bg-white p-3 rounded-lg border border-slate-200 leading-relaxed">
                  &ldquo;{submittedInquiry.message}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => {
                  setSubmittedInquiry(null);
                  setActiveTab('form');
                }}
                className="text-xs font-semibold text-[#0038A8] hover:underline cursor-pointer"
              >
                ← Submit Another Application
              </button>
              <span className="text-[11px] text-slate-500">
                Official GHQ Email: {ORGANIZATIONAL_INFO.officialEmail}
              </span>
            </div>
          </div>
        ) : activeTab === 'history' ? (
          /* View 2: Past Inquiries History */
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Saved Submissions in Your Browser ({pastInquiries.length})
              </span>
              <button
                onClick={() => {
                  if (window.confirm('Clear inquiry history from this browser?')) {
                    localStorage.removeItem(STORAGE_KEY);
                    setPastInquiries([]);
                    showToast('Cleared inquiry history', 'info');
                  }
                }}
                className="text-xs text-red-600 hover:underline cursor-pointer"
              >
                Clear History
              </button>
            </div>

            {pastInquiries.map((item) => (
              <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#0038A8]" />
                    <strong className="font-mono text-xs text-slate-900">{item.id}</strong>
                  </div>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.timestamp}
                  </span>
                </div>
                <div className="text-xs text-slate-700">
                  <strong>{item.fullName}</strong> • {item.location} • {item.email}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 italic">
                  &ldquo;{item.message}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                  <button
                    onClick={() => setSubmittedInquiry(item)}
                    className="px-2.5 py-1 rounded-md bg-[#0038A8] text-white text-[11px] font-semibold hover:bg-[#002d87] cursor-pointer"
                  >
                    View Receipt
                  </button>
                  <a
                    href={getEmailUrl(item)}
                    className="px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 text-[11px] font-semibold hover:bg-slate-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View 3: Live Application Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="e.g. Juan Dela Cruz"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Number (Mobile / Viber) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="+63 912 345 6789"
                  />
                </div>
              </div>
            </div>

            {/* Email & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="juan.delacruz@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Current City / Province / Country *
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="e.g. Quezon City, Metro Manila"
                />
              </div>
            </div>

            {/* Region / Chapter Selection & Sponsor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredRegion" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Chapter Jurisdiction *
                </label>
                <select
                  id="preferredRegion"
                  value={formData.preferredRegion}
                  onChange={(e) => setFormData({ ...formData, preferredRegion: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="National Capital Region (NCR)">National Capital Region (NCR)</option>
                  {REGIONS_DATA.map((r) => (
                    <option key={r.chapter} value={`${r.chapter} (${r.region})`}>
                      {r.chapter} - {r.country}
                    </option>
                  ))}
                  <option value="International / Overseas Chapter">International / Overseas Chapter</option>
                  <option value="Other / Not Sure">Other / Not Sure (GHQ Screening)</option>
                </select>
              </div>

              <div>
                <label htmlFor="sponsor" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Bona Fide Sponsor (Optional)
                </label>
                <input
                  id="sponsor"
                  type="text"
                  value={formData.sponsor}
                  onChange={(e) => setFormData({ ...formData, sponsor: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Name / Pseudo-name of member sponsor (if any)"
                />
              </div>
            </div>

            {/* Statement of Purpose */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Statement of Intent &amp; Community Standing *
                </label>
                <span className="text-[11px] text-slate-400">
                  {formData.message.length} characters
                </span>
              </div>
              <textarea
                id="message"
                rows={4}
                required
                minLength={20}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                placeholder="Briefly describe your personal background, profession, reasons for applying, and dedication to upholding Brotherhood, Integrity, Peace, and Discipline..."
              />
            </div>

            {/* Legal Affirmation Checkbox */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <input
                id="agreedToCode"
                type="checkbox"
                required
                checked={formData.agreedToCode}
                onChange={(e) => setFormData({ ...formData, agreedToCode: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0038A8] focus:ring-[#0038A8] cursor-pointer"
              />
              <label htmlFor="agreedToCode" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                <strong>Applicant Declaration:</strong> I hereby declare that all information provided is true and correct. I am willing to undergo the 6-stage recruitment process (BI, Orientation, and the 12-hour MBC), uphold the 7 Guiding Principles, and strictly respect <strong>Republic Act 8049 (Anti-Hazing Law of the Philippines)</strong>.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>Submit Membership Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                No membership fee is required for submitting an inquiry.
              </span>
              <a
                href={OFFICIAL_LINKS.inquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0038A8] hover:underline font-medium flex items-center gap-1"
              >
                <span>Or use Google Forms directly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-slate-50 text-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="join" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      {content}
    </section>
  );
};
