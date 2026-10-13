import React from 'react';
import { ShieldCheck, Clock, Award, BedDouble, Stethoscope, HeartHandshake } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import './WhyChooseUs.css';

export default function WhyChooseUs({ onOpenEnquiry }) {
  const reasons = [
    {
      icon: Award,
      title: "16+ Years Specialist Expertise",
      text: "Direct clinical evaluations by Dr. P. Y. Srinivasa Rao (MBBS, MS Orthopedics) ensure deep diagnostic insight honed through tens of thousands of consultations."
    },
    {
      icon: HeartHandshake,
      title: "Conservative Care Priority",
      text: "We avoid rushed surgical recommendations. More than 88% of our patients achieve lasting relief through tailored physical therapies, targeted injections, and lifestyle conditioning."
    },
    {
      icon: Clock,
      title: "Unhurried Consultations",
      text: "We dedicate 15 to 30 minutes for every new patient consultation so you never feel rushed, your questions are answered, and your scans are clearly explained."
    },
    {
      icon: BedDouble,
      title: "Dedicated Observation & Casting Suite",
      text: "Equipped with on-site treatment and resting beds for minor reductions, sterile wound care, joint aspirates, and post-procedure observation."
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Honest Medicine",
      text: "No misleading promises, unnecessary repeat investigations, or hidden fees. Only clear clinical facts and evidence-based guidance."
    },
    {
      icon: Stethoscope,
      title: "Rapid Acute Injury Triage",
      text: "Priority handling for acute sports sprains, severe joint locks, and suspected hairline fractures during regular clinical hours."
    }
  ];

  return (
    <section className="why-choose-section fixed-bg-section" id="why-choose-us" aria-label="Why Choose S.N. Health Care">
      {/* Dark gradient overlay for extreme legibility over authentic clinic banner image */}
      <div className="why-choose-overlay" />

      <div className="container why-choose-container">
        <div className="why-choose-header">
          <span className="badge badge-sage">CLINICAL EXCELLENCE</span>
          <h2 className="why-choose-title">Why Patients Choose S.N. Health Care</h2>
          <p className="why-choose-subtitle">
            A trusted orthopedic practice built upon clinical integrity, surgical precision, and restorative patient care.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="reason-glass-card">
                <div className="reason-icon-circle">
                  <Icon size={22} />
                </div>
                <div className="reason-text-group">
                  <h3 className="reason-card-title">{r.title}</h3>
                  <p className="reason-card-text">{r.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="why-choose-cta-box">
          <div className="cta-left">
            <h4 className="cta-box-title">Need a Dedicated Orthopedic Evaluation?</h4>
            <p className="cta-box-desc">Speak directly with our clinic coordinator or request an appointment slot today.</p>
          </div>
          <div className="cta-right">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenEnquiry}
            >
              Consult Dr. P. Y. Srinivasa Rao
            </button>
            <a
              href={`tel:${clinicInfo.contact.phone}`}
              className="btn btn-outline-white"
            >
              Call: 09090595901
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
