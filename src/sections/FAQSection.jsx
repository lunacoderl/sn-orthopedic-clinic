import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import './FAQSection.css';

export default function FAQSection() {
  const clinicFaqs = [
    {
      q: "Do I need an advance appointment to see Dr. P. Y. Srinivasa Rao?",
      a: "While walk-ins are welcomed during morning (09:30 AM – 01:30 PM) and evening (05:00 PM – 09:00 PM) consultation hours, booking in advance via phone (09090595901) or WhatsApp guarantees your dedicated time slot and minimizes clinic waiting time."
    },
    {
      q: "What should I bring along for my initial orthopedic visit?",
      a: "Please bring any previous X-ray films, MRI/CT scan discs, blood reports (such as Vitamin D, Uric Acid, or ESR), current prescription medications, and a summary of prior treatments or surgeries. Wear comfortable clothing allowing easy joint examination."
    },
    {
      q: "How does Dr. Rao decide between conservative care and surgery?",
      a: "Dr. Rao follows an evidence-based 'conservative-first' protocol. Over 88% of our patients are treated successfully without surgery. Surgery is only discussed when non-surgical rehabilitation, targeted injections, and lifestyle adjustments fail to relieve pain, or in cases of unstable acute fractures."
    },
    {
      q: "Does S.N. Health Care have treatment and observation beds for procedures?",
      a: "Yes. Our clinic features dedicated examination, minor reduction, and observation beds equipped for closed fracture casting, sterile wound dressings, joint fluid aspirations, and viscosupplementation injections."
    },
    {
      q: "Are joint lubricating (hyaluronic acid) injections painful?",
      a: "Injections are performed under strict sterile precautions using local numbing agents and ultra-fine clinical needles. Most patients report only mild, brief pressure. Post-procedure resting beds are available for 15–20 minutes of comfortable observation."
    },
    {
      q: "What should I do if I suffer an acute injury after clinic hours?",
      a: "For acute open fractures, high-energy trauma, severe uncontrolled bleeding, or sudden loss of sensation in your limbs, immediately proceed to the nearest 24/7 hospital emergency trauma room. For non-emergent sprains, elevate the limb, apply ice wrapped in a towel, and call 09090595901 first thing in the morning."
    }
  ];

  return (
    <section className="section-py bg-white faq-section" id="faqs">
      <div className="container">
        <SectionHeading
          badge="COMMON QUESTIONS"
          title="Frequently Asked Patient Questions"
          subtitle="Clear, honest answers about clinic appointments, first consultations, diagnostic imaging, and non-surgical orthopedic therapies."
        />

        <div className="faq-container-narrow">
          <FAQAccordion items={clinicFaqs} />
        </div>
      </div>
    </section>
  );
}
