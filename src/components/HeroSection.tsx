import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Rectangle 21175 - Background */}
      <div className="hero-background"></div>
      
      {/* Dotted Image Pattern Overlay */}
      <div className="hero-pattern"></div>
      
      {/* Above Navbar Section */}
      <div className="above-navbar-section">
        {/* Rectangle 15073 */}
        <div className="navbar-container">
          {/* Frame 1171277115 - Logo */}
          <div className="header-logo">
            <img src="/logo2.png" alt="Logo" />
            <span className="platform-tagline">One Platform, Total Care</span>
          </div>
          
          {/* Frame 1171277079 - Location Selector */}
          <div className="location-selector-wrapper">
            <div className="location-icon-circle">
              <svg className="location-icon" viewBox="0 0 26 26" fill="none">
                <g>
                  <circle cx="13" cy="9" r="2.5" stroke="#FFFFFF" strokeWidth="1.39286"/>
                  <path d="M13 4C10.2386 4 8 6.23858 8 9C8 11.7614 10.2386 14 13 14C15.7614 14 18 11.7614 18 9C18 6.23858 15.7614 4 13 4Z" stroke="#FFFFFF" strokeWidth="1.39286"/>
                </g>
              </svg>
            </div>
            
            <div className="location-details">
              <div className="location-title-row">
                <span className="location-label">Select Location</span>
                <svg className="dropdown-icon" viewBox="0 0 18 18" fill="none">
                  <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#FFFFFF" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="location-address">Sector-43, Gurgaon, Haryana</span>
            </div>
          </div>
          
          {/* Frame 1171278466 - Navigation */}
          <div className="navbar-links">
            {/* Frame 1171277114 - Offerings */}
            <div className="nav-item">
              <span className="nav-text">Offerings</span>
              <svg className="nav-dropdown" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Frame 1171278464 - Health Insurance */}
            <div className="nav-item">
              <span className="nav-text">Health Insurance</span>
              <svg className="nav-dropdown" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Frame 1171277116 - Wellness Calculators */}
            <div className="nav-item">
              <span className="nav-text">Wellness Calculators</span>
              <svg className="nav-dropdown" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          {/* Frame 1171278465 - Cart Button */}
          <div className="cart-button">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#003236" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="8" cy="21" r="1.5" fill="#003236"/>
              <circle cx="18" cy="21" r="1.5" fill="#003236"/>
            </svg>
          </div>
          
          {/* Button - Sign Up */}
          <button className="signup-button">
            <span>Sign Up</span>
            <svg viewBox="0 0 13 19" fill="none">
              <path d="M1 1L12 9.5L1 18" fill="#003236"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Below Navbar Section */}
      <div className="below-navbar-section">
        {/* Navbar Links Container */}
        <div className="services-container">
          {/* Frame 1171277087 - Consult Specialist */}
          <div className="service-card">
            <div className="service-card-bg"></div>
            <div className="service-content">
              <div className="service-icon">
                <img src="/serviceicon.png" alt="Consult Specialist" />
              </div>
              <h3 className="service-title">Consult Specialist</h3>
              <p className="service-desc">Connect with healthcare experts</p>
            </div>
            <div className="service-card-highlight"></div>
          </div>
          
          {/* Frame 1171277088 - Lab Test */}
          <div className="service-card">
            <div className="service-card-bg"></div>
            <div className="service-content">
              <div className="service-icon">
                <img src="/serviceicon.png" alt="Lab Test" />
              </div>
              <h3 className="service-title">Lab Test</h3>
              <p className="service-desc">Convenient home sample collection</p>
            </div>
          </div>
          
          {/* Frame 1171277089 - Buy Medicines */}
          <div className="service-card">
            <div className="service-card-bg"></div>
            <div className="service-content">
              <div className="service-icon">
                <img src="/serviceicon.png" alt="Buy Medicines" />
              </div>
              <h3 className="service-title">Buy Medicines</h3>
              <p className="service-desc">Fast and secure medicine delivery</p>
            </div>
          </div>
          
          {/* Frame 1171277090 - Ambulance Services */}
          <div className="service-card">
            <div className="service-card-bg"></div>
            <div className="service-content">
              <div className="service-icon">
                <img src="/serviceicon.png" alt="Ambulance Services" />
              </div>
              <h3 className="service-title">Ambulance Services</h3>
              <p className="service-desc">Reliable 24/7 emergency support</p>
            </div>
          </div>
          
          {/* Frame 1171277091 - Health Insurance */}
          <div className="service-card">
            <div className="service-card-bg"></div>
            <div className="service-content">
              <div className="service-icon">
                <img src="/serviceicon.png" alt="Health Insurance" />
              </div>
              <h3 className="service-title">Health Insurance</h3>
              <p className="service-desc">Cost-effective health coverage</p>
            </div>
            <div className="service-card-highlight service-card-highlight-active"></div>
          </div>
        </div>
      </div>
      
      {/* Banner Section */}
      <div className="banner-section">
        {/* Frame 1171277229 */}
        <div className="hero-content-wrapper">
          {/* Book your next Lab Test Appointment */}
          <h1 className="hero-title">
            Book your next<br />
            Lab Test Appointment
          </h1>
          
          {/* Search top-rated diagnostic labs... */}
          <p className="hero-subtitle">
            Search top-rated diagnostic labs across India, book instantly, and get your tests done with trusted health professionals.
          </p>
          
          {/* Frame 1171277131 - Search Box Container */}
          <div className="search-container">
            {/* Hand Icon Pointing to Search */}
            <div className="hand-icon-wrapper">
              <img src="/hand.png" alt="Click here" className="hand-icon" />
            </div>
            
            {/* Rectangle 15089 */}
            <div className="search-box-wrapper">
              {/* Frame 1171277123 - Search Location */}
              <div className="search-field">
                <div className="search-field-content">
                  <span className="search-label">Search Location</span>
                  <input 
                    type="text" 
                    className="search-value" 
                    defaultValue="Gurgaon, Haryana"
                    placeholder="Gurgaon, Haryana"
                  />
                </div>
              </div>
              
              {/* Line 1973 - Divider */}
              <div className="search-divider"></div>
              
              {/* Frame 1171277125 - Find Packages */}
              <div className="search-field search-field-wide">
                <div className="search-field-content">
                  <span className="search-label">Find your Packages/ Tests/ Scans</span>
                  <input 
                    type="text" 
                    className="search-value" 
                    defaultValue="Diabetes Test, Full Body Checkup"
                    placeholder="Diabetes Test, Full Body Checkup"
                  />
                </div>
              </div>
              
              {/* Frame 1171277111 - Search Button */}
              <button className="search-button">
                <svg className="search-icon" viewBox="0 0 40 40" fill="none">
                  <path d="M17.5 30C24.4036 30 30 24.4036 30 17.5C30 10.5964 24.4036 5 17.5 5C10.5964 5 5 10.5964 5 17.5C5 24.4036 10.5964 30 17.5 30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 35L26.5 26.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Frame 1171277255 - Decorative Element */}
          <div className="hero-decoration"></div>
        </div>
        
        {/* Feature Icons Row */}
        <div className="features-row">
          {/* Frame 1171278427 - Free Sample Collection */}
          <div className="feature-item">
            <div className="feature-icon-box">
              <img src="/frame.png" alt="Free Sample Collection" className="feature-icon" />
            </div>
            <span className="feature-text">Free Sample Collection within 60 Mins of Booking*</span>
          </div>
          
          {/* Frame 1171278428 - Smart Reports */}
          <div className="feature-item">
            <div className="feature-icon-box">
              <img src="/frame.png" alt="Smart Reports" className="feature-icon" />
            </div>
            <span className="feature-text">Smart Reports with Real-Time Updates</span>
          </div>
          
          {/* Frame 1171278429 - Free Report Counselling */}
          <div className="feature-item">
            <div className="feature-icon-box">
              <img src="/frame.png" alt="Free Report Counselling" className="feature-icon" />
            </div>
            <span className="feature-text">Free Report Counselling</span>
          </div>
        </div>
        
        {/* Decorative Plant Illustration - Frame 1171277253 */}
        <div className="hero-plant-decoration"></div>
      </div>
    </section>
  );
};

export default HeroSection;
