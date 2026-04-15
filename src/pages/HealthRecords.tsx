import React from 'react';
import { ArrowLeft, ShieldCheck, Activity, FileText, Download, Lock, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthMetric = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
  <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
    <span className="text-xl font-bold text-forest-dark">{value}</span>
    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label} ({unit})</span>
  </div>
);

const HealthDocument = ({ name, date, size }: { name: string; date: string; size: string }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 hover:border-sage/20 transition-all group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
        <FileText className="w-5 h-5" />
      </div>
      <div>
        <h5 className="font-bold text-forest-dark text-sm group-hover:text-forest transition-colors">{name}</h5>
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{date} · {size}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-forest hover:text-white transition-all">
        <Download className="w-4 h-4" />
      </button>
      <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-forest hover:text-white transition-all">
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const MedicationItem = ({ name, dosage, note }: { name: string; dosage: string; note: string }) => (
  <div className="p-4 bg-white rounded-2xl border border-gray-50 space-y-2">
    <div className="flex justify-between items-center">
      <h5 className="font-bold text-forest-dark">{name}</h5>
      <span className="bg-sage/10 text-sage px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">{dosage}</span>
    </div>
    <p className="text-xs text-gray-500 italic font-light leading-relaxed">"{note}"</p>
  </div>
);

const HealthRecords: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-10 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/profile" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <div>
          <h2 className="font-display text-4xl text-forest-dark">Health Records</h2>
          <div className="flex items-center gap-2 text-[10px] font-bold text-sage uppercase tracking-widest mt-1">
             <ShieldCheck className="w-4 h-4" />
             AES-256 Bank-Grade Encryption
          </div>
        </div>
      </div>

      <div className="bg-cream/50 p-6 rounded-3xl border border-sage/10 flex gap-4 items-start">
         <Lock className="w-6 h-6 text-sage shrink-0 mt-1" />
         <p className="text-sm text-gray-600 leading-relaxed font-light">
           Only you control access to these records. Providers only see what you share during active bookings. You can revoke access at any time.
         </p>
      </div>

      {/* Metrics Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Foundation Metrics</h3>
          <button className="text-xs font-bold text-sage hover:underline">Update</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <HealthMetric label="Blood" value="B+" unit="Type" />
          <HealthMetric label="Age" value="32" unit="Years" />
          <HealthMetric label="Height" value="178" unit="cm" />
          <HealthMetric label="Weight" value="74" unit="kg" />
        </div>
      </section>

      {/* Grid Layout for Docs and Meds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">My Documents</h3>
            <button className="flex items-center gap-1 text-xs font-bold text-sage hover:underline">
               Upload New
            </button>
          </div>
          <div className="space-y-3">
            <HealthDocument name="Full Blood Panel Report.pdf" date="Oct 24, 2023" size="2.4 MB" />
            <HealthDocument name="Cardiology Clearance.pdf" date="Aug 12, 2023" size="1.1 MB" />
            <HealthDocument name="Digital Prakriti Profile.pdf" date="Dec 05, 2023" size="0.8 MB" />
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Current Medications</h3>
            <button className="text-xs font-bold text-sage hover:underline">Manage</button>
          </div>
          <div className="space-y-3">
            <MedicationItem 
              name="Lisinopril" 
              dosage="10mg · Once Daily" 
              note="Take after breakfast with plenty of water. Monitor blood pressure every morning."
            />
            <MedicationItem 
              name="Metformin" 
              dosage="500mg · Twice Daily" 
              note="Monitor glucose levels regularly. Best taken before your largest meals."
            />
          </div>
        </section>
      </div>

      {/* Active Connections Footer */}
      <div className="pt-10 border-t border-gray-100">
        <div className="bg-white p-6 rounded-[32px] border border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sage/5 flex items-center justify-center text-sage">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-forest-dark">Manage Active Connections</h4>
              <p className="text-xs text-gray-400 font-medium">You currently share data with 2 practitioners</p>
            </div>
          </div>
          <Link to="/consent-management" className="flex items-center gap-2 bg-sage text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-forest transition-all">
            Review Permissions
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;
