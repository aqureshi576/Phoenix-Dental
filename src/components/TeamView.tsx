import React from 'react';
import { DOCTORS } from '../data';
import { Award, Brain, Glasses, ShieldCheck, HeartPulse, GraduationCap, ChevronRight, Check } from 'lucide-react';

interface TeamViewProps {
  onBookOpen: (initialService?: string) => void;
}

export default function TeamView({ onBookOpen }: TeamViewProps) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HEADER SECTION */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs font-bold font-mono bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 px-3 py-1 rounded-full uppercase tracking-wider">
          Practice Staff
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
          Care that puts <br />
          <span className="text-[#00FF66] font-semibold italic">your smile first.</span>
        </h1>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-sans">
          Meet our highly certified practitioners in Ashtown, Dublin 15. We are committed to continuing postgraduate education to deliver excellent clinical care.
        </p>
      </section>

      {/* 2. OUR STAFF COMPREHENSIVE CARDS ROWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {DOCTORS.map((doctor, index) => (
          <div 
            key={doctor.id}
            className={`bg-zinc-900/60 rounded-[32px] border-2 border-white/10 shadow-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Left: Image & Badge */}
            <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-950 border border-white/5 shadow-md">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#00FF66] text-black font-mono text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(0,255,102,0.3)]">
                  {doctor.role}
                </div>
              </div>
            </div>

            {/* Right: Bio & Qualifications */}
            <div className={`lg:col-span-8 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">{doctor.name}</h3>
                <p className="text-[10px] font-bold text-[#00FF66] tracking-widest uppercase font-mono mt-1">{doctor.designation}</p>
              </div>

              {/* Education Box */}
              <div className="flex items-start gap-3 bg-zinc-950/80 p-4 rounded-xl border border-white/5">
                <GraduationCap className="text-[#00FF66] shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="block text-[9px] text-zinc-500 font-mono font-bold uppercase tracking-widest">Accreditation & Qualifications</span>
                  <span className="block text-xs font-semibold text-zinc-200 mt-0.5 font-sans">{doctor.education}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[9px] font-bold font-mono text-zinc-500 uppercase tracking-widest pl-0.5">Clinical Approach</h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {doctor.longBio}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[9px] font-bold font-mono text-zinc-500 uppercase tracking-widest pl-0.5">Specialist Treatments</h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((spec, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="inline-flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-[#00FF66]/20 font-mono"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#00FF66]" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onBookOpen()}
                  className="bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-black uppercase tracking-wider text-[10px] py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#00FF66]/10"
                >
                  Book Visit with {doctor.name.split(' ')[1]}
                </button>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 3. A RELAXED EXPERIENCE BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden border-2 border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#00FF66] rounded-full blur-[100px] opacity-10 pointer-events-none" />
          <div className="relative z-2 max-w-2xl space-y-4">
            <span className="text-[10px] font-bold font-mono text-[#00FF66] uppercase tracking-widest bg-[#00FF66]/10 px-3 py-1 rounded-full border border-[#00FF66]/20">Sensory Comfort Solutions</span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium">A Relaxed Experience</h3>
            <p className="text-xs sm:text-sm text-zinc-350 leading-relaxed font-sans">
              We understand dental appointments evoke high stress. That is why we have engineered a peaceful clinic environment. Ask our staff for noise-canceling headphones to stream ocean waves during operations, watch scenic landscapes on our ceiling screens, or enjoy herbal tea in our reception foyer before we begin.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[10px] font-bold text-[#00FF66] font-mono uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#00FF66]" /> Noise-Canceling Audio</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#00FF66]" /> Ceiling Visual Monitors</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#00FF66]" /> Calm Sensory Flow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COMMITMENTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-medium text-white tracking-tight leading-tight">
              Our Core Commitments <br />
              <span className="text-[#00FF66] font-sans italic">Guiding Clinical Dental Excellence</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
              Phoenix Dental was built around a singular idea: delivering world-class dental solutions that remain accessible and empathetic.
            </p>

            <div className="space-y-4 font-sans">
              <div className="flex gap-3">
                <span className="h-6 w-6 rounded bg-[#00FF66]/10 text-[#00FF66] font-bold flex items-center justify-center shrink-0 border border-[#00FF66]/20 text-xs mt-0.5 font-mono">1</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Absolute Transparency</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">All checkup, filling, and root canal fees are clearly presented beforehand. No hidden charges or surprise invoices.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-6 w-6 rounded bg-[#00FF66]/10 text-[#00FF66] font-bold flex items-center justify-center shrink-0 border border-[#00FF66]/20 text-xs mt-0.5 font-mono">2</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Highest Bio-Surgical Safety</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">We employ gold-standard steam sterilization cycles and completely biological-grade titanium posts for long-term health.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-6 w-6 rounded bg-[#00FF66]/10 text-[#00FF66] font-bold flex items-center justify-center shrink-0 border border-[#00FF66]/20 text-xs mt-0.5 font-mono">3</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Subsidized Covered Benefits</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">We directly bill your PRSI Treatment Benefits or Private Insurer to claim maximum savings on your behalf.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border-2 border-white/10 rounded-[32px] p-2.5 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" 
              alt="Hygienist Deirdre checking medical chart inside clinic" 
              className="rounded-[24px] shadow-lg w-full object-cover h-[340px]"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
