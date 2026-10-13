import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Calendar,
  MessageCircle,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import { quickServiceLinks } from '../data/navigation';
import './Navbar.css';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (hash) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/${hash}`;
    }
  };

  return (
    <header className="site-header-fixed">
      {/* 01. Clean, Reordered, Non-Clumsy Top Bar */}
      <div className="top-bar-strip">
        <div className="top-bar-container">
          {/* Left: Timing & Doctor Credential */}
          <div className="top-bar-left">
            <span className="top-badge-verified">
              <ShieldCheck size={12} />
              <span>Dr. P. Y. Srinivasa Rao · MS (Ortho)</span>
            </span>
            <span className="top-bar-sep">•</span>
            <span className="top-timing-item">
              <Clock size={12} />
              <span>Mon–Sat: 9:30 AM–1:30 PM &amp; 5:00–9:00 PM</span>
            </span>
          </div>

          {/* Right: Direct Actions (Call & WhatsApp) */}
          <div className="top-bar-right">
            <a href={`tel:${clinicInfo.contact.phone}`} className="top-phone-link">
              <Phone size={12} />
              <span>Helpline: {clinicInfo.contact.phoneDisplay}</span>
            </a>
            <a
              href={clinicInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="top-wa-pill"
            >
              <MessageCircle size={12} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 02. Main Navigation Bar */}
      <nav className={`main-navbar-row ${isScrolled ? 'scrolled-navbar' : ''}`} aria-label="Main Navigation">
        <div className="navbar-grid-container">
          {/* Left Column: Brand */}
          <Link to="/" className="nav-brand-wrap" aria-label="S.N. Health Care Home">
            <div className="nav-logo-box">
              <img
                src={clinicInfo.logo}
                alt="S.N. Health Care"
                className="nav-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-title">S.N. HEALTH CARE</span>
              <span className="nav-brand-sub">Orthopedic &amp; Spine Care</span>
            </div>
          </Link>

          {/* Center Column: Clean, Small, Non-Colliding Desktop Links */}
          <ul className="nav-menu-desktop">
            <li>
              <Link to="/" className="nav-item-link">Home</Link>
            </li>
            <li>
              <a
                href="/#about-doctor"
                onClick={(e) => { e.preventDefault(); handleNavClick('#about-doctor'); }}
                className="nav-item-link"
              >
                About
              </a>
            </li>

            {/* Services Dropdown */}
            <li
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="nav-item-link nav-dropdown-trigger"
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown size={12} className={`chevron-indicator ${servicesDropdownOpen ? 'rotated' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="nav-dropdown-flyout">
                  <div className="dropdown-flyout-header">
                    <span className="flyout-badge">14 Specializations</span>
                    <span className="flyout-title">Clinical Dossiers</span>
                  </div>
                  <div className="dropdown-flyout-grid">
                    {quickServiceLinks.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flyout-link-item"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <span className="flyout-dot" />
                        <span className="flyout-label">{s.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="dropdown-flyout-footer">
                    <Link
                      to="/#services"
                      onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                      className="flyout-view-all"
                    >
                      View All 14 Services →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a
                href="/#symptoms"
                onClick={(e) => { e.preventDefault(); handleNavClick('#symptoms'); }}
                className="nav-item-link"
              >
                Symptoms
              </a>
            </li>
            <li>
              <a
                href="/#gallery"
                onClick={(e) => { e.preventDefault(); handleNavClick('#gallery'); }}
                className="nav-item-link"
              >
                Facilities
              </a>
            </li>
            <li>
              <a
                href="/#location"
                onClick={(e) => { e.preventDefault(); handleNavClick('#location'); }}
                className="nav-item-link"
              >
                Location
              </a>
            </li>
          </ul>

          {/* Right Column: CTAs on Desktop, Protected Icons on Mobile */}
          <div className="nav-actions-col">
            {/* Desktop Direct Phone Pill */}
            <a
              href={`tel:${clinicInfo.contact.phone}`}
              className="desktop-call-pill"
              title="Call Clinic Helpline"
            >
              <Phone size={13} />
              <span>09090595901</span>
            </a>

            {/* Desktop Consult Dr. Rao Button */}
            <button
              type="button"
              className="desktop-book-btn"
              onClick={onOpenEnquiry}
            >
              <Calendar size={14} />
              <span>Consult Dr. Rao</span>
            </button>

            {/* Mobile Quick Call Button */}
            <a
              href={`tel:${clinicInfo.contact.phone}`}
              className="mobile-call-circle"
              aria-label="Call clinic directly"
              title="Call 09090595901"
            >
              <Phone size={16} />
            </a>

            {/* Mobile Hamburger Button (Always 100% visible, never cut off) */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 03. Mobile Drawer */}
      <div
        className={`drawer-backdrop ${mobileMenuOpen ? 'drawer-visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="drawer-surface" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-top-bar">
            <div className="drawer-brand-block">
              <img src={clinicInfo.logo} alt="Logo" className="drawer-brand-logo" />
              <div>
                <div className="drawer-brand-heading">S.N. HEALTH CARE</div>
                <div className="drawer-brand-subheading">Dr. P. Y. Srinivasa Rao · MS (Ortho)</div>
              </div>
            </div>
            <button
              type="button"
              className="drawer-dismiss-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="drawer-links-scroll">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="drawer-item-link">
              Home
            </Link>
            <a
              href="/#about-doctor"
              onClick={(e) => { e.preventDefault(); handleNavClick('#about-doctor'); }}
              className="drawer-item-link"
            >
              About Doctor
            </a>

            <div className="drawer-service-accordion">
              <span className="drawer-service-title">Orthopedic Specialties (14)</span>
              <div className="drawer-service-list">
                {quickServiceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="drawer-service-link"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="/#symptoms"
              onClick={(e) => { e.preventDefault(); handleNavClick('#symptoms'); }}
              className="drawer-item-link"
            >
              Symptom Guide
            </a>
            <a
              href="/#care-journey"
              onClick={(e) => { e.preventDefault(); handleNavClick('#care-journey'); }}
              className="drawer-item-link"
            >
              Care Journey
            </a>
            <a
              href="/#gallery"
              onClick={(e) => { e.preventDefault(); handleNavClick('#gallery'); }}
              className="drawer-item-link"
            >
              Clinic Facilities
            </a>
            <a
              href="/#location"
              onClick={(e) => { e.preventDefault(); handleNavClick('#location'); }}
              className="drawer-item-link"
            >
              Location &amp; Timings
            </a>
          </div>

          <div className="drawer-bottom-actions">
            <button
              type="button"
              className="btn btn-primary drawer-action-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>
            <a href={`tel:${clinicInfo.contact.phone}`} className="drawer-call-btn">
              <Phone size={16} />
              <span>Call 09090595901</span>
            </a>
            <a
              href={clinicInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-wa-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
