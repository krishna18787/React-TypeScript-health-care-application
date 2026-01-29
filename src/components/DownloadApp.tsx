import React from 'react';
import './DownloadApp.css';

const DownloadApp: React.FC = () => {
    return (
        <section className="download-app">
            <div className="download-app-container">
                <div className="download-app-content">
                    <h2 className="download-app-title">Download Jivo Care App</h2>
                    <p className="download-app-description">
                        Your all-in-one healthcare companion. From doctor consultations and lab tests to ABHA
                        ID, patient records, and ambulance booking — JivoCare brings quality care closer to you.
                    </p>

                    <div className="download-app-stats">
                        <div className="stat-card">
                            <div className="stat-stars">
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star">★</span>
                            </div>
                            <h3 className="stat-value">4.9 Stars</h3>
                            <p className="stat-label">Average rating</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-stars">
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star">★</span>
                            </div>
                            <h3 className="stat-value">1Mn+ Downloads</h3>
                            <p className="stat-label">Across all platforms</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-stars">
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star filled">★</span>
                                <span className="star">★</span>
                            </div>
                            <h3 className="stat-value">1.9k Reviews</h3>
                            <p className="stat-label">On iOS & Google play</p>
                        </div>
                    </div>

                    <div className="download-app-buttons">
                        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="app-store-btn" aria-label="Download on Google Play">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Cpath fill='%23fff' d='M110.135 0H9.535c-.367 0-.729 0-1.094.002-.306.002-.61.008-.916.013A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18A6.258 6.258 0 0 0 .82 3.617a6.601 6.601 0 0 0-.625 1.903 12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 0 0 .18 2.002 6.588 6.588 0 0 0 .624 1.905A6.208 6.208 0 0 0 1.998 38a6.274 6.274 0 0 0 1.618 1.179 6.7 6.7 0 0 0 1.901.63 13.455 13.455 0 0 0 2.008.177c.305.007.61.011.916.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 0 0 2-.178 6.804 6.804 0 0 0 1.908-.63A6.277 6.277 0 0 0 117.666 38a6.395 6.395 0 0 0 1.182-1.614 6.604 6.604 0 0 0 .619-1.905 13.506 13.506 0 0 0 .185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.726-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 0 0-.185-2.003 6.618 6.618 0 0 0-.62-1.903 6.46 6.46 0 0 0-2.798-2.8 6.768 6.768 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z'/%3E%3Cpath fill='%23000' d='M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.586 12.586 0 0 1 7.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 0 1 1.858.162 5.938 5.938 0 0 1 1.671.548 5.594 5.594 0 0 1 2.415 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.784 12.784 0 0 1-.17 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.668.55 12.542 12.542 0 0 1-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z'/%3E%3C/svg%3E" alt="Google Play" className="store-icon" />
                            <div className="store-text">
                                <span className="store-label">GET IT ON</span>
                                <span className="store-name">Google Play</span>
                            </div>
                        </a>
                        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="app-store-btn" aria-label="Download on App Store">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E" alt="App Store" className="store-icon" />
                            <div className="store-text">
                                <span className="store-label">Download on the</span>
                                <span className="store-name">App Store</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="download-app-phones">
                    <div> 
                            <img src="/screen1.png" alt="JivoCare App Screen" className="phone-screenshot" />
                    </div>
                    <div>
                            <img src="/screen1.png" alt="JivoCare App Screen" className="phone-screenshot" />
                      
                    </div>
                    <div> 
                            <img src="/screen1.png" alt="JivoCare App Screen" className="phone-screenshot" />
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
