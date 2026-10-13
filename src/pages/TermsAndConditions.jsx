import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, ShieldAlert } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import './LegalPages.css';

export default function TermsAndConditions() {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Terms & Conditions | S.N. Health Care</title>
        <meta
          name="description"
          content="Terms of website usage and statutory medical educational disclaimer for S.N. Health Care, Visakhapatnam."
        />
        <link rel="canonical" href="https://snhealthcare.in/terms-and-conditions" />
      </Helmet>

      <div className="container reading-container legal-content-wrapper">
        <Link to="/" className="legal-back-link">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <header className="legal-header">
          <span className="badge badge-coral">LEGAL &amp; MEDICAL DISCLAIMER</span>
          <h1 className="legal-title">Terms of Use &amp; Medical Disclaimer</h1>
          <p className="legal-date">Last updated: October 2026 · S.N. Health Care</p>
        </header>

        <article className="legal-body">
          <section className="legal-section alert-highlight-section">
            <div className="alert-icon-title">
              <ShieldAlert size={22} className="alert-icon" />
              <h2>1. Essential Medical Educational Disclaimer</h2>
            </div>
            <p>
              The content provided across the <strong>S.N. Health Care</strong> website—including all anatomical illustrations, symptom descriptions, condition summaries, and FAQ answers—is designed <strong>solely for informational and patient educational purposes</strong>.
            </p>
            <p>
              <strong>It does not constitute individualized medical diagnosis, prognosis, treatment advice, or a doctor-patient relationship.</strong> Reading this material or using contact links on this site should never delay seeking in-person clinical care from a licensed orthopedic doctor.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Emergency Medical Situations</h2>
            <p>
              This website is <strong>not</strong> equipped or intended for handling life-threatening emergencies. If you or someone in your care is experiencing:
            </p>
            <ul>
              <li>High-energy vehicular trauma or open bone fractures</li>
              <li>Sudden loss of bowel or bladder control (Cauda Equina warning)</li>
              <li>Rapid, cold, pale, or completely numb limb following a fall</li>
              <li>Severe chest pain or breathing difficulty</li>
            </ul>
            <p>
              Immediately call <strong>108</strong> or proceed to the nearest emergency trauma casualty department.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Appointments &amp; Communications</h2>
            <p>
              Interacting with contact buttons (such as the telephone dialer, WhatsApp link, or email enquiry) initiates communication but <strong>does not automatically confirm a scheduled clinical slot</strong> until acknowledged and confirmed by our clinic reception staff.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Intellectual Property &amp; Content Use</h2>
            <p>
              All original text, clinical summaries, logos, design tokens, and photographic assets displayed on this site are the property of S.N. Health Care and Dr. P. Y. Srinivasa Rao. Unauthorized duplication for commercial reproduction without written permission is prohibited.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Applicable Jurisdiction</h2>
            <p>
              Any disputes or legal questions arising out of the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Visakhapatnam, Andhra Pradesh.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
