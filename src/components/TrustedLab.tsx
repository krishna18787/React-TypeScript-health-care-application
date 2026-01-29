import React from 'react';
import './TrustedLab.css';

const TrustedLab: React.FC = () => {
  const stats = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '70,00,000+',
      label: 'Customers served'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14,2 14,8 20,8" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="9" y1="15" x2="15" y2="15" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '70,000+',
      label: 'Tests Processed Everyday'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="17 21 17 13 7 13 7 21" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="7 3 7 8 15 8" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '220+',
      label: 'Cities'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '2000+',
      label: 'Collection Centres'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="7" y1="7" x2="7.01" y2="7" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '80+',
      label: 'World Class In-house Labs'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#1E8281" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '1000+',
      label: 'Home Collection Experts'
    }
  ];

  return (
    <section className="trusted-lab">
      <div className="container">
        <div className="trusted-lab__content">
          <div className="trusted-lab__left">
            <img src="/trustedlab.png" alt="Trusted Lab" className="trusted-lab__image" />
          </div>
          
          <div className="trusted-lab__right">
            <h2 className="trusted-lab__title">Jivo Care Labs - Healthy India ki Trusted Lab</h2>
            <p className="trusted-lab__description">
              At Jivo Care Labs, we have a single goal: to give India its right to quality diagnostics.
            </p>
            
            <div className="trusted-lab__stats">
              {stats.map((stat, index) => (
                <div key={index} className="trusted-lab__stat">
                  <div>
                    <div className="trusted-lab__statIcon">{stat.icon}</div>
                    <div className="trusted-lab__statValue">{stat.value}</div>
                  </div>
                  <div className="trusted-lab__statLabel">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLab;
