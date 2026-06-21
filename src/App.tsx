/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab, CallbackRequest, Booking } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import TeamView from './components/TeamView';
import PriceListContactView from './components/PriceListContactView';
import BookingModal from './components/BookingModal';
import { Calendar, Phone, CheckCircle, Info, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialService, setInitialService] = useState('');
  
  const [callbackRequests, setCallbackRequests] = useState<CallbackRequest[]>([]);
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  // Initialize and load persistent client state from LocalStorage
  useEffect(() => {
    try {
      const storedCallbacks = localStorage.getItem('phoenix_callbacks');
      if (storedCallbacks) {
        setCallbackRequests(JSON.parse(storedCallbacks));
      }

      const storedBookings = localStorage.getItem('phoenix_bookings');
      if (storedBookings) {
        setUserBookings(JSON.parse(storedBookings));
      }
    } catch (e) {
      console.error('Failed to load storage assets', e);
    }
  }, []);

  // Save callback request lists to persistent storage
  const handleAddCallback = (newRequest: CallbackRequest) => {
    const updated = [newRequest, ...callbackRequests];
    setCallbackRequests(updated);
    try {
      localStorage.setItem('phoenix_callbacks', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    // Set feedback notification
    triggerAlert('Callback successfully registered! Our receptionist will call you shortly.');
  };

  // Save booking details to persistent storage
  const handleBookingSuccess = (newBooking: Booking) => {
    const updated = [newBooking, ...userBookings];
    setUserBookings(updated);
    try {
      localStorage.setItem('phoenix_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    // Set feedback notification
    triggerAlert(`Dental booking completed successfully for ${newBooking.date} @ ${newBooking.time}!`);
  };

  const triggerAlert = (message: string) => {
    setShowNotification(message);
    setTimeout(() => {
      setShowNotification(null);
    }, 5500);
  };

  const handleOpenBookingWithService = (serviceName: string = '') => {
    setInitialService(serviceName);
    setIsBookingOpen(true);
  };

  // Switch tabs smoothly and scroll to top automatically
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView 
            onBookOpen={handleOpenBookingWithService} 
            setActiveTab={handleTabChange} 
          />
        );
      case 'services':
        return <ServicesView onBookOpen={handleOpenBookingWithService} />;
      case 'team':
        return <TeamView onBookOpen={handleOpenBookingWithService} />;
      case 'prices':
        return (
          <PriceListContactView 
            onBookOpen={handleOpenBookingWithService}
            callbackRequests={callbackRequests}
            onAddCallback={handleAddCallback}
          />
        );
      default:
        return <HomeView onBookOpen={handleOpenBookingWithService} setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-zinc-100 flex flex-col justify-between selection:bg-[#00FF66] selection:text-black antialiased">
      
      {/* Dynamic persistent floating notification bar */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 text-white border-2 border-[#00FF66]/30 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 max-w-sm sm:max-w-md backdrop-blur-md"
          >
            <CheckCircle className="text-[#00FF66] shrink-0" size={18} />
            <span className="text-xs font-semibold leading-normal font-sans">{showNotification}</span>
            <button 
              onClick={() => setShowNotification(null)}
              className="text-zinc-400 hover:text-white transition-colors ml-2 p-1"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Application Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onBookOpen={() => handleOpenBookingWithService('')} 
      />

      {/* Main viewport Container */}
      <main className="flex-grow">
        
        {/* Active booking listings tracker bar overlay (if patient has current bookings) */}
        {userBookings.length > 0 && (
          <div className="bg-zinc-900/80 backdrop-blur-md border-b border-white/10 py-3.5 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Info size={14} className="text-[#00FF66] shrink-0" />
                <span>
                  <strong>Welcome back!</strong> You have <strong className="text-white">{userBookings.length}</strong> active scheduled appointment reservation request{userBookings.length > 1 ? 's' : ''} logged on this device.
                </span>
              </div>
              <div className="flex gap-4 items-center font-bold font-mono uppercase text-[10px]">
                <span className="text-zinc-400">Next up: <span className="text-[#22D3EE]">{userBookings[0].date} @ {userBookings[0].time}</span></span>
                <button 
                  onClick={() => handleTabChange('prices')} 
                  className="text-[#00FF66] border-b border-[#00FF66]/40 hover:text-white hover:border-[#00FF66] transition-colors cursor-pointer"
                >
                  Retrieve Receipt
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Page Footer */}
      <Footer 
        setActiveTab={handleTabChange} 
        onBookOpen={() => handleOpenBookingWithService('')} 
      />

      {/* Global Interactive Booking Modal Overlay */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        initialService={initialService}
        onBookingSuccess={handleBookingSuccess}
      />

    </div>
  );
}

