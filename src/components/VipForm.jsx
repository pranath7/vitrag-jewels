import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { animate } from 'animejs';
import { Sparkles, Copy, CheckCircle2, Gift, Send, ShieldCheck, Phone, Mail, User } from 'lucide-react';

export default function VipForm({ onSubmitted }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: ''
  });

  const [submittedVoucher, setSubmittedVoucher] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerGoldConfetti = () => {
    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#F5E8C7', '#AA7C11', '#FFFFFF', '#061614']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomCode = `VITRAG20-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEntry = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      category: 'VIP Launch Member',
      voucherCode: randomCode,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      const existing = JSON.parse(localStorage.getItem('vitrag_waitlist_entries') || '[]');
      existing.unshift(newEntry);
      localStorage.setItem('vitrag_waitlist_entries', JSON.stringify(existing));
    } catch (err) {
      console.error('LocalStorage write error:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedVoucher(randomCode);
      triggerGoldConfetti();
      if (onSubmitted) onSubmitted(newEntry);

      if (typeof animate === 'function') {
        animate('#voucher-card', {
          scale: [0.85, 1],
          opacity: [0, 1],
          duration: 700,
          ease: 'outElastic(1, .8)'
        });
      }
    }, 600);
  };

  const copyToClipboard = () => {
    if (submittedVoucher) {
      navigator.clipboard.writeText(submittedVoucher);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="vip-apply" className="py-24 bg-[#050C0A] relative overflow-hidden font-fontfabric-sans border-t border-[#D4AF37]/20 bklit-grid-pattern">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bklit Form Container */}
        <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          
          {/* Top Gold Bar Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg" />

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 bg-[#091F1A] border border-[#D4AF37]/30 px-3.5 py-1 rounded-full mb-3 font-fontfabric-tenor shadow-md">
              <Gift className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F3E5AB]">
                CLAIM YOUR LAUNCH VOUCHER
              </span>
            </div>

            <h2 className="font-fontfabric-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              PRE-REGISTER & UNLOCK <span className="gold-gradient-text italic font-fontfabric-vogue">20% OFF</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#E6C687]/80 leading-relaxed">
              Register now for the March 2027 Grand Launch. Get instant access to secret early drops, priority customer concierge, and a personalized 20% discount voucher.
            </p>
          </div>

          {/* Form OR Success Voucher View */}
          {!submittedVoucher ? (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6C687] mb-1.5 flex items-center gap-1.5 font-fontfabric-tenor">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full bg-[#051310] border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-xs text-white placeholder-[#E6C687]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-fontfabric-sans shadow-inner"
                />
              </div>

              {/* Email & WhatsApp Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6C687] mb-1.5 flex items-center gap-1.5 font-fontfabric-tenor">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="radhika@example.com"
                    className="w-full bg-[#051310] border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-xs text-white placeholder-[#E6C687]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-fontfabric-sans shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6C687] mb-1.5 flex items-center gap-1.5 font-fontfabric-tenor">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#051310] border border-[#D4AF37]/25 rounded-xl px-4 py-3 text-xs text-white placeholder-[#E6C687]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-fontfabric-sans shadow-inner"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gold-gradient-bg text-[#050C0A] font-bold text-xs py-3.5 rounded-xl shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 uppercase tracking-widest cursor-pointer disabled:opacity-50 font-fontfabric-tenor mt-4"
              >
                {isSubmitting ? (
                  <span>GENERATING YOUR 20% VOUCHER...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span>CLAIM 20% OFF VOUCHER CODE</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#E6C687]/60 text-center flex items-center justify-center gap-1 font-fontfabric-tenor">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero spam guarantee. Saved securely for launch alerts.</span>
              </p>
            </form>
          ) : (
            /* Success Voucher Display Card */
            <div id="voucher-card" className="max-w-md mx-auto text-center space-y-5 p-6 bg-[#051310] border border-[#D4AF37]/50 rounded-xl shadow-2xl relative font-fontfabric-sans">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-fontfabric-tenor">
                  PRE-REGISTRATION CONFIRMED!
                </span>
                <h3 className="font-fontfabric-serif text-xl font-bold text-white mt-1">
                  CONGRATULATIONS, {formData.fullName.toUpperCase()}!
                </h3>
                <p className="text-xs text-[#E6C687]/80 mt-1">
                  You are officially on the Vitrag Jewels VIP Waitlist for March 2027.
                </p>
              </div>

              {/* Voucher Box */}
              <div className="bg-[#081C17] p-4 rounded-xl border border-dashed border-[#D4AF37] space-y-2 shadow-inner">
                <p className="text-[10px] uppercase tracking-widest text-[#E6C687]/70 font-fontfabric-tenor">YOUR EXCLUSIVE 20% DISCOUNT CODE</p>
                
                <div className="flex items-center justify-center space-x-3">
                  <span className="font-fontfabric-serif text-2xl font-extrabold gold-gradient-text tracking-wider">
                    {submittedVoucher}
                  </span>
                  
                  <button
                    onClick={copyToClipboard}
                    className="p-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050C0A] transition-all cursor-pointer"
                    title="Copy Voucher Code"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copied && (
                  <p className="text-[10px] text-emerald-400 font-semibold animate-pulse font-fontfabric-tenor">
                    ✓ Voucher Code Copied to Clipboard!
                  </p>
                )}
              </div>

              <div className="text-[11px] text-[#E6C687]/70 space-y-1">
                <p>• Valid for your first purchase at launch on <strong className="text-white">app.vitragjewels.store</strong></p>
                <p>• A copy has been reserved for <span className="text-[#D4AF37]">{formData.email}</span></p>
              </div>

              <button
                onClick={() => setSubmittedVoucher(null)}
                className="text-xs text-[#D4AF37] hover:underline font-semibold tracking-wider uppercase font-fontfabric-tenor cursor-pointer"
              >
                ← Register Another Person
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
