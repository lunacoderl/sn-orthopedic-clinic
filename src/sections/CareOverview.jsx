import React from 'react';
import { Activity, Shield, Bone, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './CareOverview.css';

export default function CareOverview() {
  const pillars = [
    {
      icon: Activity,
      title: "Joint Preservation First",
      desc: "Our primary objective is protecting natural cartilage, restoring synovial balance, and reconditioning periarticular muscles before any invasive surgery is considered."
    },
    {
      icon: Shield,
      title: "Spine & Radiculopathy Care",
      desc: "Evidence-based non-surgical decompression protocols, mechanical direction-preference exercises, and neuro-inflammatory relief for lumbar and cervical disc disorders."
    },
    {
      icon: Bone,
      title: "Precision Trauma & Fractures",
      desc: "Thorough digital radiological analysis, gentle closed reductions, lightweight immobilization casting, and serial monitoring for solid anatomical bone union."
    },
    {
      icon: Sparkles,
      title: "Restorative Sports Medicine",
      desc: "Systematic ligament sprain grading (ACL, MCL, Ankle), functional kinetic-chain balancing, and progressive return-to-activity pathways for athletes of all levels."
    }
  ];

  return (
    <section className="section-py bg-white care-overview-section" id="care-overview">
      <div className="container">
        <SectionHeading
          badge="CLINICAL SCOPE"
          title="Modern Orthopedic Healthcare Grounded in Clinical Rigor"
          subtitle="We specialize in diagnosing and treating conditions affecting bones, joints, ligaments, tendons, and spinal nerves. Our philosophy prioritizes personalized, conservative healing over rushed procedures."
        />

        <div className="pillars-grid">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <Icon size={26} />
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Informational Guidance Box: When to seek orthopedic consultation */}
        <div className="consultation-indications-card">
          <div className="indications-left">
            <span className="badge badge-teal">PATIENT GUIDANCE</span>
            <h3 className="indications-title">When is an Orthopedic Consultation Recommended?</h3>
            <p className="indications-lead">
              Many people live with joint or spine stiffness for months, assuming it is just 'part of aging'. Early clinical evaluation can catch cartilage wear and postural imbalances before permanent changes develop.
            </p>
          </div>

          <div className="indications-list">
            <div className="indication-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Joint discomfort that persists for more than 10–14 days despite rest</span>
            </div>
            <div className="indication-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Pain that shoots down your arm or leg, accompanied by tingling or numbness</span>
            </div>
            <div className="indication-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Morning stiffness that makes getting out of bed or walking difficult</span>
            </div>
            <div className="indication-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Twists, falls, or sports collisions followed by swelling and difficulty bearing weight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
