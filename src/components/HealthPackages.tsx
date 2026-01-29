import React from 'react';
import './HealthPackages.css';

interface HealthPackagesProps {
  title?: string;
}

const HealthPackages: React.FC<HealthPackagesProps> = ({ title = 'Top Booked Health Checkup Packages' }) => {
  const packages = [
    {
      name: 'Fit India Full Body Checkup With Vitamin Screening with Free Heart Test (HsCRP)',
      subtitle: 'For Male & Female',
      tests: 93,
      description: 'Test included: Random Blood Sugar, Liver Function Test, Urine Routine & Microscopy Extended, Complete Blood Count...+88 more',
      reportTime: 'Reports within 24 Hours',
      fasting: 'Fasting Required 12 Hours',
      originalPrice: 4999,
      discountedPrice: 999,
      discount: 80
    },
    {
      name: 'Comprehensive Health Screening With Vitamin Screening Package',
      subtitle: 'For Male & Female',
      tests: 75,
      description: 'Test included: Complete Blood Count, Lipid Profile, Liver Function, Kidney Function, Thyroid Profile...+70 more',
      reportTime: 'Reports within 24 Hours',
      fasting: 'Fasting Required 10-12 Hours',
      originalPrice: 3999,
      discountedPrice: 799,
      discount: 80,
      popular: true
    },
    {
      name: 'Advanced Diabetes Care With Vitamin Screening Package',
      subtitle: 'For Male & Female',
      tests: 65,
      description: 'Test included: HbA1c, Fasting Blood Sugar, Post Prandial Sugar, Insulin Levels, Lipid Profile...+60 more',
      reportTime: 'Reports within 24 Hours',
      fasting: 'Fasting Required 12 Hours',
      originalPrice: 3499,
      discountedPrice: 699,
      discount: 80
    },
  ];

  return (
    <section className="health-packages">
      <div className="container">
        <div className="health-packages__header">
          <div className="health-packages__headerLeft">
            <h2 className="health-packages__title">{title}</h2>
            <p className="health-packages__subtitle">Chosen by Doctors, Trusted by Patients</p>
          </div>
          <button className="health-packages__viewAll" type="button">
            View All ↗
          </button>
        </div>
        
        <div className="health-packages__scroller">
          {packages.map((pkg, index) => (
            <div key={index} className="health-packages__card">
              <div className="health-packages__badge">Packages</div>
              
              <div className="health-packages__cardHeader">
                <span className="health-packages__tag">For Male & Female</span>
                <h3 className="health-packages__name">{pkg.name}</h3>
              </div>

              <p className="health-packages__description">{pkg.description}</p>

              <div className="health-packages__features">
                <div className="health-packages__feature">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#16A34A" strokeWidth="2"/>
                    <path d="M7 10L9 12L13 8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <div className="health-packages__featureLabel">Fasting Required</div>
                    <div className="health-packages__featureValue">12 Hours</div>
                  </div>
                </div>
                <div className="health-packages__feature">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#16A34A" strokeWidth="2"/>
                    <path d="M10 6V10L13 12" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <div className="health-packages__featureLabel">Test Includes</div>
                    <div className="health-packages__featureValue">{pkg.tests} Tests ▼</div>
                  </div>
                </div>
                <div className="health-packages__feature">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="4" y="5" width="12" height="11" rx="2" stroke="#16A34A" strokeWidth="2"/>
                    <path d="M7 3V5M13 3V5M4 9H16" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <div className="health-packages__featureLabel">Reports within</div>
                    <div className="health-packages__featureValue">24 Hours</div>
                  </div>
                </div>
              </div>

              <div className="health-packages__pricing">
                <div className="health-packages__priceGroup">
                  <span className="health-packages__price">₹ {pkg.discountedPrice}</span>
                  <span className="health-packages__originalPrice">₹{pkg.originalPrice}</span>
                </div>
                <div className="health-packages__memberSelect">
                  <select className="health-packages__dropdown">
                    <option>1 Member</option>
                    <option>2 Members</option>
                    <option>3 Members</option>
                    <option>4 Members</option>
                  </select>
                </div>
              </div>

              <div className="health-packages__addMore">
                Or Pay ₹ 950 with taking Annual plan.
              </div>

              <div className="health-packages__gradient">
                + Add 1 more to Pay ₹ 950/person
              </div>

              <div className="health-packages__actions">
                <button className="health-packages__addToCart">Add to Cart +</button>
                <button className="health-packages__bookNow">Book Now →</button>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
