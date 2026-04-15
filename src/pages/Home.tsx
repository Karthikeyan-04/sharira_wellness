import React from 'react';
import { Search, Bell, Star, ArrowRight, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ icon, label, to }: { icon: string; label: string; to: string }) => (
  <Link to={to} className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 border border-transparent group-hover:border-sage/20">
      <span className="text-2xl sm:text-3xl">{icon}</span>
    </div>
    <span className="text-xs sm:text-sm font-medium text-forest-dark">{label}</span>
  </Link>
);

const WellnessCard = ({ title, sub, rating }: { title: string; sub: string; rating: string }) => (
  <Link to="/vendor-profile" className="min-w-[240px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow shrink-0">
    <div className="h-32 bg-gray-200 relative">
      <img src={`https://placehold.co/600x400/1c451c/FFFFFF?text=${title}`} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
        <Star className="w-3 h-3 text-gold fill-gold" />
        <span className="text-xs font-bold">{rating}</span>
      </div>
    </div>
    <div className="p-4">
      <h5 className="font-display text-lg text-forest-dark mb-1">{title}</h5>
      <p className="text-xs text-gray-500">{sub}</p>
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-8 sm:space-y-12">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="min-w-0 flex-1 pr-4">
          <h2 className="font-display text-3xl sm:text-5xl text-forest-dark mb-1 truncate">Namaste, Aarav</h2>
          <p className="text-sm sm:text-base text-gray-500 truncate">Find your path to inner peace today.</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/explore" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 text-forest-dark">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/notifications" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 text-forest-dark relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </Link>
        </div>
      </header>

      {/* Featured Banner */}
      <section className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-forest-dark to-forest p-8 sm:p-12 text-white">
        <div className="relative z-10 max-w-md">
          <h3 className="font-display text-3xl sm:text-5xl mb-4">First Booking 20% Off</h3>
          <p className="text-sm sm:text-lg text-white/80 mb-8 font-light leading-relaxed">
            Experience the sanctuary for the first time with an exclusive reward. Use code <span className="text-gold font-bold">SANCTUARY20</span>
          </p>
          <Link to="/explore" className="inline-flex bg-gold hover:bg-gold/90 text-forest-dark px-8 py-4 rounded-xl font-bold transition-all items-center gap-2 group">
            Explore Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden md:block">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]" />
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl sm:text-2xl font-display text-forest-dark">Browse Categories</h4>
          <Link to="/categories" className="text-sage text-sm font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8">
          <CategoryCard icon="🧘" label="Yoga" to="/ayurveda-results" />
          <CategoryCard icon="🥣" label="Ayurveda" to="/ayurveda-results" />
          <CategoryCard icon="🕯️" label="Massage" to="/ayurveda-results" />
          <CategoryCard icon="🌿" label="Herbal" to="/ayurveda-results" />
          <CategoryCard icon="✨" label="Healing" to="/ayurveda-results" />
          <CategoryCard icon="😴" label="Sleep" to="/ayurveda-results" />
        </div>
      </section>

      {/* Top Rated */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl sm:text-2xl font-display text-forest-dark">🌟 Top Rated Near You</h4>
          <Link to="/explore" className="text-sage text-sm font-semibold hover:underline">View All</Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
          <WellnessCard title="Kottakal Ayurveda" sub="Abhyanga & Panchakarma" rating="4.9" />
          <WellnessCard title="Serenity Spa" sub="Deep Tissue Massage" rating="4.8" />
          <WellnessCard title="ZenYoga Studio" sub="Morning Flow & Hatha" rating="4.9" />
          <WellnessCard title="Prana Wellness" sub="Holistic Detox" rating="4.7" />
        </div>
      </section>

      {/* Booking Status / Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/bookings" className="bg-forest-dark rounded-3xl p-6 text-white flex items-center justify-between group cursor-pointer hover:bg-forest transition-colors text-left">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">Next Session</p>
            <h5 className="font-display text-2xl mb-1">Kottakal Ayurveda</h5>
            <p className="text-sm text-white/80 font-light">Tomorrow, 10:00 AM</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold transition-all group-hover:border-gold group-hover:text-forest-dark">
            <ArrowRight className="w-6 h-6" />
          </div>
        </Link>

        <Link to="/wellness-rewards" className="bg-sage rounded-3xl p-6 text-white flex items-center justify-between group cursor-pointer hover:bg-sage/90 transition-colors text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 p-2 rounded-2xl bg-white/10 flex items-center justify-center">
              <Gift className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-white/80 text-xs font-bold mb-1">Loyalty Program</p>
              <h5 className="font-display text-xl leading-tight">You're in the top 5% in Chennai!</h5>
            </div>
          </div>
          <button className="text-xs underline font-bold uppercase tracking-wider">Rewards</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
