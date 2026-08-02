import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Play, Volume2, VolumeX, Clock, ShieldCheck, Gem } from 'lucide-react';

export default function HeroSection({ onPreRegisterClick, onExploreReelsClick }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Autoplay handled:', err));
    }
  }, []);

  useEffect(() => {
    const targetDate = new Date('2027-03-01T00:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="w-full bg-[#050C0A] relative bklit-grid-pattern">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bklit-subtle-glow pointer-events-none" />

      {/* 1. High-Quality Edge-to-Edge Video Container */}
      <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] bg-[#050C0A] overflow-hidden border-b border-[#D4AF37]/30 smooth-gpu">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted} 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover filter brightness-100 contrast-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>

        {/* Audio Mute/Unmute Control Toggle */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 z-20 bg-[#091F1A]/85 backdrop-blur-md p-3.5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050C0A] transition-all shadow-2xl cursor-pointer"
          title={isMuted ? "Unmute Video Sound" : "Mute Video Sound"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
        </button>

        {/* Bottom Transition Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050C0A] via-[#050C0A]/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Dedicated Text & Countdown Banner (Bklit UI Minimalist Style) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center relative z-10">
        
        {/* Bklit Status Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#091F1A] border border-[#D4AF37]/35 px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-fontfabric-tenor text-xs font-semibold text-[#F3E5AB]">
            GRAND SHOWROOM LAUNCH: MARCH 2027
          </span>
        </div>

        {/* Main Fontfabric Display Title */}
        <h1 className="font-fontfabric-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
          THE ROYAL ERA OF <br />
          <span className="gold-gradient-text italic font-fontfabric-vogue">FINE IMITATION JEWELRY</span>
        </h1>

        {/* Subtitle / Quote */}
        <p className="font-editorial-quote text-xl sm:text-2xl text-[#E6C687]/90 max-w-2xl mb-10 leading-relaxed">
          “Indulge in Designer Kundan, Uncut Polki Replicas, CZ Solitaires & Anti-Tarnish Daily Wear Masterpieces. Pure Luxury Without Compromise.”
        </p>

        {/* Live Ticking March 2027 Countdown Timer (Bklit Card Style) */}
        <div className="w-full max-w-xl glass-panel rounded-2xl p-6 sm:p-8 mb-10 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-center space-x-2 font-fontfabric-tenor text-xs font-semibold text-[#D4AF37] mb-5">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>COUNTDOWN TO MARCH 2027 LAUNCH</span>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-5 text-center font-fontfabric-sans">
            <div className="bg-[#051310]/90 rounded-xl p-3 sm:p-4 border border-[#D4AF37]/20 shadow-sm">
              <span className="font-fontfabric-serif text-2xl sm:text-4xl font-extrabold text-white block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-fontfabric-tenor text-[10px] text-[#E6C687]/70 uppercase tracking-widest mt-1 block">Days</span>
            </div>

            <div className="bg-[#051310]/90 rounded-xl p-3 sm:p-4 border border-[#D4AF37]/20 shadow-sm">
              <span className="font-fontfabric-serif text-2xl sm:text-4xl font-extrabold text-white block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-fontfabric-tenor text-[10px] text-[#E6C687]/70 uppercase tracking-widest mt-1 block">Hours</span>
            </div>

            <div className="bg-[#051310]/90 rounded-xl p-3 sm:p-4 border border-[#D4AF37]/20 shadow-sm">
              <span className="font-fontfabric-serif text-2xl sm:text-4xl font-extrabold text-white block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-fontfabric-tenor text-[10px] text-[#E6C687]/70 uppercase tracking-widest mt-1 block">Mins</span>
            </div>

            <div className="bg-[#051310]/90 rounded-xl p-3 sm:p-4 border border-[#D4AF37]/20 shadow-sm">
              <span className="font-fontfabric-serif text-2xl sm:text-4xl font-extrabold gold-gradient-text block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-fontfabric-tenor text-[10px] text-[#E6C687]/70 uppercase tracking-widest mt-1 block">Secs</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 font-fontfabric-tenor">
          <button
            onClick={onPreRegisterClick}
            className="w-full sm:w-auto gold-gradient-bg text-[#050C0A] font-bold text-xs px-8 py-3.5 rounded-xl shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all flex items-center justify-center gap-2.5 tracking-widest uppercase group cursor-pointer"
          >
            <span>Pre-Register & Claim 20% OFF</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreReelsClick}
            className="w-full sm:w-auto glass-panel text-[#F3E5AB] font-semibold text-xs px-8 py-3.5 rounded-xl border border-[#D4AF37]/35 hover:bg-[#D4AF37]/15 transition-all flex items-center justify-center gap-2 tracking-widest uppercase cursor-pointer"
          >
            <Play className="w-4 h-4 text-[#D4AF37] fill-current" />
            <span>Watch Insta Teasers</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs text-[#E6C687]/75 font-medium font-fontfabric-tenor border-t border-[#D4AF37]/15 pt-6 w-full max-w-lg">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Anti-Tarnish Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gem className="w-4 h-4 text-[#D4AF37]" />
            <span>Kundan & Polki Replicas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
