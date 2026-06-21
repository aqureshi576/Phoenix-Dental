import React, { useState } from 'react';
import { DOCTORS } from '../data';
import { Tab } from '../types';
import { Calendar, CheckCircle2, ChevronRight, Sparkles, Star, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

interface HomeViewProps {
  onBookOpen: (initialService?: string) => void;
  setActiveTab: (tab: Tab) => void;
}

export default function HomeView({ onBookOpen, setActiveTab }: HomeViewProps) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedService, setSelectedService] = useState('Routine Examination');

  const handleWidgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookOpen(selectedService);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION & INTEGRATED BOOKING BAR */}
      <section className="relative bg-zinc-900 text-white min-h-[500px] flex flex-col justify-center py-16 px-6 sm:px-8 lg:px-10 overflow-hidden rounded-[32px] border-2 border-white/10 shadow-2xl">
        {/* Abstract vector backgrounds */}
        <div className="absolute inset-x-0 bottom-0 top-0 bg-[linear-gradient(to_bottom,rgba(13,13,13,0.95),rgba(0,255,102,0.06))] z-1" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600')` }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-2 space-y-6">
          
          {/* New Patient Registration pill tag */}
          <div className="inline-flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase animate-pulse">
            <Sparkles size={12} className="text-[#00FF66]" />
            New Patient Registrations Open
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white leading-tight">
            Exceptional Dental Care <br />
            <span className="text-[#00FF66] font-semibold">in the Heart of Ashtown</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Welcome to Dublin's premium family-first dental practice. Experience painless general checkups, award-winning alignment, and restorative dental implants with our friendly experts.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-bold font-mono text-zinc-400 capitalize">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 size={14} className="text-[#00FF66]" /> Authorized PRSI & Medical Card Scheme
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 size={14} className="text-[#00FF66]" /> Gentle Doctor Team For Nervous Patient Care
            </span>
          </div>

          {/* Booking Widget Bar */}
          <div className="pt-6 max-w-3xl mx-auto">
            <form 
              onSubmit={handleWidgetSubmit}
              className="bg-zinc-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-3 text-white text-left shadow-2xl"
            >
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest pl-1.5 mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-zinc-900 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00FF66] text-white font-mono"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest pl-1.5 mb-1.5">
                  Checkup Category
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00FF66] text-white"
                >
                  <option value="Routine Examination">Routine Examination (€50.00)</option>
                  <option value="Scale & Polish">Routine Scale & Polish (€70.00)</option>
                  <option value="Dental Implants Consultation">Dental Implants Consultation (Free)</option>
                  <option value="Cosmetic Consultation">Cosmetic Smile Consultation</option>
                  <option value="Emergency Treatment">Emergency Appointment / Toothache</option>
                </select>
              </div>

              <div className="md:self-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-black text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Check Availability
                  <ChevronRight size={14} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* 2. WELCOME TO PHOENIX DENTAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6 bg-zinc-900/50 border-2 border-white/10 p-6 sm:p-8 rounded-[32px]">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] text-xs font-mono uppercase tracking-widest font-bold border border-[#00FF66]/20">
              <ShieldCheck size={13} className="text-[#00FF66]" /> Established Dublin Practice
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
              Welcome to <br />
              Phoenix <span className="text-[#00FF66]">Dental</span>
            </h2>
            <p className="text-zinc-455 text-xs sm:text-sm leading-relaxed">
              At Phoenix Dental, we have custom-built our Ashtown environment around the sensory comforts of our clients. We understand that visiting the dentist can evoke feelings of anxiety, which is why we specialize in empathetic, gentle patient care.
            </p>
            <p className="text-zinc-455 text-xs sm:text-sm leading-relaxed">
              From our spacious clinical rooms utilizing standard-setting diagnostic technology, to our thorough preventative checkups, we guarantee a professional dental experience that puts your comfort first.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActiveTab('team')}
                className="inline-flex items-center justify-center gap-1 px-5 py-3 rounded-xl border-2 border-white/10 text-zinc-300 hover:text-[#00FF66] hover:border-[#00FF66]/30 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer bg-zinc-950/20"
              >
                Our Friendly Team
                <ChevronRight size={14} />
              </button>
              <button 
                onClick={() => onBookOpen('Routine Examination')}
                className="inline-flex items-center justify-center gap-1 px-5 py-3 rounded-xl bg-[#00FF66] hover:bg-[#00FF66]/90 text-black text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#00FF66]/10"
              >
                Book General Checkup
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative bg-zinc-900 border-2 border-white/10 rounded-[32px] p-2.5 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1200" 
              alt="Welcome to Phoenix Dental Treatment Studio" 
              className="rounded-[24px] shadow-xl w-full object-cover h-[380px] relative z-1"
            />
            {/* Overlay float element */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-950 p-4.5 rounded-2xl shadow-xl border-2 border-white/10 max-w-xs z-2 hidden sm:block">
              <div className="flex gap-3 items-center">
                <span className="h-10 w-10 rounded-full bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center shrink-0 border border-[#00FF66]/20">
                  <Heart size={20} className="fill-current text-[#00FF66]" />
                </span>
                <div>
                  <h5 className="font-bold text-xs text-white">Empathetic Care Cert</h5>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Specialized therapies for dental phobia and anxious check-ins.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PREMIUM SERVICES OVERVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-transparent">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#00FF66]">Therapies & Treatments</span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight">Our Premium Service Pillars</h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto font-sans">
              We provide comprehensive, high-quality treatments under one roof, focusing on transparency and pain reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Service card 1 */}
            <div className="bg-zinc-900/40 p-8 rounded-[32px] border-2 border-white/10 flex flex-col justify-between group hover:border-[#00FF66]/30 hover:bg-zinc-900/60 transition-all duration-300">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-950 text-[#00FF66] font-black text-xl border border-white/10 shadow-[0_4px_10px_rgba(0,255,102,0.1)]">
                  +
                </span>
                <h3 className="text-xl font-display font-bold text-white">General Dentistry</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  Keeping your natural smile radiant and disease-free. Routine dental screening, digital x-ray diagnostics, cosmetic tooth-matching fillings, micro-invasive root canal therapies, and smooth, professional extractions.
                </p>
                <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-white/5 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66]" /> Routine examinations starting at €50.00
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66]" /> Fluoride barrier and crack sealant applications
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="text-xs font-bold uppercase tracking-wider text-[#00FF66] hover:text-white flex items-center gap-1.5 cursor-pointer group"
                >
                  Explore Details
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onBookOpen('Routine Examination')}
                  className="text-[11px] font-black uppercase tracking-wider bg-zinc-950 text-white border border-white/10 rounded-xl px-4 py-2 hover:bg-[#00FF66] hover:text-black hover:border-[#00FF66]/20 transition-all cursor-pointer font-sans"
                >
                  Book Exam
                </button>
              </div>
            </div>

            {/* Service card 2 */}
            <div className="bg-zinc-900/40 p-8 rounded-[32px] border-2 border-white/10 flex flex-col justify-between group hover:border-[#00FF66]/30 hover:bg-zinc-900/60 transition-all duration-300">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-950 text-[#22D3EE] font-black text-xl border border-white/10 shadow-[0_4px_10px_rgba(34,211,238,0.1)]">
                  ✧
                </span>
                <h3 className="text-xl font-display font-bold text-white">Dental Implants</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  The ultimate golden standard for missing tooth restoration. We use top-tier, bio-compatible titanium posts topped with bespoke handcrafted zirconium crowns to return absolute eating, speaking, and smiling confidence.
                </p>
                <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-white/5 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" /> Free comprehensive introductory implant consultations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" /> Med 2 tax rebates claimable for 20% savings
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="text-xs font-bold uppercase tracking-wider text-[#00FF66] hover:text-white flex items-center gap-1.5 cursor-pointer group"
                >
                  Explore Details
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onBookOpen('Dental Implants Consultation')}
                  className="text-[11px] font-black uppercase tracking-wider bg-zinc-950 text-white border border-white/10 rounded-xl px-4 py-2 hover:bg-[#22D3EE] hover:text-black hover:border-[#22D3EE]/20 transition-all cursor-pointer font-sans"
                >
                  Book Free Consult
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MODERN CLINIC ENVIRONMENT & STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 order-2 lg:order-1 bg-zinc-900/50 border-2 border-white/10 p-6 sm:p-8 rounded-[32px]">
            <h2 className="text-3xl font-display font-medium text-white tracking-tight leading-tight">
              A Modern Clinic <br />
              <span className="text-[#00FF66] font-semibold">Built for Precision & Safety</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Based conveniently at the heart of Ashtown, Dublin 15, Phoenix Dental utilizes leading dental imaging machinery and strictly sterilized surgical environments. Our focus is ensuring you feel highly cared for at every stage of your dental journey.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-1 bg-zinc-950/40 p-4 rounded-2xl border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[#00FF66]">15+</span>
                <span className="block text-[9px] text-zinc-500 font-bold uppercase tracking-widest font-mono">Years Excellence</span>
              </div>
              <div className="space-y-1 bg-zinc-950/40 p-4 rounded-2xl border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[#00FF66]">5k+</span>
                <span className="block text-[9px] text-zinc-500 font-bold uppercase tracking-widest font-mono">Bright Smiles</span>
              </div>
              <div className="space-y-1 bg-zinc-950/40 p-4 rounded-2xl border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white flex items-center justify-center gap-0.5">
                  4.9
                  <Star className="text-amber-400 fill-current ml-0.5" size={15} />
                </span>
                <span className="block text-[9px] text-zinc-500 font-bold uppercase tracking-widest font-mono">Google Stars</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-zinc-900 border-2 border-white/10 rounded-[32px] p-2.5 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
              alt="Phoenix Dental modern patient reception foyer" 
              className="rounded-[24px] shadow-lg w-full object-cover h-[350px]"
            />
          </div>

        </div>
      </section>

      {/* 5. MEET OUR EXPERTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#00FF66]">Expert Practitioners</span>
          <h2 className="text-3xl font-display font-medium text-white tracking-tight">Meet Our Dental Experts</h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto font-sans">
            Our highly educated clinicians provide general, orthodontic, and preventative gum hygiene therapies with exceptional compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <div 
              key={doctor.id} 
              className="bg-zinc-900/65 rounded-[32px] border-2 border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#00FF66]/30 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#00FF66] text-black font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {doctor.designation}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-display font-bold text-white">{doctor.name}</h3>
                  <p className="text-[10px] font-bold text-[#00FF66] uppercase tracking-widest font-mono">{doctor.role}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1.5 font-sans">{doctor.bio}</p>
                </div>
              </div>
              <div className="p-6 pt-5 border-t border-white/5 flex justify-between items-center bg-zinc-950/40">
                <span className="text-[10px] text-zinc-500 font-mono italic">{doctor.education.split(',')[0]}</span>
                <button 
                  onClick={() => setActiveTab('team')}
                  className="text-xs font-bold uppercase tracking-wider text-[#00FF66] hover:text-white flex items-center gap-0.5 cursor-pointer font-mono"
                >
                  Biography
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOOK YOUR VISIT TODAY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 text-white rounded-[32px] p-8 sm:p-14 relative overflow-hidden text-center border-2 border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#00FF66] rounded-full blur-[120px] opacity-10 pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-cyan-400 rounded-full blur-[120px] opacity-10 pointer-events-none" />

          <div className="relative z-2 max-w-xl mx-auto space-y-6">
            <span className="text-xs font-black font-mono text-[#00FF66] uppercase tracking-widest bg-[#00FF66]/10 px-3 py-1 rounded-full border border-[#00FF66]/20">Instant Online Booking</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">Ready to book your dental checkup today?</h2>
            <p className="text-zinc-350 text-xs sm:text-sm leading-relaxed font-sans">
              Our live booking system is available 24/7. Select your date, preferred practitioner, and secure your slot in under 90 seconds. 
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onBookOpen('Routine Examination')}
                className="bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-[#00FF66]/20 transition-all cursor-pointer"
              >
                Instant Online Booking
              </button>
              <span className="text-zinc-650 font-mono py-1">or</span>
              <a 
                href="tel:018664080"
                className="text-white hover:text-[#00FF66] font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors font-mono"
              >
                Call Clinic: 01 866 4080
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
