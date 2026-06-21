import React from 'react';
import { Tab } from '../types';
import { Calendar, Phone, Mail, Clock, MapPin, ExternalLink, HelpCircle } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: Tab) => void;
  onBookOpen: () => void;
}

export default function Footer({ setActiveTab, onBookOpen }: FooterProps) {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#00FF66] uppercase font-bold">Opening Hours</h4>
            <div className="space-y-2.5 text-sm text-zinc-400">
              <div className="flex justify-between border-b border-white/5 pb-1.5 font-sans">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5 font-sans">
                <span>Saturday</span>
                <span className="text-[#00FF66] font-semibold">Emergency Only</span>
              </div>
              <div className="flex justify-between pb-1.5 font-sans">
                <span>Sunday</span>
                <span className="text-zinc-600">Closed</span>
              </div>
            </div>

            {/* Holiday Notice pill */}
            <div className="mt-4 p-3.5 bg-zinc-90 w bg-zinc-900 border border-white/5 rounded-xl flex gap-2.5 items-start">
              <Calendar className="text-[#00FF66] shrink-0 mt-0.5" size={16} />
              <div>
                <span className="block text-[9px] font-mono font-bold text-[#00FF66] uppercase tracking-wider">Holiday Notice</span>
                <span className="block text-xs text-zinc-450 mt-1 leading-relaxed font-sans">
                  Clinic is closed from Dec 23rd to Jan 4th each year. Emergency lines remain active.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Location & Mini Map Representation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#00FF66] uppercase font-bold">Our Location</h4>
            <div className="text-sm text-zinc-400 space-y-2">
              <p className="flex items-start gap-2 text-zinc-200 font-sans">
                <MapPin size={16} className="text-[#00FF66] shrink-0 mt-0.5" />
                <span>Unit 2, Phoenix House,<br />Ashtown, Dublin 15</span>
              </p>
              <p className="text-xs text-zinc-455 leading-normal">
                Located right alongside the Royal Canal, just a 2-minute walk from Ashtown Train Station. Parking is available.
              </p>
            </div>
            {/* Styled Mini Canvas Map depiction */}
            <div className="h-28 w-full bg-zinc-900 rounded-xl relative overflow-hidden border border-white/10 group select-none shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px]" />
              {/* Canal representation line */}
              <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-teal-950/50 border-y border-teal-500/10" />
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 text-[8px] font-mono text-zinc-600 tracking-wider uppercase">Royal Canal</div>
              {/* Ashtown road represent */}
              <div className="absolute left-1/4 top-0 bottom-0 w-2.5 bg-zinc-800" />
              {/* Clinic Marker */}
              <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <span className="h-4.5 w-4.5 rounded-full bg-[#00FF66] border-2 border-zinc-950 flex items-center justify-center text-zinc-950 font-bold text-[8px] animate-pulse">
                  +
                </span>
                <span className="bg-zinc-950 text-white font-mono text-[7px] px-1 py-0.5 mt-0.5 rounded border border-[#00FF66]/20 font-semibold whitespace-nowrap uppercase tracking-wide">
                  Phoenix Dental
                </span>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-zinc-950/90 text-[#00FF66] text-[8px] font-mono font-bold px-2 py-1 rounded border border-white/5 tracking-wider uppercase shadow-sm">
                <span>View Map</span>
                <ExternalLink size={8} />
              </div>
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#00FF66] uppercase font-bold">Get Connected</h4>
            <div className="space-y-4 text-sm font-sans">
              <a href="tel:018664080" className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group">
                <span className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-[#00FF66]/10 group-hover:border-[#00FF66]/20 transition-all shadow-md">
                  <Phone size={14} className="text-[#00FF66]" />
                </span>
                <div>
                  <span className="block text-[8px] text-zinc-500 font-mono uppercase font-bold tracking-wider">Direct Patient Line</span>
                  <span className="text-zinc-200 font-semibold">01 866 4080</span>
                </div>
              </a>

              <a href="mailto:info@phoenixdental.ie" className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group">
                <span className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-[#00FF66]/10 group-hover:border-[#00FF66]/20 transition-all shadow-md">
                  <Mail size={14} className="text-[#00FF66]" />
                </span>
                <div>
                  <span className="block text-[8px] text-zinc-500 font-mono uppercase font-bold tracking-wider">General Enquiries</span>
                  <span className="text-zinc-200 font-semibold">info@phoenixdental.ie</span>
                </div>
              </a>
            </div>

            <p className="text-xs text-zinc-450 leading-relaxed pt-1.5 font-sans">
              Have questions? Our support team generally responds to all digital booking inquiries or callback forms within 2 working hours.
            </p>
          </div>

          {/* Column 4: Clinic Info & Navigation Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-zinc-900 border border-white/10 flex items-center justify-center text-[#00FF66] font-black text-sm">
                +
              </div>
              <span className="text-base font-display font-bold text-white tracking-tight">Phoenix Dental</span>
            </div>
            
            <p className="text-xs text-zinc-450 leading-relaxed font-sans">
              Accepting new private patients, PRSI (Qualified Treatment Benefit Scheme) and private medical schemes. Tax relief available on qualifying dental receipts (via revenue Med 2 certs).
            </p>

            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs pt-1 font-sans">
              <button onClick={() => setActiveTab('home')} className="text-left text-xs font-medium text-zinc-400 hover:text-[#00FF66] transition-colors cursor-pointer">
                Home
              </button>
              <button onClick={() => setActiveTab('services')} className="text-left text-xs font-medium text-zinc-400 hover:text-[#00FF66] transition-colors cursor-pointer">
                Services
              </button>
              <button onClick={() => setActiveTab('team')} className="text-left text-xs font-medium text-zinc-400 hover:text-[#00FF66] transition-colors cursor-pointer">
                Our Experts
              </button>
              <button onClick={() => setActiveTab('prices')} className="text-left text-xs font-medium text-zinc-400 hover:text-[#00FF66] transition-colors cursor-pointer">
                Fees & Booking
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright block */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-sans uppercase tracking-wider text-[10px]">
          <p>© {new Date().getFullYear()} Phoenix Dental Practice Dublin, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0 lowercase">
            <span className="hover:text-zinc-350 cursor-pointer">Privacy Statement</span>
            <span>•</span>
            <span className="hover:text-zinc-350 cursor-pointer">PRSI Guidelines</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer text-[#00FF66] font-bold" onClick={onBookOpen}>Book Appointment</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
