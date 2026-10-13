import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Calendar,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Clock,
  MapPin,
  Activity,
  FileText
} from 'lucide-react';
import { services } from '../data/services';
import { clinicInfo } from '../data/clinic';
import FAQAccordion from '../components/FAQAccordion';
import './ServiceDetails.css';

export default function ServiceDetails({ onOpenEnquiry }) {
  const { slug } = useParams();
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);
  const [secondaryImgLoaded, setSecondaryImgLoaded] = useState(false);

  // Find matching service from centralized registry
  const service = services.find((s) => s.slug === slug);

  // Unknown service slugs render the custom 404
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Cross-reference related services
  const relatedServicesList = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  // Structured Data Schema for MedicalWebPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": service.title,
    "description": service.seo.description,
    "url": `https://snhealthcare.in/services/${service.slug}`,
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": service.title,
      "possibleTreatment": service.treatmentApproach.map(t => ({
        "@type": "MedicalTherapy",
        "name": t.phase,
        "description": t.detail
      }))
    },
    "medicalAudience": "Patient",
    "provider": {
      "@type": "Physician",
      "name": clinicInfo.doctor.name,
      "telephone": "+91-9090595901"
    }
  };

  return (
    <div className="service-details-page">
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta name="keywords" content={service.seo.keywords} />
        <link rel="canonical" href={`https://snhealthcare.in/services/${service.slug}`} />
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <meta property="og:image" content={`https://snhealthcare.in${service.heroImage}`} />
        <meta property="og:url" content={`https://snhealthcare.in/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb Navigation */}
      <nav className="service-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator"><ChevronRight size={14} /></li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li className="breadcrumb-separator"><ChevronRight size={14} /></li>
            <li className="breadcrumb-current" aria-current="page">
              {service.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Service Hero Header */}
      <header className="service-hero-header">
        <div className="container service-hero-container">
          <div className="service-hero-grid">
            <div className="service-hero-content">
              <div className="service-badge-row">
                <span className="badge badge-teal">{service.category}</span>
                <span className="badge badge-sage">Dr. P. Y. Srinivasa Rao</span>
              </div>

              <h1 className="service-page-title">{service.title}</h1>

              <p className="service-short-lead">
                {service.shortDescription}
              </p>

              <div className="service-hero-actions">
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
                  <span>Call 09090595901</span>
                </a>
              </div>
            </div>

            {/* Service Visual with Skeleton Loader */}
            <div className="service-hero-media">
              <div className="service-hero-image-frame">
                {!heroImgLoaded && <div className="skeleton-box service-hero-skeleton" />}
                <img
                  src={service.heroImage}
                  alt={`${service.title} - S.N. Health Care`}
                  className={`service-hero-img ${heroImgLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setHeroImgLoaded(true)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    setHeroImgLoaded(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Clinical Content Layout */}
      <div className="container service-content-container section-py-sm">
        <div className="service-two-col-layout">
          {/* Main Left Content Column */}
          <main className="service-main-article">
            {/* 1. Service Introduction */}
            <section className="article-section" id="introduction">
              <h2 className="section-block-title">1. Understanding the Condition &amp; Anatomy</h2>
              <div className="medical-prose">
                {service.introduction.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Secondary Visual Break with Real Service Image */}
            {service.secondaryImage && (
              <div className="service-secondary-visual-card">
                {!secondaryImgLoaded && <div className="skeleton-box service-secondary-skeleton" />}
                <img
                  src={service.secondaryImage}
                  alt={`Anatomical diagnostic view for ${service.title}`}
                  className={`service-secondary-img ${secondaryImgLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setSecondaryImgLoaded(true)}
                />
                <div className="secondary-visual-caption">
                  <span>Clinical Evaluation &amp; Treatment Modality · S.N. Health Care</span>
                </div>
              </div>
            )}

            {/* 2. Symptoms and Warning Signs */}
            <section className="article-section" id="symptoms">
              <h2 className="section-block-title">2. Common Symptoms &amp; Clinical Presentations</h2>
              <p className="section-lead-text">
                Patients experience varying degrees of discomfort depending on chronicity and mechanical load:
              </p>
              <div className="symptoms-list-grid">
                {service.symptoms.map((sym, i) => (
                  <div key={i} className={`symptom-detail-item ${sym.isWarning ? 'is-warning-sym' : ''}`}>
                    <div className="sym-indicator">
                      {sym.isWarning ? <AlertTriangle size={18} className="warn-icon" /> : <CheckCircle2 size={18} className="check-icon" />}
                    </div>
                    <div>
                      <h4 className="sym-name">{sym.name}</h4>
                      <p className="sym-desc">{sym.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Possible Causes */}
            <section className="article-section" id="causes">
              <h2 className="section-block-title">3. Underlying Causes &amp; Biomechanical Drivers</h2>
              <div className="causes-list">
                {service.possibleCauses.map((cause, i) => (
                  <div key={i} className="cause-card">
                    <h3 className="cause-title">{cause.name}</h3>
                    <p className="cause-desc">{cause.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. How the Condition is Evaluated */}
            <section className="article-section" id="evaluation">
              <h2 className="section-block-title">4. How Dr. Rao Evaluates This Condition</h2>
              <div className="assessment-steps-list">
                {service.assessment.map((item, i) => (
                  <div key={i} className="assessment-step-row">
                    <div className="assessment-num-badge">{i + 1}</div>
                    <div>
                      <h4 className="assessment-step-title">{item.step}</h4>
                      <p className="assessment-step-detail">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Treatment Approach */}
            <section className="article-section" id="treatment">
              <h2 className="section-block-title">5. Conservative &amp; Evidence-Based Treatment Spectrum</h2>
              <div className="treatment-phases-grid">
                {service.treatmentApproach.map((tr, i) => (
                  <div key={i} className="treatment-phase-card">
                    <span className="phase-pill">Modality {i + 1}</span>
                    <h3 className="phase-title">{tr.phase}</h3>
                    <p className="phase-detail">{tr.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. What to Expect at Consultation */}
            <section className="article-section" id="consultation-prep">
              <h2 className="section-block-title">6. What to Expect During Your Clinic Consultation</h2>
              <div className="expectation-panel">
                <FileText size={22} className="expectation-icon" />
                <p className="expectation-text">{service.whatToExpect}</p>
              </div>
            </section>

            {/* 7. When to Seek Urgent Medical Attention */}
            <section className="article-section" id="urgent-care">
              <div className="urgent-care-card">
                <div className="urgent-card-header">
                  <AlertTriangle size={24} className="urgent-header-icon" />
                  <div>
                    <h3 className="urgent-card-title">7. When to Seek Immediate Medical Attention</h3>
                    <span className="urgent-card-sub">Do not delay in the presence of these red-flag symptoms</span>
                  </div>
                </div>
                <ul className="urgent-reasons-list">
                  {service.whenToSeekCare.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 8. Frequently Asked Questions */}
            <section className="article-section" id="faqs">
              <h2 className="section-block-title">8. Frequently Asked Questions about {service.title}</h2>
              <FAQAccordion items={service.faqs} />
            </section>

            {/* 9. Related Conditions & Services */}
            {relatedServicesList.length > 0 && (
              <section className="article-section" id="related-services">
                <h2 className="section-block-title">9. Related Orthopedic Specializations</h2>
                <div className="related-cards-grid">
                  {relatedServicesList.map((rel) => (
                    <Link key={rel.slug} to={`/services/${rel.slug}`} className="related-service-card">
                      <span className="badge badge-sage related-tag">{rel.category}</span>
                      <h4 className="related-title">{rel.title}</h4>
                      <p className="related-desc">{rel.shortDescription}</p>
                      <span className="related-arrow-link">
                        Read Guide <ArrowRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 10. Appointment CTA Block */}
            <section className="service-final-cta-card">
              <div className="final-cta-content">
                <h3 className="final-cta-title">Schedule a Consultation for {service.title}</h3>
                <p className="final-cta-desc">
                  Direct evaluation by <strong>{clinicInfo.doctor.name}</strong> ({clinicInfo.doctor.qualifications}) at S.N. Health Care, Visakhapatnam.
                </p>
                <div className="final-cta-buttons">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onOpenEnquiry}
                  >
                    <Calendar size={18} />
                    <span>Consult Dr. Rao</span>
                  </button>
                  <a
                    href={`tel:${clinicInfo.contact.phone}`}
                    className="btn btn-secondary"
                  >
                    <Phone size={18} />
                    <span>Call 09090595901</span>
                  </a>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sticky Sidebar: Quick Actions & Clinic Details */}
          <aside className="service-sidebar">
            <div className="sidebar-sticky-panel">
              {/* Doctor Quick Profile */}
              <div className="sidebar-card sidebar-doctor-card">
                <span className="badge badge-teal sidebar-badge">ORTHOPEDIC SPECIALIST</span>
                <h4 className="sidebar-doctor-name">{clinicInfo.doctor.name}</h4>
                <div className="sidebar-doctor-creds">{clinicInfo.doctor.qualifications}</div>
                <div className="sidebar-doctor-exp">{clinicInfo.doctor.experience}</div>
                <p className="sidebar-doctor-bio">
                  Dedicated to conservative joint preservation, biomechanics, and personalized rehabilitation.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={onOpenEnquiry}
                >
                  <Calendar size={16} />
                  <span>Request Appointment</span>
                </button>
              </div>

              {/* Direct Telephone Access */}
              <div className="sidebar-card">
                <h4 className="sidebar-heading">Direct Clinic Contact</h4>
                <a href={`tel:${clinicInfo.contact.phone}`} className="sidebar-phone-btn">
                  <Phone size={18} />
                  <span>Call: 09090595901</span>
                </a>
                <a
                  href={clinicInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-whatsapp-btn"
                >
                  <Activity size={18} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              {/* Clinic Timings Card */}
              <div className="sidebar-card">
                <h4 className="sidebar-heading">Consultation Timings</h4>
                <div className="sidebar-timings">
                  <div className="sidebar-timing-item">
                    <strong>Mon – Sat Morning:</strong>
                    <span>09:30 AM – 01:30 PM</span>
                  </div>
                  <div className="sidebar-timing-item">
                    <strong>Mon – Sat Evening:</strong>
                    <span>05:00 PM – 09:00 PM</span>
                  </div>
                  <div className="sidebar-timing-item">
                    <strong>Sunday:</strong>
                    <span>10:00 AM – 01:00 PM (Prior Appt)</span>
                  </div>
                </div>
              </div>

              {/* Clinic Location Card */}
              <div className="sidebar-card">
                <h4 className="sidebar-heading">Clinic Location</h4>
                <div className="sidebar-address">
                  <MapPin size={16} className="sidebar-icon" />
                  <span>{clinicInfo.contact.address.full}</span>
                </div>
                <a
                  href={clinicInfo.contact.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-maps-link"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
