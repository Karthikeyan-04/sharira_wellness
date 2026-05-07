import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Star, MessageSquare, Edit2, Trash2, Calendar, MapPin, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_REVIEWS = [
  {
    id: '1',
    vendorName: 'Kottakkal Ayurveda Centre',
    location: 'Indiranagar, Bangalore',
    treatment: 'Abhyangam',
    rating: 5,
    date: '2024-03-15',
    text: 'Incredible experience. The therapists are highly trained and the environment is deeply restorative. I felt completely rejuvenated after the 60-minute session. Highly recommend for stress relief.',
    helpfulCount: 12
  },
  {
    id: '2',
    vendorName: 'AyurMana Wellness Retreat',
    location: 'Whitefield, Bangalore',
    treatment: 'Shirodhara',
    rating: 4,
    date: '2024-02-02',
    text: 'Very professional setup and authentic treatments. The consultation was thorough. Giving 4 stars only because the waiting time was slightly longer than expected, but the treatment itself was flawless.',
    helpfulCount: 5
  },
  {
    id: '3',
    vendorName: 'Soukya Holistic Health Centre',
    location: 'Samethanahalli, Bangalore',
    treatment: 'Panchakarma Detox',
    rating: 5,
    date: '2023-11-20',
    text: 'A life-changing experience. The 7-day detox program completely reset my digestion and energy levels. The doctors are incredibly attentive and the food is nourishing and delicious.',
    helpfulCount: 24
  }
];

const MyReviews: React.FC = () => {
  const [reviews, setReviews] = useState(MOCK_REVIEWS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Edit State
  const [editingReview, setEditingReview] = useState<typeof MOCK_REVIEWS[0] | null>(null);
  const [editText, setEditText] = useState('');
  const [editRating, setEditRating] = useState(5);
  
  // Delete Confirmation State
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRating = filterRating === null || review.rating === filterRating;
    
    return matchesSearch && matchesRating;
  });

  const handleDelete = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
    setDeletingId(null);
  };

  const handleEditSave = () => {
    if (editingReview) {
      setReviews(prev => prev.map(r => r.id === editingReview.id ? { ...r, text: editText, rating: editRating } : r));
      setEditingReview(null);
    }
  };

  const avgRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div className="pb-20">
      <PageHeader title="My Reviews" backTo="/profile" />

      <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-8">
        
        {/* Stats & Search Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex gap-6">
            <div className="bg-cream/50 p-4 rounded-3xl border border-sage/20 min-w-[120px] shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Total Reviews</p>
              <p className="font-display text-3xl text-forest-dark font-bold">{reviews.length}</p>
            </div>
            <div className="bg-cream/50 p-4 rounded-3xl border border-sage/20 min-w-[120px] shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Avg Rating</p>
              <div className="flex items-center gap-1.5">
                <p className="font-display text-3xl text-forest-dark font-bold">{avgRating}</p>
                <Star className="w-5 h-5 text-gold fill-gold" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search reviews..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-transparent rounded-2xl text-base focus:outline-none focus:bg-white focus:border-sage focus:ring-4 focus:ring-sage/5 transition-all"
              />
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl border transition-all ${filterRating ? 'bg-forest text-white border-forest shadow-lg shadow-forest/20' : 'bg-white text-forest-dark border-gray-100 hover:border-sage hover:text-sage shadow-sm'}`}
              >
                <Filter className="w-5 h-5" />
              </button>
              
              {showFilters && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowFilters(false)} />
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in zoom-in duration-200">
                    <p className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">Filter by Rating</p>
                    <button 
                      onClick={() => { setFilterRating(null); setShowFilters(false); }}
                      className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm transition-colors ${filterRating === null ? 'bg-sage/10 text-forest font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                    >
                      All Reviews
                    </button>
                    {[5, 4, 3, 2, 1].map(rating => (
                      <button 
                        key={rating}
                        onClick={() => { setFilterRating(rating); setShowFilters(false); }}
                        className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm transition-colors flex items-center justify-between ${filterRating === rating ? 'bg-sage/10 text-forest font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                      >
                        <span className="flex items-center gap-2">
                          {rating} Stars
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className={`w-2.5 h-2.5 ${filterRating === rating ? 'text-gold fill-gold' : 'text-gold fill-gold/30'}`} />
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-sage/20 hover:shadow-2xl hover:shadow-sage/5 transition-all group relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <Link to="/vendor-profile" className="font-display text-xl text-forest-dark hover:text-sage transition-colors font-bold">
                      {review.vendorName}
                    </Link>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sage" />
                        {review.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-200" />
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sage" />
                        {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 mt-4 bg-sage/5 px-4 py-2 rounded-2xl border border-sage/10">
                      <span className="text-[10px] font-bold text-forest uppercase tracking-widest">Treatment</span>
                      <span className="w-1 h-1 rounded-full bg-sage/30" />
                      <span className="text-xs text-forest-dark font-bold">{review.treatment}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-gold/5 px-3 py-1.5 rounded-2xl">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold fill-gold' : 'text-gray-200 fill-gray-200'}`} 
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-6 group/text">
                  <MessageSquare className="absolute top-0 left-0 w-12 h-12 text-sage/5 -translate-x-3 -translate-y-3 opacity-100 transition-transform group-hover/text:scale-110" />
                  <p className="text-sm text-gray-600 leading-relaxed relative z-10 pl-2 font-medium italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between relative z-10">
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                    {review.helpfulCount} helpful votes
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => {
                        setEditingReview(review);
                        setEditText(review.text);
                        setEditRating(review.rating);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white border border-gray-100 text-forest-dark text-xs font-bold transition-all hover:border-sage hover:bg-sage/5 hover:scale-105 active:scale-95"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-sage" />
                      Edit
                    </button>
                    <button 
                      onClick={() => setDeletingId(review.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white border border-gray-100 text-red-500 text-xs font-bold transition-all hover:border-red-100 hover:bg-red-50 hover:scale-105 active:scale-95"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>

                {/* Inline Delete Confirmation Overlay */}
                {deletingId === review.id && (
                  <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="text-center max-w-xs scale-in-center">
                      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trash2 className="w-8 h-8 text-red-500" />
                      </div>
                      <h3 className="text-lg font-display text-forest-dark font-bold mb-2">Delete Review?</h3>
                      <p className="text-xs text-gray-500 mb-6">This action cannot be undone. Are you sure you want to remove this review?</p>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => setDeletingId(null)}
                          className="flex-1 px-4 py-3 rounded-2xl bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200 transition-colors"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={() => handleDelete(review.id)}
                          className="flex-1 px-4 py-3 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-200"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-cream/20 rounded-[3rem] border border-dashed border-sage/30">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Search className="w-8 h-8 text-sage/30" />
              </div>
              <p className="text-forest-dark font-bold text-lg">No reviews found</p>
              <p className="text-gray-500 text-sm mt-1">Try adjusting your search or filters.</p>
              <button 
                onClick={() => { setSearchTerm(''); setFilterRating(null); }}
                className="mt-6 px-6 py-2.5 bg-forest text-white rounded-full font-bold text-sm hover:bg-forest-dark transition-all shadow-lg shadow-forest/20"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-forest-dark/40 backdrop-blur-md" onClick={() => setEditingReview(null)} />
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in slide-in-from-bottom-8 duration-300">
            <div className="p-8 border-b border-gray-50 bg-cream/30">
              <h3 className="text-2xl font-display text-forest-dark font-bold">Edit Review</h3>
              <p className="text-sm text-gray-500 mt-1">Update your feedback for {editingReview.vendorName}</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setEditRating(star)}
                      className="p-1 transition-transform hover:scale-110 active:scale-95"
                    >
                      <Star 
                        className={`w-8 h-8 ${star <= editRating ? 'text-gold fill-gold' : 'text-gray-200 fill-gray-100'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Your Feedback</label>
                <textarea 
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={4}
                  className="w-full p-6 bg-gray-50 border border-transparent rounded-3xl text-base focus:outline-none focus:bg-white focus:border-sage focus:ring-4 focus:ring-sage/5 transition-all resize-none leading-relaxed text-gray-700"
                  placeholder="Write your review here..."
                />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button 
                  onClick={() => setEditingReview(null)}
                  className="flex-1 px-6 py-4 rounded-2xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleEditSave}
                  className="flex-1 px-6 py-4 rounded-2xl bg-forest text-white font-bold hover:bg-forest-dark transition-all shadow-xl shadow-forest/20"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
