import React, { useState } from 'react';
import { Tab } from '../types';
import { ShieldCheck, Phone, BookOpen, Menu, X, PlusCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onBookOpen: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onBookOpen }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Tab, label: 'Home' },
    { id: 'services' as Tab, label: 'Services' },
    { id: 'team' as Tab, label: 'Our Experts' },
    { id: 'prices' as Tab, label: 'Investment & Contact' }
  ];

  return (
    <nav className="sticky top-0 z-45 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Brand Brand */}
          <div className="flex items-center gap-3 select-none cursor-pointer" onClick={() => setActiveTab('home')}>
            {/* Visual Logo Icon represent Phoenix dental and oral hygiene */}
            <div className="h-10 w-10 rounded-xl bg-[#00FF66] flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,255,102,0.4)]">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm0-3.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v4zM12 4.5l-6 3V12c0 3.73 2.55 7.22 6 8 3.45-.78 6-4.27 6-8V7.5l-6-3z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-display font-medium tracking-tighter text-white block leading-tight">
                PHOENIX<span className="text-[#00FF66]">.DENTAL</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#00FF66] font-bold block">
                Ashtown, Dublin 15
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-zinc-900/50 rounded-2xl border border-white/5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-150 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-black bg-[#00FF66] shadow-[0_4px_12px_rgba(0,255,102,0.2)]'
                    : 'text-zinc-450 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Pill / Call Action */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              New Registrations Open
            </div>
            
            <a href="tel:018664080" className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-zinc-300 hover:text-[#00FF66] transition-colors">
              <Phone size={13} className="text-[#00FF66]" />
              01 866 4080
            </a>

            <button
              onClick={onBookOpen}
              className="bg-[#00FF66] hover:bg-[#00FF66]/95 text-black font-black uppercase text-[10px] tracking-wider italic px-5 py-2.5 rounded-2xl shadow-lg shadow-[#00FF66]/15 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#00FF66]/30"
            >
              Book Online Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onBookOpen}
              className="bg-[#00FF66] text-[#00FF66] bg-opacity-10 text-xs px-3 py-2 rounded-xl font-bold border border-[#00FF66]/20 uppercase tracking-widest cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-405 hover:text-white rounded-xl hover:bg-zinc-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#121212] px-4 py-5 space-y-4 shadow-2xl absolute w-full left-0">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === item.id
                    ? 'text-black bg-[#00FF66]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <hr className="border-white/5" />

          <div className="flex flex-col gap-3.5 py-1">
            <div className="flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 px-3 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              New Patient Registrations Open
            </div>
            <div className="flex justify-between items-center px-1.5">
              <a href="tel:018664080" className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-zinc-300">
                <Phone size={13} className="text-[#00FF66]" />
                01 866 4080
              </a>
              <span className="text-[9px] text-zinc-500 font-mono">PHOENIX HOUSE, ASHTOWN</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookOpen();
              }}
              className="w-full text-center bg-[#00FF66] text-black font-black uppercase tracking-wider italic text-[11px] py-3 rounded-xl cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
