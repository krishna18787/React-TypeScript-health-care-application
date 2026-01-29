import React from 'react';
import './App.css';
import {
    HeroSection,
    DiagnosticTests,
    WhyBookTests,
    HealthPackages,
    HealthScans,
    CommonRiskArea,
    TrustedLab,
    RoutineCheckup,
    FamilyPackages,
    HealthPulse,
    FAQ,
    DownloadApp,
    Footer
} from './components';

const App: React.FC = () => {
    return (
        <div className="App">
            <HeroSection />
            <DiagnosticTests />
            <WhyBookTests />
            <HealthPackages title="Top Booked Health Checkup Packages" />
            <HealthScans />
            <CommonRiskArea />
            <HealthPackages title="All Health Packages" />
            <TrustedLab />
            <RoutineCheckup />
            <FamilyPackages />
            <HealthPulse />
            <FAQ />
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default App;