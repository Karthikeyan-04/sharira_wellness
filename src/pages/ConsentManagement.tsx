import React, { useState } from 'react';
import { ShieldCheck, Eye, EyeOff, Info, Lock, CheckCircle2, XCircle, Search, Trash2 } from 'lucide-react';

import PageHeader from '@/components/PageHeader';

const SharedWithCard = ({ name, facility, date, onRevoke }: any) => (
  <div className="flex items-center justify-between p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <div>
        <h5 className="font-display text-xl text-forest-dark">{name}</h5>
        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{facility} · Since {date}</p>
      </div>
    </div>
    <button 
      onClick={onRevoke}
      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-red-500 hover:bg-red-50 text-xs font-bold transition-all"
    >
      <XCircle className="w-4 h-4" />
      Revoke Access
    </button>
  </div>
);

const ConsentManagement: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);

  return (
    <div className="pb-20">
      <PageHeader 
        title="Sharing & Consent" 
        subtitle="You decide who sees your health data"
        backTo="/health-records" 
      />
      
      <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-10">

      {/* Info Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Lock, title: 'Explicit Signature', text: 'Access is only granted via your explicit digital signature for each session.' },
          { icon: Trash2, title: 'Instant Revocation', text: 'You can revoke any practitioner\'s access instantly and at any time.' },
          { icon: Search, title: 'Full Audit Trail', text: 'A complete audit trail of all data access is maintained for your security.' }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-50 space-y-3">
            <div className="w-10 h-10 bg-sage/5 rounded-2xl flex items-center justify-center text-sage">
              <Icon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-forest-dark text-sm">{item.title}</h4>
            <p className="text-xs text-gray-500 font-light leading-relaxed">{item.text}</p>
          </div>
        )})}
      </div>

      {/* Active Shares */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Currently Shared With</h3>
          <span className="bg-sage/10 text-sage px-2 py-0.5 rounded-lg text-[10px] font-bold">2 Active</span>
        </div>
        <div className="space-y-4">
          <SharedWithCard name="Dr. Elena Vance" facility="Veda Wellness Centre" date="Dec 12, 2024" />
          <SharedWithCard name="Dr. Julian Thorne" facility="Thorne Integrative Med" date="Jan 05, 2025" />
        </div>
      </section>

      {/* Audit Trail Toggle */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Audit Trail</h3>
          <button 
            onClick={() => setShowAudit(!showAudit)}
            className="flex items-center gap-1.5 text-xs font-bold text-sage hover:underline"
          >
            {showAudit ? <><EyeOff className="w-4 h-4" /> Hide Activity</> : <><Eye className="w-4 h-4" /> View Activity</>}
          </button>
        </div>
        
        {showAudit && (
          <div className="bg-white rounded-[32px] border border-gray-50 overflow-hidden divide-y divide-gray-50 animate-in fade-in slide-in-from-top-4 duration-300 shadow-sm">
            {[
              { action: 'Access Revoked', target: 'Serenity Spa (Dr. Kumar)', time: '2 hours ago', icon: XCircle, color: 'text-red-500' },
              { action: 'Health Record Viewed', target: 'Dr. Elena Vance', time: 'Yesterday, 11:45 AM', icon: CheckCircle2, color: 'text-sage' },
              { action: 'Consent Granted', target: 'Dr. Julian Thorne', time: 'Jan 05, 2:30 PM', icon: CheckCircle2, color: 'text-sage' },
              { action: 'Metabolic Report Uploaded', target: 'Sharira System', time: 'Dec 22, 10:00 AM', icon: Info, color: 'text-forest' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <log.icon className={`w-5 h-5 ${log.color}`} />
                  <div>
                    <h5 className="font-bold text-forest-dark text-sm">{log.action}</h5>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{log.target}</p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{log.time}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Privacy Notice */}
      <div className="bg-forest-dark p-8 rounded-[40px] text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
            <ShieldCheck className="w-8 h-8 text-gold" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display text-2xl">Privacy Commitment</h4>
            <p className="text-white/60 text-xs font-light leading-relaxed max-w-xl">
              Per the Digital Personal Data Protection Act 2023, you have the right to revoke consent at any time. Your data remains encrypted at rest and in transit. Sharira does not share your health data with third-party advertisers or insurance companies.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>
      </div>
    </div>
  );
};

export default ConsentManagement;
