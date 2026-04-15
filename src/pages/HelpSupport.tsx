import React from 'react';
import { ArrowLeft, MessageCircle, Mail, Phone, ExternalLink, HelpCircle, ChevronRight, UploadCloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ q, a }: { q: string; a: string }) => (
  <div className="p-6 bg-white rounded-3xl border border-gray-100 hover:border-sage/20 transition-all cursor-pointer group">
    <div className="flex items-center justify-between gap-4">
      <h4 className="font-bold text-forest-dark group-hover:text-forest transition-colors">{q}</h4>
      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-forest transition-all" />
    </div>
    <p className="hidden mt-2 text-sm text-gray-500 font-light">{a}</p>
  </div>
);

const SupportChannel = ({ icon: Icon, title, val, sub }: any) => (
  <div className="flex items-center gap-6 p-6 bg-white rounded-[32px] border border-gray-100 group hover:shadow-md transition-all">
    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</h5>
      <p className="font-display text-xl text-forest-dark mb-0.5">{val}</p>
      <p className="text-xs text-sage font-medium">{sub}</p>
    </div>
    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-forest transition-colors">
       <ExternalLink className="w-4 h-4" />
    </button>
  </div>
);

const HelpSupport: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/profile" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <h2 className="font-display text-4xl text-forest-dark">Help & Support</h2>
      </div>

      {/* Support Ticket Section */}
      <section className="bg-forest-dark p-8 sm:p-12 rounded-[48px] text-white relative overflow-hidden group">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl">Need expert assistance?</h3>
            <p className="text-white/60 font-light leading-relaxed text-sm">
              Our sanctuary support team is here to help with your bookings, account privacy, or any wellness consultation queries.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 border border-white/10 flex flex-col items-center text-center space-y-4 border-dashed hover:bg-white/20 transition-all cursor-pointer">
             <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <UploadCloud className="w-8 h-8 text-gold" />
             </div>
             <div>
               <p className="font-bold text-sm">Raise a Support Ticket</p>
               <p className="text-[10px] text-white/50 font-medium">Click to upload or drag and drop (Max 5MB)</p>
             </div>
          </div>
        </div>
        <Shield className="absolute -top-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
      </section>

      {/* FAQs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
           <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Frequently Asked</h3>
           <button className="text-xs font-bold text-sage hover:underline">See all FAQs</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FaqItem q="How do I reschedule a ritual?" a="You can modify your booking from the dashboard up to 24h before." />
          <FaqItem q="What is your refund policy?" a="Full refunds are available for cancellations made at least 24h prior." />
          <FaqItem q="Can I share records with others?" a="Yes, you decide exactly which practitioner sees your health data." />
          <FaqItem q="How are my points calculated?" a="Points are earned based on session investment and sanctuary loyalty." />
        </div>
      </section>

      {/* Contact Channels */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">Contact Options</h3>
        <div className="space-y-4">
          <SupportChannel 
            icon={MessageCircle} 
            title="Live Chat" 
            val="Interactive Assistant" 
            sub="Usually replies in 2 mins" 
          />
          <SupportChannel 
            icon={Mail} 
            title="Email Support" 
            val="support@sharira.com" 
            sub="Reply within 24 hrs" 
          />
          <SupportChannel 
            icon={Phone} 
            title="WhatsApp Support" 
            val="+91 90000 XXXXX" 
            sub="Available 9am - 9pm" 
          />
        </div>
      </section>

      {/* Footer Info */}
      <div className="text-center pt-6">
        <div className="inline-flex items-center gap-2 bg-cream/30 px-4 py-2 rounded-full border border-gray-100">
           <HelpCircle className="w-4 h-4 text-sage" />
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Version 2.4.0 · Curated with Mindfulness</span>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
