import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, HelpCircle, ArrowRight, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { commonSymptoms } from '../data/symptoms';
import SectionHeading from '../components/SectionHeading';
import './SymptomChecker.css';

export default function SymptomChecker() {
  const [selectedId, setSelectedId] = useState(commonSymptoms[0].id);

  const activeSymptom = commonSymptoms.find(s => s.id === selectedId) || commonSymptoms[0];

  return (
    <section className="section-py bg-sage-light symptom-checker-section" id="symptoms">
      <div className="container">
        <SectionHeading
          badge="PATIENT EDUCATION & TRIAGE"
          title="Understand Your Musculoskeletal Symptoms"
          subtitle="Select a common symptom below to understand how an orthopedic specialist evaluates it, recognize critical warning signs, and explore appropriate clinical pathways."
        />

        <div className="symptom-navigator-layout">
          {/* Left Column: Symptom Selector Buttons */}
          <div className="symptom-buttons-list" role="tablist" aria-label="Select symptom to inspect">
            {commonSymptoms.map((symptom) => {
              const isSelected = symptom.id === selectedId;
              return (
                <button
                  key={symptom.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`symptom-select-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedId(symptom.id)}
                >
                  <div className="symptom-card-header">
                    <span className="symptom-region-tag">{symptom.region}</span>
                    <span className="badge badge-teal symptom-mini-badge">{symptom.badge}</span>
                  </div>
                  <h4 className="symptom-card-name">{symptom.title}</h4>
                  <p className="symptom-card-snippet">{symptom.shortSnippet}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Diagnostic Insight Panel */}
          <div className="symptom-insight-panel">
            <div className="insight-card-inner">
              <div className="insight-top">
                <span className="badge badge-navy">{activeSymptom.region} Assessment</span>
                <h3 className="insight-headline">{activeSymptom.title}</h3>
              </div>

              <div className="insight-block">
                <div className="insight-subhead">
                  <Sparkles size={18} className="insight-icon" />
                  <span>Clinical Evaluation Perspective</span>
                </div>
                <p className="insight-explanation">
                  {activeSymptom.assessmentHint}
                </p>
              </div>

              {/* Red-Flag Warning Box */}
              <div className="red-flag-alert-box">
                <div className="red-flag-header">
                  <ShieldAlert size={20} className="red-flag-icon" />
                  <span className="red-flag-title">When Is It a Red Flag?</span>
                </div>
                <p className="red-flag-text">
                  {activeSymptom.redFlag}
                </p>
              </div>

              {/* Action Button linking to relevant service */}
              <div className="insight-footer-action">
                <Link
                  to={`/services/${activeSymptom.primaryServiceSlug}`}
                  className="btn btn-primary"
                >
                  <span>Read In-Depth {activeSymptom.serviceTitle} Guide</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="disclaimer-note">
                  *Self-evaluation does not replace an in-person physical examination.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
