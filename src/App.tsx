import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { CreedPrayerSongSection } from './components/CreedPrayerSongSection';
import { CodeOfEthicsSection } from './components/CodeOfEthicsSection';
import { HistorySection } from './components/HistorySection';
import { LeadershipSection } from './components/LeadershipSection';
import { DocumentsSection } from './components/DocumentsSection';
import { ChaptersDirectory } from './components/ChaptersDirectory';
import { JoinUsSection } from './components/JoinUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ToastProvider } from './components/Toast';
import { DocumentReaderModal } from './components/DocumentReaderModal';
import { MediaVideoModal } from './components/MediaVideoModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ScrollToTop } from './components/ScrollToTop';
import { OFFICIAL_DOCUMENTS } from './data/documentsData';
import { OfficialDocument } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDocument, setSelectedDocument] = useState<OfficialDocument | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    subtitle: string;
    youtubeId: string;
  } | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global hotkey Ctrl+K / Cmd+K for Quick Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'home',
        'about',
        'mission',
        'principles',
        'creed-prayer-song',
        'ethics',
        'history',
        'leadership',
        'documents',
        'chapters',
        'join',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
        {/* Top Header & Navbar with Official Logo, Search & GitHub Link */}
        <Navbar 
          activeSection={activeSection} 
          onOpenSearch={() => setIsSearchOpen(true)} 
        />

        {/* Main Content Sections strictly following repository logic */}
        <main className="flex-1 w-full">
          {/* 1. Hero Section with SEC verification and GitHub repository links */}
          <HeroSection />

          {/* 2. About TGBI-TO: Welcome, Identity, G-U-A-R-D-I-A-N-S Acronym & Filipino Translation */}
          <AboutSection />

          {/* 3. Official Mission & 8 Vision Pillars */}
          <MissionVisionSection />

          {/* 4. The 7 Guiding Principles with Official Emojis */}
          <PrinciplesSection />

          {/* 5. Official Creed, English Prayer & Anthem Video Player */}
          <CreedPrayerSongSection 
            onPlayVideo={(video) => setActiveVideo(video)} 
          />

          {/* 6. Official Code of Ethics (Verbatim 4 Paragraphs & Tenets) */}
          <CodeOfEthicsSection />

          {/* 7. Brief History & Origins (1976 -> 1984 SEC 123899 -> Today Reform) */}
          <HistorySection />

          {/* 8. Structure & Leadership (Levels 1-6, UPMF Carlomagno, MF Alamid, GHQ & OIC) */}
          <LeadershipSection />

          {/* 9. Official Documents Archive with Reader Modal & Search */}
          <DocumentsSection 
            onOpenDocument={(doc) => setSelectedDocument(doc)} 
          />

          {/* 10. Regional Chapters, Official Announcements & Media Gallery */}
          <ChaptersDirectory />

          {/* 11. How to Join TGBI-TO (Eligibility, 6-Stage Process, Inquiry Form, Official Forms) */}
          <JoinUsSection />

          {/* 12. Contact Us (GHQ, OIC, Email, Grievance Policy, Google Forms) */}
          <ContactSection />
        </main>

        {/* Official Footer with Repo Links */}
        <Footer />

        {/* Floating Back to Top with Scroll Progress */}
        <ScrollToTop />

        {/* Mobile Sticky Bottom Quick Bar */}
        <MobileBottomBar 
          activeSection={activeSection} 
          onOpenSearch={() => setIsSearchOpen(true)} 
        />

        {/* In-Browser Document Reader Modal */}
        <DocumentReaderModal
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
          onSelectDocument={(doc) => setSelectedDocument(doc)}
          allDocuments={OFFICIAL_DOCUMENTS}
        />

        {/* Official Anthem / Video Player Modal */}
        <MediaVideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          video={activeVideo}
        />

        {/* Quick Search & Command Palette Modal */}
        <QuickSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onOpenDocument={(doc) => {
            setIsSearchOpen(false);
            setSelectedDocument(doc);
          }}
        />
      </div>
    </ToastProvider>
  );
}
