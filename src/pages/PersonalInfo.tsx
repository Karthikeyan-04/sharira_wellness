import React, { useState, useMemo } from 'react';
import { User, Camera, Mail, Phone, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

import PageHeader from '@/components/PageHeader';
import { useAppStore } from '@/store/useAppStore';
import { WELLNESS_GOALS, DOSHAS, HEALTH_CONDITIONS } from '@/constants/wellness';

const PersonalInfo: React.FC = () => {

  const { 
    userProfile, 
    updateUserProfile, 
    dosha, 
    setDosha, 
    wellnessGoals, 
    setWellnessGoals,
    healthConditions,
    setHealthConditions
  } = useAppStore();
  
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone,
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculated Wellness Summary
  const calculatedProfile = useMemo(() => {
    const selectedDosha = DOSHAS.find(d => d.title === dosha);
    const goalsList = wellnessGoals.length > 0 ? wellnessGoals.join(', ') : 'wellness excellence';
    const healthNote = healthConditions.length > 0 
      ? ` with focus on ${healthConditions.join(', ')}` 
      : '';
    
    return `As a ${dosha || 'seeker'} profile, you are prioritizing ${goalsList}${healthNote}. ${selectedDosha?.summary || ''}`;
  }, [dosha, wellnessGoals, healthConditions]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      updateUserProfile({ ...formData, bio: calculatedProfile });
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  const toggleGoal = (title: string) => {
    setWellnessGoals(
      wellnessGoals.includes(title)
        ? wellnessGoals.filter((g) => g !== title)
        : [...wellnessGoals, title]
    );
  };

  const toggleCondition = (title: string) => {
    setHealthConditions(
      healthConditions.includes(title)
        ? healthConditions.filter((c) => c !== title)
        : [...healthConditions, title]
    );
  };

  const saveButton = (
    <button
      onClick={handleSave}
      disabled={isSaving}
      className={`px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
        showSuccess 
          ? 'bg-green-500 text-white shadow-green-100' 
          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 shadow-xl'
      } disabled:opacity-50`}
    >
      {isSaving ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : showSuccess ? (
        <CheckCircle2 className="w-4 h-4" />
      ) : null}
      {isSaving ? 'Saving...' : showSuccess ? 'Saved' : 'Save'}
    </button>
  );

  return (
    <div className="pb-24">
      <PageHeader 
        title="Personal Info" 
        backTo="/settings" 
        rightAction={saveButton}
      />
      
      <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto space-y-10">

      {/* Avatar Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative group">
          <div className="w-32 h-32 rounded-[48px] bg-cream border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
             {userProfile.avatarUrl ? (
               <img src={userProfile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
             ) : (
               <User className="w-16 h-16 text-sage" />
             )}
          </div>
          <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-2xl flex items-center justify-center text-forest-dark border-4 border-white shadow-lg hover:scale-105 transition-transform">
            <Camera className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Update Profile Picture</p>
      </div>

      {/* Form Sections */}
      <div className="space-y-12">
        {/* Core Identity */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-4">Account Details</h3>
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-forest-dark px-2 uppercase tracking-widest flex items-center gap-2">
                  <User className="w-3 h-3 text-sage" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-cream/30 rounded-2xl border-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-forest-dark px-2 uppercase tracking-widest flex items-center gap-2">
                  <Mail className="w-3 h-3 text-sage" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-cream/30 rounded-2xl border-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-forest-dark px-2 uppercase tracking-widest flex items-center gap-2">
                <Phone className="w-3 h-3 text-sage" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 bg-cream/30 rounded-2xl border-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium transition-all"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>
        </section>

        {/* Calculated Wellness Identity */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Wellness Identity</h3>
            <div className="flex items-center gap-1 text-[10px] font-bold text-sage bg-sage/5 px-2 py-1 rounded-full uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              AI Calculated
            </div>
          </div>

          {/* Calculated Profile Preview */}
          <div className="bg-forest-dark p-8 rounded-[40px] text-white relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 space-y-3">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Profile Summary</p>
              <p className="text-xl font-display leading-relaxed italic">
                "{calculatedProfile}"
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-10 translate-x-10 blur-3xl group-hover:bg-white/10 transition-all" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Dosha Selection */}
            <div className="space-y-4">
               <label className="text-[10px] font-bold text-forest-dark px-4 uppercase tracking-widest">Current Prakriti (Dosha)</label>
               <div className="grid grid-cols-3 gap-3">
                 {DOSHAS.map((d) => (
                   <button
                     key={d.title}
                     onClick={() => setDosha(d.title as any)}
                     className={`p-4 rounded-3xl transition-all border flex flex-col items-center gap-2 group ${
                       dosha === d.title 
                         ? 'bg-white border-sage shadow-md scale-105' 
                         : 'bg-white/50 border-gray-100 hover:border-gray-200'
                     }`}
                   >
                     <span className={`text-2xl transition-transform ${dosha === d.title ? 'scale-110' : 'grayscale group-hover:grayscale-0'}`}>
                       {d.icon}
                     </span>
                     <span className={`text-xs font-bold ${dosha === d.title ? 'text-forest-dark' : 'text-gray-400'}`}>
                       {d.title}
                     </span>
                   </button>
                 ))}
               </div>
            </div>

            {/* Wellness Goals */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-forest-dark px-4 uppercase tracking-widest">Primary Wellness Goals</label>
              <div className="flex flex-wrap gap-2 px-2">
                {WELLNESS_GOALS.map((goal) => (
                  <button
                    key={goal.title}
                    onClick={() => toggleGoal(goal.title)}
                    className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all border ${
                      wellnessGoals.includes(goal.title)
                        ? 'bg-sage text-white border-sage shadow-lg'
                        : 'bg-white text-gray-500 border-gray-100 hover:border-sage/30'
                    }`}
                  >
                    {goal.icon} {goal.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Health Conditions */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-forest-dark px-4 uppercase tracking-widest">Health History focus</label>
              <div className="flex flex-wrap gap-2 px-2">
                {HEALTH_CONDITIONS.map((cond) => (
                  <button
                    key={cond.title}
                    onClick={() => toggleCondition(cond.title)}
                    className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all border ${
                      healthConditions.includes(cond.title)
                        ? 'bg-gold text-forest-dark border-gold shadow-lg'
                        : 'bg-white text-gray-500 border-gray-100 hover:border-gold/30'
                    }`}
                  >
                    {cond.icon} {cond.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-amber-50 p-6 rounded-[32px] border border-amber-100 flex gap-4 items-start">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed font-medium">
          Note: Your wellness identity is used by our Ayurvedic specialists to recommend accurate treatments. Frequent changes may affect your treatment plan consistency.
        </p>
      </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
