import React from 'react';
import { ArrowLeft, ShieldCheck, CreditCard, Wallet, Landmark, Smartphone, Lock, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentMethod = ({ icon: Icon, title, description, isRecommended }: any) => (
  <button className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-sage/20 transition-all group group relative">
    {isRecommended && <span className="absolute -top-2 left-6 bg-gold text-forest-dark text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Recommended</span>}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest-dark group-hover:bg-forest group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-left">
        <h5 className="font-bold text-forest-dark">{title}</h5>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
    <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-forest group-hover:translate-x-1 transition-all" />
  </button>
);

const SecurePayment: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/review-booking" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5 text-forest-dark" />
        </Link>
        <div className="flex items-center gap-2 text-[10px] font-bold text-sage uppercase tracking-widest">
           <ShieldCheck className="w-4 h-4" />
           Secure Checkout
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Amount Due</p>
        <h2 className="font-display text-5xl text-forest-dark">₹2,500</h2>
        <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          <Shield className="w-3 h-3" />
          14-Day Escrow Protection
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="font-display text-2xl text-forest-dark mb-4 text-center sm:text-left">Choose Payment Method</h3>
        <PaymentMethod 
          icon={Smartphone} 
          title="UPI" 
          description="GPay, PhonePe, Paytm, BHIM" 
          isRecommended={true}
        />
        <PaymentMethod 
          icon={CreditCard} 
          title="Credit / Debit Card" 
          description="Visa, Mastercard, RuPay, Amex" 
        />
        <PaymentMethod 
          icon={Landmark} 
          title="Net Banking" 
          description="All major Indian banks supported" 
        />
        <PaymentMethod 
          icon={Wallet} 
          title="Wallets" 
          description="Airtel Money, Freecharge, etc." 
        />
      </section>

      <div className="bg-cream/30 p-6 rounded-[32px] border border-gray-100 flex gap-4 items-start">
         <Lock className="w-6 h-6 text-forest shrink-0 mt-1" />
         <p className="text-xs text-gray-500 leading-relaxed font-light">
           Your payment is held in a <strong className="text-forest-dark">secure escrow account</strong> and only released to the practitioner after your successful session and 24-hour feedback window.
         </p>
      </div>

      <Link 
        to="/booking-confirmed" 
        className="block w-full bg-forest-dark text-white text-center py-4 rounded-2xl font-bold hover:bg-forest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
      >
        Pay & Complete Booking
      </Link>

      <div className="text-center space-y-4">
        <p className="text-[10px] text-gray-400 font-medium">PCI-DSS Compliant • 256-bit SSL Encrypted</p>
        <div className="flex justify-center gap-6 text-[10px] text-sage font-bold uppercase tracking-widest">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default SecurePayment;
