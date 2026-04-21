import React from 'react';
import { Search, MapPin, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import VendorCard from '@/components/VendorCard';

const Explore: React.FC = () => {
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

  return (
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
          <h2 className="font-display text-3xl sm:text-5xl text-forest-dark">Explore Wellness</h2>
          <p className="text-gray-500 mt-2 font-medium">Showing {vendors.length} results in Chennai</p>
        </div>
        <Link to="/categories" className="text-sage font-bold hover:underline">Browse Categories</Link>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} {...vendor} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
