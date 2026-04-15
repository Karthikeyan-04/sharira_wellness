import React from 'react';
import { ArrowLeft, Share2, Heart, Clock, ShieldCheck, Info, Check, ArrowRight, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimilarExperienceCard = ({ title, price, duration }: any) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-sage/20 transition-all cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors">
        <Clock className="w-6 h-6" />
      </div>
      <div>
        <h5 className="font-bold text-forest-dark">{title}</h5>
        <p className="text-xs text-gray-500">{duration}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-bold text-forest-dark">₹{price}</p>
      <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-forest group-hover:translate-x-1 transition-all" />
    </div>
  </div>
);

const TreatmentDetail: React.FC = () => {
  return (
    <div className="pb-24 lg:pb-10">
      {/* Hero Header */}
      <div className="h-[40vh] sm:h-[50vh] relative min-h-[300px]">
        <img 
          src="https://placehold.co/1200x800/1c451c/FFFFFF?text=Panchakarma+Detox" 
          alt="Panchakarma Detox" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center px-2 sm:px-6">
          <Link to="/ayurveda-results" className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/vendor-profile" className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <Store className="w-5 h-5" />
            </Link>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-4 right-4 max-w-7xl mx-auto px-2 sm:px-6 text-white">
          <span className="bg-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Best Seller</span>
          <h1 className="font-display text-4xl sm:text-6xl mb-2">Panchakarma Detox</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>90 - 120 min</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Expert Certified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="font-display text-3xl text-forest-dark mb-4">What is this treatment?</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              A quintessential Ayurvedic cleansing process, Panchakarma is a comprehensive system of five therapeutic treatments designed to detoxify the body and restore balance. This ritual combines Abhyanga oil massage with herbal steam and specialized internal cleansing, aimed at removing deeply embedded toxins (Ama) from the cellular level.
            </p>
          </section>

          <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <h3 className="font-display text-2xl text-forest-dark mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Deep detoxification of skin & tissues',
                'Boosts immune system functionality',
                'Balances the three Doshas (Vata, Pitta, Kapha)',
                'Improved focus and mental clarity',
                'Regulates metabolism & digestion',
                'Stress reduction and nervous system calm'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-sage" />
                  </div>
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-cream/50 p-6 rounded-2xl border border-sage/10 flex gap-4 items-start">
            <Info className="w-6 h-6 text-sage mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-forest-dark mb-1">Important Precautions</h4>
              <p className="text-sm text-gray-500 italic font-light">
                Not recommended for those with acute infections, severe fever, or during active digestive disorders. Please consult our vaidyas if you have chronic cardiac conditions.
              </p>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-display text-2xl text-forest-dark">Similar Experiences</h4>
              <button className="text-sage text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              <SimilarExperienceCard title="Abhyanga Oil Ritual" price="1,800" duration="60 min" />
              <SimilarExperienceCard title="Shirodhara Flow" price="3,200" duration="45 min" />
              <SimilarExperienceCard title="Potli Herbal Press" price="2,100" duration="75 min" />
            </div>
          </section>
        </div>

        {/* Floating Sidebar (Desktop Only) / Fixed Bottom (Mobile Only) */}
        <div className="lg:block">
          <div className="lg:sticky lg:top-10 bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Total investment</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-forest-dark">₹2,500</span>
                <span className="text-sm text-gray-400 font-light truncate">/ session</span>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Service Duration</span>
                <span className="font-bold text-forest-dark">90 mins</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Practitioner Level</span>
                <span className="font-bold text-forest-dark">Senior Vaidya</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Best for Dosha</span>
                <span className="font-bold text-sage">Vata / Pitta</span>
              </div>
            </div>

            <Link to="/book-appointment" className="block w-full bg-forest-dark text-white text-center py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg shadow-forest/20 active:scale-95">
              Book Appointment
            </Link>
            
            <p className="text-[10px] text-center text-gray-400 font-medium">Free cancellation up to 24h before session</p>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="fixed bottom-[68px] left-0 right-0 bg-white border-t border-gray-100 p-4 lg:hidden z-40 flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div>
           <p className="text-[10px] text-gray-400 uppercase font-bold">Total price</p>
           <p className="text-xl font-bold text-forest-dark">₹2,500</p>
        </div>
        <Link to="/book-appointment" className="bg-forest-dark text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md">
           Book Now
        </Link>
      </div>
    </div>
  );
};

export default TreatmentDetail;
