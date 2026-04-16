import React from 'react';
import { CheckCircle, Calendar, Download, Home, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingConfirmed: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-[48px] shadow-sm border border-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-sage/10 rounded-full flex items-center justify-center mb-6 animate-pulse-subtle">
            <CheckCircle className="w-12 h-12 text-sage" />
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-forest-dark mb-4">Booking Confirmed!</h1>
          <p className="text-gray-500 font-medium leading-relaxed max-w-sm mx-auto">
            Your appointment is successfully booked. A confirmation has been sent to your email and phone.
          </p>
        </div>

        <div className="bg-cream/30 rounded-[32px] p-8 text-left space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-forest" />
              <span className="font-bold text-forest-dark">Thu, March 5th</span>
            </div>
            <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">09:00 AM</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Practitioner</p>
              <p className="font-bold text-forest-dark">Dr. Priya Nair</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Centre</p>
              <p className="font-bold text-forest-dark">Kottakal Ayurveda</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/" className="flex items-center justify-center gap-2 bg-forest-dark text-white py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg active:scale-95">
            <Home className="w-5 h-5" />
            Back to Index
          </Link>
          <Link to="/bookings" className="flex items-center justify-center gap-2 bg-white text-forest-dark border border-gray-100 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95">
            <Calendar className="w-5 h-5" />
            Manage Booking
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 text-[10px] font-bold text-sage uppercase tracking-widest">
           <button className="flex items-center gap-2 hover:underline">
             <Download className="w-4 h-4" />
             Download PDF Receipt
           </button>
           <button className="flex items-center gap-2 hover:underline">
             <MessageCircle className="w-4 h-4" />
             Add To Calendar
           </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
