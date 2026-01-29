import React from 'react';
import './HealthPulse.css';

const HealthPulse: React.FC = () => {
  const articles = [
    {
      image: '/doctor.png',
      category: 'Mind, Body, Telemedicine, Health Alerts',
      title: 'Mental Health in adapting Doctors on Demand',
      date: '23 December, 2024',
      readTime: '07:02 read'
    },
    {
      image: '/doctor.png',
      category: 'Mind, Body, Telemedicine, Health Alerts',
      title: 'Mental Health in adapting Doctors on Demand',
      date: '23 December, 2024',
      readTime: '07:02 read'
    },
    {
      image: '/doctor.png',
      category: 'Mind, Body, Telemedicine, Health Alerts',
      title: 'Mental Health in adapting Doctors on Demand',
      date: '23 December, 2024',
      readTime: '07:02 read'
    },
    {
      image: '/doctor.png',
      category: 'Mind, Body, Telemedicine, Health Alerts',
      title: 'Mental Health in adapting Doctors on Demand',
      date: '23 December, 2024',
      readTime: '07:02 read'
    }
  ];

  return (
    <section className="health-pulse">
      <div className="container">
        <div className="health-pulse__header">
          <div className="health-pulse__header-left">
            <h2 className="health-pulse__title">Health Pulse: News, Insights & Stories That Shape Wellness</h2>
            <p className="health-pulse__subtitle">
              Stay in sync with the latest health research, announcements, and media highlights.
            </p>
          </div>
          <button className="health-pulse__view-all">
            View All →
          </button>
        </div>

        <div className="health-pulse__scroller">
          {articles.map((article, index) => (
            <div key={index} className="health-pulse__card">
              <div className="health-pulse__card-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="health-pulse__card-content">
                <p className="health-pulse__card-category">{article.category}</p>
                <h3 className="health-pulse__card-title">{article.title}</h3>
                <div className="health-pulse__card-meta">
                  <span className="health-pulse__card-date">{article.date}</span>
                  <span className="health-pulse__card-divider">•</span>
                  <span className="health-pulse__card-read-time">{article.readTime}</span>
                  <button className="health-pulse__card-button">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPulse;
