import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft, Search, Activity } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import { quickServiceLinks } from '../data/navigation';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Page Not Found | S.N. Health Care</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container not-found-container">
        <div className="not-found-card">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-lead">
            The orthopedic guide or route you requested might have been moved, renamed, or is currently unavailable.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={18} />
              <span>Return to Home</span>
            </Link>
            <a href={`tel:${clinicInfo.contact.phone}`} className="btn btn-secondary">
              <Phone size={18} />
              <span>Call Clinic (09090595901)</span>
            </a>
          </div>

          <div className="not-found-services-box">
            <h4 className="services-box-title">Explore Core Orthopedic Guides:</h4>
            <div className="services-box-grid">
              {quickServiceLinks.slice(0, 6).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="service-quick-pill">
                  <Activity size={14} />
                  <span>{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
