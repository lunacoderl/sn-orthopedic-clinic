import React from 'react';
import { Phone, Calendar, ShieldCheck, Award, MapPin, Clock } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import './Hero.css';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="hero-section" aria-label="Welcome to S.N. Health Care">
      <div className="container hero-container">
        {/* Prominent Clinic Brand & Logo Showcase */}
        <div className="hero-brand-showcase">
          <div className="hero-brand-top">
            <img
              src={clinicInfo.logo}
              alt="S.N. Health Care Clinic Official Logo"
              className="hero-official-logo"
            />
            <div className="hero-brand-text">
              <span className="hero-clinic-name">S.N. HEALTH CARE</span>
              <span className="hero-clinic-sub">{clinicInfo.tagline}</span>
            </div>
          </div>

          <div className="hero-doctor-badge-strip">
            <span className="badge badge-teal">
              <ShieldCheck size={14} />
              <span>{clinicInfo.doctor.name} ({clinicInfo.doctor.qualifications})</span>
            </span>
            <span className="badge badge-sage">
              <Award size={14} />
              <span>{clinicInfo.doctor.experience}</span>
            </span>
            <span className="badge badge-navy">
              <MapPin size={14} />
              <span>Visakhapatnam</span>
            </span>
          </div>
        </div>

        {/* Hero Narrative & Actions */}
        <div className="hero-main-banner-card">
          <h1 className="hero-headline">
            Specialized Orthopedic, Spine &amp; Joint Care in Visakhapatnam
          </h1>

          <p className="hero-lead">
            Welcome to <strong>S.N. Health Care</strong>, led by <strong>{clinicInfo.doctor.name}</strong>. We deliver compassionate, evidence-based orthopedic healthcare focusing on conservative joint preservation, precision spine therapies, fracture management, and sports rehabilitation without unnecessary surgeries.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-hero-primary"
              onClick={onOpenEnquiry}
            >
              <Calendar size={18} />
              <span>Consult Dr. Rao</span>
            </button>

            <a
              href={`tel:${clinicInfo.contact.phone}`}
              className="btn btn-secondary btn-hero-secondary"
            >
              <Phone size={18} />
              <span>Call Clinic: 09090595901</span>
            </a>
          </div>

          <div className="hero-quick-notice">
            <span className="pulse-indicator" />
            <span>
              Direct consultation hours: <strong>09:30 AM – 01:30 PM</strong> &amp; <strong>05:00 PM – 09:00 PM</strong> (Mon–Sat) · Walk-ins welcomed
            </span>
          </div>
        </div>

        {/* Trust Metric Counters */}
        <div className="hero-metrics-bar">
          {clinicInfo.stats.map((s, idx) => (
            <div key={idx} className="hero-metric-item">
              <div className="metric-value">{s.value}</div>
              <div className="metric-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
