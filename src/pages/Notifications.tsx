import React from 'react';
import { Bell, CheckCircle, Percent, MessageSquare, Award } from 'lucide-react';

import PageHeader from '@/components/PageHeader';

const NotificationItem = ({ icon: Icon, title, message, time, type }: { icon: any; title: string; message: string; time: string; type: string }) => {
  const getIconBg = () => {
    switch(type) {
      case 'success': return 'bg-green-100 text-green-600';
      case 'promo': return 'bg-gold/10 text-gold';
      case 'info': return 'bg-blue-100 text-blue-600';
      case 'reward': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-50 hover:border-sage/20 transition-all cursor-pointer group shadow-sm">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getIconBg()}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h5 className="font-bold text-forest-dark text-base">{title}</h5>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{time}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 mt-8 first:mt-0">
    {children}
  </h6>
);

const NotificationsPage: React.FC = () => {
  return (
    <div className="pb-20">
      <PageHeader title="Notifications" backTo="/" />
      
      <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto min-h-screen">

      <div className="space-y-4">
        <SectionHeader>Today</SectionHeader>
        <NotificationItem 
          type="success"
          icon={CheckCircle}
          title="Booking Confirmed!"
          message="Panchakarma at Kottakal Ayurveda, tomorrow at 10:00 AM."
          time="2h ago"
        />
        <NotificationItem 
          type="promo"
          icon={Percent}
          title="Exclusive for You!"
          message="Get 15% off on all spa treatments at Serenity Spa this weekend."
          time="5h ago"
        />

        <SectionHeader>Yesterday</SectionHeader>
        <NotificationItem 
          type="info"
          icon={MessageSquare}
          title="How was your session?"
          message="Your feedback helps the community grow. Please leave a review for your last visit at ZenYoga."
          time="1d ago"
        />
        <NotificationItem 
          type="info"
          icon={Bell}
          title="Reminder: Tomorrow's Session"
          message="Prepare with light hydration for your Morning Yoga flow with Dr. Smitha."
          time="1d ago"
        />

        <SectionHeader>Earlier</SectionHeader>
        <NotificationItem 
          type="reward"
          icon={Award}
          title="You've earned a reward!"
          message="Congrats! Your consistency has unlocked a Bronze Wellness badge and 50 points."
          time="3d ago"
        />
        
        <div className="mt-12 p-8 bg-forest-dark rounded-[32px] text-white overflow-hidden relative group cursor-pointer">
          <div className="relative z-10">
            <h4 className="font-display text-2xl mb-2">Deepen Your Practice</h4>
            <p className="text-white/60 text-sm font-light max-w-[200px] leading-relaxed">
              Explore our curated collection of ancient rituals designed for the modern soul.
            </p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
          <Award className="absolute top-8 right-8 w-12 h-12 text-gold/20 group-hover:text-gold/40 transition-colors" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
