import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { DOCTORS } from '../data';
import { Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDate?: string;
  onBookingSuccess: (booking: Booking) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService = '',
  initialDate = '',
  onBookingSuccess
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dentist, setDentist] = useState('First Available');
  const [service, setService] = useState(initialService || 'General Checkup');
  const [date, setDate] = useState(initialDate || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('09:00');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync initial prop overrides
  React.useEffect(() => {
    if (initialService) setService(initialService);
    if (initialDate) setDate(initialDate);
  }, [initialService, initialDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('A valid Email address is required.');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setErrorMsg('A valid Contact Phone Number is required.');
      return;
    }
    if (!date) {
      setErrorMsg('Preferred Date is required.');
      return;
    }

    const newBooking: Booking = {
      id: 'bk-' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      dentist,
      service,
      date,
      time,
      notes,
      createdAt: new Date().toLocaleDateString()
    };

    onBookingSuccess(newBooking);
    setIsSubmitted(true);
    setErrorMsg('');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDentist('First Available');
    setService('General Checkup');
    setDate(new Date().toISOString().split('T')[0]);
    setTime('09:00');
    setNotes('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-lg bg-zinc-900 rounded-[32px] shadow-2xl overflow-hidden z-10 border-2 border-white/10"
        >
          {/* Header */}
          <div className="bg-zinc-950 text-white p-6 relative border-b border-white/5">
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 text-zinc-400 hover:text-[#00FF66] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#00FF66] uppercase font-bold">Interactive Scheduler</span>
            </div>
            <h3 className="text-2xl font-display font-bold tracking-tight">Book Appointment</h3>
            <p className="text-zinc-400 text-xs mt-1 font-sans">Instant, automated confirmation for your dentist slot.</p>
          </div>

          <div className="p-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-950/40 text-rose-350 text-xs rounded-xl border border-rose-900/40 font-semibold font-sans">
                    {errorMsg}
                  </div>
                )}

                {/* Patient Information Grid */}
                <div className="grid grid-cols-1 gap-4 font-sans">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-500" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Liam Murphy"
                        className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="liam@gmail.com"
                          className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-500" />
                        <input
                          type="text"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 087 123 4567"
                          className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-white/5 my-1" />

                {/* Preference Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Practitioner</label>
                    <select
                      value={dentist}
                      onChange={(e) => setDentist(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                    >
                      <option value="First Available">First Available Practitioner</option>
                      {DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} ({doc.role.split(' ')[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Service Required</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                    >
                      <option value="Routine Examination">Routine Examination (€50.00)</option>
                      <option value="Scale & Polish">Routine Scale & Polish (€70.05)</option>
                      <option value="Hygiene Clean & Polish">Hygienist Deep Clean (€140.00)</option>
                      <option value="Composite (White) Filling">White Filling (from €110.00)</option>
                      <option value="Standard Tooth Extraction">Extraction (from €90.00)</option>
                      <option value="Root Canal Treatment">Root Canal Therapy (from €350.00)</option>
                      <option value="Dental Implants Consultation">Implants Consultation (Free)</option>
                      <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                      <option value="Emergency Treatment">Emergency Appointment / Pain</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-500" />
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Preferred Time Block</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-500" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                      >
                        <option value="08:30">08:30 AM (Early Access)</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM (Midday)</option>
                        <option value="13:30">01:30 PM</option>
                        <option value="14:30">02:30 PM</option>
                        <option value="15:30">03:30 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="16:30">04:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="font-sans">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 font-mono">Any specific concerns?</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-500" />
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Nervous patient, PPSN number for PRSI check, or broken tooth."
                      rows={2}
                      className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-955 text-zinc-100 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66] resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-black py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer font-mono"
                >
                  Confirm Appointment Booking
                  <ChevronRight size={14} />
                </button>
              </form>
            ) : (
              /* Success screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 px-4"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#00FF66]/10 text-[#00FF66] mb-4 border border-[#00FF66]/20">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-display font-bold text-white tracking-tight">Booking Logged!</h4>
                <p className="text-xs text-zinc-400 mt-2 max-w-sm mx-auto font-sans leading-relaxed">
                  Outstanding! Your reservation request at <strong className="text-white">Phoenix Dental</strong> has been compiled successfully.
                </p>

                {/* Booking receipt details box */}
                <div className="mt-6 bg-zinc-950 p-5 rounded-2xl border border-white/5 text-left text-xs space-y-3 max-w-md mx-auto font-sans">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold font-mono text-[9px] uppercase tracking-wider">Patient</span>
                    <span className="text-zinc-100 font-bold">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold font-mono text-[9px] uppercase tracking-wider">Practitioner</span>
                    <span className="text-zinc-100 font-bold">{dentist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold font-mono text-[9px] uppercase tracking-wider">Service</span>
                    <span className="text-zinc-100 font-bold">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold font-mono text-[9px] uppercase tracking-wider">Date & Time</span>
                    <span className="text-[#00FF66] font-bold font-mono">{date} @ {time}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-3 mt-1">
                    <span className="text-zinc-500 font-bold font-mono text-[9px] uppercase tracking-wider">Status</span>
                    <span className="bg-[#00FF66]/15 text-[#00FF66] px-2.5 py-0.5 rounded-full font-bold font-mono uppercase text-[9px] tracking-wider border border-[#00FF66]/20">Confirmed</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 font-sans">
                  <p className="text-[10px] text-zinc-500">We have sent a copy of this confirmation copy to: {email}</p>
                  <button
                    onClick={handleReset}
                    className="mt-3 text-xs font-bold text-[#00FF66] hover:text-white underline transition-colors cursor-pointer"
                  >
                    Close & Return
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
