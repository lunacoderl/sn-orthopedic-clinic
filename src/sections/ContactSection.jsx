import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Calendar, Clock, ShieldCheck, Send } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import SectionHeading from '../components/SectionHeading';
import './ContactSection.css';

export default function ContactSection({ onOpenEnquiry }) {
  const [patientData, setPatientData] = useState({
    name: '',
    phone: '',
    condition: 'Knee Pain & Preservation',
    timing: 'Morning (09:30 AM – 01:30 PM)',
    message: ''
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hello S.N. Health Care,%0A%0AI would like to consult Dr. P. Y. Srinivasa Rao.%0A*Name:* ${patientData.name || 'Patient'}%0A*Phone:* ${patientData.phone || 'Not specified'}%0A*Concern:* ${patientData.condition}%0A*Timing Preference:* ${patientData.timing}%0A*Message:* ${patientData.message || 'Consultation request'}`;
    window.open(`https://wa.me/${clinicInfo.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="section-py bg-white contact-section" id="contact">
      <div className="container">
        <SectionHeading
          badge="CONSULTATION DESK"
          title="Connect with S.N. Health Care"
          subtitle="Speak with our clinic reception directly or prepare a WhatsApp appointment draft for Dr. P. Y. Srinivasa Rao. No automated call menus or delayed bots."
        />

        <div className="contact-main-grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-info-panel">
            <div className="contact-brand-summary">
              <h3 className="panel-title">Direct Patient Access</h3>
              <p className="panel-lead">
                We believe healthcare communication should be direct, transparent, and prompt. Reach our desk via any of the channels below:
              </p>
            </div>

            <div className="channels-list">
              <a href={`tel:${clinicInfo.contact.phone}`} className="channel-card">
                <div className="channel-icon-circle bg-navy-icon">
                  <Phone size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Telephone Consultation</span>
                  <span className="channel-val">{clinicInfo.contact.phoneDisplay}</span>
                  <span className="channel-hint">Direct line to clinic reception</span>
                </div>
              </a>

              <a
                href={clinicInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-icon-circle bg-whatsapp-icon">
                  <MessageCircle size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">WhatsApp Quick Message</span>
                  <span className="channel-val">+91 90905 95901</span>
                  <span className="channel-hint">Instant enquiry & appointment slots</span>
                </div>
              </a>

              <a href={`mailto:${clinicInfo.contact.email}`} className="channel-card">
                <div className="channel-icon-circle bg-teal-icon">
                  <Mail size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email Medical Inquiries</span>
                  <span className="channel-val">{clinicInfo.contact.email}</span>
                  <span className="channel-hint">For medical summaries & records</span>
                </div>
              </a>
            </div>

            <div className="contact-hours-badge-box">
              <Clock size={18} className="clock-icon" />
              <div>
                <strong>Regular Timings:</strong> Mon – Sat: 09:30 AM – 01:30 PM &amp; 05:00 PM – 09:00 PM
              </div>
            </div>
          </div>

          {/* Right Column: In-Page Quick Consultation Form */}
          <div className="contact-form-panel">
            <div className="form-panel-header">
              <span className="badge badge-teal">DIRECT DRAFT</span>
              <h3 className="form-panel-title">Prepare Your Consultation Request</h3>
              <p className="form-panel-sub">
                Fill out the quick fields below and click Send via WhatsApp or open the full appointment modal.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="quick-contact-form">
              <div className="form-field-group">
                <label htmlFor="quick-name">Your Full Name</label>
                <input
                  id="quick-name"
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={patientData.name}
                  onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                  className="contact-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="quick-phone">Mobile Number</label>
                <input
                  id="quick-phone"
                  type="tel"
                  required
                  placeholder="e.g. 98480 12345"
                  value={patientData.phone}
                  onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                  className="contact-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="quick-condition">Primary Concern</label>
                <select
                  id="quick-condition"
                  value={patientData.condition}
                  onChange={(e) => setPatientData({ ...patientData, condition: e.target.value })}
                  className="contact-select"
                >
                  <option value="Knee Pain & Preservation">Knee Pain & Joint Preservation</option>
                  <option value="Back Pain & Spine Care">Back Pain & Lumbar Spine Care</option>
                  <option value="Shoulder Pain & Rotator Cuff">Shoulder Pain & Rotator Cuff Care</option>
                  <option value="Sciatica & Nerve Compression">Sciatica & Shooting Leg Pain</option>
                  <option value="Fracture Evaluation & Casts">Fracture Evaluation & Cast Management</option>
                  <option value="Sports Injury & Sprain">Sports Injury & Ligament Sprain</option>
                  <option value="Neck Pain & Cervical Care">Neck Pain & Cervical Spine</option>
                  <option value="Hip Pain / AVN Care">Hip Pain / AVN Assessment</option>
                  <option value="General Consultation">Specialist Orthopedic Consultation</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="quick-message">Brief Description of Pain or Questions</label>
                <textarea
                  id="quick-message"
                  rows={3}
                  placeholder="Describe your joint discomfort, how long you have had it, and any questions for Dr. Rao..."
                  value={patientData.message}
                  onChange={(e) => setPatientData({ ...patientData, message: e.target.value })}
                  className="contact-textarea"
                />
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn btn-whatsapp-send">
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp</span>
                </button>
                <a
                  href={`tel:${clinicInfo.contact.phone}`}
                  className="btn btn-outline"
                >
                  <Phone size={18} />
                  <span>Call 09090595901</span>
                </a>
              </div>

              <div className="form-privacy-note">
                <ShieldCheck size={14} />
                <span>Honest notice: We do not store your data on external tracking servers. Submitting opens a direct draft in WhatsApp.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
