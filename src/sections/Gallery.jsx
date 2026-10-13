import React, { useState } from 'react';
import { Maximize2, X, Eye } from 'lucide-react';
import { clinicInfo } from '../data/clinic';
import SectionHeading from '../components/SectionHeading';
import './Gallery.css';

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [loadedMap, setLoadedMap] = useState({});

  const categories = ["All", "Exterior", "Reception", "Consultation", "Treatment", "Recovery"];

  const filteredItems = filter === "All"
    ? clinicInfo.gallery
    : clinicInfo.gallery.filter(item => item.category === filter);

  const handleImageLoaded = (id) => {
    setLoadedMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section-py bg-sage-light gallery-section" id="gallery">
      <div className="container">
        <SectionHeading
          badge="CLINICAL ENVIRONMENT"
          title="Clinic Facilities & Patient Care Suites"
          subtitle="Take a visual tour of S.N. Health Care. We maintain clean, barrier-free, and well-equipped consultation suites, examination beds, and day observation areas."
        />

        {/* Gallery Filter Pills */}
        <div className="gallery-filter-bar">
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "All" ? "All Facilities" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item) => {
            const isLoaded = loadedMap[item.id];
            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setActiveModalImage(item)}
              >
                <div className="gallery-image-frame">
                  {/* Skeleton box visible until image loads */}
                  {!isLoaded && <div className="skeleton-box gallery-skeleton" />}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`gallery-img ${isLoaded ? 'loaded' : 'loading'}`}
                    onLoad={() => handleImageLoaded(item.id)}
                  />
                  <div className="gallery-card-hover-overlay">
                    <div className="gallery-zoom-icon">
                      <Maximize2 size={20} />
                    </div>
                    <span className="gallery-zoom-text">View High-Res Photo</span>
                  </div>
                </div>

                <div className="gallery-card-caption">
                  <span className="badge badge-teal gallery-tag">{item.category}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-sub">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalImage && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setActiveModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActiveModalImage(null)}
              aria-label="Close image preview"
            >
              <X size={26} />
            </button>
            <div className="lightbox-img-wrapper">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="lightbox-large-img"
              />
            </div>
            <div className="lightbox-caption-bar">
              <div>
                <h4 className="lightbox-title">{activeModalImage.title}</h4>
                <p className="lightbox-sub">{activeModalImage.subtitle}</p>
              </div>
              <span className="badge badge-sage">{activeModalImage.category} Suite</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
