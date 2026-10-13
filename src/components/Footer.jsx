import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import { quickServiceLinks, legalLinks } from '../data/navigation';
import './Footer.css';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="site-footer bg-navy">
      {/* Top Pre-Footer Emergency & Consultation Strip */}
      <div className="footer-emergency-banner">
        <div className="container footer-banner-container">
          <div className="banner-text">
            <span className="banner-badge">DIRECT ACCESS</span>
            <span className="banner-main-text">
              Looking for expert bone, spine, or joint assessment? Call clinic directly or connect via WhatsApp.
            </span>
          </div>
          <div className="banner-ctas">
            <a href={`tel:${clinicInfo.contact.phone}`} className="btn btn-primary btn-banner-call">
              <Phone size={16} />
              <span>Call 09090595901</span>
            </a>
            <button
              type="button"
              className="btn btn-outline-white"
              onClick={onOpenEnquiry}
            >
              Appointment Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="container footer-content section-py-sm">
        <div className="footer-grid">
          {/* Column 1: Doctor & Clinic Identity */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <img
                src={clinicInfo.logo}
                alt="S.N. Health Care"
                className="footer-logo-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="footer-brand-title">S.N. HEALTH CARE</div>
            </div>
            <p className="footer-lead-text">
              Led by <strong>{clinicInfo.doctor.name}</strong> ({clinicInfo.doctor.qualifications}), offering patient-focused orthopedic evaluation, conservative joint preservation, and rehabilitation in Visakhapatnam.
            </p>
            <div className="footer-doctor-badge">
              <ShieldCheck size={18} className="badge-shield" />
              <span>{clinicInfo.doctor.experience} · MS Orthopedics</span>
            </div>
          </div>

          {/* Column 2: Orthopedic Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Orthopedic Care</h4>
            <ul className="footer-link-list">
              {quickServiceLinks.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="footer-link">
                    <span>{s.label}</span>
                    <ArrowUpRight size={13} className="footer-link-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinic Hours & Information */}
          <div className="footer-col">
            <h4 className="footer-heading">Consultation Hours</h4>
            <div className="footer-schedule-block">
              {clinicInfo.hours.map((h, i) => (
                <div key={i} className="footer-schedule-item">
                  <div className="schedule-day">{h.days}</div>
                  <div className="schedule-time">{h.morning}</div>
                  <div className="schedule-time">{h.evening}</div>
                </div>
              ))}
            </div>
            <div className="footer-walkin-note">
              <Clock size={15} />
              <span>Walk-ins welcome during regular consultation timings.</span>
            </div>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit S.N. Health Care</h4>
            <address className="footer-address-block">
              <div className="footer-address-item">
                <MapPin size={18} className="address-icon" />
                <span>{clinicInfo.contact.address.full}</span>
              </div>
              <div className="footer-address-item">
                <Phone size={18} className="address-icon" />
                <a href={`tel:${clinicInfo.contact.phone}`} className="footer-tel-link">
                  {clinicInfo.contact.phoneDisplay}
                </a>
              </div>
              <div className="footer-address-item">
                <Mail size={18} className="address-icon" />
                <a href={`mailto:${clinicInfo.contact.email}`} className="footer-tel-link">
                  {clinicInfo.contact.email}
                </a>
              </div>
            </address>
            <a
              href={clinicInfo.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-maps-link"
            >
              Open Google Maps Directions →
            </a>
          </div>
        </div>

        {/* Medical Educational Disclaimer */}
        <div className="footer-disclaimer-card">
          <div className="disclaimer-header">
            <ShieldCheck size={16} />
            <span>STATUTORY MEDICAL EDUCATIONAL DISCLAIMER</span>
          </div>
          <p className="disclaimer-text">
            All clinical, anatomical, diagnostic, and symptom content published on S.N. Health Care is created exclusively for patient educational purposes and general awareness. It does not establish a formal physician-patient relationship, nor is it a substitute for individualized clinical examination, diagnosis, or treatment by a qualified orthopedic surgeon. If you are experiencing acute traumatic injury, sudden severe numbness, or loss of limb function, seek emergency medical care immediately.
          </p>
        </div>

        {/* Bottom Legal Strip */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © {new Date().getFullYear()} S.N. Health Care. All rights reserved. Dr. P. Y. Srinivasa Rao.
          </div>
          <div className="footer-legal-links">
            {legalLinks.map((l, i) => (
              <Link key={i} to={l.path} className="footer-legal-link">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
