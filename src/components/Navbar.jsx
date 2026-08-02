import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-2 z-40 px-3 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050C0A]/90 backdrop-blur-2xl border-[#D4AF37]/40 shadow-2xl py-2.5 px-5' 
          : 'bg-[#050C0A]/75 backdrop-blur-md border-[#D4AF37]/25 py-3 px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Bklit UI Brand Logo & Monogram with Active Green Dot */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl border border-[#D4AF37]/50 bg-[#091F1A] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="font-fontfabric-brand text-[#D4AF37] font-bold text-lg">VJ</span>
              </div>
              {/* Bklit UI Status Indicator Dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050C0A] animate-pulse" />
            </div>
            
            <div>
              <h1 className="font-fontfabric-brand text-lg font-bold tracking-wider gold-gradient-text uppercase leading-none">
                VITRAG JEWELS
              </h1>
              <p className="font-fontfabric-tenor text-[8px] tracking-[0.25em] uppercase text-[#E6C687]/80 font-semibold mt-0.5">
                FINE IMITATION JEWELRY
              </p>
            </div>
          </div>

          {/* Minimal Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-fontfabric-tenor text-xs font-semibold uppercase">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-[#F3E5AB] hover:text-[#D4AF37] transition-colors relative py-1 group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button 
              onClick={() => scrollToSection('reels')} 
              className="text-[#F3E5AB]/80 hover:text-[#D4AF37] transition-colors relative py-1 group"
            >
              INSTA REELS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button 
              onClick={() => scrollToSection('vip-apply')} 
              className="text-[#F3E5AB]/80 hover:text-[#D4AF37] transition-colors relative py-1 group"
            >
              PRE-REGISTER (20% OFF)
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Bklit Action Buttons Right */}
          <div className="hidden sm:flex items-center space-x-3 font-fontfabric-sans">
            <a
              href="https://instagram.com/vitrag.jewels"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050C0A] transition-all"
              title="Follow @vitrag.jewels on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button 
              onClick={() => scrollToSection('vip-apply')} 
              className="gold-gradient-bg text-[#050C0A] font-bold text-xs px-5 py-2 rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all flex items-center gap-1.5 uppercase tracking-widest cursor-pointer font-fontfabric-tenor"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Pre-Register (20% OFF)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-[#D4AF37]/20 space-y-3 font-fontfabric-tenor">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block text-left w-full text-xs font-semibold tracking-wider text-[#F3E5AB] uppercase py-2 border-b border-[#D4AF37]/10"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('reels')} 
              className="block text-left w-full text-xs font-semibold tracking-wider text-[#F3E5AB]/80 uppercase py-2 border-b border-[#D4AF37]/10"
            >
              INSTA REELS TEASERS
            </button>
            <button 
              onClick={() => scrollToSection('vip-apply')} 
              className="block text-left w-full text-xs font-semibold tracking-wider text-[#D4AF37] uppercase py-2 border-b border-[#D4AF37]/10 flex items-center justify-between"
            >
              <span>PRE-REGISTER (20% OFF)</span>
              <Sparkles className="w-4 h-4" />
            </button>
            
            <div className="pt-2">
              <button 
                onClick={() => scrollToSection('vip-apply')} 
                className="w-full gold-gradient-bg text-[#050C0A] font-bold text-xs py-2.5 rounded-xl uppercase tracking-widest text-center shadow-lg"
              >
                CLAIM YOUR 20% DISCOUNT
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
