import React from 'react';
import { useAppStore } from '@/store/useAppStore';

const WELLNESS_GOALS = [
  { icon: '🧘', title: 'Stress & Anxiety', desc: 'Restore calm & mental clarity' },
  { icon: '🦴', title: 'Joint & Arthritis Pain', desc: 'Chronic pain & mobility' },
  { icon: '💧', title: 'Diabetes & Metabolic', desc: 'Lifestyle disease management' },
  { icon: '🍃', title: 'Detox & Cleanse', desc: 'Panchakarma deep detox' },
  { icon: '✨', title: 'Skin Disorders', desc: 'Psoriasis, eczema, acne' },
  { icon: '⚡', title: 'Weight Loss', desc: 'Metabolic detox retreat' },
  { icon: '🌸', title: 'Fertility & Hormonal', desc: 'Hormonal balance & fertility' },
  { icon: '😴', title: 'Sleep & Insomnia', desc: 'Restore deep sleep patterns' },
  { icon: '🏥', title: 'Medical Tourism', desc: 'International wellness stays' },
];

const StepWellnessGoals: React.FC = () => {
  const { wellnessGoals, setWellnessGoals } = useAppStore();

  const toggleGoal = (title: string) => {
    setWellnessGoals(
      wellnessGoals.includes(title)
        ? wellnessGoals.filter((g) => g !== title)
        : [...wellnessGoals, title]
    );
  };

  return (
    <div>
      <h2 className="ob-onboarding-title">What is your primary wellness goal?</h2>
      <p className="ob-onboarding-desc">
        We'll match you with the right treatments, practitioners and certified wellness centres in India.
      </p>
      <div className="ob-selection-grid ob-grid-2">
        {WELLNESS_GOALS.map((goal) => (
          <div
            key={goal.title}
            className={`ob-selection-card ${wellnessGoals.includes(goal.title) ? 'selected' : ''}`}
            onClick={() => toggleGoal(goal.title)}
            role="button"
            tabIndex={0}
          >
            <div className="ob-card-icon">{goal.icon}</div>
            <div className="ob-card-title">{goal.title}</div>
            <div className="ob-card-desc">{goal.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepWellnessGoals;
