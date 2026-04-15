import React from 'react';
import { Search, MapPin, Star, Filter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreCard = ({ title, location, distance, price, rating, category }: any) => (
  <Link to="/treatment-detail" className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all group border border-gray-50">
    <div className="h-48 bg-gray-200 relative">
      <img src={`https://placehold.co/600x400/1c451c/FFFFFF?text=${title}`} alt={title} className="w-full h-full object-cover" />
      <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-forest-dark hover:bg-white transition-colors">
        <Heart className="w-5 h-5" />
      </button>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-1">
        <Star className="w-3 h-3 text-gold fill-gold" />
        <span className="text-xs font-bold text-forest-dark">{rating}</span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-display text-xl text-forest-dark group-hover:text-forest transition-colors">{title}</h3>
        <span className="text-xs font-bold text-forest uppercase tracking-widest">{category}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
        <MapPin className="w-4 h-4" />
        <span>{location} · {distance}</span>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Starts from</p>
          <p className="text-lg font-bold text-forest-dark">₹{price}</p>
        </div>
        <button className="bg-forest-dark text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-forest transition-colors">
          View Detail
        </button>
      </div>
    </div>
  </Link>
);

const Explore: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[32px] shadow-sm border border-gray-100">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for Ayurveda, Yoga, or Spa..." 
            className="w-full pl-12 pr-4 py-3 bg-cream/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-6 py-3 bg-cream/30 rounded-2xl text-forest-dark font-bold hover:bg-cream/50 transition-all">
            <MapPin className="w-5 h-5" />
            <span>Chennai</span>
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-forest-dark text-white rounded-2xl hover:bg-forest transition-all shadow-lg">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl text-forest-dark">Explore Wellness</h2>
          <p className="text-gray-500 mt-2 font-medium">Showing 340 results in Chennai</p>
        </div>
        <Link to="/categories" className="text-sage font-bold hover:underline">Browse Categories</Link>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExploreCard 
          title="Veda Ayurvedic Spa" 
          location="Anna Nagar" 
          distance="2.1 km" 
          price="2,400" 
          rating="4.9" 
          category="Ayurveda"
        />
        <ExploreCard 
          title="Serene Yoga Studio" 
          location="Nungambakkam" 
          distance="4.5 km" 
          price="800" 
          rating="4.8" 
          category="Yoga"
        />
        <ExploreCard 
          title="Prana Wellness Center" 
          location="Adyar" 
          distance="6.8 km" 
          price="3,500" 
          rating="4.7" 
          category="Massage"
        />
        <ExploreCard 
          title="Lotus Skin Sanctuary" 
          location="T.Nagar" 
          distance="3.2 km" 
          price="1,800" 
          rating="4.6" 
          category="Healing"
        />
        <ExploreCard 
          title="Zenith Float Clinic" 
          location="Besant Nagar" 
          distance="5.4 km" 
          price="2,800" 
          rating="4.9" 
          category="Wellness"
        />
        <ExploreCard 
          title="Healing Hands" 
          location="Velachery" 
          distance="1.2 km" 
          price="1,500" 
          rating="4.5" 
          category="Massage"
        />
      </div>
    </div>
  );
};

export default Explore;
