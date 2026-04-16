import React from 'react';
import { Search, Bell, Star, ArrowRight, Gift, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ emoji, label, to }: { emoji: string; label: string; to: string }) => (
  <Link to={to} className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-1">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-[24px] sm:rounded-[32px] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
      <span className="text-2xl sm:text-3xl filter drop-shadow-sm">{emoji}</span>
    </div>
    <span className="text-xs sm:text-sm font-semibold text-forest-dark capitalize tracking-wide mt-1">{label}</span>
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

const Index: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-4">
      {/* Header */}
      <header className="bg-forest-dark rounded-b-[48px] p-6 sm:p-8 pt-8 sm:pt-10 text-white shadow-lg space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chennai, Tamil Nadu</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white">
              Good morning, Priya <span role="img" aria-label="wave" className="inline-block transform origin-bottom-right hover:rotate-12 transition-transform"></span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-xs font-bold text-white">1,240</span>
            </div>
            <Link to="/notifications" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 text-white relative hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-forest-dark"></span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-white/50" />
          </div>
          <input
            type="text"
            className="block w-full bg-white/10 border border-white/10 rounded-2xl py-3.5 pl-12 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base backdrop-blur-sm"
            placeholder="Search treatments, spas, or doctors..."
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button className="text-white/50 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="p-4 sm:p-6 lg:p-10 space-y-8 sm:space-y-12">
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
          </div>
          <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            <CategoryCard emoji="🥣" label="Ayurveda" to="/ayurveda-results" />
            <CategoryCard emoji="🕯️" label="Spa" to="/ayurveda-results" />
            <CategoryCard emoji="🧘" label="Yoga" to="/ayurveda-results" />
            <CategoryCard emoji="✨" label="Skin" to="/ayurveda-results" />
            <CategoryCard emoji="🏋️" label="Fitness" to="/ayurveda-results" />
            <CategoryCard emoji="🦷" label="Dental" to="/ayurveda-results" />
            <CategoryCard emoji="🏥" label="Medical" to="/ayurveda-results" />
            <CategoryCard emoji="🗂️" label="More" to="/categories" />
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
    </div>
  );
};

export default Index;
