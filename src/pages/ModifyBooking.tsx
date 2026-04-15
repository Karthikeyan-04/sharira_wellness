import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, AlertCircle, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModifyBooking: React.FC = () => {
  const [reason, setReason] = useState('');

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto space-y-10 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/bookings" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <h2 className="font-display text-4xl text-forest-dark">Modify Booking</h2>
      </div>

      {/* Current Selection */}
      <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Current Session</h3>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-forest-dark shrink-0">
               <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display text-2xl text-forest-dark">Panchakarma Detox</h4>
              <p className="text-sm font-medium text-sage">Thu, Mar 5th · 09:00 AM</p>
            </div>
          </div>
          <button className="px-6 py-2 bg-cream text-forest-dark rounded-xl text-xs font-bold hover:bg-sage hover:text-white transition-all">
            Change Time
          </button>
        </div>
      </div>

      {/* Modification Options */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Modification Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="p-6 bg-white rounded-[32px] border-2 border-sage text-left space-y-2">
             <Clock className="w-6 h-6 text-sage" />
             <h4 className="font-bold text-forest-dark">Reschedule Ritual</h4>
             <p className="text-xs text-gray-400">Shift your session to a different date or time slot.</p>
          </button>
          <button className="p-6 bg-white rounded-[32px] border border-gray-100 text-left space-y-2 hover:border-red-200 group">
             <Trash2 className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors" />
             <h4 className="font-bold text-forest-dark">Cancel Booking</h4>
             <p className="text-xs text-gray-400">Remove this session from your schedule entirely.</p>
          </button>
        </div>
      </section>

      {/* Reason Field */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">Reason for change (Optional)</h3>
        <textarea 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Help us understand how we can better support you..."
          className="w-full h-32 p-6 bg-white rounded-[32px] border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sage/20 font-light text-sm"
        />
      </div>

      {/* Warning Notice */}
      <div className="bg-orange-50 p-6 rounded-[32px] border border-orange-100 flex gap-4">
        <AlertCircle className="w-6 h-6 text-orange-600 shrink-0" />
        <p className="text-xs text-orange-800 leading-relaxed font-medium">
          Note: You are within the free modification window. No charges will apply for this change. Modifications made within 24 hours of session may incur a 50% service credit fee.
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <button className="w-full bg-forest-dark text-white py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg flex items-center justify-center gap-2">
          Confirm Modifications
          <ArrowRight className="w-5 h-5" />
        </button>
        <Link to="/bookings" className="block w-full text-center py-4 text-xs font-bold text-gray-400 hover:text-forest-dark transition-colors">
          Discard Changes
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
         <ShieldCheck className="w-4 h-4" />
         Verified Modification Process
      </div>
    </div>
  );
};

export default ModifyBooking;
