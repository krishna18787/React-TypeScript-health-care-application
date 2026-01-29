import React from 'react';
import './CommonRiskArea.css';

type RiskCard = {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const CommonRiskArea: React.FC = () => {
  const cards: RiskCard[] = [
    { 
      title: 'Allergy',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop',
      imageAlt: 'Woman sneezing into tissue'
    },
    {
      title: 'STD',
      description:
        'Sexually transmitted infections (STIs), also known as STDs, are those infections that spread from one person to another through sexual contact.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
      imageAlt: 'Concerned couple'
    },
    { 
      title: 'Acidity',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      imageAlt: 'Man with concerned expression'
    },
    { 
      title: 'Obesity',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
      imageAlt: 'Woman in distress'
    },
    { 
      title: 'Fever',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
      imageAlt: 'Man feeling unwell'
    },
  ];

  return (
    <section className="common-risk">
      <div className="container">
        <div className="common-risk__header">
          <div>
            <h2 className="common-risk__title">Common Risk Area</h2>
            <p className="common-risk__subtitle">India&apos;s First She-Centric Diagnostic Platform</p>
          </div>

          <button className="common-risk__viewall" type="button">
            <span>View All</span>
            <svg className="common-risk__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M5.25 12.75L12.75 5.25M12.75 5.25H5.25M12.75 5.25V12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="common-risk__scroller" aria-label="Common risk categories">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`common-risk__card ${card.description ? '' : 'common-risk__card--noDesc'}`}
            >
              {card.imageUrl && (
                <div className="common-risk__imageWrapper">
                  <img 
                    src={card.imageUrl} 
                    alt={card.imageAlt || card.title}
                    className="common-risk__image"
                  />
                </div>
              )}
              
              <div className="common-risk__content">
                <h3 className="common-risk__cardTitle">{card.title}</h3>
                {card.description && (
                  <p className="common-risk__cardDesc">{card.description}</p>
                )}
                <button className="common-risk__cta" type="button">
                  <span>View Tests</span>
                  <svg className="common-risk__ctaArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}

          <button className="common-risk__next" type="button" aria-label="Scroll to next cards">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommonRiskArea;

