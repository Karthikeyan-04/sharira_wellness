import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StepWellnessGoals from './components/StepWellnessGoals';
import StepDoshaQuiz from './components/StepDoshaQuiz';
import StepHealthHistory from './components/StepHealthHistory';
import StepPreferences from './components/StepPreferences';
import OnboardingSuccess from './components/OnboardingSuccess';
import './OnboardingStyles.css';

const STEP_TITLES: Record<number, string> = {
  2: 'Wellness Goals',
  3: 'Ayurvedic Profile',
  4: 'Health History',
  5: 'Preferences',
};

const OnboardingFlow: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowSuccess(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 2) {
      setCurrentStep((s) => s - 1);
    } else {
      navigate('/onboarding/otp');
    }
  };

  if (showSuccess) {
    return <OnboardingSuccess />;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return <StepWellnessGoals />;
      case 3:
        return <StepDoshaQuiz />;
      case 4:
        return <StepHealthHistory />;
      case 5:
        return <StepPreferences />;
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-wrapper">
      <header className="ob-header">
        <button className="ob-back-btn" onClick={handleBack} aria-label="Go back">
          <ArrowLeft size={24} strokeWidth={3} color="white" />
        </button>
        <div className="ob-logo-container">
          <img
            src={`${import.meta.env.BASE_URL}images/icons/logo2.png`}
            className="ob-logo"
            alt="Sarira Logo"
            loading="lazy"
          />
        </div>
        <h1 className="ob-welcome-text">{STEP_TITLES[currentStep]}</h1>
        <p className="ob-step-info">
          Step {currentStep} of {totalSteps}
        </p>
      </header>

      <main className="ob-card">
        {/* Progress Bars */}
        <div className="ob-progress-container">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`ob-progress-bar ${i < currentStep ? 'active' : ''}`} />
          ))}
        </div>

        {renderStep()}

        {/* Footer Navigation */}
        <div className="ob-footer-nav">
          <button className="ob-nav-btn-back" onClick={handleBack} aria-label="Previous step">
            <ArrowLeft size={20} />
          </button>
          <button className="ob-nav-btn-next" onClick={handleNext}>
            {currentStep === totalSteps ? 'COMPLETE SETUP ✨' : 'NEXT STEP'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default OnboardingFlow;
