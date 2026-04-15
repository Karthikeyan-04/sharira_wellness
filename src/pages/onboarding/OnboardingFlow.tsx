import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import './OnboardingStyles.css';

type WellnessGoal = string;
type Dosha = 'Vata' | 'Pitta' | 'Kapha' | '';
type NotifPref = 'Push' | 'Email' | 'Minimal' | '';

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

const DOSHAS = [
  { icon: '🌬️', title: 'Vata', desc: 'Air & Space - Creative, light, quick-thinking. Tends toward anxiety when imbalanced.' },
  { icon: '🔥', title: 'Pitta', desc: 'Fire & Water - Intense, focused, driven. Prone to inflammation when imbalanced.' },
  { icon: '🌍', title: 'Kapha', desc: 'Earth & Water - Steady, calm, nurturing. Prone to weight gain when imbalanced.' },
];

const HEALTH_CONDITIONS = [
  { icon: '🦴', title: 'Arthritis / Joint Pain', desc: 'Stiffness, swelling, chronic ache' },
  { icon: '❤️', title: 'Cardiovascular Issues', desc: 'Blood pressure, heart conditions' },
  { icon: '💧', title: 'Diabetes', desc: 'Type 1 or Type 2 diabetes' },
  { icon: '🧠', title: 'Neurological Conditions', desc: 'Migraines, nerve-related issues' },
  { icon: '🌸', title: 'Skin Conditions', desc: 'Eczema, psoriasis, acne' },
  { icon: '🌸', title: 'Hormonal / Fertility', desc: 'PCOS, thyroid, fertility concerns' },
];

const TREATMENT_TYPES = ['Ayurveda', 'Panchakarma Detox', 'Yoga Therapy', 'Abhyanga Massage', 'Naturopathy', 'Siddha'];
const CENTRE_TYPES = ['Clinical Hospitals', 'Ayurveda Villages', 'Luxury Wellness'];

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

  // Step 2 state
  const [selectedGoals, setSelectedGoals] = useState<WellnessGoal[]>([]);
  // Step 3 state
  const [selectedDosha, setSelectedDosha] = useState<Dosha>('');
  // Step 4 state
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [noneSelected, setNoneSelected] = useState(false);
  // Step 5 state
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState(5000);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [selectedCentres, setSelectedCentres] = useState<string[]>([]);
  const [notifPref, setNotifPref] = useState<NotifPref>('');

  const totalSteps = 5;

  const toggleGoal = (title: string) => {
    setSelectedGoals(prev =>
      prev.includes(title) ? prev.filter(g => g !== title) : [...prev, title]
    );
  };

  const toggleCondition = (title: string) => {
    setNoneSelected(false);
    setSelectedConditions(prev =>
      prev.includes(title) ? prev.filter(c => c !== title) : [...prev, title]
    );
  };

  const selectNone = () => {
    setSelectedConditions([]);
    setNoneSelected(true);
  };

  const toggleTag = (tag: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    setList(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(s => s + 1);
    } else {
      setShowSuccess(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 2) {
      setCurrentStep(s => s - 1);
    } else {
      navigate('/onboarding/otp');
    }
  };

  if (showSuccess) {
    return (
      <div className="onboarding-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <img src="/images/icons/logo2.png" style={{ width: '200px' }} alt="Sarira" />
          </div>
          <h2 className="ob-success-title">You're all set!</h2>
          <p className="ob-success-desc">
            Your Ayurvedic wellness profile is complete. Our AI is matching you with the best NABH-accredited treatment centres in your city.
          </p>
          <div className="ob-summary-badges">
            <div className="ob-badge">Dosha: <span>{selectedDosha || 'Not Set'}</span></div>
            <div className="ob-badge">Goal: <span>{selectedGoals[0] || 'Not Set'}</span></div>
            <div className="ob-badge">City: <span>{city || 'Not Set'}</span></div>
            <div className="ob-badge">Budget: <span>₹{budget.toLocaleString('en-IN')}/session</span></div>
          </div>
          <button
            className="ob-submit-btn"
            style={{ background: 'white', color: '#2c332c', maxWidth: '400px', margin: '0 auto' }}
            onClick={() => {
              localStorage.setItem('hasOnboarded', 'true');
              navigate('/');
            }}
          >
            Explore Treatments → Discover India's Wellness
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-wrapper">
      <header className="ob-header">
        <button className="ob-back-btn" onClick={handleBack} aria-label="Go back">
          <ArrowLeft size={24} strokeWidth={3} color="white" />
        </button>
        <div className="ob-logo-container">
          <img src="/images/icons/logo2.png" className="ob-logo" alt="Sarira Logo" />
        </div>
        <h1 className="ob-welcome-text">{STEP_TITLES[currentStep]}</h1>
        <p className="ob-step-info">Step {currentStep} of {totalSteps}</p>
      </header>

      <main className="ob-card">
        {/* Progress Bars */}
        <div className="ob-progress-container">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`ob-progress-bar ${i < currentStep ? 'active' : ''}`} />
          ))}
        </div>

        {/* Step 2: Wellness Goals */}
        {currentStep === 2 && (
          <div>
            <h2 className="ob-onboarding-title">What is your primary wellness goal?</h2>
            <p className="ob-onboarding-desc">
              We'll match you with the right treatments, practitioners and certified wellness centres in India.
            </p>
            <div className="ob-selection-grid ob-grid-2">
              {WELLNESS_GOALS.map(goal => (
                <div
                  key={goal.title}
                  className={`ob-selection-card ${selectedGoals.includes(goal.title) ? 'selected' : ''}`}
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
        )}

        {/* Step 3: Dosha */}
        {currentStep === 3 && (
          <div>
            <h2 className="ob-onboarding-title">Do you know your Ayurvedic Dosha type?</h2>
            <p className="ob-onboarding-desc">
              Our AI uses your Dosha profile to personalise treatment recommendations from verified Ayurvedic centres across India.
            </p>
            <div className="ob-selection-grid ob-grid-3">
              {DOSHAS.map(d => (
                <div
                  key={d.title}
                  className={`ob-selection-card ${selectedDosha === d.title ? 'selected' : ''}`}
                  onClick={() => setSelectedDosha(d.title as Dosha)}
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

            {selectedDosha && (
              <div className="ob-list-item-card" style={{ background: '#f4f6f4', borderColor: '#e2e8e2', marginTop: '15px' }}>
                <div style={{ flex: 1 }}>
                  <div className="ob-card-title" style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '1px', marginBottom: '5px' }}>
                    Selected: {selectedDosha} Profile
                  </div>
                  <div className="ob-card-desc">
                    {selectedDosha === 'Vata' && 'Thin frame · Dry skin · Light sleeper · Creative · Prone to anxiety · Best treatments: Abhyanga, Shirodhara, Basti therapy'}
                    {selectedDosha === 'Pitta' && 'Medium build · Sharp mind · Driven · Prone to inflammation · Best treatments: Shirodhara, Pitta-pacifying oils, Cooling therapy'}
                    {selectedDosha === 'Kapha' && 'Sturdy build · Calm nature · Enduring · Prone to weight gain · Best treatments: Udwarthana, Panchakarma, Stimulating massages'}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Health History */}
        {currentStep === 4 && (
          <div>
            <h2 className="ob-onboarding-title">Any existing health conditions?</h2>
            <p className="ob-onboarding-desc">
              Required for safe treatment matching. Only NABH/AYUSH-accredited centres handling your condition will be shown.
            </p>
            <div className="ob-selection-grid ob-grid-2">
              {HEALTH_CONDITIONS.map(cond => (
                <div
                  key={cond.title}
                  className={`ob-selection-card ${selectedConditions.includes(cond.title) ? 'selected' : ''}`}
                  onClick={() => toggleCondition(cond.title)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="ob-card-icon">{cond.icon}</div>
                  <div className="ob-card-title">{cond.title}</div>
                  {/* Descriptions hidden on mobile 2-col to match image */}
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
        )}

        {/* Step 5: Preferences */}
        {currentStep === 5 && (
          <div>
            <h2 className="ob-onboarding-title">Set your discovery preferences</h2>
            <p className="ob-onboarding-desc">
              Final step. These help our AI surface the most relevant treatments for you from 20+ verified providers.
            </p>

            <div className="ob-pref-section">
              <div className="ob-pref-label">📍 Your City</div>
              <input
                type="text"
                className="ob-input-field"
                placeholder="Enter your city"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <p className="ob-card-desc" style={{ marginTop: '5px' }}>Near NABH/AYUSH centres</p>
            </div>

            <div className="ob-pref-section">
              <div className="ob-pref-label">💰 Budget per Session</div>
              <div className="ob-slider-container">
                <input
                  type="range"
                  className="ob-custom-slider"
                  min={500}
                  max={10000}
                  value={budget}
                  onChange={e => setBudget(Number(e.target.value))}
                />
                <div className="ob-slider-labels">
                  <span>₹500</span>
                  <span style={{ color: '#4a5d4a', fontWeight: 600 }}>₹{budget.toLocaleString('en-IN')}</span>
                  <span>₹10k+</span>
                </div>
              </div>
            </div>

            <div className="ob-pref-section">
              <div className="ob-pref-label">🏥 Treatment Types</div>
              <div className="ob-tag-container">
                {TREATMENT_TYPES.map(tag => (
                  <div
                    key={tag}
                    className={`ob-pill-tag ${selectedTreatments.includes(tag) ? 'selected' : ''}`}
                    onClick={() => toggleTag(tag, selectedTreatments, setSelectedTreatments)}
                    role="button"
                    tabIndex={0}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="ob-pref-section">
              <div className="ob-pref-label">🏢 Centre Type</div>
              <div className="ob-tag-container">
                {CENTRE_TYPES.map(tag => (
                  <div
                    key={tag}
                    className={`ob-pill-tag ${selectedCentres.includes(tag) ? 'selected' : ''}`}
                    onClick={() => toggleTag(tag, selectedCentres, setSelectedCentres)}
                    role="button"
                    tabIndex={0}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="ob-pref-section">
              <div className="ob-pref-label">🔔 Notifications</div>
              <div className="ob-selection-grid ob-grid-3">
                {(['Push', 'Email', 'Minimal'] as NotifPref[]).map(n => (
                  <div
                    key={n}
                    className={`ob-selection-card ${notifPref === n ? 'selected' : ''}`}
                    onClick={() => setNotifPref(n)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="ob-card-icon">{n === 'Push' ? '📱' : n === 'Email' ? '📧' : '🔕'}</div>
                    <div className="ob-card-title">{n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
