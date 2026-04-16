import React from 'react';
import { ArrowLeft, Bell, Lock, Eye, Globe, Moon, CreditCard, User, HelpCircle, ChevronRight, LogOut, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SettingItem = ({ icon: Icon, title, sub, hasToggle, hasArrow }: any) => (
  <div className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 hover:border-sage/20 transition-all cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-forest-dark text-sm">{title}</h4>
        <p className="text-xs text-gray-400 font-light">{sub}</p>
      </div>
    </div>
    {hasToggle && (
      <div className="w-10 h-6 bg-sage/20 rounded-full relative">
         <div className="absolute left-1 top-1 w-4 h-4 bg-sage rounded-full" />
      </div>
    )}
    {hasArrow && (
      <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-forest transition-all" />
    )}
  </div>
);

const Settings: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('hasOnboarded');
    navigate('/onboarding/login');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-10 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/profile" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <h2 className="font-display text-4xl text-forest-dark">Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Personal & Account */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">Account Preferences</h3>
          <div className="space-y-4">
            <SettingItem icon={User} title="Personal Info" sub="Name, email, and dosage type" hasArrow={true} />
            <SettingItem icon={Bell} title="Notifications" sub="Manage wellness alerts" hasToggle={true} />
            <SettingItem icon={CreditCard} title="Payments" sub="Saved methods & billing history" hasArrow={true} />
            <SettingItem icon={Globe} title="Language" sub="English (US)" hasArrow={true} />
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2">Security & Privacy</h3>
          <div className="space-y-4">
            <SettingItem icon={Lock} title="Password" sub="Last changed 3 months ago" hasArrow={true} />
            <SettingItem icon={Eye} title="Data Sharing" sub="Who can see your medical records" hasArrow={true} />
            <SettingItem icon={Moon} title="Dark Mode" sub="Automatic based on sunset" hasToggle={true} />
            <SettingItem icon={HelpCircle} title="Terms of Use" sub="Revised March 2024" hasArrow={true} />
          </div>
        </section>
      </div>

      {/* Danger Zone */}
      <div className="pt-10 border-t border-gray-100 flex flex-col items-center space-y-6">
         <button 
           onClick={handleLogout}
           className="flex items-center gap-2 text-red-500 font-bold text-sm hover:underline"
         >
           <LogOut className="w-4 h-4" />
           Logout from Sharira
         </button>
         <button className="text-[10px] text-gray-300 font-bold uppercase tracking-widest hover:text-red-400 transition-colors">
            Deactivate Wellness Account
         </button>
      </div>

      <div className="bg-cream/30 p-8 rounded-[48px] border border-gray-100 flex flex-col items-center text-center space-y-3">
         <ShieldCheck className="w-8 h-8 text-sage" />
         <p className="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
           Your data security is our highest priority. All settings are synced across your devices with end-to-end encryption.
         </p>
      </div>
    </div>
  );
};

export default Settings;
