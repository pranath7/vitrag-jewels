import React, { useState } from 'react';
import { Heart, MessageCircle, Play, Sparkles, X, ExternalLink, Gem } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

const REELS_DATA = [
  {
    id: 1,
    title: "Real vs. Vitrag Jewels Test",
    badge: "VIRAL HOOK",
    category: "Guessing Game",
    likes: "48.2K",
    comments: "1,240",
    views: "520K",
    caption: "One of these is ₹2,50,000 pure gold Polki. The other is ₹1,999 from Vitrag Jewels! Comment A or B below! 👇",
    thumbnail: "/reels/reel-1.jpg",
    audio: "Original Audio — @vitrag.jewels (Trending)",
    tags: ["#RealVsFake", "#ImitationJewellery", "#VitragJewels"]
  },
  {
    id: 2,
    title: "24-Hr Perfume & Water Stress Test",
    badge: "TRUST BUILDER",
    category: "Anti-Tarnish Proof",
    likes: "62.4K",
    comments: "890",
    views: "740K",
    caption: "Sprayed with perfume, submerged in water for 24 hours. Zero tarnish! Daily wear anti-tarnish guarantee. 💧✨",
    thumbnail: "/reels/reel-2.jpg",
    audio: "Aesthetic Ambient Luxury — @vitrag.jewels",
    tags: ["#AntiTarnish", "#WaterproofJewelry", "#GoldPlated"]
  },
  {
    id: 3,
    title: "Bollywood Bridal Look under ₹2,499",
    badge: "CELEB DUPE",
    category: "Bridal Replica",
    likes: "95.1K",
    comments: "2,100",
    views: "1.2M",
    caption: "Deepika's Wedding Choker (₹50 Lakhs) vs Vitrag Jewels Replica (₹2,499). Which bride are you choosing? 👑💍",
    thumbnail: "/reels/reel-3.jpg",
    audio: "Kudmayaa (Wedding Instrumental)",
    tags: ["#BridalJewellery", "#BollywoodLook", "#ChokerSet"]
  },
  {
    id: 4,
    title: "3 Ways to Style a Kundan Choker",
    badge: "STYLING GUIDE",
    category: "Lookbook",
    likes: "34.8K",
    comments: "540",
    views: "390K",
    caption: "1 Choker, 3 Outfits: Saree, Lehenga & Indo-Western! Save this reel for your next wedding event! 📌✨",
    thumbnail: "/reels/reel-4.jpg",
    audio: "Fashion Styling Beat — @vitrag.jewels",
    tags: ["#JewelryStyling", "#SareeOutfit", "#LehengaStyle"]
  },
  {
    id: 5,
    title: "ASMR Handcrafted Polki Setting",
    badge: "ARTISAN CRAFT",
    category: "Behind The Scenes",
    likes: "51.3K",
    comments: "720",
    views: "610K",
    caption: "Satisfying ASMR close-up of setting uncut stones into golden frames. Masterpieces take patience. 🛠️💎",
    thumbnail: "/reels/reel-5.jpg",
    audio: "Craftsmanship ASMR Audio",
    tags: ["#HandcraftedJewelry", "#PolkiSetting", "#Artisans"]
  },
  {
    id: 6,
    title: "Anti-Tarnish Bangle Scratch Test",
    badge: "DURABILITY",
    category: "Anti-Tarnish",
    likes: "28.9K",
    comments: "410",
    views: "290K",
    caption: "Rubbing with metal cloth to prove our anti-tarnish golden polish stays intact. Built for generations. 👑✨",
    thumbnail: "/reels/reel-6.jpg",
    audio: "Luxury Beats — @vitrag.jewels",
    tags: ["#AntiTarnish", "#GoldBangles", "#VitragJewels"]
  }
];

export default function ReelsMarquee() {
  const [activeReel, setActiveReel] = useState(null);
  const [likedReels, setLikedReels] = useState({});
  const [failedImages, setFailedImages] = useState({});

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedReels(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleImageError = (uniqueKey) => {
    setFailedImages(prev => ({ ...prev, [uniqueKey]: true }));
  };

  const marqueeItems = [...REELS_DATA, ...REELS_DATA];

  return (
    <section id="reels" className="py-20 bg-[#050C0A] relative overflow-hidden border-t border-b border-[#D4AF37]/20 bklit-grid-pattern">
      
      {/* Background Subtle Sparkle Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#0D2924]/30 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-[#091F1A] border border-[#D4AF37]/30 px-3.5 py-1 rounded-full mb-3 shadow-md">
          <InstagramIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-fontfabric-tenor text-xs font-semibold uppercase tracking-widest text-[#F3E5AB]">
            @VITRAG.JEWELS VIRAL REELS
          </span>
        </div>

        <h2 className="font-fontfabric-serif text-3xl sm:text-4xl font-bold gold-gradient-text mb-3">
          EXPLORE OUR INSTAGRAM REELS TEASERS
        </h2>

        <p className="font-editorial-quote text-lg text-[#E6C687]/80 max-w-xl mx-auto">
          “Hover over any reel to pause. Click to preview full video, view anti-tarnish stress tests, and see real vs replica challenges.”
        </p>
      </div>

      {/* Horizontal Infinite Marquee Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left/Right Fading Shadow Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050C0A] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050C0A] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee-scroll flex gap-5 px-4">
          {marqueeItems.map((reel, index) => {
            const itemKey = `${reel.id}-${index}`;
            const hasFailed = failedImages[itemKey];

            return (
              <div 
                key={itemKey}
                onClick={() => setActiveReel(reel)}
                className="w-72 sm:w-80 flex-shrink-0 glass-card rounded-xl overflow-hidden cursor-pointer group relative border border-[#D4AF37]/20"
              >
                {/* Card Image Container */}
                <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-[#0D2924] via-[#081814] to-[#040E0C]">
                  
                  {!hasFailed ? (
                    <img 
                      src={reel.thumbnail} 
                      alt="" 
                      onError={() => handleImageError(itemKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                    />
                  ) : (
                    /* Fallback Decorative Luxury Canvas */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#091F1A] to-[#050C0A] relative">
                      <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 bg-[#0D2924] flex items-center justify-center mb-3">
                        <Gem className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <span className="font-fontfabric-brand text-[#D4AF37] font-bold text-sm tracking-wider uppercase">
                        VITRAG JEWELS
                      </span>
                      <span className="text-[10px] text-[#E6C687]/70 font-fontfabric-tenor tracking-widest uppercase mt-1">
                        REEL PREVIEW
                      </span>
                    </div>
                  )}

                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A] via-[#050C0A]/40 to-transparent pointer-events-none" />

                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3 bg-[#081814]/95 backdrop-blur-md border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase font-fontfabric-tenor shadow-md z-10">
                    {reel.badge}
                  </div>

                  {/* Play Icon Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#050C0A] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Reel Info Bottom Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1.5 z-10">
                    <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-fontfabric-tenor">
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span className="font-semibold text-[11px]">@vitrag.jewels</span>
                    </div>

                    <h3 className="font-fontfabric-serif font-bold text-white text-base leading-tight group-hover:text-[#D4AF37] transition-colors">
                      {reel.title}
                    </h3>

                    <p className="text-xs text-[#E6C687]/80 line-clamp-2 font-fontfabric-sans">
                      {reel.caption}
                    </p>

                    {/* Social Stats Row */}
                    <div className="pt-2 flex items-center justify-between text-xs text-[#E6C687]/70 border-t border-[#D4AF37]/15 font-fontfabric-sans">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={(e) => toggleLike(reel.id, e)}
                          className="flex items-center gap-1 hover:text-rose-400 transition-colors pointer-events-auto"
                        >
                          <Heart className={`w-3.5 h-3.5 ${likedReels[reel.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                          <span>{reel.likes}</span>
                        </button>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{reel.comments}</span>
                        </div>
                      </div>

                      <span className="text-[10px] text-[#D4AF37] font-semibold font-fontfabric-tenor">
                        {reel.views} Views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reel Detail Modal Popup */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md glass-panel rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-20 bg-[#050C0A]/80 text-[#D4AF37] p-2 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#050C0A] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Preview Header */}
            <div className="relative h-72 w-full bg-[#050C0A]">
              <img 
                src={activeReel.thumbnail} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A] via-transparent to-black/40" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg border border-[#D4AF37] bg-[#0D2924] flex items-center justify-center font-bold text-[#D4AF37] font-fontfabric-brand">
                    VJ
                  </div>
                  <div className="font-fontfabric-tenor">
                    <p className="font-bold">@vitrag.jewels</p>
                    <p className="text-[10px] text-[#E6C687]">{activeReel.audio}</p>
                  </div>
                </div>

                <a 
                  href="https://instagram.com/vitrag.jewels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gold-gradient-bg text-[#050C0A] font-bold px-3.5 py-1 rounded-xl text-[10px] flex items-center gap-1 font-fontfabric-tenor shadow-md"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 text-left font-fontfabric-sans">
              <div className="inline-block bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#D4AF37] uppercase font-fontfabric-tenor">
                {activeReel.category} • {activeReel.badge}
              </div>

              <h3 className="font-fontfabric-serif text-xl font-bold text-white">
                {activeReel.title}
              </h3>

              <p className="text-xs text-[#E6C687] leading-relaxed">
                {activeReel.caption}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeReel.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] text-[#D4AF37] bg-[#0D2924] px-2 py-0.5 rounded border border-[#D4AF37]/30 font-fontfabric-tenor">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#E6C687]">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    {activeReel.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                    {activeReel.comments}
                  </span>
                </div>

                <a
                  href="https://instagram.com/vitrag.jewels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF37] font-semibold hover:underline flex items-center gap-1 font-fontfabric-tenor"
                >
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
