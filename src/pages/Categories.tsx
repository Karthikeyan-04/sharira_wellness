import React from 'react';
import { Search, Plus, Flower2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';

const CategoryItem = ({ emoji, title, count, to }: { emoji: string; title: string; count: string; to: string }) => (
  <Link to={to} className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-md transition-all border border-gray-50 flex flex-col items-center text-center gap-4 group">
    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors duration-300">
      <span className="text-3xl">{emoji}</span>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="font-display text-xl text-forest-dark mb-1">{title}</h3>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{count} vendors</p>
    </div>
  </Link>
);

const Categories: React.FC = () => {
  const searchBar = (
    <div className="relative w-full md:w-80 hidden md:block">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
      <input
        type="text"
        placeholder="Search categories..."
        className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold text-sm backdrop-blur-sm transition-all"
      />
    </div>
  );

  return (
    <div className="pb-20">
      <PageHeader 
        title="Browse Categories" 
        backTo="/" 
        rightAction={searchBar}
      />
      
      <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
        <div className="md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sage/20 text-forest-dark"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryItem emoji={"\u{1F963}"} title="Ayurveda" count="340+" to="/ayurveda-results" />
          <CategoryItem emoji={"\u{1F56F}"} title="Spa & Massage" count="520+" to="/explore" />
          <CategoryItem emoji={"\u{1F3CB}"} title="Fitness" count="890+" to="/explore" />
          <CategoryItem emoji={"\u2728"} title="Skin & Beauty" count="410+" to="/explore" />
          <CategoryItem emoji={"\u{1F9D8}"} title="Yoga & Mindfulness" count="670+" to="/explore" />
          <CategoryItem emoji={"\u{1F3E5}"} title="Medical Tourism" count="120+" to="/explore" />
          <CategoryItem emoji={"\u{1F9B7}"} title="Dental" count="210+" to="/explore" />
          <CategoryItem emoji={"\u{1F33F}"} title="Naturopathy" count="180+" to="/explore" />
          <CategoryItem emoji={"\u{1F9E0}"} title="Mental Wellness" count="450+" to="/explore" />
          <CategoryItem emoji={"\u{1F9B4}"} title="Physiotherapy" count="320+" to="/explore" />
          <CategoryItem emoji={"\u{1F34E}"} title="Nutrition" count="290+" to="/explore" />

          <div className="bg-forest-dark p-6 rounded-[24px] flex flex-col items-center justify-center gap-4 text-center cursor-pointer hover:bg-forest transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:border-gold group-hover:text-forest-dark transition-all">
              <Plus className="w-6 h-6" />
            </div>
            <p className="text-white font-display text-xl">Explore More</p>
          </div>
        </div>

        {/* Featured Packs Section */}
        <section className="mt-12">
          <h4 className="font-display text-2xl text-forest-dark mb-6">Featured Collections</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-forest to-sage p-8 rounded-[32px] text-white overflow-hidden relative group cursor-pointer">
              <div className="relative z-10">
                <h5 className="font-display text-3xl mb-2">Handcrafted Apothecary Rituals</h5>
                <p className="text-white/70 text-sm max-w-[280px]">Bespoke wellness treatments curated for your body type.</p>
              </div>
              <Flower2 className="absolute top-1/2 -right-8 -translate-y-1/2 w-48 h-48 text-white/5 rotate-12 transition-transform group-hover:scale-110" />
            </div>

            <div className="bg-gold p-8 rounded-[32px] text-forest-dark overflow-hidden relative group cursor-pointer">
              <div className="relative z-10">
                <h5 className="font-display text-3xl mb-2">Holistic Consultations</h5>
                <p className="text-forest-dark/60 text-sm max-w-[280px]">Direct access to top wellness experts with Dr. Elara.</p>
              </div>
              <Heart className="absolute top-1/2 -right-8 -translate-y-1/2 w-48 h-48 text-forest-dark/5 rotate-12 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;

