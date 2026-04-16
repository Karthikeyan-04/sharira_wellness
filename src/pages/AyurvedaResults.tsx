import React from 'react';
import { ArrowLeft, Search, MapPin, Star, Heart, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResultCard = ({ title, location, distance, rating, reviews }: any) => (
  <Link to="/treatment-detail" className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-50 flex flex-col sm:flex-row group">
    <div className="w-full sm:w-48 h-48 sm:h-auto bg-gray-200 relative shrink-0">
      <img src={`https://placehold.co/600x400/1c451c/FFFFFF?text=${title}`} alt={title} className="w-full h-full object-cover" />
      <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-forest-dark hover:bg-white transition-colors">
        <Heart className="w-4 h-4" />
      </button>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl text-forest-dark group-hover:text-forest transition-colors">{title}</h3>
          <div className="flex items-center gap-1 bg-gold/10 px-2 py-1 rounded-lg">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="text-xs font-bold text-forest-dark">{rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <span>{distance}</span>
          <span className="text-gray-300">|</span>
          <span>{reviews} reviews</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
          Traditional Abhyanga, Panchakarma, and customized detox programs under the guidance of expert Vaidyas.
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-cream rounded-full text-[10px] font-bold text-forest uppercase tracking-wider">Panchakarma</span>
          <span className="px-3 py-1 bg-cream rounded-full text-[10px] font-bold text-forest uppercase tracking-wider">Detox</span>
        </div>
        <button className="text-forest-dark font-bold text-sm hover:underline">View Availability</button>
      </div>
    </div>
  </Link>
);

const AyurvedaResults: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-5xl mx-auto space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex items-center gap-4">
        <Link to="/categories" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 shrink-0">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search Ayurveda in Chennai..."
            className="w-full pl-4 pr-12 py-3 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sage/20 text-forest-dark"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-gray-50 border border-gray-100 shrink-0">
          <SlidersHorizontal className="w-5 h-5 text-forest-dark" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-dark">Ayurveda in Chennai</h2>
          <p className="text-gray-500 mt-1 font-medium">340 results matching your preferences</p>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-6">
        <ResultCard
          title="Kottakal Ayurveda Centre"
          location="Anna Nagar"
          distance="2.1 km"
          rating="4.9"
          reviews="128"
        />
        <ResultCard
          title="Serenity Wellness Spa"
          location="T.Nagar"
          distance="3.5 km"
          rating="4.8"
          reviews="94"
        />
        <ResultCard
          title="Glow Aesthetics Clinic"
          location="Nungambakkam"
          distance="4.2 km"
          rating="4.7"
          reviews="210"
        />
        <ResultCard
          title="ZenYoga & Wellness"
          location="Mylapore"
          distance="5.8 km"
          rating="4.9"
          reviews="156"
        />
      </div>

      {/* Suggested Search */}
      <div className="pt-10">
        <h4 className="font-display text-2xl text-forest-dark mb-4">Refine Search</h4>
        <div className="flex flex-wrap gap-2">
          {['Near Me', 'Top Rated', 'Price: Low to High', 'Panchakarma', 'Abhyanga', 'Oil Massage', 'Detox'].map(tag => (
            <button key={tag} className="px-4 py-2 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-600 hover:border-sage hover:text-forest transition-all">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AyurvedaResults;
