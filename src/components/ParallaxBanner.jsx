import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import './ParallaxBanner.css';

export default function ParallaxBanner({
  bgImage,
  tag = 'S.N. HEALTH CARE',
  title,
  subtitle,
  ctaText = 'Consult Dr. Rao',
  onCtaClick
}) {
  return (
    <section
      className="parallax-banner-strip"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label={title}
    >
      <div className="parallax-banner-overlay" />
      <div className="container parallax-banner-container">
        <div className="parallax-banner-content">
          <div className="parallax-badge-wrap">
            <span className="badge badge-coral">
              <ShieldCheck size={13} />
              <span>{tag}</span>
            </span>
          </div>

          <h2 className="parallax-title">{title}</h2>
          {subtitle && <p className="parallax-subtitle">{subtitle}</p>}

          {onCtaClick && (
            <div className="parallax-actions">
              <button
                type="button"
                className="btn btn-primary parallax-cta-btn"
                onClick={onCtaClick}
              >
                <Calendar size={18} />
                <span>{ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
