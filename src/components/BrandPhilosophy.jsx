import React from 'react';
import { Sparkles, ShieldCheck, Gem, Crown, Gift, RefreshCw } from 'lucide-react';

export default function BrandPhilosophy() {
  const PILLARS = [
    {
      icon: Crown,
      title: "1-Gram Gold Polish",
      desc: "Plated with pure 24K gold foil over anti-corrosion alloys for that authentic heavy gold shimmer."
    },
    {
      icon: ShieldCheck,
      title: "Anti-Tarnish Seal",
      desc: "Waterproof, perfume-resistant & hypoallergenic. Tested to retain pristine shine for years."
    },
    {
      icon: Gem,
      title: "Royal Polki & Kundan",
      desc: "Precision hand-set uncut stones and foil backs mirroring 22K heritage bridal heirlooms."
    },
    {
      icon: Gift,
      title: "20% Pre-Launch Perk",
      desc: "Pre-register today to secure single-use 20% OFF vouchers for the March 2027 Grand Launch."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#050C0A] via-[#081B16] to-[#050C0A] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F3E5AB]">
              WHY VITRAG JEWELS
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-4">
            REDEFINING AFFORDABLE LUXURY
          </h2>

          <p className="font-sub-serif text-lg text-[#E6C687]/80 leading-relaxed italic">
            “You don't need millions in gold vaults to look like royalty. Vitrag Jewels merges age-old Indian jewelry craft with modern anti-tarnish technology.”
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-2xl border border-[#D4AF37]/20 flex flex-col items-center text-center group hover:border-[#D4AF37]/50"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#12362E] to-[#061614] border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20 transition-all">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#E6C687]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
