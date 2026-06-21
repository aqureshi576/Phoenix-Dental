import React, { useState } from 'react';
import { DOCTORS, SERVICE_PRICESLog } from '../data';
import { CallbackRequest } from '../types';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

interface PriceListContactViewProps {
  onBookOpen: (initialService?: string) => void;
  callbackRequests: CallbackRequest[];
  onAddCallback: (req: CallbackRequest) => void;
}

export default function PriceListContactView({
  onBookOpen,
  callbackRequests,
  onAddCallback
}: PriceListContactViewProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Routine Checkup');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please supply your Full Name.');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setErrorMsg('Please supply a valid Phone Number.');
      return;
    }

    const newRequest: CallbackRequest = {
      id: 'cb-' + Math.random().toString(36).substr(2, 9),
      name,
      phone,
      service,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Pending'
    };

    onAddCallback(newRequest);
    setIsSubmitted(true);
    setErrorMsg('');
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setService('Routine Checkup');
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HEADER */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs font-bold font-mono bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 px-3 py-1 rounded-full uppercase tracking-wider">
          Investment & Engagement
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
          An Investment in <br />
          <span className="text-[#00FF66] font-semibold italic">Your Smile & Confidence</span>
        </h1>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-sans">
          We believe in transparent dental pricing. Below you will find our standardized fees, PRSI qualifying discounts, and direct callback request forms.
        </p>
      </section>

      {/* 2. PRICE LIST GRID & CONTACT BENTO PANELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: THE PRICING TABLES (7 Cols) */}
          <div className="lg:col-span-7 space-y-10 bg-zinc-905 p-6 sm:p-8 rounded-[32px] border-2 border-white/10 shadow-2xl">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-display font-bold text-white">Standard Dental Fee Scale</h2>
              <p className="text-xs text-zinc-450 mt-1 font-sans">Ashtown, Dublin 15 Practice — Tax reliefs claimable on Med 2 treatments.</p>
            </div>

            <div className="space-y-8">
              {SERVICE_PRICESLog.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-[10px] font-bold font-mono text-[#00FF66] tracking-widest uppercase bg-[#00FF66]/10 border border-[#00FF66]/20 px-3 py-1.5 rounded-lg inline-block">
                    {category.category}
                  </h3>
                  <div className="border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5 bg-zinc-950/45">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="p-3.5 hover:bg-zinc-900/50 transition-colors">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-sm font-semibold text-zinc-100 block font-sans">{item.name}</span>
                            {item.details && <span className="text-xs text-zinc-450 block mt-1 font-sans">{item.details}</span>}
                          </div>
                          <span className="text-xs font-mono font-bold text-white bg-zinc-900 border border-white/5 px-2.5 py-1 rounded-lg shrink-0">
                            {item.price}
                          </span>
                        </div>
                        {item.subsidized && (
                          <div className="mt-2.5 flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] px-2 py-0.5 rounded text-[10px] uppercase font-bold border border-[#00FF66]/20 font-mono tracking-wider w-max">
                            <span className="h-1 w-1 bg-[#00FF66] rounded-full" />
                            {item.subsidized}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Informative notes footer */}
            <div className="mt-6 p-4 bg-zinc-955 rounded-2xl border border-white/5 text-xs text-zinc-400 space-y-3 font-sans">
              <div className="flex gap-2 items-start">
                <AlertCircle size={15} className="text-[#00FF66] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white">PRSI Treatment Benefit:</strong> If you pay PRSI in Ireland, you are likely entitled to a free dental screening annually and a subsidized clean for only €15.00! Simply supply your PPSN when scheduling.
                </p>
              </div>
              <div className="flex gap-2 items-start pt-3 border-t border-white/5">
                <AlertCircle size={15} className="text-[#00FF66] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white">Dental Tax Rebate (Med 2 Form):</strong> Crowns, bridges, root canals, and micro dental implant restorations qualify for 20% tax Relief. We compile the Med 2 certificate at completion for your easy revenue submission.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT DETAILS, REQ CALLBACK & INTERACTIVE MAP (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Bento doctor cards mini-carousel */}
            <div className="grid grid-cols-2 gap-4">
              {DOCTORS.slice(0, 2).map((doc) => (
                <div key={doc.id} className="bg-zinc-900/60 p-4 rounded-[24px] border-2 border-white/10 space-y-2.5 flex flex-col justify-between shadow-lg">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950 border border-white/5">
                    <img src={doc.image} alt={doc.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white block font-sans">{doc.name}</h4>
                    <span className="text-[9px] text-[#00FF66] font-mono tracking-widest uppercase block mt-1 font-bold">{doc.role.split(' ')[0]} Dentist</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Callback Request Form Card */}
            <div className="bg-zinc-900 text-white p-6 rounded-[32px] border-2 border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
              
              {!isSubmitted ? (
                <form onSubmit={handleCallbackSubmit} className="space-y-4 relative z-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66] animate-ping" />
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#00FF66] uppercase">Rapid response callback</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">Request Callback</h3>
                  <p className="text-xs text-zinc-400 leading-normal font-sans">
                    Enter your name and telephone below, and a member of our Ashtown clinic staff will call you back shortly.
                  </p>

                  {errorMsg && (
                    <div className="p-2.5 bg-rose-950/40 text-rose-300 border border-rose-900/40 text-xs rounded-lg font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-3 font-sans">
                    <div>
                      <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1 pl-1 font-mono">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Liam O'Connor"
                        className="w-full bg-zinc-955 text-zinc-100 rounded-xl py-2 px-3.5 text-xs border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1 pl-1 font-mono">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 087 123 4567"
                        className="w-full bg-zinc-955 text-zinc-100 rounded-xl py-2 px-3.5 text-xs border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1 pl-1 font-mono">Interested Service</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-zinc-955 text-zinc-100 rounded-xl py-2 px-3.5 text-xs border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#00FF66] focus:border-[#00FF66]"
                      >
                        <option value="Routine Checkup">Standard Examination checkup</option>
                        <option value="Scale & Polish">Scale & polish cleaning</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Cosmetic Bonding">Cosmetic bonding</option>
                        <option value="Severe Pain Emergency">Surgical / Extreme pain emergency</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-black py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer font-mono"
                  >
                    Submit Request
                    <Send size={12} />
                  </button>
                </form>
              ) : (
                /* Callback logged success info */
                <div className="relative z-2 text-center py-6 space-y-4">
                  <div className="inline-flex h-12 w-12 rounded-full bg-[#00FF66]/10 text-[#00FF66] items-center justify-center border border-[#00FF66]/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-base font-display font-bold">Callback Compiled!</h3>
                  <p className="text-xs text-zinc-350 leading-relaxed max-w-xs mx-auto font-sans">
                    Outstanding. We have compiled your callback request. Our front of house team will dial <strong>{phone}</strong> shortly.
                  </p>
                  
                  <button 
                    onClick={handleResetForm}
                    className="text-xs text-[#00FF66] hover:text-white underline transition-colors cursor-pointer font-sans"
                  >
                    Request Another Callback
                  </button>
                </div>
              )}

              {/* List user requests if there are any locally logged ones */}
              {callbackRequests.length > 0 && (
                <div className="mt-5 border-t border-white/10 pt-4 text-xs space-y-2 relative z-2 font-sans-dense">
                  <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-[#00FF66] pl-0.5">Your Active Callbacks</span>
                  {callbackRequests.map((req) => (
                    <div key={req.id} className="flex justify-between items-center bg-zinc-950 p-2.5 rounded-xl border border-white/5">
                      <div>
                        <span className="font-semibold block text-white text-xs">{req.name}</span>
                        <span className="text-[10px] text-zinc-450 block mt-0.5">{req.service}</span>
                      </div>
                      <span className="bg-[#00FF66]/15 text-[#00FF66] font-bold text-[9px] px-2.5 py-1 rounded-full border border-[#00FF66]/20 font-mono uppercase tracking-wider scale-90">
                        Pending
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Direct Contact bento info card */}
            <div className="bg-zinc-900 border-2 border-white/10 rounded-[32px] p-6 shadow-2xl space-y-4">
              <h3 className="text-base font-display font-bold text-white border-b border-white/5 pb-2">Get in Touch Directly</h3>
              <div className="space-y-3.5 text-xs text-zinc-400 font-sans">
                <div className="flex gap-3 items-start">
                  <MapPin size={16} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-200 block">Practice Address</span>
                    <span>Unit 2, Phoenix House, Ashtown, Dublin 15</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-200 block">Patient Telephone</span>
                    <a href="tel:018664080" className="hover:text-[#00FF66] font-semibold text-white">01 866 4080</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail size={16} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-200 block">Practice Email</span>
                    <a href="mailto:info@phoenixdental.ie" className="hover:text-[#00FF66] font-semibold text-white">info@phoenixdental.ie</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock size={16} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-200 block">Registered Hours</span>
                    <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Dublin MAP Mockup Card (Open in maps) */}
            <div className="bg-zinc-900 text-white rounded-[32px] overflow-hidden border-2 border-white/10 shadow-2xl relative group">
              <div className="p-5 space-y-1">
                <h3 className="font-display font-bold text-sm text-white">Interactive Clinic Map</h3>
                <p className="text-[11px] text-zinc-400 font-sans">Conveniently situated right next to the Ashtown canal and commuter train station.</p>
              </div>

              {/* Styled canvas-like vector map drawer */}
              <div className="h-44 bg-zinc-955 relative overflow-hidden select-none border-t border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Roads lines */}
                <div className="absolute left-[30%] top-0 bottom-0 w-4 bg-zinc-900 border-x border-white/5" />
                <div className="absolute top-[40%] left-0 right-0 h-4 bg-zinc-900 border-y border-white/5" />
                <div className="absolute top-[40%] left-[30%] h-4 w-4 bg-zinc-800" />

                {/* Canal representation line */}
                <div className="absolute top-[55%] left-0 right-0 h-2 bg-teal-950/60 border-y border-teal-500/10" />
                
                {/* Commuter station */}
                <div className="absolute top-[20%] left-[65%] p-1.5 bg-zinc-950 border border-white/5 text-[8px] font-mono font-bold text-zinc-400 rounded uppercase tracking-wider">
                  🚇 Ashtown Station
                </div>

                {/* Phoenix Dental Marker */}
                <div className="absolute top-[44%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="h-5 w-5 bg-[#00FF66] border-2 border-zinc-950 rounded-full flex items-center justify-center font-black text-[9px] text-zinc-950 shadow-[0_0_12px_rgba(0,255,102,0.4)] animate-pulse">
                    +
                  </span>
                  <span className="bg-zinc-950 text-white font-mono text-[8px] border border-[#00FF66]/30 px-1 py-0.5 rounded mt-0.5 font-bold tracking-wide whitespace-nowrap uppercase">
                    Phoenix Dental
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 flex gap-1 bg-zinc-900/90 hover:bg-zinc-900 text-[#00FF66] text-[10px] px-2.5 py-1.5 rounded-lg border border-white/5 transition-colors pointer-events-auto font-mono uppercase tracking-wider text-[9px] font-bold shadow-md">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    Open in Google Maps
                    <ChevronRight size={10} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THE EMPATHETIC EXPERT QUOTE FULL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[32px] p-10 sm:p-16 relative overflow-hidden text-center text-white border-2 border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200')` }} />
          <div className="absolute top-12 left-12 w-48 h-48 bg-[#00FF66] rounded-full blur-[100px] opacity-5 pointer-events-none" />
          <div className="relative z-2 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold font-mono tracking-widest text-[#00FF66] uppercase bg-[#00FF66]/10 px-3 py-1 border border-[#00FF66]/20 rounded-full">Aesthetic Restorations Philosophy</span>
            <blockquote className="text-lg sm:text-2xl font-display font-medium tracking-tight leading-relaxed text-zinc-100 italic">
              "The finest clinical results are not defined by how quickly a tooth extraction or porcelain restoration is executed, but by the comfort, confidence, and reassurance a patient experiences while sitting in our chair."
            </blockquote>
            <div className="flex flex-col items-center gap-1 font-sans">
              <span className="text-sm font-bold text-white">Dr. Richard Hannon</span>
              <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest mt-1">Principal Dentist, Phoenix House Clinic</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
