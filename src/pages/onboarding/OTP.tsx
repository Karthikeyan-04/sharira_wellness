import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OnboardingStyles.css';

const OTP: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string; phone?: string } | null;
  const custEmail = state?.email || 'hello@example.com';
  const custPhone = state?.phone || '+91 98765 43210';

  const [otpMethod, setOtpMethod] = useState<'email' | 'sms'>('email');
  const [otpDest, setOtpDest] = useState(custEmail);
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(299);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isFull = digits.every(d => d !== '');

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSeconds(299);
    timerRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 0) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    setTimeout(() => inputRefs.current[0]?.focus(), 300);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const formatTime = (s: number) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

  const switchMethod = (method: 'email' | 'sms') => {
    setOtpMethod(method);
    setOtpDest(method === 'sms' ? custPhone : custEmail);
  };

  const handleDigitInput = (idx: number, value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const char = cleaned ? cleaned.slice(-1) : '';
    const updated = [...digits];
    updated[idx] = char;
    setDigits(updated);
    if (char && idx < 5) inputRefs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const updated = ['', '', '', '', '', ''];
    for (let i = 0; i < pasted.length; i++) updated[i] = pasted[i];
    setDigits(updated);
  };

  const handleResend = () => {
    setDigits(['', '', '', '', '', '']);
    startTimer();
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  const handleVerify = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigate('/onboarding/flow');
  };

  return (
    <div className="onboarding-wrapper">
      <header className="ob-header">
        <button className="ob-back-btn" onClick={() => navigate('/onboarding/login')} aria-label="Go back">
          ←
        </button>
        <div className="ob-logo-container">
          <img src="/images/icons/logo2.png" className="ob-logo" alt="Sarira Logo" />
        </div>
        <h1 className="ob-welcome-text">Verify Code</h1>
        <p className="ob-step-info">Enter the code sent to your registered contact</p>
      </header>

      <main className="ob-card">
        {/* Icon ring */}
        <div className="ob-otp-icon-ring">
          <div className="ob-otp-ring-inner">
            <img src="/images/icons/icon.png" alt="Sarira" style={{ width: '90%' }} />
          </div>
        </div>

        <h2 className="ob-otp-page-title">Enter Verification Code</h2>
        <p className="ob-otp-page-sub">
          We've sent a 6-digit code to<br />
          <span className="ob-otp-dest">{otpDest}</span>
        </p>

        {/* Method toggle */}
        <div className="ob-otp-method-row">
          <button
            className={`ob-otp-method-btn ${otpMethod === 'email' ? 'active' : ''}`}
            onClick={() => switchMethod('email')}
          >
            ✉️ Email
          </button>
          <button
            className={`ob-otp-method-btn ${otpMethod === 'sms' ? 'active' : ''}`}
            onClick={() => switchMethod('sms')}
          >
            📱 SMS
          </button>
        </div>

        {/* OTP Boxes */}
        <div className="ob-otp-boxes-row">
          {digits.map((d, idx) => (
            <input
              key={idx}
              ref={el => { inputRefs.current[idx] = el; }}
              className={`ob-otp-box ${d ? 'filled' : ''}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={e => handleDigitInput(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        <p className="ob-otp-timer-text">
          Code expires in <span>{formatTime(seconds)}</span>
        </p>
        <p className="ob-otp-resend-text">
          Didn't receive it?{' '}
          <button onClick={handleResend}>Resend code</button>
        </p>

        <button
          className="ob-otp-verify-btn"
          disabled={!isFull}
          onClick={handleVerify}
        >
          Verify &amp; Continue →
        </button>
      </main>
    </div>
  );
};

export default OTP;
