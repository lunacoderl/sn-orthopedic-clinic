import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Phone, ArrowLeft } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import './LegalPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Privacy Policy | S.N. Health Care</title>
        <meta
          name="description"
          content="Privacy policy and patient data transparency practices for S.N. Health Care, Visakhapatnam. Understand how your contact information is protected."
        />
        <link rel="canonical" href="https://snhealthcare.in/privacy-policy" />
      </Helmet>

      <div className="container reading-container legal-content-wrapper">
        <Link to="/" className="legal-back-link">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <header className="legal-header">
          <span className="badge badge-teal">DATA TRANSPARENCY</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-date">Last updated: October 2026 · S.N. Health Care</p>
        </header>

        <article className="legal-body">
          <section className="legal-section">
            <h2>1. Our Commitment to Patient Privacy</h2>
            <p>
              At <strong>S.N. Health Care</strong>, under the clinical leadership of <strong>Dr. P. Y. Srinivasa Rao</strong>, we respect the confidentiality of every individual who visits our digital platform or attends our clinic in Visakhapatnam. This document explains our data practices in plain language.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information Collected by This Website</h2>
            <p>
              This website operates primarily as an informational and educational medical resource. We do <strong>not</strong> require user registration, patient account creation, or online payment processing.
            </p>
            <ul>
              <li>
                <strong>Direct Contact Triggers:</strong> When you initiate a phone call, WhatsApp conversation, or draft email, your communication occurs directly between your personal device and S.N. Health Care.
              </li>
              <li>
                <strong>No Cloud Database Storage:</strong> Consultation enquiry forms on this frontend do not submit sensitive clinical health records into third-party tracking databases. They generate draft communications on your personal device.
              </li>
              <li>
                <strong>Anonymous Analytics:</strong> Standard non-identifying server metrics (such as browser type and visit timestamps) may be processed for hosting security and performance optimization.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Clinical Confidentiality</h2>
            <p>
              All in-person clinical consultations, radiographic examinations, diagnostic reports, and physical therapy records handled directly at S.N. Health Care are protected in strict accordance with the ethical standards of the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations and applicable Indian healthcare privacy laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Third-Party Services &amp; External Links</h2>
            <p>
              Our website provides links to external services such as Google Maps for clinic directions and WhatsApp for direct messaging. These services operate under their respective privacy policies, and we encourage patients to review their terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Contacting the Clinic Regarding Privacy</h2>
            <p>
              If you have any questions regarding privacy or data handling at S.N. Health Care, you may reach our clinic administration directly:
            </p>
            <div className="legal-contact-box">
              <p><strong>S.N. Health Care</strong></p>
              <p>Opposite Town Center, Main Commercial Road, Visakhapatnam, AP 530002</p>
              <p>Telephone: <strong>09090595901</strong></p>
              <p>Email: <strong>consult@snhealthcare.in</strong></p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
