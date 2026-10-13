import React, { useState } from 'react';
import { ShieldCheck, Clock, Lock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai (BKC / Worli / Parel)',
    assetFocus: 'Luxury Residential',
    requirements: '',
    agreedToCharter: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out the required contact fields to start a conversation.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const generatedId = `BR-ADV-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryId(generatedId);
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact-advisory" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DFD8]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#46464B]">
                DIRECT ADVISORY ACCESS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight tracking-tight text-[#121316] mb-6">
              Let's make your next real estate decision more informed.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#46464B] leading-relaxed mb-10">
              Connect with a senior advisor for transparent market intelligence, off-market family office opportunities, and private property dossiers.
            </p>

            {/* Fiduciary Perks */}
            <div className="space-y-5 text-xs sm:text-sm text-[#1B1C1A]">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#F5F2EB] border border-[#D8D4CC] text-[#1E3A2F] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#121316] block">Zero unsolicited calls or aggressive sales pitches</span>
                  <span className="text-xs text-[#71747E]">All communications are structured strictly around verified dossiers.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#F5F2EB] border border-[#D8D4CC] text-[#1E3A2F] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#121316] block">Direct response within 1 business day from an asset specialist</span>
                  <span className="text-xs text-[#71747E]">No algorithmic bot routing; senior client directors directly review mandates.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#F5F2EB] border border-[#D8D4CC] text-[#1E3A2F] shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#121316] block">Confidential NDA executed upon investor request</span>
                  <span className="text-xs text-[#71747E]">Full anonymity protections for family offices and institutional funds.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Advisory Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] border border-[#E2DFD8] p-6 sm:p-8 md:p-10">
            {submitted ? (
              <div className="py-12 px-4 text-center">
                <div className="w-14 h-14 bg-[#1E3A2F] text-white flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#121316] mb-2">
                  Advisory Session Queued
                </h3>
                <p className="text-sm text-[#46464B] max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#121316]">{formData.fullName}</span>. A senior partner will contact you directly within 1 business day via <span className="font-semibold text-[#121316]">{formData.email}</span>.
                </p>

                <div className="inline-block p-4 bg-[#FFFFFF] border border-[#E2DFD8] text-xs font-mono text-[#121316] mb-6">
                  <span className="text-[#71747E] block text-[10px] uppercase font-sans font-semibold mb-1">
                    CONFIDENTIAL INQUIRY RECORD
                  </span>
                  Reference Mandate: <strong className="text-[#1E3A2F]">{inquiryId}</strong>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        city: 'Mumbai (BKC / Worli / Parel)',
                        assetFocus: 'Luxury Residential',
                        requirements: '',
                        agreedToCharter: true,
                      });
                    }}
                    className="px-6 py-2.5 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Birla"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#FFFFFF] border border-[#D8D4CC] text-xs text-[#121316] placeholder:text-[#8C8E97] focus:outline-none focus:border-[#121316] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-2">
                      Professional / Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="v.birla@capitalholdings.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#FFFFFF] border border-[#D8D4CC] text-xs text-[#121316] placeholder:text-[#8C8E97] focus:outline-none focus:border-[#121316] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Phone, City, Asset Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#FFFFFF] border border-[#D8D4CC] text-xs text-[#121316] placeholder:text-[#8C8E97] focus:outline-none focus:border-[#121316] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-2">
                      City of Interest
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#FFFFFF] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316] transition-colors"
                    >
                      <option value="Mumbai (BKC / Worli / Parel)">Mumbai (BKC / Worli / Parel)</option>
                      <option value="Gurugram (Golf Course Rd / SPR)">Gurugram (Golf Course Rd / SPR)</option>
                      <option value="Bengaluru (North / Whitefield)">Bengaluru (North / Whitefield)</option>
                      <option value="Multi-Market Portfolio">Multi-Market Portfolio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-2">
                      Asset Focus
                    </label>
                    <select
                      value={formData.assetFocus}
                      onChange={(e) => setFormData({ ...formData, assetFocus: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#FFFFFF] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316] transition-colors"
                    >
                      <option value="Luxury Residential">Luxury Residential</option>
                      <option value="Grade-A Commercial">Grade-A Commercial</option>
                      <option value="Plotted Land / Freehold">Plotted Land / Freehold</option>
                      <option value="Pre-Leased Institutional Floor">Pre-Leased Institutional Floor</option>
                    </select>
                  </div>
                </div>

                {/* Specific Requirements */}
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-2">
                    Specific Requirements or Criteria (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention desired floor band, timeline to execute, or particular asset classes under consideration..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3.5 py-3 bg-[#FFFFFF] border border-[#D8D4CC] text-xs text-[#121316] placeholder:text-[#8C8E97] focus:outline-none focus:border-[#121316] transition-colors resize-none"
                  />
                </div>

                {/* Charter Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="charter-check"
                    required
                    checked={formData.agreedToCharter}
                    onChange={(e) => setFormData({ ...formData, agreedToCharter: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded-none accent-[#121316] cursor-pointer"
                  />
                  <label htmlFor="charter-check" className="text-xs text-[#5E5E62] leading-relaxed cursor-pointer">
                    I agree to receive verified property dossiers. I understand BroRiser enforces a strict zero-spam, zero-cold-calling charter.
                  </label>
                </div>

                {/* Prototype Notice */}
                <p className="text-[11px] text-[#8C8E97] italic">
                  Demo Prototype: Inquiries submitted here are illustrative for preview testing and ready for CRM integration.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-widest hover:bg-[#1E3A2F] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? 'Transmitting Mandate...' : 'START A CONVERSATION'}</span>
                  <span>▶</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
