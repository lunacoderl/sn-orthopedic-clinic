import React from 'react';
import { ClipboardList, Stethoscope, FileText, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './CareJourney.css';

export default function CareJourney() {
  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "Comprehensive Clinical History",
      desc: "We begin by listening intently to your pain story. Dr. Rao explores how your symptoms started, daily movement triggers, occupational ergonomic demands, and previous treatments tried."
    },
    {
      num: "02",
      icon: Stethoscope,
      title: "Hands-On Examination & Imaging",
      desc: "Detailed orthopedic palpation, joint stability testing, and neurological reflex checks, correlated directly with digital standing X-rays or MRI reviews on our clinic display."
    },
    {
      num: "03",
      icon: FileText,
      title: "Individualized Treatment Pathway",
      desc: "We prioritize evidence-based conservative options: targeted pharmacology, lubricating viscosupplementation, unloader braces, and custom physical therapy plans tailored to your goals."
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Rehabilitation & Long-Term Health",
      desc: "Structured milestone reviews to restore neuromuscular endurance, prevent recurrence, and ensure sustained functional independence for your daily activities and work life."
    }
  ];

  return (
    <section className="section-py bg-white care-journey-section" id="care-journey">
      <div className="container">
        <SectionHeading
          badge="A STRUCTURED PATHWAY TO RECOVERY"
          title="Your Orthopedic Care Journey at S.N. Health Care"
          subtitle="We eliminate confusion and anxiety by providing a predictable, transparent four-stage clinical consultation process."
        />

        <div className="journey-timeline-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="journey-step-card">
                <div className="step-card-header">
                  <div className="step-badge-circle">{step.num}</div>
                  <div className="step-icon-wrap">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
