import React from 'react';
import { Plus, Landmark, Receipt } from 'lucide-react';

import PageHeader from '@/components/PageHeader';



const TransactionItem = ({ vendor, service, date, amount, status }: any) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-50 hover:border-sage/20 transition-all cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
        <Receipt className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-forest-dark text-xs">{vendor}</h4>
        <p className="text-[10px] text-gray-400">{service} • {date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-bold text-forest-dark text-sm">₹{amount}</p>
      <p className={`text-[9px] font-bold uppercase tracking-widest ${status === 'Success' ? 'text-green-500' : 'text-amber-500'}`}>
        {status}
      </p>
    </div>
  </div>
);

const Payments: React.FC = () => {
  const addNewButton = (
    <button className="flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-2xl font-bold text-xs hover:bg-white/20 transition-all border border-white/10 active:scale-95">
      <Plus className="w-4 h-4" />
      Add New
    </button>
  );

  return (
    <div className="pb-24">
      <PageHeader
        title="Payments"
        backTo="/settings"
        rightAction={addNewButton}
      />

      <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto space-y-10">

        {/* Transaction History */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Billing History</h3>
            <button className="text-[10px] font-bold text-forest-dark uppercase tracking-widest hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            <TransactionItem
              vendor="Dr. Anjali Sharma"
              service="Nadi Pariksha Consultation"
              date="Apr 20, 2024"
              amount="1,200"
              status="Success"
            />
            <TransactionItem
              vendor="Sattva Yoga Center"
              service="Monthly Wellness Pass"
              date="Apr 15, 2024"
              amount="3,500"
              status="Success"
            />
            <TransactionItem
              vendor="AyurStore"
              service="Triphala & Ashwagandha"
              date="Apr 10, 2024"
              amount="850"
              status="Success"
            />
            <TransactionItem
              vendor="Dr. Mehra's Clinic"
              service="Follow-up Appointment"
              date="Apr 02, 2024"
              amount="1,200"
              status="Processing"
            />
          </div>
        </section>

        {/* Security Banner */}
        <div className="bg-cream p-8 rounded-[48px] border border-gray-100 flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
            <Landmark className="w-8 h-8 text-forest" />
          </div>
          <div className="space-y-2">
            <h4 className="font-display text-xl text-forest-dark">Bank-Grade Security</h4>
            <p className="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
              All your payment information is encrypted and stored securely. We never share your financial data with anyone else.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
