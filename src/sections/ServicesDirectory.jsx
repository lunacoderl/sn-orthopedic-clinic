import React, { useState } from 'react';
import { services, serviceCategories } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import './ServicesDirectory.css';

export default function ServicesDirectory() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices = activeCategory === "All Services"
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="section-py bg-white services-directory-section" id="services">
      <div className="container">
        <SectionHeading
          badge="SPECIALIZED CLINICAL CATALOGUE"
          title="Complete Orthopedic Services Directory"
          subtitle="Explore our comprehensive condition guides. Each service dossier details anatomical etiologies, clinical evaluation steps, evidence-based conservative care, and patient FAQs."
        />

        {/* Category Filter Tabs */}
        <div className="category-filter-bar" role="tablist" aria-label="Filter orthopedic services by anatomical category">
          {serviceCategories.map((cat, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`cat-tab-btn ${activeCategory === cat ? 'active-tab' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Card Grid */}
        <div className="services-cards-grid">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
