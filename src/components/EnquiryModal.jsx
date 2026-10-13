import React, { useState } from 'react';
import { X, Phone, MessageCircle, Mail, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condition: 'Knee Pain & Joint Care',
    timePreference: 'Morning (09:30 AM – 01:30 PM)',
    notes: ''
  });

  if (!isOpen) return null;

  const conditionsList = [
    'Knee Pain & Joint Preservation',
    'Back Pain & Lumbar Spine Care',
    'Shoulder Pain & Rotator Cuff',
    'Sciatica & Nerve Compression',
    'Fracture Evaluation & Cast Care',
    'Sports Injuries & Ligament Sprain',
    'Neck Pain & Cervical Spine',
    'Hip Joint Pain / AVN Assessment',
    'Ankle / Foot Sprain or Heel Pain',
    'General Orthopedic Consultation'
  ];

  const generateWhatsAppUrl = () => {
    const text = `Hello S.N. Health Care,%0A%0AI would like to consult Dr. P. Y. Srinivasa Rao.%0A*Name:* ${formData.name || 'Patient'}%0A*Contact:* ${formData.phone || 'Not specified'}%0A*Concern:* ${formData.condition}%0A*Preferred Timing:* ${formData.timePreference}%0A*Notes:* ${formData.notes || 'None'}`;
    return `https://wa.me/${clinicInfo.contact.whatsappNumber}?text=${text}`;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Consultation Enquiry: ${formData.condition} - ${formData.name || 'Patient'}`);
    const body = encodeURIComponent(
      `Dear S.N. Health Care Team,\n\nI would like to schedule an orthopedic consultation with Dr. P. Y. Srinivasa Rao.\n\nName: ${formData.name || 'Patient'}\nPhone: ${formData.phone}\nPrimary Concern: ${formData.condition}\nPreferred Timing: ${formData.timePreference}\nBrief Notes: ${formData.notes}\n\nPlease let me know available slots.`
    );
    return `mailto:${clinicInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="enquiry-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
      <div className="enquiry-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="enquiry-modal-header">
          <div>
            <span className="badge badge-teal modal-badge">S.N. HEALTH CARE</span>
            <h3 id="enquiry-modal-title" className="enquiry-modal-title">Consultation & Appointment Desk</h3>
            <p className="enquiry-modal-sub">Direct access to Dr. P. Y. Srinivasa Rao ({clinicInfo.doctor.qualifications})</p>
          </div>
          <button
            type="button"
            className="enquiry-close-btn"
            onClick={onClose}
            aria-label="Close consultation modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="enquiry-honesty-banner">
          <ShieldCheck size={18} className="shield-icon" />
          <p className="honesty-text">
            <strong>Honest Healthcare Notice:</strong> This website does not save or transmit your medical details to third-party tracking databases. Completing your details below generates a direct draft for WhatsApp or Email on your own device.
          </p>
        </div>

        <div className="enquiry-form-body">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="patient-name">Patient Name</label>
              <input
                id="patient-name"
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="patient-phone">Contact Number</label>
              <input
                id="patient-phone"
                type="tel"
                placeholder="e.g. 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="patient-condition">Orthopedic Concern</label>
            <select
              id="patient-condition"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="form-select"
            >
              {conditionsList.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time-preference">Preferred Consultation Slot</label>
            <select
              id="time-preference"
              value={formData.timePreference}
              onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
              className="form-select"
            >
              <option value="Morning (09:30 AM – 01:30 PM)">Morning Clinic (09:30 AM – 01:30 PM)</option>
              <option value="Evening (05:00 PM – 09:00 PM)">Evening Clinic (05:00 PM – 09:00 PM)</option>
              <option value="Urgent Acute Trauma Evaluation">Urgent Same-Day Trauma Evaluation</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="patient-notes">Brief Medical Symptoms (Optional)</label>
            <textarea
              id="patient-notes"
              rows={2}
              placeholder="e.g. Right knee clicking and pain while climbing stairs for 3 weeks..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="form-textarea"
            />
          </div>

          {/* Action Triggers */}
          <div className="modal-action-buttons">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-action"
            >
              <MessageCircle size={18} />
              <span>Send WhatsApp Request</span>
            </a>

            <a
              href={`tel:${clinicInfo.contact.phone}`}
              className="btn btn-phone-action"
            >
              <Phone size={18} />
              <span>Call Clinic (09090595901)</span>
            </a>

            <a
              href={generateMailtoUrl()}
              className="btn btn-email-action"
            >
              <Mail size={18} />
              <span>Draft Email Request</span>
            </a>

            <a
              href={clinicInfo.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-maps-action"
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        <div className="enquiry-modal-footer">
          <div className="clinic-location-mini">
            <MapPin size={14} />
            <span>S.N. Health Care, Main Road, Visakhapatnam</span>
          </div>
          <button type="button" onClick={onClose} className="btn-modal-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
