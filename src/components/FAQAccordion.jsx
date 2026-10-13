import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for immediate preview

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="faq-accordion-group">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-q-${index}`;
        const answerId = `faq-a-${index}`;

        return (
          <div
            key={index}
            className={`faq-accordion-card ${isOpen ? 'is-open' : ''}`}
          >
            <button
              id={questionId}
              type="button"
              className="faq-accordion-trigger"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="faq-question-text">{item.q}</span>
              <span className="faq-chevron-wrapper" aria-hidden="true">
                <ChevronDown
                  size={20}
                  className={`faq-chevron-icon ${isOpen ? 'chevron-rotated' : ''}`}
                />
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={`faq-accordion-panel ${isOpen ? 'panel-expanded' : 'panel-collapsed'}`}
            >
              <div className="faq-answer-inner">
                <p className="faq-answer-text">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
