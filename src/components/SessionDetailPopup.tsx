import React from 'react';
import { X, Calendar, Clock, MapPin, Phone, MessageSquare, Navigation, CreditCard, CheckCircle2 } from 'lucide-react';

interface SessionData {
  title: string;
  service: string;
  date: string;
  time: string;
  price: string;
  status: string;
  location?: string;
  practitioner?: string;
}

interface SessionDetailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  session: SessionData | null;
}

const SessionDetailPopup: React.FC<SessionDetailPopupProps> = ({ isOpen, onClose, session }) => {
  if (!isOpen || !session) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bubble-transition animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest-dark/40 backdrop-blur-md" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10">
          <div className="flex items-start justify-between mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sage mb-2">
                <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Next Ritual</span>
              </div>
              <h3 className="font-display text-3xl text-forest-dark">{session.title}</h3>
              <p className="text-sage font-medium">{session.service}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 bg-cream/50 p-4 rounded-2xl border border-sage/5">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-sage shadow-sm">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Date</p>
                <p className="text-sm font-bold text-forest-dark">{session.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-cream/50 p-4 rounded-2xl border border-sage/5">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-sage shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Time</p>
                <p className="text-sm font-bold text-forest-dark">{session.time}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-5 mt-0.5 text-sage">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Location</p>
                <p className="text-sm text-forest-dark font-medium leading-relaxed">
                  {session.location || "12/4, Greenways Road, Opposite Sanctuary Park, RA Puram, Chennai - 600028"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">Booking Amount</span>
              </div>
              <span className="text-lg font-bold text-forest-dark">₹{session.price}</span>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-sage" />
                <span className="text-sm text-gray-500">Status</span>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                session.status === 'Confirmed' ? 'bg-sage/10 text-sage' : 
                session.status === 'Upcoming' ? 'bg-gold/10 text-forest-dark' : 'bg-gray-100 text-gray-500'
              }`}>
                {session.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-2 py-4 bg-forest-dark text-white rounded-2xl font-bold hover:bg-forest transition-all shadow-lg shadow-forest-dark/20 group">
                 <Navigation className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                 Directions
               </button>
               <div className="flex gap-2">
                 <button className="flex-1 flex items-center justify-center bg-gray-100 text-forest-dark rounded-2xl hover:bg-gray-200 transition-colors">
                   <Phone className="w-5 h-5" />
                 </button>
                 <button className="flex-1 flex items-center justify-center bg-gray-100 text-forest-dark rounded-2xl hover:bg-gray-200 transition-colors">
                   <MessageSquare className="w-5 h-5" />
                 </button>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailPopup;
