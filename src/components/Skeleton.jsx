import React from 'react';
import './Skeleton.css';

export function GenericSkeleton({ width = '100%', height = '20px', borderRadius = '6px', className = '' }) {
  return (
    <div
      className={`skeleton-box ${className}`}
      style={{ width, height, borderRadius }}
      aria-hidden="true"
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-header-row">
        <GenericSkeleton width="48px" height="48px" borderRadius="12px" />
        <GenericSkeleton width="90px" height="24px" borderRadius="999px" />
      </div>
      <GenericSkeleton width="80%" height="26px" borderRadius="6px" />
      <div className="skeleton-text-group">
        <GenericSkeleton width="100%" height="16px" />
        <GenericSkeleton width="92%" height="16px" />
        <GenericSkeleton width="70%" height="16px" />
      </div>
      <div className="skeleton-footer-row">
        <GenericSkeleton width="130px" height="20px" />
        <GenericSkeleton width="24px" height="24px" borderRadius="50%" />
      </div>
    </div>
  );
}

export function GalleryCardSkeleton() {
  return (
    <div className="skeleton-gallery-card" aria-hidden="true">
      <GenericSkeleton width="100%" height="240px" borderRadius="16px" />
      <div className="skeleton-gallery-text">
        <GenericSkeleton width="60%" height="20px" />
        <GenericSkeleton width="40%" height="14px" />
      </div>
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-header-row">
        <GenericSkeleton width="44px" height="44px" borderRadius="50%" />
        <div>
          <GenericSkeleton width="120px" height="18px" />
          <GenericSkeleton width="80px" height="14px" />
        </div>
      </div>
      <div className="skeleton-text-group">
        <GenericSkeleton width="100%" height="15px" />
        <GenericSkeleton width="95%" height="15px" />
        <GenericSkeleton width="60%" height="15px" />
      </div>
    </div>
  );
}

export function ServiceHeroSkeleton() {
  return (
    <div className="skeleton-hero-container" aria-hidden="true">
      <GenericSkeleton width="140px" height="28px" borderRadius="999px" />
      <GenericSkeleton width="75%" height="48px" />
      <div className="skeleton-text-group">
        <GenericSkeleton width="100%" height="18px" />
        <GenericSkeleton width="90%" height="18px" />
        <GenericSkeleton width="80%" height="18px" />
      </div>
      <div className="skeleton-btn-row">
        <GenericSkeleton width="180px" height="48px" borderRadius="10px" />
        <GenericSkeleton width="160px" height="48px" borderRadius="10px" />
      </div>
    </div>
  );
}
