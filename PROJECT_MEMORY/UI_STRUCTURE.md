# UI Structure: S.N. Health Care

## 1. Routes
| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Home.jsx` | Clinic overview, doctor profile, 15 long-form sections |
| `/services/:slug` | `ServiceDetails.jsx` | Reusable dynamic orthopedic service dossier (14 services) |
| `/privacy-policy` | `PrivacyPolicy.jsx` | Healthcare privacy practices & patient data transparency |
| `/terms-and-conditions` | `TermsAndConditions.jsx` | Educational disclaimer & usage conditions |
| `*` | `NotFound.jsx` | Custom 404 recovery route |

## 2. Shared Components
- `Navbar.jsx`: Top alert banner, clinic branding, navigation links, quick call CTA, mobile menu drawer.
- `Footer.jsx`: Full clinic details, doctor info, legal links, medical disclaimer, back-to-top.
- `FloatingActions.jsx`: Desktop side rail (Call, WhatsApp, Consult) & mobile sticky bottom action bar.
- `EnquiryModal.jsx`: Honest contact modal generating verified telephone, WhatsApp, or email drafts.
- `Skeleton.jsx`: Skeletons for cards, service heroes, and gallery blocks.
- `Preloader.jsx`: Branded startup pulse loader.
- `FAQAccordion.jsx`: Expandable accessible FAQ items with category badges.
- `ServiceCard.jsx`: Multi-layer card with medical tags, icons, hover elevations.
- `SectionHeading.jsx`: Consistent medical badge, h2 heading, subtitle text.
- `ScrollToTop.jsx`: Auto-scrolls on route change and offers floating return button.

## 3. Homepage Sections (15 Modules)
01. Announcement & Header
02. Hero Section
03. Care Overview (Scope of orthopedic care)
04. About Doctor (Dr. P. Y. Srinivasa Rao)
05. Categorized Services Directory
06. Understand Your Symptoms (Interactive checker)
07. Your Care Journey (4-step timeline)
08. Why Choose S.N. Health Care
09. Conditions & Educational Resources (Anatomy focus)
10. Patient Experiences (Testimonials)
11. Clinic Facilities & Photo Gallery
12. Frequently Asked Questions
13. Location, Map & Directions
14. Contact & Appointment Enquiry
15. Medical Disclaimer & Footer
