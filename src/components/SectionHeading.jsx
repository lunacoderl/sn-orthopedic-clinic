import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) {
  return (
    <div className={`section-heading align-${align} ${dark ? 'heading-dark' : ''} ${className}`}>
      {badge && (
        <span className={`badge ${dark ? 'badge-sage' : 'badge-teal'}`}>
          {badge}
        </span>
      )}
      <h2 className="heading-title">{title}</h2>
      {subtitle && <p className="heading-subtitle">{subtitle}</p>}
    </div>
  );
}
