import React from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer className="bg-[#050C0A] border-t border-[#D4AF37]/20 text-[#E6C687]/80 text-xs py-14 relative z-10 font-fontfabric-sans bklit-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center">
                <img 
                  src="/logo-light.png" 
                  alt="Vitrag Jewels Logo" 
                  className="h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <p className="text-xs text-[#E6C687]/70 leading-relaxed max-w-md">
              Bringing royal Indian heritage craftsmanship, anti-tarnish everyday durability, and bespoke bridal elegance to jewelry lovers worldwide. Launching March 2027.
            </p>

            <div className="flex items-center space-x-4 pt-1">
              <a 
                href="https://instagram.com/vitrag.jewels" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white bg-[#091F1A] border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-xl transition-all font-fontfabric-tenor"
              >
                <InstagramIcon className="w-4 h-4" />
                <span className="font-semibold tracking-wider">@vitrag.jewels</span>
              </a>

              <button
                onClick={onOpenAdmin}
                className="text-[10px] text-[#E6C687]/40 hover:text-[#D4AF37] transition-colors"
                title="Owner Portal"
              >
                🔒 Portal
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-fontfabric-tenor text-xs font-bold text-white uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home Page</a></li>
              <li><a href="#reels" className="hover:text-[#D4AF37] transition-colors">Insta Reels Showcase</a></li>
              <li><a href="#vip-apply" className="hover:text-[#D4AF37] transition-colors text-[#D4AF37] font-semibold">Pre-Register (20% OFF)</a></li>
            </ul>
          </div>

          {/* Contact & Launch Info */}
          <div className="space-y-3">
            <h4 className="font-fontfabric-tenor text-xs font-bold text-white uppercase tracking-widest">
              SHOWROOM LAUNCH
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Target Date: March 2027</span>
              </p>
              <p className="text-[#E6C687]/70 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>contact@vitragjewels.store</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E6C687]/60">
          <p>© 2026–2027 Vitrag Jewels. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <span>Crafted with Bklit UI Aesthetics</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
