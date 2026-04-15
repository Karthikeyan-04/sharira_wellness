import React from 'react';
import { Calendar, Clock, ChevronRight, AlertCircle, History, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingCard = ({ title, service, date, time, price, status, isPast }: any) => (
  <div className={`bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm transition-all group hover:shadow-md ${isPast ? 'opacity-70' : ''}`}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPast ? 'bg-gray-100 text-gray-400' : 'bg-sage/10 text-sage'}`}>
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-display text-xl text-forest-dark">{title}</h4>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{service}</p>
        </div>
      </div>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
        status === 'Confirmed' ? 'bg-sage/10 text-sage' : 
        status === 'Upcoming' ? 'bg-gold/10 text-forest-dark' : 'bg-gray-100 text-gray-500'
      }`}>
        {status}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50 mb-4">
      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Date & Time</p>
        <div className="flex items-center gap-2 text-sm font-medium text-forest-dark">
          <Clock className="w-3.5 h-3.5" />
          <span>{date} · {time}</span>
        </div>
      </div>
      <div className="space-y-1 text-right">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Investment</p>
        <p className="text-sm font-bold text-forest-dark">₹{price}</p>
      </div>
    </div>

    <div className="flex items-center justify-between">
      {!isPast ? (
        <Link to="/modify-booking" className="text-xs font-bold text-sage hover:underline flex items-center gap-1">
          Modify Booking
          <ChevronRight className="w-3 h-3" />
        </Link>
      ) : (
        <button className="text-xs font-bold text-forest-dark hover:underline flex items-center gap-1">
          Rebook Session
          <ChevronRight className="w-3 h-3" />
        </button>
      )}
      <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-forest transition-colors">
        View Details
      </button>
    </div>
  </div>
);

const MyBookings: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-4xl text-forest-dark">My Bookings</h2>
          <p className="text-sm text-gray-500 font-medium">Manage your wellness ritual schedule</p>
        </div>
        <div className="flex items-center gap-2">
           <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 text-xs font-bold text-forest-dark hover:bg-gray-50 transition-all">
             <Filter className="w-4 h-4" />
             Filter
           </button>
           <button className="w-10 h-10 bg-forest-dark text-white rounded-xl flex items-center justify-center shadow-lg shadow-forest-dark/20">
             <Calendar className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Upcoming Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 px-2">
           <TrendingUp className="w-4 h-4 text-sage" />
           <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 text-sage">Active Pursuits</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BookingCard 
            title="Kottakal Ayurveda" 
            service="Panchakarma" 
            date="Thu, Mar 5" 
            time="09:00 AM" 
            price="2,500" 
            status="Confirmed" 
          />
          <BookingCard 
            title="Serenity Spa" 
            service="Deep Tissue Ritual" 
            date="Sat, Mar 8" 
            time="11:00 AM" 
            price="1,500" 
            status="Upcoming" 
          />
        </div>
      </section>

      {/* Past Experiences */}
      <section className="space-y-6 pt-6">
        <div className="flex items-center gap-2 px-2">
           <History className="w-4 h-4 text-gray-400" />
           <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Past Experiences</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BookingCard 
            title="ZenYoga Sanctuary" 
            service="Hatha Flow Session" 
            date="Wed, Mar 1" 
            time="07:00 AM" 
            price="600" 
            status="Completed" 
            isPast={true}
          />
          <BookingCard 
            title="Glow Aesthetics" 
            service="HydraFacial Treatment" 
            date="Feb 20" 
            time="02:00 PM" 
            price="2,500" 
            status="Completed" 
            isPast={true}
          />
        </div>
      </section>

      {/* Empty State / Help Notice */}
      <div className="bg-cream/50 p-8 rounded-[40px] border border-sage/10 flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage">
           <AlertCircle className="w-6 h-6" />
        </div>
        <p className="text-sm text-gray-600 font-light leading-relaxed max-w-sm">
          Need to reschedule? Remember to modify your booking at least 24 hours in advance to avoid session credits loss.
        </p>
        <Link to="/help" className="text-xs font-bold text-sage hover:underline">View Cancellation Policy</Link>
      </div>
    </div>
  );
};

// Internal icon shim if not imported
const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
);

export default MyBookings;
