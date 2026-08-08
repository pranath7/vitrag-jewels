import React, { useState } from 'react';
import { Palette, Copy, CheckCircle2, Sparkles } from 'lucide-react';

const PALETTES_DATA = [
  {
    id: 'royal-emerald',
    name: 'Royal Emerald & Champagne Gold',
    badge: 'ACTIVE WEBSITE PALETTE',
    description: 'Deep obsidian black, emerald velvet, and champagne gold accent. Perfect for luxury anti-tarnish jewelry.',
    image: '/palettes/strip-royal-emerald.png',
    colors: [
      { name: 'Obsidian Black', hex: '#050C0A', role: 'Primary Background' },
      { name: 'Royal Emerald', hex: '#0D2924', role: 'Accent Background' },
      { name: 'Deep Velvet', hex: '#091F1A', role: 'Card / Panel BG' },
      { name: 'Champagne Gold', hex: '#D4AF37', role: 'Primary Gold Accent' },
      { name: 'Warm Ivory', hex: '#F3E5AB', role: 'Primary Typography' }
    ]
  },
  {
    id: 'burgundy-wine',
    name: 'Deep Burgundy & Rich Wine',
    badge: 'ROYAL HERITAGE PALETTE',
    description: 'Deep wine burgundy with antique gold accents. High royal elegance for Indian bridal & Kundan collections.',
    image: '/palettes/strip-burgundy-wine.png',
    colors: [
      { name: 'Rich Wine', hex: '#3C0F1B', role: 'Primary Background' },
      { name: 'Deep Burgundy', hex: '#5A1E2D', role: 'Accent Background' },
      { name: 'Antique Gold', hex: '#C8A96A', role: 'Primary Accent' },
      { name: 'Champagne Beige', hex: '#E6D8C3', role: 'Secondary Text' },
      { name: 'Warm Ivory', hex: '#F8F4EE', role: 'Primary Typography' }
    ]
  },
  {
    id: 'warm-ivory',
    name: 'Minimalist Warm Ivory & Travertine',
    badge: 'PARISIAN CHIC LIGHT PALETTE',
    description: 'Warm ivory background with soft champagne beige and antique gold. Clean European aesthetic.',
    image: '/palettes/strip-warm-ivory.png',
    colors: [
      { name: 'Warm Ivory', hex: '#F8F4EE', role: 'Primary Background' },
      { name: 'Champagne Beige', hex: '#E6D8C3', role: 'Card / Surface' },
      { name: 'Antique Gold', hex: '#C8A96A', role: 'Primary Accent' },
      { name: 'Slate Gray', hex: '#4A4A4A', role: 'Secondary Text' },
      { name: 'Charcoal Black', hex: '#1C1C1C', role: 'Primary Typography' }
    ]
  },
  {
    id: 'modern-minimal',
    name: 'Modern Obsidian & Cool Platinum',
    badge: 'CONTEMPORARY METALLIC PALETTE',
    description: 'Midnight black with cool platinum silver and white. High contrast for CZ solitaire & daily wear.',
    image: '/palettes/strip-modern-minimal.png',
    colors: [
      { name: 'Midnight Black', hex: '#080B10', role: 'Primary Background' },
      { name: 'Dark Slate', hex: '#111827', role: 'Card / Panel BG' },
      { name: 'Cool Platinum', hex: '#E0E0E0', role: 'Primary Accent' },
      { name: 'Silver Smoke', hex: '#9CA3AF', role: 'Secondary Text' },
      { name: 'Pure White', hex: '#FFFFFF', role: 'Primary Typography' }
    ]
  }
];

export default function ColorPaletteShowcase() {
  const [copiedHex, setCopiedHex] = useState(null);

  const copyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2500);
  };

  return (
    <section id="palettes" className="py-20 bg-[#050C0A] relative overflow-hidden border-t border-b border-[#D4AF37]/20 bklit-grid-pattern font-fontfabric-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-[#091F1A] border border-[#D4AF37]/30 px-3.5 py-1 rounded-full mb-3 shadow-md">
          <Palette className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-fontfabric-tenor text-xs font-semibold uppercase tracking-widest text-[#F3E5AB]">
            PARSH JEWELS BRAND COLOR PALETTES
          </span>
        </div>

        <h2 className="font-fontfabric-serif text-3xl sm:text-4xl font-bold gold-gradient-text mb-3">
          EXPLORE OUR BRAND COLOR PALETTES (STRIP FORMAT)
        </h2>

        <p className="font-editorial-quote text-lg text-[#E6C687]/80 max-w-xl mx-auto">
          “Curated color strips with exact Hex Codes, background roles, and typography accents. Click any color block to copy Hex code.”
        </p>
      </div>

      {/* Palette Strips Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {PALETTES_DATA.map((palette) => (
          <div 
            key={palette.id}
            className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl space-y-6 relative overflow-hidden"
          >
            {/* Top Badge & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4AF37]/15 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] bg-[#091F1A] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full font-fontfabric-tenor uppercase tracking-wider">
                  {palette.badge}
                </span>
                <h3 className="font-fontfabric-serif text-2xl font-bold text-white mt-2">
                  {palette.name}
                </h3>
              </div>

              <p className="text-xs text-[#E6C687]/70 max-w-md">
                {palette.description}
              </p>
            </div>

            {/* Visual Strip Image */}
            <div className="rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-lg">
              <img 
                src={palette.image} 
                alt={palette.name} 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Interactive 5-Swatch Color Strip Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              {palette.colors.map((color) => (
                <div 
                  key={color.hex}
                  onClick={() => copyHex(color.hex)}
                  className="group relative cursor-pointer rounded-xl p-3.5 border border-white/10 hover:border-[#D4AF37] transition-all flex flex-col justify-between h-32 shadow-md"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-md">
                      {color.hex}
                    </span>
                    <button className="p-1 rounded bg-black/40 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">
                      {copiedHex === color.hex ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      {color.name}
                    </p>
                    <p className="text-[9px] text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-fontfabric-tenor">
                      {color.role}
                    </p>
                  </div>

                  {copiedHex === color.hex && (
                    <div className="absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center text-[10px] text-emerald-400 font-bold font-fontfabric-tenor">
                      ✓ COPIED!
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
