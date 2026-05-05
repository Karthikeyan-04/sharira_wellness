import React from 'react';
import { Gift, Award, TrendingUp, ChevronRight, UserPlus, Zap, Star } from 'lucide-react';

import PageHeader from '@/components/PageHeader';

const RewardCard = ({ title, description, cost, isNew }: any) => (
  <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
    {isNew && <span className="absolute top-4 right-4 bg-gold text-forest-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">New</span>}
    <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors mb-4">
      <Zap className="w-6 h-6" />
    </div>
    <h4 className="font-display text-2xl text-forest-dark mb-1">{title}</h4>
    <p className="text-sm text-gray-500 font-light mb-6">{description}</p>
    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
      <span className="text-xs font-bold text-sage uppercase tracking-widest">{cost} Points</span>
      <button className="text-forest-dark font-bold text-sm hover:underline flex items-center gap-1">
        Redeem
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const WellnessRewards: React.FC = () => {
  return (
    <div className="pb-20">
      <PageHeader title="Wellness Rewards" backTo="/profile" />
      
      <div className="p-4 sm:p-6 lg:p-10 max-w-5xl mx-auto space-y-12">

      {/* Hero Tier Card */}
      <div className="bg-gradient-to-br from-forest-dark to-forest p-10 rounded-[48px] text-white overflow-hidden relative group">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
              <Award className="w-4 h-4 text-gold" />
              Silver Member Tier
            </div>
            <h3 className="font-display text-5xl sm:text-6xl max-w-xs">You are part of our Core Circle.</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm italic">
              "True wellness is a currency that only increases when shared with the soul."
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-end text-center sm:text-right space-y-4">
            <div className="text-6xl font-display text-gold">1,450</div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Current Wellness Points</p>
            <div className="w-full max-w-[200px] h-2 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-gold w-[72.5%]" />
            </div>
            <p className="text-[10px] font-medium text-white/40">550 pts more to reach <strong className="text-white">Gold Tier</strong></p>
          </div>
        </div>
        <Gift className="absolute -bottom-10 -left-10 w-64 h-64 text-white/5 rotate-12 transition-transform group-hover:scale-110 group-hover:rotate-0 duration-700" />
      </div>

      {/* Redeem Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Redeem Your Journey</h3>
          <button className="text-sage font-bold text-sm hover:underline">View All History</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RewardCard 
            title="20% Off Ritual" 
            description="Valid on all Ayurvedic therapies and 3-day wellness retreats." 
            cost="500"
            isNew={true}
          />
          <RewardCard 
            title="Free Yoga Session" 
            description="Join our curated sunrise flow session at any partner studio." 
            cost="300"
          />
          <RewardCard 
            title="Priority Access" 
            description="Skip the waitlist for popular weekend sanctuary sessions." 
            cost="200"
          />
        </div>
      </section>

      {/* Referral Section */}
      <div className="bg-gold p-10 rounded-[48px] text-forest-dark flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 className="font-display text-4xl">Grow the Sanctuary</h3>
          <p className="text-forest-dark/70 font-medium leading-relaxed max-w-md">
            Refer your loved ones to their first wellness ritual and you both earn 500 bonus points.
          </p>
          <div className="pt-4">
            <button className="bg-forest-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-forest transition-all shadow-xl shadow-forest-dark/20 text-sm">
              <UserPlus className="w-5 h-5" />
              Invite Your Circle
            </button>
          </div>
        </div>
        <div className="w-48 h-48 rounded-full bg-forest-dark/5 flex items-center justify-center shrink-0 border border-forest-dark/10">
           <TrendingUp className="w-24 h-24 text-forest-dark/20" />
        </div>
      </div>

      {/* History Feed */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">Points History</h3>
        <div className="bg-white rounded-[32px] border border-gray-50 divide-y divide-gray-50 overflow-hidden shadow-sm">
          {[
            { label: 'Booking: Panchakarma Detox', date: 'Feb 12', pts: '+120 pts', color: 'text-sage' },
            { label: 'Redeem: 20% Discount Code', date: 'Jan 28', pts: '-500 pts', color: 'text-gray-400' },
            { label: 'Booking: Abhyanga Therapy', date: 'Jan 15', pts: '+80 pts', color: 'text-sage' },
            { label: 'Review: Serenity Spa', date: 'Jan 16', pts: '+50 pts', color: 'text-sage' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 ${item.pts.startsWith('+') ? 'text-sage' : 'text-gray-400'}`}>
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h5 className="font-bold text-forest-dark text-sm">{item.label}</h5>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</p>
                </div>
              </div>
              <span className={`font-display text-lg font-bold ${item.color}`}>{item.pts}</span>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default WellnessRewards;
