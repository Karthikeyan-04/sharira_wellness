import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Calendar, MessageSquare, User } from 'lucide-react';

const BottomNav: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 h-[68px] bg-white border-t border-gray-100 flex items-center justify-around px-4 lg:hidden z-50">
    <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-sage' : 'text-gray-400'}`}>
      <Home className="w-6 h-6" />
      <span className="text-[10px] font-medium">Index</span>
    </NavLink>
    <NavLink to="/explore" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-sage' : 'text-gray-400'}`}>
      <Compass className="w-6 h-6" />
      <span className="text-[10px] font-medium">Explore</span>
    </NavLink>
    <NavLink to="/bookings" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-sage' : 'text-gray-400'}`}>
      <Calendar className="w-6 h-6" />
      <span className="text-[10px] font-medium">Bookings</span>
    </NavLink>
    <NavLink to="/chat" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-sage' : 'text-gray-400'}`}>
      <MessageSquare className="w-6 h-6" />
      <span className="text-[10px] font-medium">Chat</span>
    </NavLink>
    <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-sage' : 'text-gray-400'}`}>
      <User className="w-6 h-6" />
      <span className="text-[10px] font-medium">Profile</span>
    </NavLink>
  </nav>
);

export default BottomNav;
