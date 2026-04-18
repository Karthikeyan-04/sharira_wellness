import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Compass, Calendar, MessageSquare, User, LogOut, Settings } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';

const SidebarItem = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-r-xl border-l-4 ${
        isActive
          ? 'bg-white/10 text-white border-gold'
          : 'text-white/70 border-transparent hover:bg-white/5 hover:text-white'
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </NavLink>
);

const DesktopSidebar: React.FC = () => {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);

  return (
    <aside className="fixed top-0 left-0 hidden w-60 h-screen bg-forest-dark lg:flex flex-col py-8 z-50">
      <div className="px-6 mb-10">
        <h1 className="font-display text-4xl text-white">Sharira</h1>
        <p className="text-[10px] uppercase tracking-widest text-gold/80 font-medium">Wellness Marketplace</p>
      </div>
      
      <nav className="flex-1 space-y-1">
        <SidebarItem to="/" icon={Home} label="Index" />
        <SidebarItem to="/explore" icon={Compass} label="Explore" />
        <SidebarItem to="/bookings" icon={Calendar} label="Bookings" />
        <SidebarItem to="/chat" icon={MessageSquare} label="Chat" />
        <SidebarItem to="/profile" icon={User} label="Profile" />
        <SidebarItem to="/settings" icon={Settings} label="Settings" />
      </nav>
      
      <div className="px-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold">AS</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Aarav Singh</p>
            <p className="text-xs text-white/50 truncate">Wellness Member</p>
          </div>
        </div>
        <button
          className="flex items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-colors w-full px-2"
          onClick={() => {
            logout();
            navigate('/onboarding/login');
          }}
        >
          <LogOut className="w-4 h-4 rotate-180" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
