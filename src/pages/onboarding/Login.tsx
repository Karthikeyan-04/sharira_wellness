import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import './OnboardingStyles.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');

  // Sign In state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Register state
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [dob, setDob] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('hasOnboarded', 'true');
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const dest = regEmail || 'hello@example.com';
    navigate('/onboarding/otp', { state: { email: dest, phone: '+91 ' + phone } });
  };

  const showRegister = () => setActiveTab('register');
  const showSignIn = () => setActiveTab('signin');

  return (
    <div className="onboarding-wrapper">
      {/* Header */}
      <header className="ob-header">
        <div className="ob-logo-container">
          <img src={`${import.meta.env.BASE_URL}images/icons/logo2.png`} className="ob-logo" alt="Sarira Logo" />
        </div>
        
        {activeTab === 'register' && (
          <button className="ob-back-btn" onClick={showSignIn} aria-label="Go back">
            <ArrowLeft size={24} strokeWidth={3} />
          </button>
        )}
        <h1 className="ob-welcome-text">
          {activeTab === 'signin' ? 'Welcome back' : 'Create your account'}
        </h1>
        {activeTab === 'register' && (
          <p className="ob-step-info">Step 1 of 4 — Basic Information</p>
        )}
      </header>

      {/* Card */}
      <main className="ob-card">
        {/* Tabs */}
        <div className="ob-tabs">
          <div className={`ob-tab ${activeTab === 'signin' ? 'active' : ''}`} onClick={showSignIn} role="button" tabIndex={0}>
            Sign In
          </div>
          <div className={`ob-tab ${activeTab === 'register' ? 'active' : ''}`} onClick={showRegister} role="button" tabIndex={0}>
            Register
          </div>
          <div
            className="ob-tab-indicator"
            style={{ transform: activeTab === 'register' ? 'translateX(100%)' : 'translateX(0%)' }}
          />
        </div>

        {/* Sign In Form */}
        {activeTab === 'signin' && (
          <form className="ob-form signin-form" onSubmit={handleSignIn}>
            <div className="ob-input-group" style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="email">Email / Mobile</label>
              <input
                type="text"
                id="email"
                className="ob-input-field"
                placeholder="priya@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="ob-input-group" style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="password">Password</label>
              <div className="ob-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="ob-input-field"
                  placeholder=".........."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="ob-password-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <a href="#" className="ob-forgot-password">Forgot password?</a>

            <button type="submit" className="ob-submit-btn">Sign In</button>

            <div className="ob-divider">or continue with</div>

            <div className="ob-social-btns">
              <button type="button" className="ob-social-btn">
                <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.13-.45-4.63H24v9.3h12.98c-.58 2.85-2.2 5.23-4.62 6.82l7.73 6c4.51-4.17 7.12-10.32 7.12-17.49z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                Google
              </button>
              <button type="button" className="ob-social-btn apple">
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.078-2.04 0-3.905 1.159-4.966 3.002-2.117 3.635-.54 9.003 1.51 11.97 1.002 1.452 2.2 3.085 3.769 3.085 1.51 0 2.071-1.002 3.905-1.002 1.834 0 2.348 1.002 3.905 1.002 1.551 0 2.585-1.453 3.587-2.907 1.159-1.685 1.636-3.321 1.652-3.405-.031-.016-3.146-1.213-3.177-4.793-.031-2.986 2.447-4.417 2.559-4.502-1.398-2.04-3.539-2.272-4.305-2.316-2.01-.157-3.539 1.159-4.488 1.159zm2.523-2.944c1.033-1.246 1.722-2.97 1.534-4.693-1.485.063-3.284.993-4.348 2.223-1.048 1.214-1.956 2.972-1.706 4.646 1.673.125 3.285-.89 4.52-2.176z" fill="currentColor"/></svg>
                Apple
              </button>
            </div>

            <p className="ob-footer-text">
              Don't have an account?{' '}
              <button type="button" onClick={showRegister}>Create one →</button>
            </p>
          </form>
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <form className="ob-form" onSubmit={handleRegister}>
            <div className="ob-input-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" className="ob-input-field" placeholder="Priya" value={fname} onChange={e => setFname(e.target.value)} required />
            </div>

            <div className="ob-input-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" className="ob-input-field" placeholder="Kumar" value={lname} onChange={e => setLname(e.target.value)} required />
            </div>

            <div className="ob-input-group" style={{ gridColumn: '1 / span 2' }}>
              <label htmlFor="reg-email">Email Address</label>
              <input type="email" id="reg-email" className="ob-input-field" placeholder="priya@email.com" value={regEmail} onChange={e => setRegEmail(e.target.value)} required />
            </div>

            <div className="ob-input-group" style={{ gridColumn: '1 / span 2' }}>
              <label htmlFor="phone">Mobile Number</label>
              <div className="ob-mobile-wrapper">
                <span className="ob-country-code">IN +91</span>
                <input type="tel" id="phone" className="ob-input-field" placeholder="98765 43210" value={phone} onChange={e => setPhone(e.target.value)} required />
              </div>
            </div>

            <div className="ob-input-group" style={{ gridColumn: '1 / span 2' }}>
              <label htmlFor="reg-password">Password</label>
              <div className="ob-password-wrapper">
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  id="reg-password"
                  className="ob-input-field"
                  placeholder="........"
                  value={regPassword}
                  onChange={e => setRegPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="ob-password-toggle" 
                  onClick={() => setShowRegPassword(v => !v)}
                  aria-label={showRegPassword ? "Hide password" : "Show password"}
                >
                  {showRegPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="ob-input-group" style={{ gridColumn: '1 / span 2' }}>
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" className="ob-input-field" value={dob} onChange={e => setDob(e.target.value)} required />
            </div>

            <label className="ob-checkbox-container" style={{ gridColumn: '1 / span 2' }}>
              <span
                className={`ob-checkmark ${agreed ? 'checked' : ''}`}
                onClick={() => setAgreed(v => !v)}
              />
              <span>I agree to the Terms &amp; Privacy Policy. Health data handled securely per DPDP Act 2023.</span>
            </label>

            <button type="submit" className="ob-submit-btn" style={{ gridColumn: '1 / span 2' }}>
              Continue →
            </button>

            <div className="ob-social-btns">
              <button type="button" className="ob-social-btn">
                <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.13-.45-4.63H24v9.3h12.98c-.58 2.85-2.2 5.23-4.62 6.82l7.73 6c4.51-4.17 7.12-10.32 7.12-17.49z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                Google
              </button>
              <button type="button" className="ob-social-btn apple">
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.078-2.04 0-3.905 1.159-4.966 3.002-2.117 3.635-.54 9.003 1.51 11.97 1.002 1.452 2.2 3.085 3.769 3.085 1.51 0 2.071-1.002 3.905-1.002 1.834 0 2.348 1.002 3.905 1.002 1.551 0 2.585-1.453 3.587-2.907 1.159-1.685 1.636-3.321 1.652-3.405-.031-.016-3.146-1.213-3.177-4.793-.031-2.986 2.447-4.417 2.559-4.502-1.398-2.04-3.539-2.272-4.305-2.316-2.01-.157-3.539 1.159-4.488 1.159zm2.523-2.944c1.033-1.246 1.722-2.97 1.534-4.693-1.485.063-3.284.993-4.348 2.223-1.048 1.214-1.956 2.972-1.706 4.646 1.673.125 3.285-.89 4.52-2.176z" fill="currentColor"/></svg>
                Apple
              </button>
            </div>

            <p className="ob-footer-text" style={{ gridColumn: '1 / span 2' }}>
              Already have an account?{' '}
              <button type="button" onClick={showSignIn}>Sign in</button>
            </p>
          </form>
        )}
      </main>
    </div>
  );
};

export default Login;
