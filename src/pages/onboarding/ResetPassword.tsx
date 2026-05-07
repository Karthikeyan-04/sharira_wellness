import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, Lock } from 'lucide-react';
import './OnboardingStyles.css';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Simulate password reset
    console.log('Password reset successfully');
    // After reset, go back to login
    navigate('/onboarding/login');
  };

  return (
    <div className="onboarding-wrapper">
      <header className="ob-header">
        <div className="ob-logo-container">
          <img src={`${import.meta.env.BASE_URL}images/icons/logo2.png`} className="ob-logo" alt="Sarira Logo" />
        </div>
        
        <button className="ob-back-btn" onClick={() => navigate('/onboarding/login')} aria-label="Go back">
          <ArrowLeft size={24} strokeWidth={3} />
        </button>
        
        <h1 className="ob-welcome-text">Reset Password</h1>
        <p className="ob-step-info" style={{ marginTop: '8px' }}>
          Create a new strong password for your account.
        </p>
      </header>

      <main className="ob-card">
        <form className="ob-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="ob-input-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="new-password">New Password</label>
            <div className="ob-password-wrapper">
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#4a6d4a', display: 'flex' }}>
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="new-password"
                className="ob-input-field"
                placeholder="........"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ paddingLeft: '48px' }}
                required
              />
              <button
                type="button"
                className="ob-password-toggle"
                onClick={() => setShowPassword(v => !v)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="ob-input-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="ob-password-wrapper">
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#4a6d4a', display: 'flex' }}>
                <Lock size={20} />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                className="ob-input-field"
                placeholder="........"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={{ paddingLeft: '48px' }}
                required
              />
              <button
                type="button"
                className="ob-password-toggle"
                onClick={() => setShowConfirmPassword(v => !v)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" className="ob-submit-btn">
            Update Password
          </button>

          <p className="ob-footer-text">
            Suddenly remembered?{' '}
            <button type="button" onClick={() => navigate('/onboarding/login')}>Sign in</button>
          </p>
        </form>
      </main>
    </div>
  );
};

export default ResetPassword;
