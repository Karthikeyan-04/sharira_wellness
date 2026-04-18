import React from 'react';
import { Check } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';

const HEALTH_CONDITIONS = [
  { icon: '🦴', title: 'Arthritis / Joint Pain', desc: 'Stiffness, swelling, chronic ache' },
  { icon: '❤️', title: 'Cardiovascular Issues', desc: 'Blood pressure, heart conditions' },
  { icon: '💧', title: 'Diabetes', desc: 'Type 1 or Type 2 diabetes' },
  { icon: '🧠', title: 'Neurological Conditions', desc: 'Migraines, nerve-related issues' },
  { icon: '🌸', title: 'Skin Conditions', desc: 'Eczema, psoriasis, acne' },
  { icon: '🌸', title: 'Hormonal / Fertility', desc: 'PCOS, thyroid, fertility concerns' },
];

const StepHealthHistory: React.FC = () => {
  const { healthConditions, setHealthConditions } = useAppStore();
  const [noneSelected, setNoneSelected] = React.useState(healthConditions.length === 0);

  const toggleCondition = (title: string) => {
    setNoneSelected(false);
    setHealthConditions(
      healthConditions.includes(title)
        ? healthConditions.filter((c) => c !== title)
        : [...healthConditions, title]
    );
  };

  const selectNone = () => {
    setHealthConditions([]);
    setNoneSelected(true);
  };

  return (
    <div>
      <h2 className="ob-onboarding-title">Any existing health conditions?</h2>
      <p className="ob-onboarding-desc">
        Required for safe treatment matching. Only NABH/AYUSH-accredited centres handling your condition will be shown.
      </p>
      <div className="ob-selection-grid ob-grid-2">
        {HEALTH_CONDITIONS.map((cond) => (
          <div
            key={cond.title}
            className={`ob-selection-card ${healthConditions.includes(cond.title) ? 'selected' : ''}`}
            onClick={() => toggleCondition(cond.title)}
            role="button"
            tabIndex={0}
          >
            <div className="ob-card-icon">{cond.icon}</div>
            <div className="ob-card-title">{cond.title}</div>
            <div className="ob-card-desc">{cond.desc}</div>
          </div>
        ))}
        <div
          className={`ob-list-item-card full-width ${noneSelected ? 'selected' : ''}`}
          onClick={selectNone}
          role="button"
          tabIndex={0}
        >
          <div className="ob-card-icon">✅</div>
          <div style={{ flex: 1 }}>
            <div className="ob-card-title">None of the above</div>
            <div className="ob-card-desc">In good general health</div>
          </div>
          <div className={`ob-item-check ${noneSelected ? 'checked' : ''}`}>
            {noneSelected && <Check size={12} color="white" strokeWidth={4} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepHealthHistory;
