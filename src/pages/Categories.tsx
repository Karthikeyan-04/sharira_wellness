import React from 'react';
import { ArrowLeft, Search, Sparkles, Dumbbell, Flower2, Heart, Activity, Stethoscope, Brain, Apple, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ icon: Icon, title, count, to }: { icon: any; title: string; count: string; to: string }) => (
  <Link to={to} className="bg-white p-4 pt-4 pb-4  rounded-[24px] shadow-sm hover:shadow-md transition-all border border-gray-50 flex flex-col items-start gap-4 group">
    <div className="w-12 h-12 ml-5 rounded-2xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex flex-col items-center justify-center" >
      <h3 className="font-display text-xl text-forest-dark mb-1">{title}</h3>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{count} vendors</p>

    </div>
  </Link>
);

const Categories: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
            <ArrowLeft className="w-5 h-5 text-forest-dark" />
          </Link>
          <h2 className="font-display text-3xl sm:text-5xl text-forest-dark">Browse Categories</h2>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sage/20 text-forest-dark"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryItem icon={Flower2} title="Ayurveda" count="340+" to="/ayurveda-results" />
        <CategoryItem icon={Sparkles} title="Spa & Massage" count="520+" to="/explore" />
        <CategoryItem icon={Dumbbell} title="Fitness" count="890+" to="/explore" />
        <CategoryItem icon={Heart} title="Skin & Beauty" count="410+" to="/explore" />
        <CategoryItem icon={Activity} title="Yoga & Mindfulness" count="670+" to="/explore" />
        <CategoryItem icon={Stethoscope} title="Medical Tourism" count="120+" to="/explore" />
        <CategoryItem icon={Stethoscope} title="Dental" count="210+" to="/explore" />
        <CategoryItem icon={Flower2} title="Naturopathy" count="180+" to="/explore" />
        <CategoryItem icon={Brain} title="Mental Wellness" count="450+" to="/explore" />
        <CategoryItem icon={Activity} title="Physiotherapy" count="320+" to="/explore" />
        <CategoryItem icon={Apple} title="Nutrition" count="290+" to="/explore" />

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
  );
};

export default Categories;
