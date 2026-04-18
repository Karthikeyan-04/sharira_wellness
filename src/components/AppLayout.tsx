import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import DesktopSidebar from './DesktopSidebar';
import BottomNav from './BottomNav';

const AppLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasOnboarded = useAppStore((state) => state.hasOnboarded);
  const isChat = location.pathname === '/chat';

  useEffect(() => {
    if (!hasOnboarded) {
      navigate('/onboarding/login');
    }
  }, [hasOnboarded, navigate]);

  return (
    <div className="flex min-h-screen">
      <DesktopSidebar />
      <main className={`flex-1 min-w-0 lg:ml-60 bg-cream min-h-screen ${isChat ? 'pb-0' : 'pb-[68px] lg:pb-0'}`}>
        <Outlet />
      </main>
      {!isChat && <BottomNav />}
    </div>
  );
};

export default AppLayout;
