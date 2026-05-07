import React from 'react';
import { ArrowLeft, Star, Users, Briefcase, ChevronRight, MapPin, Share2, Heart, ShieldCheck, Clock, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const TreatmentCard = ({ title, description, price, tag, image }: any) => (
  <Link to="/treatment-detail" className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col sm:flex-row items-center gap-6">
    <div className="w-full sm:w-32 h-32 bg-cream rounded-2xl flex items-center justify-center text-forest-dark shrink-0 overflow-hidden">
      <img src={image || `https://placehold.co/200x200/1c451c/FFFFFF?text=${title.substring(0, 2)}`} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <h5 className="font-display text-2xl text-forest-dark group-hover:text-forest transition-colors">{title}</h5>
        <span className="bg-sage/10 text-sage px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest self-center sm:self-auto">{tag}</span>
      </div>
      <p className="text-sm text-gray-400 font-light mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-forest-dark">₹{price}</span>
        <button className="text-forest-dark font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-all">
          Book Now
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </Link>
);

const VendorProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="h-[35vh] relative min-h-[250px] bg-forest-dark">
        <img
          src="/images/centers/Kottakal-Ayurveda.png"
          alt="Kottakal Ayurveda"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-center px-2 sm:px-6">
          <Link to="/explore" className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute -bottom-20 left-4 right-4 max-w-7xl mx-auto px-2 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-end gap-6">
            <div className="w-32 h-32 rounded-[40px] bg-white p-2 shadow-2xl shrink-0">
              <div className="w-full h-full rounded-[34px] bg-cream flex items-center justify-center overflow-hidden">
                <img src="/images/centers/kottakal-logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="pb-2 space-y-1">
              <h1 className="font-display text-4xl sm:text-5xl text-white">Kottakal Ayurveda Centre</h1>
              <div className="flex items-center gap-2 text-black/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Anna Nagar, Chennai</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1 text-gold">
                <Star className="w-4 h-4 fill-gold" />
                <span className="text-lg font-bold">4.9</span>
              </div>
              <p className="text-[10px] text-black font-bold uppercase tracking-widest">124 Reviews</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-2xl text-center shadow-lg group cursor-pointer hover:bg-forest transition-all">
              <p className="text-forest-dark font-bold group-hover:text-white">Reserve Session</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest group-hover:text-white/50">Starts ₹800</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 mt-28 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-12">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Star, label: 'Rating', val: '4.9' },
              { icon: Users, label: 'Bookings', val: '1.2K+' },
              { icon: Briefcase, label: 'Experience', val: '8 Yrs' },
              { icon: ShieldCheck, label: 'Verified', val: 'Yes' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <stat.icon className="w-5 h-5 text-sage mb-2" />
                <span className="text-lg font-bold text-forest-dark">{stat.val}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>

          <section>
            <h3 className="font-display text-3xl text-forest-dark mb-6">Signature Treatments</h3>
            <div className="space-y-6">
              <TreatmentCard
                title="Panchakarma Detox"
                description="A deep cleansing procedure involving five therapeutic actions to balance the doshas and eliminate toxins."
                price="2,500"
                tag="Instant Booking"
                image="/images/services/panchakarma.png"
              />
              <TreatmentCard
                title="Abhyanga Massage"
                description="Warm medicated oil massage designed to improve circulation and reduce physical stress."
                price="1,200"
                tag="Highly Popular"
                image="/images/services/abhyanga.png"
              />
              <TreatmentCard
                title="Shirodhara"
                description="Gentle pouring of liquids over the forehead to soothe the nervous system and induce deep relaxation."
                price="1,800"
                tag="Stress Relief"
                image="/images/services/shirodhara.png"
              />
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-3xl text-forest-dark">Atmosphere</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <img src="/images/centers/kottakal-atmosphere-1.png" alt="Gallery" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <img src="/images/services/panchakarma.png" alt="Gallery" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <img src="/images/services/abhyanga.png" alt="Gallery" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-10">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 space-y-6">
            <h4 className="font-display text-2xl text-forest-dark">Lead Physician</h4>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-sage">
                <img src="https://placehold.co/100x100/1c451c/FFFFFF?text=Dr+R" alt="Doc" className="rounded-xl w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-forest-dark">Dr. V.S. Raman</p>
                <p className="text-xs text-gray-400 font-medium">BAMS, MD (Ayurveda)</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed italic">
              "Our center specializes in authentic Kottakal tradition, focusing on root-cause healing and long-term wellness for body and mind."
            </p>
            <div className="pt-4 border-t border-gray-50 space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <Clock className="w-4 h-4 text-sage" />
                <span>Mon - Sat: 08:00 AM - 08:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-sage" />
                <span>Certified Ayurveda Centre level 2</span>
              </div>
            </div>
          </div>

          <div className="bg-sage/5 p-8 rounded-[40px] border border-sage/10 space-y-6">
            <h4 className="font-display text-2xl text-forest-dark">Member Perks</h4>
            <div className="space-y-4">
              {[
                'Priority weekend slots',
                'Complimentary Prakriti analysis',
                'Exclusive discounts on oils',
                'Private consultation rooms'
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-forest-dark">{perk}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/chat')}
              className="w-full bg-forest-dark text-white py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-md mt-4"
            >
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
