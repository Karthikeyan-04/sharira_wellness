import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';

interface VendorCardProps {
  id: string;
  title: string;
  location: string;
  distance: string;
  price: string;
  rating: string;
  category: string;
  image?: string;
}

const VendorCard: React.FC<VendorCardProps> = ({
  id,
  title,
  location,
  distance,
  price,
  rating,
  category,
  image,
}) => {
  const { savedVendorIds, toggleSavedVendor } = useAppStore();
  const isSaved = savedVendorIds.includes(id);

  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all group border border-gray-50 flex flex-col h-full">
      <div className="h-48 bg-gray-200 relative shrink-0">
        <Link to="/treatment-detail" className="block h-full">
          <img
            src={image || `https://placehold.co/600x400/1c451c/FFFFFF?text=${title}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedVendor(id);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur ${
            isSaved
              ? 'bg-red-50 text-red-500'
              : 'bg-white/80 text-forest-dark hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs font-bold text-forest-dark">{rating}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link to="/treatment-detail">
            <h3 className="font-display text-xl text-forest-dark group-hover:text-forest transition-colors line-clamp-1">
              {title}
            </h3>
          </Link>
          <span className="text-[10px] font-bold text-forest uppercase tracking-widest bg-sage/10 px-2 py-0.5 rounded-full shrink-0">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="line-clamp-1">{location} · {distance}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Starts from</p>
            <p className="text-lg font-bold text-forest-dark">₹{price}</p>
          </div>
          <Link
            to="/treatment-detail"
            className="bg-forest-dark text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-forest transition-colors"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
