import React from 'react';
import { User, Shield, Award, History, Heart, Star, ChevronRight, LogOut, Settings, Bell, FileText, Gift } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileStat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
    <span className="text-2xl font-display text-forest-dark font-bold">{value}</span>
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</span>
  </div>
);

const ProfileLink = ({ icon: Icon, title, to, badge }: { icon: any; title: string; to: string; badge?: string }) => (
  <Link to={to} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-forest-dark">{title}</span>
    </div>
    <div className="flex items-center gap-2">
      {badge && <span className="bg-gold/10 text-forest-dark text-[10px] font-bold px-2 py-0.5 rounded-full">{badge}</span>}
      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-forest group-hover:translate-x-1 transition-all" />
    </div>
  </Link>
);

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-10">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div className="relative">
          <div className="w-32 h-32 rounded-[40px] bg-cream flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
            <User className="w-16 h-16 text-sage" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-2xl flex items-center justify-center border-4 border-white text-forest-dark shadow-lg">
            <Award className="w-5 h-5" />
          </div>
        </div>
        
        <div className="text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h2 className="font-display text-4xl text-forest-dark">Priya Nair</h2>
            <span className="inline-flex items-center gap-1.5 bg-sage/10 text-sage px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest self-center sm:self-auto">
              Silver Member
            </span>
          </div>
          <p className="text-gray-500 font-medium italic">Vata-Pitta Prakriti · Wellness Enthusiast</p>
          <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
            <button className="text-xs font-bold text-sage hover:underline">Edit Profile</button>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <button 
              className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
              onClick={() => {
                localStorage.removeItem('hasOnboarded');
                navigate('/onboarding/login');
              }}
            >
              <LogOut className="w-3 h-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <ProfileStat label="Sessions" value="12" />
        <ProfileStat label="Saved" value="4" />
        <ProfileStat label="Spent" value="₹18K" />
      </div>

      {/* Activity Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">My Activity</h3>
          <div className="space-y-3">
            <ProfileLink icon={Heart} title="Saved Vendors" to="/explore" />
            <ProfileLink icon={History} title="Booking History" to="/bookings" />
            <ProfileLink icon={Star} title="My Reviews" to="/profile" />
            <ProfileLink icon={Bell} title="Notifications" to="/notifications" badge="3" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">Account & Privacy</h3>
          <div className="space-y-3">
            <ProfileLink icon={FileText} title="Health Records" to="/health-records" />
            <ProfileLink icon={Gift} title="Loyalty & Rewards" to="/wellness-rewards" />
            <ProfileLink icon={Shield} title="Consent & Privacy" to="/consent-management" />
            <ProfileLink icon={Settings} title="Account Settings" to="/settings" />
          </div>
        </div>
      </div>

      {/* Upcoming Section */}
      <section className="bg-forest-dark p-8 rounded-[40px] text-white relative overflow-hidden group">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-display text-2xl">Upcoming Retreat</h4>
            <span className="bg-gold text-forest-dark px-3 py-1 rounded-full text-[10px] font-bold">Saturday</span>
          </div>
          <div>
            <p className="text-3xl font-display">Ayurvedic Rejuvenation</p>
            <p className="text-white/60 text-sm italic">Ananda In The Himalayas · 5 Days</p>
          </div>
          <Link to="/bookings" className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
            View Itinerary
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />
      </section>

      {/* Progress Footer */}
      <div className="bg-cream/50 p-6 rounded-3xl border border-sage/10 space-y-3">
         <div className="flex items-center gap-2">
           <Shield className="w-5 h-5 text-sage" />
           <h4 className="font-bold text-forest-dark">Sharira Circle</h4>
         </div>
         <p className="text-sm text-gray-500 font-light leading-relaxed">
           You have exclusive access to global wellness experts and priority booking at our partner sanctuaries. 2,000 more points to reach <strong className="text-forest-dark">Gold Tier</strong>.
         </p>
      </div>
    </div>
  );
};

export default Profile;
