import React from 'react';
import './WhyBookTests.css';

const WhyBookTests: React.FC = () => {
  const features = [
    {
      title: 'Quality',
      description: 'Follow Stringent Quality Control Practices',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#1E8281" strokeWidth="3"/>
          <path d="M16 24L20 28L32 16" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'On-Time Services',
      description: 'Sample Collection & Reports',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#1E8281" strokeWidth="3"/>
          <path d="M24 8V24L32 28" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Convenience',
      description: 'At Home & In Lab Services',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8L8 20V40H40V20L24 8Z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 40V28H30V40" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Expert Assistance',
      description: 'On-Demand Report Consultation',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M8 12H40V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12Z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8H32V12H16V8Z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 20L24 24L32 16" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="why-book">
      <div className="container">
        <div className="why-book__layout">
          <div className="why-book__left">
            <div className="why-book__header">
              <h2 className="why-book__title">Why Book Tests With Us ?</h2>
              <p className="why-book__desc">
                According to the study presented at the 78th UN General Assembly, Jivo Care&apos;s tests are up to 8
                times more cost-effective than national treatment coverage.
              </p>
            </div>

            <div className="why-book__features" role="list">
              {features.map((feature, index) => (
                <div key={index} className="why-book__card" role="listitem">
                  <div className="why-book__icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className="why-book__text">
                    <h3 className="why-book__cardTitle">{feature.title}</h3>
                    <p className="why-book__cardDesc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-book__right" aria-hidden>
            <div className="why-book__doctorCircle">
              <div className="why-book__doctorAccent" />
              <img 
                src="/doctor.png" 
                alt="Doctor profile"
                className="why-book__doctorImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBookTests;
