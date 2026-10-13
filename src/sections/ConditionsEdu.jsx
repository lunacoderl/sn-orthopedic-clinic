import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ShieldCheck, Activity, Bone, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './ConditionsEdu.css';

export default function ConditionsEdu() {
  const educationalTopics = [
    {
      icon: Activity,
      title: "Articular Cartilage & Joint Wear",
      summary: "Understand how smooth hyaline cartilage cushions bone ends, how synovial lubrication protects against friction, and why low-impact cyclical movement preserves joints.",
      slug: "osteoarthritis-care",
      actionText: "Read Joint Preservation Guide"
    },
    {
      icon: Zap,
      title: "Spinal Discs & Nerve Roots",
      summary: "Discover the hydraulic mechanics of the lumbar and cervical spine, why disc herniations often naturally resorb, and how directional exercises decompress pinched nerves.",
      slug: "disc-disorders",
      actionText: "Read Disc Decompression Guide"
    },
    {
      icon: Bone,
      title: "Bone Remodeling & Fracture Union",
      summary: "Learn how human bones continuously remodel under mechanical loading (Wolff's Law), what factors accelerate fracture callus union, and how osteoporosis is screened.",
      slug: "fracture-assessment",
      actionText: "Read Bone Health & Fracture Guide"
    },
    {
      icon: ShieldCheck,
      title: "Ligaments, Tendons & Kinetic Chains",
      summary: "Explore the collagen composition of ligaments and tendons, why passive rest alone fails to heal chronic tendinopathy, and how eccentric resistance restores tensile capacity.",
      slug: "tendon-ligament-care",
      actionText: "Read Tendon & Ligament Guide"
    }
  ];

  return (
    <section className="section-py bg-ivory conditions-edu-section" id="conditions-edu">
      <div className="container">
        <SectionHeading
          badge="ORTHOPEDIC KNOWLEDGE HUB"
          title="Patient Education & Anatomical Resources"
          subtitle="Empowered patients achieve superior recovery outcomes. Explore our foundational guides on bone biomechanics, joint nutrition, and spine health."
        />

        <div className="edu-cards-grid">
          {educationalTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div key={i} className="edu-card">
                <div className="edu-icon-badge">
                  <Icon size={24} />
                </div>
                <h3 className="edu-title">{topic.title}</h3>
                <p className="edu-summary">{topic.summary}</p>
                <div className="edu-footer">
                  <Link to={`/services/${topic.slug}`} className="edu-link">
                    <span>{topic.actionText}</span>
                    <ArrowRight size={16} className="edu-arrow" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
