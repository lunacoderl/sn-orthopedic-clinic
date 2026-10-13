# sn-orthopedic-clinic

# S.N. Health Care — Orthopedic & Joint Care Clinic Website

Modern, responsive web platform for **S.N. Health Care** (Visakhapatnam, Andhra Pradesh), led by **Dr. P. Y. Srinivasa Rao** (MBBS, MS Orthopedics).

---

## 🏥 About The Clinic

- **Specialist**: Dr. P. Y. Srinivasa Rao · MBBS, MS (Orthopedics)
- **Specializations**: Knee & Joint Replacement, Spine Care, Fracture & Trauma Management, Sports Medicine, Arthroscopy, Bone Health & Osteoporosis.
- **Helpline**: [+91 90905 95901](tel:09090595901)
- **Consultation Timings**: Monday – Saturday: 9:30 AM – 1:30 PM & 5:00 PM – 9:00 PM | Sunday: By Emergency Appointment
- **Location**: Near RTC Complex, Dwarakanagar / Asilmetta Junction, Visakhapatnam, Andhra Pradesh 530016.

---

## ✨ Features & Architecture

- **Sticky, Collision-Free Navigation**:
  - Precision 3-column CSS grid layout for desktop with mathematical center alignment.
  - Dedicated mobile header with instant direct phone call button and dedicated hamburger menu.
  - Desktop-only top announcement bar showing verified doctor credentials, OPD hours, direct helpline, and WhatsApp.
  - Mobile slide-out drawer providing full service links, doctor credentials, and direct consultation actions without clutter.
- **Full-Scale Orthopedic Imagery**:
  - Zero-crop service image cards with preserved aspect ratios (`contain`) and subtle contrast backdrops.
  - Interactive parallax divider banners showcasing clinic infrastructure and care standards.
- **High-Performance Tech Stack**:
  - **Framework**: React 19 + Vite 8
  - **Routing**: React Router DOM 7
  - **Icons**: Lucide React
  - **Styling**: Vanilla CSS tokens with responsive typography and zero horizontal overflow (`overflow-x: clip`).
- **Comprehensive Patient Resources**:
  - Interactive service detail pages with indications, recovery timelines, and diagnostic visualizers.
  - Symptom navigator guide for knee, spine, hip, shoulder, and fracture emergencies.
  - Transparent consultation enquiry modal with direct WhatsApp integration.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lunacoderl/sn-orthopedic-clinic.git

# Enter project directory
cd sn-orthopedic-clinic

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Generate production bundle in dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
sn-health-care/
├── public/                 # Static assets, logos, and medical imagery
├── src/
│   ├── assets/             # Brand logos and iconography
│   ├── components/         # Reusable UI components (Navbar, Footer, Preloader, Modals)
│   ├── data/               # Structured clinic, doctor, and service datasets
│   ├── pages/              # Primary route views (Home, ServiceDetails, PrivacyPolicy)
│   ├── sections/           # Section modules (Hero, Services, Facilities, Map, FAQ)
│   ├── styles/             # Design tokens, global resets, and keyframe animations
│   ├── App.jsx             # Main router and modal controller
│   └── main.jsx            # Application entry point
├── PROJECT_MEMORY/         # Persistent engineering changelog and architecture state
└── package.json            # Project dependencies and build scripts
```

---

## 📄 License & Attribution

Designed and maintained for **S.N. Health Care**. All clinic information and branding are copyright © S.N. Health Care.
