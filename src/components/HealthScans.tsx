import React from 'react';
import './HealthScans.css';

const HealthScans: React.FC = () => {
  const scans = [
    {
      name: 'Intolerance Test Pro',
      description: 'Test includes',
      elements: '45 elements',
      price: 1050,
      originalPrice: 7600,
      icon: '📋',
      color: '#E0F7F7'
    },
    {
      name: 'Micronutrient Analysis',
      description: 'Test includes',
      elements: '45 elements',
      price: 1050,
      originalPrice: 7600,
      icon: '📋',
      color: '#FFE5E5'
    },
    {
      name: 'Intolerance Test',
      description: 'Test includes',
      elements: '45 elements',
      price: 1050,
      originalPrice: 7600,
      icon: '📋',
      color: '#E0F7F7'
    },
  ];

  return (
    <section className="health-scans">
      <div className="container">
        <div className="health-scans__header">
          <div className="health-scans__headerLeft">
            <h2 className="health-scans__title">Health Scans & Imaging Tests</h2>
            <p className="health-scans__subtitle">India's First 5&lt;= Centric Diagnostic Platform</p>
          </div>
          <button className="health-scans__viewAll" type="button">
            View All ↗
          </button>
        </div>
        
        <div className="health-scans__scroller">
          {scans.map((scan, index) => (
            <div key={index} className="health-scans__card" style={{ background: scan.color }}>
              <div className="health-scans__iconWrapper">
                <div className="health-scans__clipboard">
                  <div className="health-scans__clipboardClip"></div>
                  <div className="health-scans__clipboardPaper">
                    <div className="health-scans__rx">Rx</div>
                    <div className="health-scans__lines">
                      <div className="health-scans__line"></div>
                      <div className="health-scans__line"></div>
                      <div className="health-scans__line"></div>
                      <div className="health-scans__line"></div>
                    </div>
                    <div className="health-scans__signature"></div>
                  </div>
                </div>
                <div className="health-scans__badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="white" stroke="#1E8281" strokeWidth="2"/>
                    <path d="M8 12L10.5 14.5L16 9" stroke="#1E8281" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="health-scans__content">
                <div className="health-scans__info">
                  <h3 className="health-scans__name">{scan.name}</h3>
                  <p className="health-scans__description">
                    {scan.description} <strong>{scan.elements}</strong>
                  </p>
                </div>
                
                <div className="health-scans__pricing">
                  <div className="health-scans__priceGroup">
                    <span className="health-scans__label">Starting from price</span>
                    <div className="health-scans__priceRow">
                      <span className="health-scans__price">₹ {scan.price}</span>
                      <span className="health-scans__originalPrice">₹{scan.originalPrice}</span>
                    </div>
                  </div>
                  <button className="health-scans__addBtn" aria-label="Add to cart">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 6.25V23.75M6.25 15H23.75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthScans;
