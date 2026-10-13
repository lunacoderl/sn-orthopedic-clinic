import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import CareOverview from '../sections/CareOverview';
import AboutDoctor from '../sections/AboutDoctor';
import ServicesDirectory from '../sections/ServicesDirectory';
import SymptomChecker from '../sections/SymptomChecker';
import CareJourney from '../sections/CareJourney';
import WhyChooseUs from '../sections/WhyChooseUs';
import ConditionsEdu from '../sections/ConditionsEdu';
import Testimonials from '../sections/Testimonials';
import Gallery from '../sections/Gallery';
import FAQSection from '../sections/FAQSection';
import LocationSection from '../sections/LocationSection';
import ContactSection from '../sections/ContactSection';
import ParallaxBanner from '../components/ParallaxBanner';
import { clinicInfo } from '../data/clinic';

export default function Home({ onOpenEnquiry }) {
  // Schema.org Structured Data for MedicalClinic and Physician
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicInfo.name,
    "alternateName": "S.N. Health Care Orthopedic & Joint Care Centre",
    "description": "Comprehensive orthopedic healthcare platform and clinic led by Dr. P. Y. Srinivasa Rao, specializing in conservative joint preservation, spine care, and fracture rehabilitation in Visakhapatnam.",
    "url": "https://snhealthcare.in",
    "logo": "https://snhealthcare.in/logo.png",
    "image": "https://snhealthcare.in/hero-section-bg.png",
    "telephone": "+91-9090595901",
    "email": clinicInfo.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicInfo.contact.address.line1,
      "addressLocality": clinicInfo.contact.address.city,
      "addressRegion": clinicInfo.contact.address.state,
      "postalCode": clinicInfo.contact.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.7231276",
      "longitude": "83.2184815"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "13:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "21:00"
      }
    ],
    "medicalSpecialty": [
      "OrthopedicSurgery",
      "SportsMedicine",
      "Rheumatology"
    ],
    "physician": {
      "@type": "Physician",
      "name": clinicInfo.doctor.name,
      "jobTitle": clinicInfo.doctor.designation,
      "medicalSpecialty": "OrthopedicSurgery",
      "alumniOf": "MS (Orthopedics)",
      "description": clinicInfo.doctor.bio
    }
  };

  return (
    <main className="home-page-wrapper">
      <Helmet>
        <title>S.N. Health Care | Advanced Orthopedic & Joint Care Clinic</title>
        <meta
          name="description"
          content="S.N. Health Care — Specialized orthopedic healthcare, bone & joint treatments, spine care, and sports injury consultations led by Dr. P. Y. Srinivasa Rao in Visakhapatnam. Call 09090595901."
        />
        <link rel="canonical" href="https://snhealthcare.in/" />
        <meta property="og:title" content="S.N. Health Care | Advanced Orthopedic & Joint Care Clinic" />
        <meta property="og:description" content="Restoring joint movement and preserving natural anatomy. Consult Dr. P. Y. Srinivasa Rao (MBBS, MS Orthopedics)." />
        <meta property="og:image" content="https://snhealthcare.in/hero-section-bg.png" />
        <meta property="og:url" content="https://snhealthcare.in/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* 02. Immersive Hero Section */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 03. Orthopedic Care Overview */}
      <CareOverview />

      {/* Fixed Background Banner 1 (bg1.png) */}
      <ParallaxBanner
        bgImage="/bg1.png"
        tag="JOINT PRESERVATION SPECIALIST"
        title="Preserving Natural Joints & Mobility"
        subtitle="Dr. P. Y. Srinivasa Rao emphasizes conservative biological preservation, targeted physical therapy, and evidence-based interventions."
        ctaText="Book Clinic Consultation"
        onCtaClick={onOpenEnquiry}
      />

      {/* 04. About Clinic & Doctor */}
      <AboutDoctor onOpenEnquiry={onOpenEnquiry} />

      {/* 05. Complete Services Directory */}
      <ServicesDirectory />

      {/* Fixed Background Banner 2 (bg2.png) */}
      <ParallaxBanner
        bgImage="/bg2.png"
        tag="COMPREHENSIVE ORTHOPEDIC CARE"
        title="Advanced Diagnostic & Treatment Protocols"
        subtitle="From acute trauma management to degenerative disc relief and sports medicine rehabilitation in Visakhapatnam."
        ctaText="Discuss Symptoms"
        onCtaClick={onOpenEnquiry}
      />

      {/* 06. Understand Your Symptoms */}
      <SymptomChecker />

      {/* 07. Your Care Journey */}
      <CareJourney />

      {/* Fixed Background Banner 3 (bg3.png) */}
      <ParallaxBanner
        bgImage="/bg3.png"
        tag="EVIDENCE-BASED REHABILITATION"
        title="Structured Clinical Pathways from Diagnosis to Recovery"
        subtitle="Every patient receives an individual roadmap designed to restore mobility, strengthen supportive muscles, and prevent recurring injuries."
        ctaText="Schedule Appointment"
        onCtaClick={onOpenEnquiry}
      />

      {/* 08. Why Patients Choose S.N. Health Care */}
      <WhyChooseUs onOpenEnquiry={onOpenEnquiry} />

      {/* 09. Conditions & Educational Resources */}
      <ConditionsEdu />

      {/* 10. Patient Experiences */}
      <Testimonials />

      {/* Fixed Background Banner 4 (bg-4.png) */}
      <ParallaxBanner
        bgImage="/bg-4.png"
        tag="MODERN CLINICAL ENVIRONMENT"
        title="Patient-First Orthopedic Care in Visakhapatnam"
        subtitle="Clean outpatient facilities, private consultation rooms, and direct access to Dr. P. Y. Srinivasa Rao (MS Orthopedics)."
        ctaText="Reach S.N. Health Care"
        onCtaClick={onOpenEnquiry}
      />

      {/* 11. Clinic Facilities & Photo Gallery */}
      <Gallery />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Location and Directions */}
      <LocationSection />

      {/* 14. Contact and Appointment Enquiry */}
      <ContactSection onOpenEnquiry={onOpenEnquiry} />
    </main>
  );
}
