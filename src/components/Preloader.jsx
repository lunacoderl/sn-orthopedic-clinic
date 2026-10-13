import React, { useEffect, useState } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, smooth branded entrance that gracefully dismisses
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 400);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${fading ? 'preloader-fade-out' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-pulse-ring">
          <svg className="preloader-icon" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="rgba(8, 126, 139, 0.2)" strokeWidth="3" />
            <path
              d="M32 12V52M12 32H52"
              stroke="#087E8B"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <circle cx="32" cy="32" r="7" fill="#DDEEE3" stroke="#087E8B" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="3" fill="#123B57" />
          </svg>
        </div>
        <div className="preloader-text">
          <span className="preloader-brand">S.N. HEALTH CARE</span>
          <span className="preloader-sub">Orthopedic & Joint Care Centre</span>
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress" />
        </div>
      </div>
    </div>
  );
}
