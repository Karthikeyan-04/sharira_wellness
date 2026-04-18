import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';

const OnboardingSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { dosha, wellnessGoals, preferences, completeOnboarding } = useAppStore();

  return (
    <div className="onboarding-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <img src={`${import.meta.env.BASE_URL}images/icons/logo2.png`} style={{ width: '200px' }} alt="Sarira" loading="lazy" />
        </div>
        <h2 className="ob-success-title">You're all set!</h2>
        <p className="ob-success-desc">
          Your Ayurvedic wellness profile is complete. Our AI is matching you with the best NABH-accredited treatment centres in your city.
        </p>
        <div className="ob-summary-badges">
          <div className="ob-badge">Dosha: <span>{dosha || 'Not Set'}</span></div>
          <div className="ob-badge">Goal: <span>{wellnessGoals[0] || 'Not Set'}</span></div>
          <div className="ob-badge">City: <span>{preferences.city || 'Not Set'}</span></div>
          <div className="ob-badge">Budget: <span>₹{preferences.budget.toLocaleString('en-IN')}/session</span></div>
        </div>
        <button
          className="ob-submit-btn"
          style={{ background: 'white', color: '#2c332c', maxWidth: '400px', margin: '0 auto' }}
          onClick={() => {
            completeOnboarding();
            navigate('/');
          }}
        >
          Explore Treatments → Discover India's Wellness
        </button>
      </div>
    </div>
  );
};

export default OnboardingSuccess;
