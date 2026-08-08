import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#050C0A]/90 border-b border-[#D4AF37]/20 text-[#F3E5AB] text-xs py-2 px-4 select-none relative z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Contact info left */}
        <div className="hidden md:flex items-center space-x-6 text-xs text-[#E6C687]/80">
          <a href="mailto:contact@parshjewels.store" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>contact@parshjewels.store</span>
          </a>
        </div>

        {/* Center Marquee Offer (Bklit Pill) */}
        <div className="flex items-center space-x-2 font-medium tracking-wide font-fontfabric-tenor">
          <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />
            <span className="gold-gradient-text uppercase tracking-widest text-[10px] font-bold">
              PARSH JEWELS GRAND LAUNCH: MARCH 2027 • PRE-REGISTER FOR 20% OFF
            </span>
          </span>
        </div>

        {/* Right Insta handle */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://instagram.com/parsh.jewels" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white transition-colors bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/25"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span className="font-semibold text-[11px]">@parsh.jewels</span>
          </a>
        </div>
      </div>
    </div>
  );
}
