import React from 'react';
import { ArrowLeft, Calendar, User, MapPin, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewBooking: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/choose-practitioner" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 shrink-0">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <h2 className="font-display text-3xl text-forest-dark">Review Booking</h2>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 space-y-8">
          <h3 className="font-display text-2xl text-forest-dark">Booking Summary</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date & Time</p>
                <p className="font-bold text-forest-dark">Thursday, March 5th, 2026</p>
                <p className="text-sm text-sage">09:00 AM (90 mins)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Practitioner</p>
                <p className="font-bold text-forest-dark">Dr. Priya Nair</p>
                <p className="text-sm text-sage">Senior Vaidya · Kottakal Ayurveda</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
                <p className="font-bold text-forest-dark">Anna Nagar Centre</p>
                <p className="text-sm text-gray-500">Block 4, 12th Main Road, Chennai</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-dashed border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">Service Fee</span>
              <span className="font-bold text-forest-dark">₹2,400</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">Platform Charge</span>
              <span className="font-bold text-forest-dark">₹100</span>
            </div>
            <div className="flex justify-between items-center py-4 bg-cream/30 px-6 rounded-2xl">
              <span className="font-display text-xl text-forest-dark">Total Payable</span>
              <span className="font-display text-2xl font-bold text-forest-dark">₹2,500</span>
            </div>
          </div>
        </div>

        <div className="bg-sage/5 p-8 flex gap-4">
          <Info className="w-6 h-6 text-sage shrink-0" />
          <div>
            <h4 className="font-bold text-forest-dark text-sm mb-1">Cancellation Policy</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Cancellations made more than 24 hours in advance will receive a full refund of any deposit. Within 24 hours, a 50% service charge may apply. No-shows are charged at full price.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
        <ShieldCheck className="w-4 h-4 text-sage" />
        Encrypted & Secure Booking
      </div>

      <Link to="/secure-payment" className="block w-full bg-forest-dark text-white text-center py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
        Proceed to Secure Payment
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default ReviewBooking;
