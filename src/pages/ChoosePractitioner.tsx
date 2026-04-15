import React, { useState } from 'react';
import { ArrowLeft, User, Star, ShieldCheck, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const PractitionerCard = ({ name, title, exp, about, isActive, onClick, rating }: any) => (
  <div 
    onClick={onClick}
    className={`p-6 rounded-[24px] border transition-all cursor-pointer flex flex-col sm:flex-row gap-6 relative overflow-hidden group ${
      isActive 
        ? 'border-sage bg-sage/5 shadow-md' 
        : 'border-gray-100 bg-white hover:border-sage/20 shadow-sm'
    }`}
  >
    {isActive && <div className="absolute top-0 right-0 bg-sage text-white px-3 py-1 text-[10px] font-bold rounded-bl-xl uppercase tracking-widest">Selected</div>}
    <div className="w-20 h-20 rounded-2xl bg-cream flex items-center justify-center shrink-0 border border-sage/10">
      <User className="w-10 h-10 text-sage" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-display text-2xl text-forest-dark">{name}</h4>
          <p className="text-xs font-bold text-sage uppercase tracking-wider">{title} · {exp} exp</p>
        </div>
        <div className="flex items-center gap-1 bg-gold/10 px-2 py-1 rounded-lg">
           <Star className="w-3 h-3 text-gold fill-gold" />
           <span className="text-xs font-bold text-forest-dark">{rating}</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed italic">{about}</p>
    </div>
  </div>
);

const ChoosePractitioner: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const practitioners = [
    {
      id: 'any',
      name: 'Any Available Practitioner',
      title: 'BEST MATCH',
      exp: 'Verified',
      about: 'Sharira will assign the best match based on your wellness profile and practitioner availability.',
      rating: '5.0'
    },
    {
      id: 'dr-priya',
      name: 'Dr. Priya Nair',
      title: 'BAMS, SENIOR VAIDYA',
      exp: '8 yrs',
      about: 'Expert in chronic detoxification, digestive wellness, and stress management through Panchakarma.',
      rating: '4.9'
    },
    {
      id: 'anand-kumar',
      name: 'Anand Kumar',
      title: 'CERTIFIED THERAPIST',
      exp: '5 yrs',
      about: 'Specializes in deep-tissue Marma therapy, restorative relaxation, and traditional Abhyanga.',
      rating: '4.8'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/book-appointment" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 shrink-0">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-dark">Choose Practitioner</h2>
          <p className="text-sm text-gray-500 font-medium">Panchakarma Detox · Kottakal Ayurveda · 90 min</p>
        </div>
      </div>

      {/* Practitioner List */}
      <div className="space-y-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Available Selection</h3>
        {practitioners.map((p) => (
          <PractitionerCard 
            key={p.id}
            {...p}
            isActive={selected === p.id}
            onClick={() => setSelected(p.id)}
          />
        ))}
      </div>

      {/* Journey Note */}
      <section className="bg-forest-dark p-8 rounded-[32px] text-white overflow-hidden relative">
        <div className="relative z-10 max-w-sm">
          <h4 className="font-display text-2xl mb-2">Your Journey Matters</h4>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Selecting a practitioner who resonates with your energy is the first step toward true healing. We only partner with certified experts.
          </p>
          <div className="mt-6 flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Empowering Wellness
          </div>
        </div>
        <Quote className="absolute -bottom-4 -right-4 w-40 h-40 text-white/5 -rotate-12" />
      </section>

      {/* Testimonial */}
      <div className="bg-cream/50 p-6 rounded-2xl border border-sage/10 text-center">
        <p className="text-gray-600 font-light italic mb-2">
          "The Panchakarma session was life-altering. Dr. Priya's intuition about my Dosha imbalance was spot on."
        </p>
        <p className="text-[10px] font-bold text-forest-dark uppercase tracking-widest">— MEERA R., CHENNAI</p>
      </div>

      {/* Footer CTA */}
      <div className="pt-6 border-t border-gray-100">
        <Link 
          to="/review-booking" 
          className={`block w-full text-center py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 ${
            selected 
              ? 'bg-forest-dark text-white hover:bg-forest' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selected ? 'Continue to Review' : 'Select a Practitioner'}
        </Link>
        <button className="w-full text-center mt-4 text-xs text-sage font-bold hover:underline">
          Skip — assign automatically
        </button>
      </div>
    </div>
  );
};

export default ChoosePractitioner;
