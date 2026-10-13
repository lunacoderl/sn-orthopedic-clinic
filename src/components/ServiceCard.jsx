import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Bone,
  ShieldAlert,
  Zap,
  Award,
  HeartPulse,
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import './ServiceCard.css';

const ICON_MAP = {
  Activity,
  Bone,
  ShieldAlert,
  Zap,
  Award,
  HeartPulse,
  Stethoscope
};

export default function ServiceCard({ service }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const IconComponent = ICON_MAP[service.icon] || Activity;

  return (
    <article className="service-card-item">
      <Link to={`/services/${service.slug}`} className="service-card-link" aria-label={`View detailed care guide for ${service.title}`}>
        {/* Real Service Image with Skeleton Loading */}
        <div className="service-card-thumb-wrapper">
          {!imageLoaded && <div className="skeleton-box service-thumb-skeleton" />}
          <img
            src={service.heroImage}
            alt={service.title}
            className={`service-card-thumb ${imageLoaded ? 'thumb-loaded' : 'thumb-loading'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.style.display = 'none';
              setImageLoaded(true);
            }}
          />
          <div className="service-card-category-tag">
            <span className="badge badge-sage">{service.category}</span>
          </div>
        </div>

        <div className="service-card-body-content">
          <div className="service-card-top-header">
            <div className="service-icon-box" aria-hidden="true">
              <IconComponent size={22} className="service-icon" />
            </div>
            <h3 className="service-card-title">{service.title}</h3>
          </div>

          <p className="service-card-description">{service.shortDescription}</p>

          <div className="service-card-footer">
            <span className="service-read-more">
              Explore Orthopedic Guide
              <ArrowRight size={16} className="service-arrow" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
