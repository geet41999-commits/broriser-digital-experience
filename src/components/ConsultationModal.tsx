import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Property } from '../types/property';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: Property | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProperty,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timePreference, setTimePreference] = useState('Morning (10:00 - 13:00 IST)');
  const [notes, setNotes] = useState(
    defaultProperty ? `Regarding opportunity: ${defaultProperty.title} (${defaultProperty.dossierRef})` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121316]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#121316] w-full max-w-lg shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#FBF9F5] border-b border-[#E2DFD8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-serif text-xs font-semibold">
              B
            </div>
            <span className="font-serif text-base font-bold text-[#121316]">
              Private Advisory Consultation
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#71747E] hover:text-[#121316] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-[#1E3A2F] text-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#121316] mb-2">
                Mandate Received
              </h3>
              <p className="text-xs text-[#5E5E62] mb-6">
                A Senior Institutional Partner will reach out to <span className="font-semibold text-[#121316]">{phone}</span> during your selected window ({timePreference}).
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-[#F5F2EB] border border-[#E2DFD8] text-xs text-[#46464B] flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#1E3A2F] shrink-0" />
                <span>Strict zero-spam fiduciary guarantee. No cold calls.</span>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Piramal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FBF9F5] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-1">
                    Direct Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBF9F5] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@familyoffice.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBF9F5] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-1">
                  Preferred Consultation Window
                </label>
                <select
                  value={timePreference}
                  onChange={(e) => setTimePreference(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FBF9F5] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316]"
                >
                  <option value="Morning (10:00 - 13:00 IST)">Morning (10:00 - 13:00 IST)</option>
                  <option value="Afternoon (14:00 - 17:00 IST)">Afternoon (14:00 - 17:00 IST)</option>
                  <option value="Evening (18:00 - 20:00 IST)">Evening (18:00 - 20:00 IST)</option>
                  <option value="Weekend Special Session">Weekend Special Session</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-[#71747E] mb-1">
                  Brief Mandate or Opportunity Reference
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specific unit requirements, investment horizon, or transaction queries..."
                  className="w-full px-3 py-2 bg-[#FBF9F5] border border-[#D8D4CC] text-xs text-[#121316] focus:outline-none focus:border-[#121316] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors cursor-pointer mt-4"
              >
                Request Advisor Call
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
