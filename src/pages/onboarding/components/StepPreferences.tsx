import React from 'react';
import { useAppStore } from '@/store/useAppStore';

const TREATMENT_TYPES = ['Ayurveda', 'Panchakarma Detox', 'Yoga Therapy', 'Abhyanga Massage', 'Naturopathy', 'Siddha'];
const CENTRE_TYPES = ['Clinical Hospitals', 'Ayurveda Villages', 'Luxury Wellness'];

const StepPreferences: React.FC = () => {
  const { preferences, setPreferences } = useAppStore();

  const toggleTag = (tag: string, key: 'treatments' | 'centres') => {
    const list = preferences[key];
    setPreferences({
      [key]: list.includes(tag) ? list.filter((t) => t !== tag) : [...list, tag],
    });
  };

  return (
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
          value={preferences.city}
          onChange={(e) => setPreferences({ city: e.target.value })}
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
            value={preferences.budget}
            onChange={(e) => setPreferences({ budget: Number(e.target.value) })}
          />
          <div className="ob-slider-labels">
            <span>₹500</span>
            <span style={{ color: '#4a5d4a', fontWeight: 600 }}>₹{preferences.budget.toLocaleString('en-IN')}</span>
            <span>₹10k+</span>
          </div>
        </div>
      </div>

      <div className="ob-pref-section">
        <div className="ob-pref-label">🏥 Treatment Types</div>
        <div className="ob-tag-container">
          {TREATMENT_TYPES.map((tag) => (
            <div
              key={tag}
              className={`ob-pill-tag ${preferences.treatments.includes(tag) ? 'selected' : ''}`}
              onClick={() => toggleTag(tag, 'treatments')}
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
          {CENTRE_TYPES.map((tag) => (
            <div
              key={tag}
              className={`ob-pill-tag ${preferences.centres.includes(tag) ? 'selected' : ''}`}
              onClick={() => toggleTag(tag, 'centres')}
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
          {['Push', 'Email', 'Minimal'].map((n) => (
            <div
              key={n}
              className={`ob-selection-card ${preferences.notifPref === n ? 'selected' : ''}`}
              onClick={() => setPreferences({ notifPref: n as any })}
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
  );
};

export default StepPreferences;
