import React from 'react';
import './FamilyPackages.css';

const FamilyPackages: React.FC = () => {
  const packages = [
    {
      name: 'Free HsCRP With Annual Health Checkup',
      originalPrice: 7999,
      discountedPrice: 7799,
      parameters: 90,
      recommended: 'Recommended For Mothers',
      image: '/doctor.png',
      bgColor: '#E8F5E9'
    },
    {
      name: 'Annual Health Checkup- Advance Plus with Free HsCRP',
      originalPrice: 4999,
      discountedPrice: 2399,
      parameters: 88,
      recommended: 'Recommended For Fathers',
      image: '/doctor.png',
      bgColor: '#E3F2FD'
    },
    {
      name: 'Fit India Full Body Checkup with Vitamin B12',
      originalPrice: 4999,
      discountedPrice: 1399,
      parameters: 90,
      recommended: 'Recommended For Women',
      image: '/doctor.png',
      bgColor: '#FFF9C4'
    }
  ];

  return (
    <section className="family-packages">
      <div className="container">
        <div className="family-packages__header">
          <h2 className="family-packages__title">Family Care Packages</h2>
          <p className="family-packages__subtitle">
            Describe your symptoms, and we'll match you with the most suitable specialist for accurate diagnosis and timely care.
          </p>
        </div>

        <div className="family-packages__scroller">
          {packages.map((pkg, index) => (
            <div key={index} className="family-packages__card" style={{ background: pkg.bgColor }}>
              <div className="family-packages__cardContent">
                <div className="family-packages__cardLeft">
                  <h3 className="family-packages__cardName">{pkg.name}</h3>
                  <div className="family-packages__price">
                    <span className="family-packages__originalPrice">₹{pkg.originalPrice}/-</span>
                    <span className="family-packages__discountedPrice">₹{pkg.discountedPrice}/-</span>
                  </div>
                  <div className="family-packages__parameters">{pkg.parameters} parameters</div>
                  <div className="family-packages__recommended">{pkg.recommended}</div>
                </div>
                <div className="family-packages__cardRight">
                  <img src={pkg.image} alt={pkg.name} className="family-packages__image" />
                </div>
              </div>
              <button className="family-packages__button">
                →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyPackages;
