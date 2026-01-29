import React, { useState } from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a doctor\'s appointment on Care Labs?',
      answer: 'You can book an appointment through our website or mobile app by selecting the doctor, choosing a time slot, and confirming your booking.'
    },
    {
      question: 'Can I reschedule or cancel an appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment up to 2 hours before the scheduled time through your account dashboard.'
    },
    {
      question: 'Are telemedicine services available?',
      answer: 'Yes, we offer telemedicine consultations with experienced doctors through video calls at your convenience.'
    },
    {
      question: 'What are emergency booking for appointments?',
      answer: 'Emergency bookings can be made through our 24/7 helpline or by selecting the emergency option in the app for immediate assistance.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes, we use industry-standard encryption and security measures to protect your personal and medical information.'
    },
    {
      question: 'How do I find the right specialist for my symptoms?',
      answer: 'You can use our symptom checker or contact our support team who will help you connect with the right specialist.'
    },
    {
      question: 'When can I see the health check reports for my appointment?',
      answer: 'Health check reports are typically available within 24-48 hours and can be accessed through your account dashboard.'
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Question</h2>
        <p className="section-subtitle">Common questions about using our service made easy</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
