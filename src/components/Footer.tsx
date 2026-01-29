import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <img src="/logo2.png" alt="Jivo Care" className="footer-logo-img" />
              <div className="footer-logo-text">
                <h3>Jivo Care</h3>
                <p className="footer-tagline">One Platform, Total Care</p>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Know Us</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#press">Press Coverage</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#business">Business Partnership</a></li>
              <li><a href="#partner">Become a Healthier Partner</a></li>
              <li><a href="#governance">Corporate Governance</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Our Policies</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#editorial">Editorial Policy</a></li>
              <li><a href="#return">Return Policy</a></li>
              <li><a href="#ip">IP Policy</a></li>
              <li><a href="#grievance">Grievance Redressal Policy</a></li>
              <li><a href="#fraud">Fake Jobs & Fraud Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#doctor">Online Doctor Consultation</a></li>
              <li><a href="#lab-booking">Lab Test Booking</a></li>
              <li><a href="#medicine">Medicine Delivery</a></li>
              <li><a href="#ambulance">Ambulance Services</a></li>
              <li><a href="#insurance">Health Insurance Plans</a></li>
              <li><a href="#bmi">BMI & Health Calculator</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Lab Tests</h4>
            <ul>
              <li><a href="#rtpcr">RT PCR Test at Home</a></li>
              <li><a href="#book-lab">Book Lab Tests at Home</a></li>
              <li><a href="#renal">Renal Profile (KFT, RFT Test)</a></li>
              <li><a href="#lipid">Lipid Profile Test</a></li>
              <li><a href="#thyroid">Thyroid Profile Test (T3 T4 Tsh Test)</a></li>
              <li><a href="#urine">Urine Culture Test</a></li>
              <li><a href="#cbc">Complete Blood Count (CBC Test)</a></li>
              <li><a href="#liver">Liver Function Test (LFT Test)</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect With Us</h4>
            <p className="social-label">Social Links</p>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram" className="social-icon instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter" className="social-icon twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-icon linkedin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#quora" aria-label="Quora" className="social-icon quora">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.738 18.701c-.831 0-1.635-.206-2.354-.589.089-.148.213-.364.401-.653.38-.585.664-1.005 1.043-1.48.233.088.461.147.71.147.861 0 1.518-.545 1.518-1.635V8.354c0-1.096-.648-1.64-1.518-1.64-.855 0-1.518.544-1.518 1.64v6.137c0 .971-.231 1.663-.639 2.129-.351.398-.862.705-1.551.705-1.367 0-2.424-.999-2.424-2.71V8.354c0-2.577 1.804-4.556 4.132-4.556 2.343 0 4.136 1.979 4.136 4.556v6.261c0 2.577-1.793 4.556-4.136 4.556l-.8.03zm11.262-1.498c0-3.378-2.178-6.239-5.202-7.293.392-1.291.588-2.643.588-4.003C19.386 2.672 16.707 0 13.373 0h-.747C9.293 0 6.614 2.672 6.614 5.907c0 1.36.197 2.712.588 4.003C4.178 10.964 2 13.825 2 17.203 2 20.866 4.951 24 8.615 24h6.77C19.049 24 22 20.866 22 17.203z"/>
                </svg>
              </a>
            </div>
            <div className="certification-badges">
              <img src="/logo2.png" alt="NABH Certification" className="cert-badge" />
              <img src="/logo2.png" alt="Indian Medical Association" className="cert-badge" />
              <img src="/logo2.png" alt="ISO Certification" className="cert-badge" />
            </div>
          </div>
        </div>

        <div className="footer-features">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="25" fill="#A8D5BA" opacity="0.3"/>
                <circle cx="30" cy="30" r="25" stroke="#5BA578" strokeWidth="1" fill="none"/>
                <path d="M30 20L35 28L30 35L25 28L30 20Z" fill="#5BA578"/>
                <path d="M25 28H35" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="feature-content">
              <h5>Reliable</h5>
              <p>All products displayed on Jivo Care are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="25" fill="#A8D5BA" opacity="0.3"/>
                <circle cx="30" cy="30" r="25" stroke="#5BA578" strokeWidth="1" fill="none"/>
                <circle cx="30" cy="30" r="8" fill="#5BA578"/>
                <path d="M30 22V30M30 30V38M30 30H38M30 30H22" stroke="#5BA578" strokeWidth="2"/>
                <path d="M24 30L28 34L38 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="feature-content">
              <h5>Secure</h5>
              <p>Jivo Care uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="25" fill="#A8D5BA" opacity="0.3"/>
                <circle cx="30" cy="30" r="25" stroke="#5BA578" strokeWidth="1" fill="none"/>
                <rect x="20" y="22" width="20" height="16" rx="2" fill="#5BA578"/>
                <text x="30" y="34" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial">₹</text>
              </svg>
            </div>
            <div className="feature-content">
              <h5>Affordable</h5>
              <p>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            The content provided here and elsewhere on the Jivo Care website or mobile app is for general informational purposes only. It is not intended to serve as medical advice, diagnosis, or treatment. Jivo Care does not provide medical services directly. Always consult your healthcare provider for any medical concerns or specific advice regarding your health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

