import React from 'react';
import { Star, CheckCircle, Quote, UserCheck } from 'lucide-react';
import { patientTestimonials } from '../data/testimonials';
import SectionHeading from '../components/SectionHeading';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section-py bg-white testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeading
          badge="PATIENT RECOVERIES"
          title="Real Patient Experiences & Rehabilitation Outcomes"
          subtitle="Honest feedback from patients who entrusted their joint, spine, and fracture recovery to Dr. P. Y. Srinivasa Rao at S.N. Health Care."
        />

        <div className="testimonials-grid">
          {patientTestimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="star-rating-row" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" fill="#E76F51" color="#E76F51" />
                  ))}
                </div>
                <span className="badge badge-sage verified-pill">
                  <CheckCircle size={12} />
                  <span>Verified Patient</span>
                </span>
              </div>

              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>

              <div className="testimonial-outcome-box">
                <span className="outcome-label">Clinical Outcome:</span>
                <span className="outcome-text">{item.outcome}</span>
              </div>

              <div className="testimonial-author-block">
                <div className="author-avatar-initial">
                  {item.name.charAt(0)}
                </div>
                <div className="author-meta">
                  <span className="author-name">{item.name} ({item.age} yrs)</span>
                  <span className="author-condition">{item.condition} · {item.city}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
