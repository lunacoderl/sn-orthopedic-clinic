import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import './FloatingActions.css';

export default function FloatingActions({ onOpenEnquiry }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="unified-corner-cta-stack" aria-label="Quick Actions & Return to Top">
      {/* 1. Scroll To Top Button (with circular progress animation) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="corner-action-btn corner-btn-scroll"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <svg className="corner-progress-svg" viewBox="0 0 44 44">
            <circle className="progress-track" cx="22" cy="22" r="18" />
            <circle
              className="progress-indicator"
              cx="22"
              cy="22"
              r="18"
              style={{
                strokeDasharray: 113.1,
                strokeDashoffset: 113.1 - (113.1 * scrollProgress) / 100
              }}
            />
          </svg>
          <ArrowUp size={18} className="scroll-arrow-icon" />
          <span className="corner-tooltip">Back to Top</span>
        </button>
      )}

      {/* 2. Book Consultation CTA */}
      <button
        type="button"
        onClick={onOpenEnquiry}
        className="corner-action-btn corner-btn-book"
        aria-label="Book Orthopedic Consultation"
        title="Book Consultation"
      >
        <Calendar size={20} />
        <span className="corner-tooltip">Book Appointment</span>
        <span className="pulse-ping" />
      </button>

      {/* 3. WhatsApp Direct CTA */}
      <a
        href={clinicInfo.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="corner-action-btn corner-btn-whatsapp"
        aria-label="Chat with S.N. Health Care on WhatsApp"
        title="WhatsApp Direct"
      >
        <MessageCircle size={20} />
        <span className="corner-tooltip">WhatsApp Us</span>
      </a>

      {/* 4. Direct Call CTA */}
      <a
        href={`tel:${clinicInfo.contact.phone}`}
        className="corner-action-btn corner-btn-phone"
        aria-label={`Call Clinic: ${clinicInfo.contact.phone}`}
        title="Call 09090595901"
      >
        <Phone size={20} />
        <span className="corner-tooltip">Call: 09090595901</span>
      </a>
    </div>
  );
}
