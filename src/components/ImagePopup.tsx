import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImagePopupProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, onClose }) => {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest-dark/90 backdrop-blur-sm cursor-zoom-out" 
        onClick={onClose}
      />
      
      {/* Content Container */}
      <div className="relative max-w-5xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
        <div className="relative group flex items-center justify-center w-fit h-fit">
          {/* Close Button - Positioned relative to this inner container */}
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20 group/btn"
            aria-label="Close image"
            autoFocus
          >
            <X className="w-6 h-6 group-hover/btn:rotate-90 transition-transform duration-300" />
          </button>

          <img 
            src={imageUrl} 
            alt="Enlarged gallery view" 
            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />
          
          {/* Subtle Overlay Info */}
          <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5" />
            Gallery View
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
