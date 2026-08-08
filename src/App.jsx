import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ColorPaletteShowcase from './components/ColorPaletteShowcase';
import ReelsMarquee from './components/ReelsMarquee';
import VipForm from './components/VipForm';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentView('admin');
      } else if (window.location.hash === '#home' || !window.location.hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'admin') {
      window.location.hash = 'admin';
    } else {
      window.location.hash = '';
    }
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (currentView === 'admin') {
    return <AdminPage onBackToHome={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#050C0A] text-[#F5E8C7] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#050C0A]">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Luxury Header */}
      <Navbar onNavigate={navigateTo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 3. Pure Hero Video & Below-Video Luxury Text Banner */}
        <HeroSection 
          onPreRegisterClick={() => scrollToId('vip-apply')}
          onExploreReelsClick={() => scrollToId('reels')}
        />

        {/* 4. Interactive Brand Color Palette Strips */}
        <ColorPaletteShowcase />

        {/* 5. Infinite Horizontal Scrolling Instagram Reels Marquee */}
        <ReelsMarquee />

        {/* 6. VIP Pre-Registration & 20% OFF Voucher Form */}
        <VipForm onSubmitted={() => {}} />

      </main>

      {/* 7. Minimal Luxury Footer */}
      <Footer onOpenAdmin={() => navigateTo('admin')} />

    </div>
  );
}
