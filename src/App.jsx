import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import EnquiryModal from './components/EnquiryModal';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const handleOpenEnquiry = () => setEnquiryOpen(true);
  const handleCloseEnquiry = () => setEnquiryOpen(false);

  return (
    <HelmetProvider>
      <Router>
        {/* Startup Preloader */}
        <Preloader />

        {/* Global Scroll Handler & Return Button */}
        <ScrollToTop />

        {/* Site Header */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Dynamic Route View */}
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/services/:slug" element={<ServiceDetails onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Floating Quick Action Rail (Desktop & Mobile) */}
        <FloatingActions onOpenEnquiry={handleOpenEnquiry} />

        {/* Honest Appointment & Consultation Modal */}
        <EnquiryModal isOpen={enquiryOpen} onClose={handleCloseEnquiry} />

        {/* Site Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />
      </Router>
    </HelmetProvider>
  );
}
