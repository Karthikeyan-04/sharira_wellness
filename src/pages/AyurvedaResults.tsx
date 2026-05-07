import React, { useState } from 'react';
import { Search, MapPin, Star, Heart, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';

const ResultCard = ({ title, location, distance, rating, reviews, image }: any) => (
  <Link to="/vendor-profile" className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-50 flex flex-col sm:flex-row group">
    <div className="w-full sm:w-48 h-48 sm:h-auto bg-gray-200 relative shrink-0">
      <img src={image || `https://placehold.co/600x400/1c451c/FFFFFF?text=${title}`} alt={title} className="w-full h-full object-cover" />
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
  const [filter, setFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allResults = [
    {
      id: 1,
      title: "Kottakal Ayurveda Centre",
      location: "Anna Nagar",
      distance: "2.1 km",
      rating: "4.9",
      reviews: "128",
      image: "/images/centers/Kottakal-Ayurveda.png",
      tags: ['Panchakarma', 'Detox']
    },
    {
      id: 2,
      title: "Serenity Wellness Spa",
      location: "T.Nagar",
      distance: "3.5 km",
      rating: "4.8",
      reviews: "94",
      image: "/images/centers/Serenity-Spa.png",
      tags: ['Abhyanga', 'Massage']
    },
    {
      id: 3,
      title: "Veda Ayurvedic Spa",
      location: "Nungambakkam",
      distance: "4.2 km",
      rating: "4.7",
      reviews: "210",
      image: "/images/centers/Veda-Ayurvedic-Spa.png",
      tags: ['Panchakarma', 'Oil Massage']
    },
    {
      id: 4,
      title: "ZenYoga & Wellness",
      location: "Mylapore",
      distance: "5.8 km",
      rating: "4.9",
      reviews: "156",
      image: "/images/centers/ZenYoga-Studio.png",
      tags: ['Yoga', 'Healing']
    }
  ];

  const filteredResults = allResults.filter(item => {
    const matchesFilter = filter === 'All' || item.tags.includes(filter) || (filter === 'Top Rated' && parseFloat(item.rating) >= 4.8);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Top Rated', 'Panchakarma', 'Abhyanga', 'Detox', 'Massage'];

  const searchActions = (
    <div className="flex items-center gap-3">
      <div className="relative w-64 hidden md:block">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search in Chennai..."
          className="w-full pl-4 pr-10 py-2.5 bg-white/10 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold text-base backdrop-blur-sm transition-all"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
      </div>

      <div className="relative">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all backdrop-blur-sm ${isFilterOpen
              ? 'bg-white text-forest-dark border-white'
              : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
            }`}
        >
          <Filter className="w-5 h-5" />
        </button>

        {isFilterOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-2 border-b border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Filter Results</span>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-3 h-3 text-gray-400" />
              </button>
            </div>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setFilter(c);
                  setIsFilterOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-sage/5 transition-colors ${filter === c ? 'text-sage font-bold' : 'text-gray-600'
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="pb-20">
      <PageHeader
        title="Ayurveda"
        subtitle="340 results in Chennai"
        backTo="/categories"
        rightAction={searchActions}
      />

      <div className="p-4 sm:p-6 lg:p-10 max-w-5xl mx-auto space-y-8">
        <div className="md:hidden space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Ayurveda in Chennai..."
              className="w-full pl-4 pr-12 py-3 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sage/20 text-forest-dark"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center justify-between">
        </div>

        {/* Results List */}
        <div className="space-y-6">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <ResultCard key={result.id} {...result} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 space-y-4 bg-cream/20 rounded-[40px] border border-dashed border-sage/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-sage/30">
                <Filter className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-forest-dark font-display text-xl">No centers found</p>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-sage text-white rounded-xl font-bold hover:bg-sage/90 transition-colors shadow-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Suggested Search */}
        <div className="pt-10">
          <h4 className="font-display text-2xl text-forest-dark mb-4">Refine Search</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all ${filter === tag
                    ? 'bg-sage text-white border-sage'
                    : 'bg-white border-gray-100 text-gray-600 hover:border-sage hover:text-forest'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaResults;
