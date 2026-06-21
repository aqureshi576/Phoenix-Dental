import React from 'react';
import { Calendar, Check, ChevronRight, Phone, Sparkles, Smile, ShieldPlus, ShieldAlert, HeartHandshake } from 'lucide-react';

interface ServicesViewProps {
  onBookOpen: (initialService?: string) => void;
}

export default function ServicesView({ onBookOpen }: ServicesViewProps) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HEADER SECTION */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs font-bold font-mono bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 px-3 py-1 rounded-full uppercase tracking-wider">
          Practice Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
          Comprehensive Care <br />
          <span className="text-[#00FF66] font-semibold italic">For Every Smile in Ashtown</span>
        </h1>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-sans">
          From preventative routine examinations to complex implant cosmetic restorations, our clinic is fitted with advanced dental diagnostic technology to deliver outstanding precision.
        </p>
      </section>

      {/* 2. CORE SERVICES LIST GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Service Card 1: General Dentistry */}
          <div className="bg-zinc-900/60 rounded-[32px] border-2 border-white/10 p-6 flex flex-col justify-between hover:border-[#00FF66]/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="space-y-4">
              <span className="inline-flex h-11 w-11 rounded-xl bg-zinc-950 items-center justify-center text-[#00FF66] border border-white/5 shadow-md shadow-[#00FF66]/5">
                <Smile size={20} />
              </span>
              <h3 className="text-lg font-display font-bold text-white font-sans">General Dentistry</h3>
              <p className="text-xs text-zinc-400 leading-normal font-sans">
                Perfect general checkups to ensure the health of your teeth and gums. We use low-radiation digital radiology to construct early plaque diagnostics.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-white/5 font-sans">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <span>Routine oral exams & oral cancer screenings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <span>Dentist composite fillings matching your natural tooth shade</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#00FF66] shrink-0 mt-0.5" />
                  <span>Micro-invasive root canal therapies to save damaged teeth</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center font-mono">
              <span className="text-xs font-bold text-zinc-400">Exam: €50.00</span>
              <button 
                onClick={() => onBookOpen('Routine Examination')}
                className="text-xs font-bold text-[#00FF66] hover:text-white flex items-center gap-0.5 cursor-pointer uppercase tracking-wider"
              >
                Book Routine
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Service Card 2: Dental Hygiene */}
          <div className="bg-zinc-900/60 rounded-[32px] border-2 border-white/10 p-6 flex flex-col justify-between hover:border-[#00FF66]/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="space-y-4">
              <span className="inline-flex h-11 w-11 rounded-xl bg-zinc-950 items-center justify-center text-[#22D3EE] border border-white/5 shadow-md shadow-[#22D3EE]/5">
                <ShieldPlus size={20} />
              </span>
              <h3 className="text-lg font-display font-bold text-white font-sans">Dental Hygiene</h3>
              <p className="text-xs text-zinc-400 leading-normal font-sans">
                Spotlighting preventive gum care with our registered hygienist Deirdre O'Driscoll. Combat bleeding, reverse gingivitis, and eliminate tartar buildup thoroughly.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-white/5 font-sans">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>Subsidized PRSI cleaning cover option (pay only €15.00!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>Detailed scale & polish hygienist cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>Personalized oral hygiene instructions & brush analysis</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center font-mono">
              <span className="text-xs font-bold text-zinc-400">Scale: €70.00</span>
              <button 
                onClick={() => onBookOpen('Scale & Polish')}
                className="text-xs font-bold text-[#22D3EE] hover:text-white flex items-center gap-0.5 cursor-pointer uppercase tracking-wider"
              >
                Book Hygienist
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Service Card 3: Cosmetic Dentistry */}
          <div className="bg-zinc-900/60 rounded-[32px] border-2 border-white/10 p-6 flex flex-col justify-between hover:border-[#00FF66]/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="space-y-4">
              <span className="inline-flex h-11 w-11 rounded-xl bg-zinc-950 items-center justify-center text-purple-400 border border-white/5 shadow-md shadow-purple-400/5">
                <Sparkles size={18} />
              </span>
              <h3 className="text-lg font-display font-bold text-white font-sans">Cosmetic Improvements</h3>
              <p className="text-xs text-zinc-400 leading-normal font-sans">
                Redesign your confidence with subtle, contemporary aesthetic treatments. We customize composite bonding layouts to correct gaps, chips, and discolorations.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-white/5 font-sans">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>Premium handcrafted ceramic veneers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>State-of-the-art dental composite bonding modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>In-clinic or take-home teeth whitening kits</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center font-mono">
              <span className="text-xs font-bold text-zinc-400">Consult: Call Us</span>
              <button 
                onClick={() => onBookOpen('Cosmetic Consultation')}
                className="text-xs font-bold text-purple-400 hover:text-white flex items-center gap-0.5 cursor-pointer uppercase tracking-wider"
              >
                Book Consult
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. DENTAL IMPLANTS WIDE FEATURE SCREEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden border-2 border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-[100%] bg-cover bg-center opacity-10 hidden lg:block" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800')` }} />
          
          <div className="relative z-2 max-w-2xl space-y-6">
            <span className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest bg-[#00FF66]/10 border border-[#00FF66]/20 px-3 py-1 rounded-full">
              Golden Standard Restorations
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium">Dental Implants</h2>
            <p className="text-sm text-zinc-350 leading-relaxed font-sans">
              Missing teeth can cause healthy bone structure to degrade and affect how you eat, drink and speak. Our medical implant replacements replicate biological roots perfectly. Using highly stable titanium foundations topped with custom-manufactured zirconium crowns, we deliver life-changing stability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2 text-xs text-zinc-250 font-sans">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] font-bold">✓</span>
                <span>In-depth assessment & diagnostic check</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] font-bold">✓</span>
                <span>Tax reduction certified (Med 2 Revenue form supported)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] font-bold">✓</span>
                <span>Premium Swiss implant materials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] font-bold">✓</span>
                <span>Restore absolute bite & confidence</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-2">
              <button 
                onClick={() => onBookOpen('Dental Implants Consultation')}
                className="bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-black uppercase text-xs tracking-wider py-3.5 px-6 rounded-xl hover:shadow-md transition-all cursor-pointer"
              >
                Book Free Consultation
              </button>
              <div className="text-xs text-zinc-500 font-mono">
                Implants from €1,800.00 • Payment plans options available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY CARE FEATURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-rose-500/5 p-8 rounded-[32px] border-2 border-rose-500/20 shadow-2xl">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-rose-500/10 text-rose-400 px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest border border-rose-500/20">
              <ShieldAlert size={14} className="text-rose-400" /> Emergency Appointment Care
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
              Severe Dental Pain or Traumatic Tooth Injury?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
              We dedicate emergency slots each afternoon to assist patients with severe swelling, dental abscesses, chipped tooth repair, or intense jaw pain. Feel free to contact our Ashtown patient line directly at 8:00 AM, and we will do our utmost to secure you a same-day exam.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2">
            <a 
              href="tel:018664080" 
              className="w-full text-center bg-rose-600 hover:bg-rose-700 text-white font-black py-3.5 px-6 rounded-xl text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 font-mono"
            >
              <Phone size={14} />
              01 866 4080
            </a>
            <button 
              onClick={() => onBookOpen('Emergency Treatment')}
              className="w-full text-center bg-zinc-900 border border-white/5 hover:bg-zinc-950 text-white font-bold py-3 px-6 rounded-xl text-xs tracking-wider uppercase transition-all cursor-pointer font-sans"
            >
              Request Slot Online
            </button>
          </div>

        </div>
      </section>

      {/* 5. CLIENT COMFORTS INFO BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-zinc-900 border-2 border-white/10 rounded-[32px] flex flex-col md:flex-row gap-8 items-center shadow-2xl">
          <div className="bg-zinc-950 p-4 rounded-full border border-white/5 shrink-0 text-[#00FF66] shadow-lg shadow-[#00FF66]/5">
            <HeartHandshake size={32} />
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-display font-bold text-white">Our Commitment to Anxious Patients</h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              We understand dental fear is highly real. Our clinicians don't rush. We explain every dental step, pause treatments immediately if you signal discomfort, and utilize modern micro-fine needles and highly effective topical anesthetics to keep your treatment completely pain-free.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
