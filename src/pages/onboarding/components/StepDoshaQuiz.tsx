import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { DOSHAS } from '@/constants/wellness';

const StepDoshaQuiz: React.FC = () => {
  const { dosha, setDosha } = useAppStore();

  return (
    <div>
      <h2 className="ob-onboarding-title">Do you know your Ayurvedic Dosha type?</h2>
      <p className="ob-onboarding-desc">
        Our AI uses your Dosha profile to personalise treatment recommendations from verified Ayurvedic centres across India.
      </p>
      <div className="ob-selection-grid ob-grid-3">
        {DOSHAS.map((d) => (
          <div
            key={d.title}
            className={`ob-selection-card ${dosha === d.title ? 'selected' : ''}`}
            onClick={() => setDosha(d.title as any)}
            role="button"
            tabIndex={0}
          >
            <div className="ob-card-icon">{d.icon}</div>
            <div className="ob-card-title">{d.title}</div>
            <div className="ob-card-desc">{d.desc}</div>
          </div>
        ))}
      </div>

      <div className="ob-list-item-card" style={{ marginTop: '20px' }}>
        <div className="ob-card-icon">🔮</div>
        <div style={{ flex: 1 }}>
          <div className="ob-card-title">Not sure? Take the Dosha quiz</div>
          <div className="ob-card-desc">Quick 2-min assessment · Scientifically validated</div>
        </div>
        <span style={{ color: '#6b7280' }}>→</span>
      </div>

      {dosha && (
        <div className="ob-list-item-card" style={{ background: '#f4f6f4', borderColor: '#e2e8e2', marginTop: '15px' }}>
          <div style={{ flex: 1 }}>
            <div className="ob-card-title" style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '1px', marginBottom: '5px' }}>
              Selected: {dosha} Profile
            </div>
            <div className="ob-card-desc">
              {DOSHAS.find(d => d.title === dosha)?.summary}. Best treatments: {DOSHAS.find(d => d.title === dosha)?.treatments}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepDoshaQuiz;
