import React from 'react';
import { MapPin, Phone, Clock, Navigation, Car, AlertTriangle } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import SectionHeading from '../components/SectionHeading';
import './LocationSection.css';

export default function LocationSection() {
  return (
    <section className="section-py bg-ivory location-section" id="location">
      <div className="container">
        <SectionHeading
          badge="CONVENIENT ACCESS"
          title="Location, Directions & Clinic Timings"
          subtitle="Centrally situated on Main Commercial Road in Visakhapatnam, S.N. Health Care offers accessible ground-floor patient entry and convenient consultation hours."
        />

        <div className="location-grid">
          {/* Left Column: Clinic Contact & Timings Card */}
          <div className="location-info-card">
            <div className="location-item-block">
              <div className="location-icon-circle">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="location-label">Clinic Address</h3>
                <p className="location-val">{clinicInfo.contact.address.full}</p>
                <span className="location-sub-val">Landmark: {clinicInfo.contact.address.landmarks}</span>
              </div>
            </div>

            <div className="location-item-block">
              <div className="location-icon-circle">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="location-label">Direct Telephone</h3>
                <a href={`tel:${clinicInfo.contact.phone}`} className="location-phone-link">
                  {clinicInfo.contact.phoneDisplay}
                </a>
                <span className="location-sub-val">Lines open during all consultation timings</span>
              </div>
            </div>

            <div className="location-item-block">
              <div className="location-icon-circle">
                <Clock size={22} />
              </div>
              <div className="timings-wrapper">
                <h3 className="location-label">Consultation Schedule</h3>
                <div className="timings-table">
                  {clinicInfo.hours.map((h, i) => (
                    <div key={i} className="timing-row">
                      <span className="timing-day">{h.days}</span>
                      <span className="timing-slot">{h.morning} &amp; {h.evening}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="parking-transit-tip">
              <Car size={18} className="car-icon" />
              <span>Easy roadside parking and patient drop-off directly in front of the clinic entrance.</span>
            </div>

            <div className="location-actions-row">
              <a
                href={clinicInfo.contact.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-directions"
              >
                <Navigation size={18} />
                <span>Navigate via Google Maps</span>
              </a>
              <a
                href={`tel:${clinicInfo.contact.phone}`}
                className="btn btn-outline"
              >
                <Phone size={18} />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview Card */}
          <div className="location-map-card">
            <div className="map-frame-wrapper">
              <iframe
                title="S.N. Health Care Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121570.83547285116!2d83.2184815!3d17.7231276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="location-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-bottom-cue">
              <div className="cue-clinic-name">S.N. Health Care · Dr. P. Y. Srinivasa Rao</div>
              <div className="cue-clinic-address">Opposite Town Center, Main Commercial Road, Visakhapatnam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
