import React from 'react';
import { Award, CheckCircle2, Shield, Calendar, Phone, HeartHandshake } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import SectionHeading from '../components/SectionHeading';
import './AboutDoctor.css';

export default function AboutDoctor({ onOpenEnquiry }) {
  return (
    <section className="section-py bg-ivory about-doctor-section" id="about-doctor">
      <div className="container">
        <SectionHeading
          badge="LEAD SPECIALIST"
          title="Meet Dr. P. Y. Srinivasa Rao"
          subtitle="Experienced Orthopedic & Trauma Surgeon committed to empathetic communication, patient education, and conservative joint preservation."
        />

        <div className="about-doctor-grid">
          {/* Left Column: Doctor Cabin Visual */}
          <div className="doctor-media-col">
            <div className="doctor-cabin-frame">
              <img
                src={clinicInfo.doctor.cabinImage}
                alt="Dr. P. Y. Srinivasa Rao's Consultation Suite at S.N. Health Care"
                className="doctor-cabin-img"
              />
              <div className="cabin-badge-overlay">
                <span className="cabin-overlay-title">Consultation Suite</span>
                <span className="cabin-overlay-sub">S.N. Health Care, Visakhapatnam</span>
              </div>
            </div>

            {/* Philosophy Callout Card */}
            <div className="philosophy-callout-card">
              <div className="philosophy-icon">
                <HeartHandshake size={24} />
              </div>
              <div className="philosophy-text-block">
                <h4 className="philosophy-heading">Our Clinical Philosophy</h4>
                <p className="philosophy-quote">
                  "{clinicInfo.doctor.philosophy}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Credentials */}
          <div className="doctor-details-col">
            <div className="doctor-identity-card">
              <div className="doctor-main-title-row">
                <div>
                  <h3 className="doctor-full-name">{clinicInfo.doctor.name}</h3>
                  <div className="doctor-credentials-line">
                    {clinicInfo.doctor.qualifications} · {clinicInfo.doctor.designation}
                  </div>
                </div>
                <div className="exp-badge-pill">
                  <Award size={16} />
                  <span>{clinicInfo.doctor.experience}</span>
                </div>
              </div>

              <p className="doctor-bio-paragraph">
                {clinicInfo.doctor.bio}
              </p>

              <div className="doctor-specializations-block">
                <h4 className="specializations-title">Core Clinical Focus Areas:</h4>
                <div className="specializations-grid">
                  {clinicInfo.doctor.specializations.map((spec, i) => (
                    <div key={i} className="spec-badge-item">
                      <CheckCircle2 size={16} className="spec-check" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="doctor-cta-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenEnquiry}
                >
                  <Calendar size={18} />
                  <span>Request Consultation</span>
                </button>
                <a
                  href={`tel:${clinicInfo.contact.phone}`}
                  className="btn btn-outline"
                >
                  <Phone size={18} />
                  <span>Direct: 09090595901</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
