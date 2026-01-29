import React from 'react';
import './RoutineCheckup.css';

const RoutineCheckup: React.FC = () => {
  const menCheckups = [
    {
      image: '/doctor.png',
      label: 'Under 30 Years',
      bgColor: '#E0F2F1'
    },
    {
      image: '/doctor.png',
      label: '30-45 Years',
      bgColor: '#FFF9C4'
    },
    {
      image: '/doctor.png',
      label: '45-60 Years',
      bgColor: '#E3F2FD'
    },
    {
      image: '/doctor.png',
      label: 'Above 60 Years',
      bgColor: '#C8E6C9'
    }
  ];

  const womenCheckups = [
    {
      image: '/doctor.png',
      label: 'Under 30 Years',
      bgColor: '#F3E5F5'
    },
    {
      image: '/doctor.png',
      label: '30-45 Years',
      bgColor: '#FFE0B2'
    },
    {
      image: '/doctor.png',
      label: '45-60 Years',
      bgColor: '#FFCCBC'
    },
    {
      image: '/doctor.png',
      label: 'Above 60 Years',
      bgColor: '#C8E6C9'
    }
  ];

  return (
    <section className="routine-checkup">
      <div className="container">
        <div className="routine-checkup__header">
          <h2 className="routine-checkup__title">Routine Health Checkup</h2>
          <p className="routine-checkup__subtitle">
            Describe your symptoms, and we'll match you with the most suitable specialist for accurate diagnosis and timely care.
          </p>
        </div>

        <div className="routine-checkup__content">
          <div className="routine-checkup__section routine-checkup__section--men">
            <h3 className="routine-checkup__sectionTitle">Routine Health Checkup for Men</h3>
            <div className="routine-checkup__cards">
              {menCheckups.map((checkup, index) => (
                <div key={index} className="routine-checkup__card" style={{ background: checkup.bgColor }}>
                  <div className="routine-checkup__cardImage">
                    <img src={checkup.image} alt={checkup.label} />
                  </div>
                  <div className="routine-checkup__cardLabel">{checkup.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="routine-checkup__section routine-checkup__section--women">
            <h3 className="routine-checkup__sectionTitle">Routine Health Checkup for Women</h3>
            <div className="routine-checkup__cards">
              {womenCheckups.map((checkup, index) => (
                <div key={index} className="routine-checkup__card" style={{ background: checkup.bgColor }}>
                  <div className="routine-checkup__cardImage">
                    <img src={checkup.image} alt={checkup.label} />
                  </div>
                  <div className="routine-checkup__cardLabel">{checkup.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutineCheckup;
