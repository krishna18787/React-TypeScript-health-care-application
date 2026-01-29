import React from 'react';
import './DiagnosticTests.css';

const DiagnosticTests: React.FC = () => {
  const tests = [
    { icon: '🦠', name: 'Covid 19' },
    { icon: '🤰', name: 'Pregnancy' },
    { icon: '🩸', name: 'Diabetes' },
    { icon: '🧴', name: 'Vitamin' },
    { icon: '🧪', name: 'Blood' },
    { icon: '🫀', name: 'Liver' },
    { icon: '🦋', name: 'Thyroid' },
    { icon: '💗', name: 'Heart' },
  ];

  return (
    <section className="diagnostic-tests">
      <div className="container">
        <div className="diagnostic-tests__header">
          <div className="diagnostic-tests__headerLeft">
            <h2 className="diagnostic-tests__title">Advanced Diagnostic Tests for Body&apos;s Vital Organs</h2>
            <p className="diagnostic-tests__subtitle">
              Explore our comprehensive range of diagnostic tests tailored for vital body organs.
            </p>
          </div>
          <button className="diagnostic-tests__viewAll" type="button">
            View All ↗
          </button>
        </div>
        
        <div className="diagnostic-tests__grid" role="list">
          {tests.map((test, index) => (
            <div key={index} className="diagnostic-tests__card" role="listitem">
              <div className="diagnostic-tests__icon" aria-hidden>
                {test.icon}
              </div>
              <div className="diagnostic-tests__name">{test.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticTests;
