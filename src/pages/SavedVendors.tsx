import React from 'react';
import { ArrowLeft, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import VendorCard from '@/components/VendorCard';

// Master list of vendors (Mock data)
const ALL_VENDORS = [
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

const SavedVendors: React.FC = () => {
  const { savedVendorIds } = useAppStore();
  const savedVendors = ALL_VENDORS.filter(v => savedVendorIds.includes(v.id));

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-10 min-h-[80vh]">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Link 
            to="/profile" 
            className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-forest-dark hover:bg-forest hover:text-white transition-all shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-3xl sm:text-5xl text-forest-dark">Saved Vendors</h1>
        </div>
        
        {savedVendors.length > 0 && (
          <p className="text-gray-500 font-medium">
            You have <span className="text-forest font-bold">{savedVendors.length}</span> wellness destinations saved in your circle.
          </p>
        )}
      </div>

      {savedVendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {savedVendors.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 bg-white rounded-[40px] border border-dashed border-gray-200">
          <div className="w-24 h-24 bg-cream rounded-[32px] flex items-center justify-center text-sage">
            <Heart className="w-10 h-10" />
          </div>
          <div className="space-y-2 max-w-md mx-auto px-4">
            <h2 className="font-display text-2xl text-forest-dark">Your circle is empty</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Explore our curated wellness sanctuaries and save your favorites to view them here later.
            </p>
          </div>
          <Link 
            to="/explore" 
            className="bg-forest-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Discover Vendors
          </Link>
        </div>
      )}

      {/* Recommendations for empty state could go here */}
      {savedVendors.length === 0 && (
        <div className="pt-10 space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-2 text-center">Recommended For You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
             {ALL_VENDORS.slice(0, 3).map(v => (
               <div key={v.id} className="pointer-events-none">
                 <VendorCard {...v} />
               </div>
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedVendors;
