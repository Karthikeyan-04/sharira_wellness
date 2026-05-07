import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import './OnboardingStyles.css';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [value, setValue] = useState(location.state?.email || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending OTP/Reset link
    console.log(`Sending reset to ${value} via ${method}`);
    navigate('/onboarding/otp', { 
      state: { 
        email: method === 'email' ? value : '', 
        phone: method === 'phone' ? value : '',
        isForgotPassword: true 
      } 
    });
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
        
        <h1 className="ob-welcome-text">Forgot Password</h1>
        <p className="ob-step-info" style={{ marginTop: '8px' }}>
          No worries! Enter your details below and we'll help you reset it.
        </p>
      </header>

      <main className="ob-card">
        <form className="ob-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="ob-tabs" style={{ marginBottom: '0' }}>
            <div 
              className={`ob-tab ${method === 'email' ? 'active' : ''}`} 
              onClick={() => setMethod('email')}
              role="button"
              tabIndex={0}
            >
              Email
            </div>
            <div 
              className={`ob-tab ${method === 'phone' ? 'active' : ''}`} 
              onClick={() => setMethod('phone')}
              role="button"
              tabIndex={0}
            >
              Mobile
            </div>
            <div
              className="ob-tab-indicator"
              style={{ transform: method === 'phone' ? 'translateX(100%)' : 'translateX(0%)' }}
            />
          </div>

          <div className="ob-input-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="reset-value">{method === 'email' ? 'Email Address' : 'Mobile Number'}</label>
            <div className="ob-password-wrapper" style={{ paddingLeft: '0' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#4a6d4a', display: 'flex' }}>
                {method === 'email' ? <Mail size={20} /> : <Phone size={20} />}
              </div>
              <input
                type={method === 'email' ? 'email' : 'tel'}
                id="reset-value"
                className="ob-input-field"
                placeholder={method === 'email' ? 'priya@example.com' : '98765 43210'}
                value={value}
                onChange={e => setValue(e.target.value)}
                style={{ paddingLeft: '48px' }}
                required
              />
            </div>
          </div>

          <button type="submit" className="ob-submit-btn">
            Send Reset Link
          </button>

          <p className="ob-footer-text">
            Remembered your password?{' '}
            <button type="button" onClick={() => navigate('/onboarding/login')}>Sign in</button>
          </p>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
