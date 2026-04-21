import React, { useState } from 'react';
import { ArrowLeft, Lock, Eye, EyeOff, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PasswordSettings: React.FC = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Mock save delay
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setPasswords({ current: '', new: '', confirm: '' });
    }, 1500);
  };

  const getStrength = (pass: string) => {
    if (!pass) return { score: 0, label: 'No Password', color: 'bg-gray-100' };
    if (pass.length < 6) return { score: 1, label: 'Weak', color: 'bg-red-400' };
    if (pass.length < 10) return { score: 2, label: 'Moderate', color: 'bg-amber-400' };
    return { score: 3, label: 'Strong', color: 'bg-green-500' };
  };

  const strength = getStrength(passwords.new);

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-2xl mx-auto space-y-10 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/settings" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-all border border-gray-100">
            <ArrowLeft className="w-5 h-5 text-forest-dark" />
          </Link>
          <h2 className="font-display text-4xl text-forest-dark">Password</h2>
        </div>
      </div>

      <div className="bg-cream/30 p-6 rounded-[32px] border border-gray-100 flex gap-4 items-start">
        <ShieldCheck className="w-6 h-6 text-sage shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-forest-dark text-sm">Keep your account secure</h4>
          <p className="text-xs text-secondary-text leading-relaxed">
            We recommend using a unique password that you don't use on any other site. Changing your password will sign you out of all other sessions.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 space-y-6">
          {/* Current Password */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-forest-dark px-2 uppercase tracking-widest">Current Password</label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                className="w-full pl-5 pr-12 py-4 bg-cream/30 rounded-2xl border-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium transition-all"
                placeholder="••••••••"
                required
              />
              <button 
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-forest transition-colors"
              >
                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="h-px bg-gray-50 mx-2" />

          {/* New Password */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-forest-dark px-2 uppercase tracking-widest">New Password</label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
                  value={passwords.new}
                  onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                  className="w-full pl-5 pr-12 py-4 bg-cream/30 rounded-2xl border-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium transition-all"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-forest transition-colors"
                >
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Strength indicator */}
            <div className="px-2 space-y-2">
               <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  <span>Password Strength</span>
                  <span className={strength.score > 0 ? 'text-forest-dark' : ''}>{strength.label}</span>
               </div>
               <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex gap-0.5">
                  {[1, 2, 3].map((step) => (
                    <div 
                      key={step}
                      className={`h-full flex-1 transition-all duration-500 ${step <= strength.score ? strength.color : 'bg-gray-100'}`}
                    />
                  ))}
               </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-forest-dark px-2 uppercase tracking-widest">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                className="w-full pl-5 pr-12 py-4 bg-cream/30 rounded-2xl border-none focus:ring-2 focus:ring-sage/20 text-forest-dark font-medium transition-all"
                placeholder="••••••••"
                required
              />
              <button 
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-forest transition-colors"
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {passwords.confirm && passwords.new !== passwords.confirm && (
              <p className="text-[10px] text-red-500 font-bold px-2 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                Passwords do not match
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSaving || !passwords.new || passwords.new !== passwords.confirm || strength.score < 2}
          className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 ${
            showSuccess 
              ? 'bg-green-500 text-white shadow-green-100' 
              : 'bg-forest-dark text-white hover:bg-forest disabled:opacity-50 disabled:grayscale'
          }`}
        >
          {isSaving ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : showSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Password Updated
            </>
          ) : (
            'Update Password'
          )}
        </button>
      </form>

      <div className="text-center">
        <button className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hover:text-forest-dark transition-colors">
          Forgot your current password?
        </button>
      </div>
    </div>
  );
};

export default PasswordSettings;
