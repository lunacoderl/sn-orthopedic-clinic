# Next Steps: S.N. Health Care

1. **Install Core Dependencies**:
   - `npm install react-router-dom lucide-react framer-motion react-helmet-async`
2. **Setup Global Styles & Design System**:
   - Create `src/styles/tokens.css` with colors `#123B57`, `#087E8B`, `#DDEEE3`, `#FFF8ED`, spacing scale, shadows.
   - Configure typography with Manrope and Inter in `index.html` and `src/styles/global.css`.
   - Setup `src/styles/animations.css` for shimmer, pulse, and smooth reveals.
3. **Build Healthcare Content Architecture**:
   - `src/data/clinic.js` (Dr. P. Y. Srinivasa Rao profile, 09090595901 phone, emergency instructions, location).
   - `src/data/services.js` (14 detailed orthopedic services with clinical sections, symptoms, causes, diagnosis, treatment, FAQs, SEO).
   - `src/data/testimonials.js` (attributed patient experiences).
   - `src/data/navigation.js` (links, quick action targets).
4. **Build Core Shared UI Components**:
   - Navbar with emergency banner, drawer menu, quick call.
   - Footer with medical educational disclaimer and sitemap.
   - Desktop floating action rail + mobile bottom bar.
   - Honest Appointment & Consultation enquiry modal.
   - Skeleton loading components (cards, heroes, gallery).
   - Branded preloader & scroll to top.
5. **Develop 15 Long-Form Homepage Sections**:
   - Assemble in `src/pages/Home.jsx`.
6. **Develop Dynamic Service Details Page**:
   - Single reusable template driven by `services.js` with deep content and SEO.
7. **Build Supporting Pages**:
   - Privacy Policy, Terms & Conditions, Custom 404.
8. **SEO, Sitemap & Verification**:
   - `robots.txt`, `sitemap.xml`, Open Graph tags, JSON-LD Schema.
   - Production build check (`npm run build`).
