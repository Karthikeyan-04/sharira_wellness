import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import VendorCard from '@/components/VendorCard';

const Explore: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const vendors = [
    {
      id: 'v1',
      title: "Veda Ayurvedic Spa",
      location: "Anna Nagar",
      distance: "2.1 km",
      price: "2,400",
      rating: "4.9",
      category: "Ayurveda",
      image: "/images/centers/Veda-Ayurvedic-Spa.png",
    },
    {
      id: 'v2',
      title: "Serene Yoga Studio",
      location: "Nungambakkam",
      distance: "4.5 km",
      price: "800",
      rating: "4.8",
      category: "Yoga",
      image: "/images/centers/Serene-Yoga-Studio.png",
    },
    {
      id: 'v3',
      title: "Prana Wellness Center",
      location: "Adyar",
      distance: "6.8 km",
      price: "3,500",
      rating: "4.7",
      category: "Massage",
      image: "/images/centers/Prana-Wellness.png",
    },
    {
      id: 'v4',
      title: "Lotus Skin Sanctuary",
      location: "T.Nagar",
      distance: "3.2 km",
      price: "1,800",
      rating: "4.6",
      category: "Healing",
      image: "/images/centers/Lotus-Skin-Sanctuary.png",
    },
    {
      id: 'v5',
      title: "Zenith Float Clinic",
      location: "Besant Nagar",
      distance: "5.4 km",
      price: "2,800",
      rating: "4.9",
      category: "Wellness",
      image: "/images/centers/Zenith-Float-Clinic.png",
    },
    {
      id: 'v6',
      title: "Healing Hands",
      location: "Velachery",
      distance: "1.2 km",
      price: "1,500",
      rating: "4.5",
      category: "Massage",
      image: "/images/centers/Healing-Hands.png",
    },
  ];

  const filteredVendors = filter === 'All' 
    ? vendors 
    : vendors.filter(v => v.category === filter);

  const categories = ['All', 'Ayurveda', 'Yoga', 'Massage', 'Healing', 'Wellness'];

  const headerActions = (
    <div className="flex items-center gap-2 relative">
      <div className="relative">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold transition-all backdrop-blur-sm ${
            isFilterOpen
              ? 'bg-white text-forest-dark border-white'
              : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
          }`}
        >
          <Filter className="w-4 h-4" />
          {filter === 'All' ? 'Filter' : filter}
        </button>

        {isFilterOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-2 border-b border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Filter by</span>
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
                className={`w-full text-left px-4 py-2 text-sm hover:bg-sage/5 transition-colors ${
                  filter === c ? 'text-sage font-bold' : 'text-gray-600'
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
    <div className="space-y-8 pb-20">
      <PageHeader 
        title="Explore Wellness" 
        subtitle="Discover centers near you"
        backTo="/"
        rightAction={headerActions}
      />
      
      <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Search & Filter Header */}
      <div className="flex gap-3 items-center bg-white p-3 rounded-[32px] shadow-sm border border-gray-100 overflow-x-auto scrollbar-hide snap-x">
        <div className="relative shrink-0 w-[280px] md:flex-1 md:w-auto snap-start">
          <input
            type="text"
            placeholder="Search for Ayurveda, Yoga, or Spa..."
            className="w-full pl-2 pr-4 py-3 bg-cream/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium"
          />
        </div>
        <div className="flex items-center gap-2 shrink-0 snap-start">
          <button className="flex items-center justify-center w-12 h-12 bg-forest-dark text-white rounded-2xl hover:bg-forest transition-all shadow-lg">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 font-medium">Showing {filteredVendors.length} results in Chennai</p>
        </div>
        <Link to="/categories" className="text-sage font-bold hover:underline">Browse Categories</Link>
      </div>

      {/* Results Grid */}
      {filteredVendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
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
            onClick={() => setFilter('All')}
            className="px-6 py-2 bg-sage text-white rounded-xl font-bold hover:bg-sage/90 transition-colors shadow-sm"
          >
            Clear Filters
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Explore;
