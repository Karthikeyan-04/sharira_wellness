import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookAppointment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState('09:00 AM');

  const dates = [
    { day: 'Mon', date: 2 },
    { day: 'Tue', date: 3 },
    { day: 'Wed', date: 4 },
    { day: 'Thu', date: 5, active: true },
    { day: 'Fri', date: 6 },
    { day: 'Sat', date: 7 },
    { day: 'Sun', date: 8 },
  ];

  const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/treatment-detail" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <h2 className="font-display text-3xl text-forest-dark">Book Appointment</h2>
      </div>

      {/* service Summary */}
      <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-forest-dark shrink-0">
             <img src="https://placehold.co/100x100/1c451c/FFFFFF?text=PD" alt="PD" className="rounded-xl w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-display text-xl text-forest-dark">Panchakarma Detox</h3>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <MapPin className="w-3 h-3" />
              <span>Kottakal Ayurveda</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-forest-dark">₹2,500</p>
          <p className="text-[10px] text-gray-400 uppercase font-bold">Session Fee</p>
        </div>
      </div>

      {/* Date Picker */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-display text-2xl text-forest-dark">March 2026</h4>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50"><ChevronLeft className="w-4 h-4 text-gray-400" /></button>
            <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50"><ChevronRight className="w-4 h-4 text-forest-dark" /></button>
          </div>
        </div>
        <div className="flex justify-between gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {dates.map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`flex flex-col items-center min-w-[60px] py-4 rounded-2xl transition-all ${
                selectedDate === d.date 
                  ? 'bg-forest-dark text-white shadow-lg shadow-forest/20' 
                  : 'bg-white text-gray-500 border border-gray-50 hover:border-sage/30'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest mb-1">{d.day}</span>
              <span className="text-lg font-bold">{d.date}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Time Picker */}
      <section>
        <h4 className="font-display text-2xl text-forest-dark mb-6">Select Time</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {times.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`py-3 rounded-xl text-sm font-medium transition-all ${
                selectedTime === t
                  ? 'bg-sage text-white shadow-md'
                  : 'bg-white text-forest-dark border border-gray-50 hover:border-sage/30'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Footer Info & Action */}
      <div className="pt-6 border-t border-gray-100 space-y-6">
        <div className="flex items-center gap-4 text-gray-500">
           <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-forest-dark shrink-0">
             <CalendarIcon className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Selected Session</p>
             <p className="font-bold text-forest-dark">Thursday, March {selectedDate}th • {selectedTime}</p>
           </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-sage/5 rounded-2xl">
          <Lock className="w-5 h-5 text-sage shrink-0 mt-0.5" />
          <p className="text-xs text-sage leading-relaxed">
            Secure Booking • You will be redirected to choose your preferred practitioner next. Pay after your session for complete peace of mind.
          </p>
        </div>

        <Link to="/choose-practitioner" className="block w-full bg-forest-dark text-white text-center py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg active:scale-95">
          Continue to Choose Practitioner
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;
