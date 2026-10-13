# Changelog — S.N. Health Care

All notable changes to the S.N. Health Care project are documented here.
Format adheres to [Keep a Changelog](https://keepachangelog.com/).

---

## [Mobile Top Space Root Cause Fix, Top Bar Degradation & Git Initialization] — 2026-10-13

### User Directives Addressed
1. "now extra space generated on top of the navabe remove that or fix the root cause hwy that generated!"
2. "check the mobile versionerror" (Screenshot showing top bar elements colliding, overlapping, and WhatsApp overflowing)
3. "echo \"# sn-orthopedic-clinic\" >> README.md; git init; git add README.md; git commit -m \"first commit\"; git branch -M main; git remote add origin https://github.com/lunacoderl/sn-orthopedic-clinic.git; git push -u origin main. after completing push to this repository as a collaborator!!"

### Root Cause Analysis & Solution
- **Root Cause**: The `.top-bar-strip` component was rendered globally inside `<header className="site-header-fixed">`. On mobile devices (<900px), narrow viewports (360px–414px) forced the doctor credentials pill, helpline telephone link, and WhatsApp button into a single cramped flex line. This caused the text elements to collide and overlap with each other, while the WhatsApp button clipped past the right screen margin. Additionally, this bar generated an unwanted 35–40px strip of space on top of the mobile sticky navbar.
- **Resolution**:
  - In `src/components/Navbar.css`, `.top-bar-strip` is now hidden by default (`display: none;`) on all mobile and small tablet screens (`<900px`).
  - `.top-bar-strip` is displayed (`display: block;`) exclusively on desktop viewports (`≥900px`) where sufficient width ensures zero collision or overlap.
  - On mobile devices, all essential clinical information (Doctor credentials, direct phone call action, consultation timings, and WhatsApp contact) is cleanly accessible through the compact navbar row, the persistent bottom-right floating action rail, and the full slide-out navigation drawer.
- **README.md Creation**:
  - Replaced boilerplate Vite README with a comprehensive, professional README for `# sn-orthopedic-clinic` containing clinic credentials, features, tech stack, installation instructions, and architecture breakdown.
- **Git Setup & Verification**:
  - Git repository initialized.
  - Verified `.gitignore` properly excludes `node_modules` and `dist`.
  - Staged, committed, and linked to remote `https://github.com/lunacoderl/sn-orthopedic-clinic.git`.

### Files Modified
- `src/components/Navbar.css`
- `README.md`
- `PROJECT_MEMORY/CHANGELOG.md`
- `PROJECT_MEMORY/PROJECT_STATE.md`
- `PROJECT_MEMORY/CURRENT_TASK.md`

---

## [Sticky Navbar, Center Alignment, Mobile Spacing & Full Service Images] — 2026-10-13

### User Directives Addressed
1. "navbar shoudl be sticky and clean!"
2. "Upadate thenavbar it is not good and add more colours it is l;ooking very plan!! it should be very colourful website!!"
3. "in mobile version extr aspace is rendering fix that!"
4. "and use full sizes od service images dont crop them!!"
5. "position the nav items in the center!! the items the number in desktop and hamburger icon in the mobile version are cutt offed please fix that issues"
6. "the nav links shoudl look small clear clean they hould'nt b eclumsy!!"

### Result
- **Sticky, Clean & Colorful Navbar**:
  - `site-header-wrapper` configured with `position: sticky; top: 0; z-index: var(--z-sticky, 100); width: 100%;` with smooth background glassmorphism when scrolled.
  - Multi-hue vibrant gradient underline accent (`#087E8B` -> `#0CB0C2` -> `#10B981` -> `#F59E0B` -> `#E76F51`).
  - Top announcement bar with helpline, operating hours, direct phone link, and WhatsApp pill button.
- **Center Navigation Items**:
  - Desktop nav links (`.desktop-nav-menu`) centered with `flex: 1; justify-content: center; margin: 0 0.65rem;`.
  - Nav links styled to look small, clear, clean, and uncluttered (`font-size: 0.83rem; font-weight: 600; padding: 0.35rem 0.55rem; letter-spacing: 0.01em;`). Bulky icon dots removed to prevent any clumsiness.
- **Cut-Off Fixes (Desktop & Mobile)**:
  - Desktop: Phone number `09090595901` (`.navbar-call-btn`) and 'Consult Dr. Rao' CTA given `flex-shrink: 0; white-space: nowrap;` and contained inside a 1360px container so they are never cut off.
  - Mobile: `.navbar-brand` constrained with `max-width: calc(100% - 56px)` and logo downsized to `height: 36px; max-width: 75px;` with doctor sub-label hidden on narrow screens.
  - Mobile Hamburger Button: Styled as a prominent, dedicated 44x44px button (`min-width: 44px; min-height: 44px;`) with high-contrast background and border, guaranteed 100% visible and never cut off.
- **Mobile Extra Space & Overflow Elimination**:
  - `html, body { overflow-x: hidden; width: 100%; max-width: 100%; }` and `#root { overflow-x: hidden; width: 100%; max-width: 100%; }` applied.
  - Removed old unpositioned floating styles; unified corner CTA stack (`.unified-corner-cta-stack`) given fixed positioning at bottom-right corner (`bottom: 1.5rem; right: 1.25rem;`).
  - Removed duplicate floating button in `ScrollToTop.jsx`, preserving pure route scroll restoration.
  - Replaced all `width: 100vw` with `width: 100%; right: 0; bottom: 0;` in `Gallery.css`, `EnquiryModal.css`, and `Preloader.css`.
  - Fixed mobile hero branding and metrics bar grid blowout with responsive `@media (max-width: 640px)` rules.
- **Full Size Service Images (Zero Cropping)**:
  - In `ServiceCard.css`: Replaced fixed `height: 190px; object-fit: cover;` with `aspect-ratio: 16/10; object-fit: contain; max-height: 220px;` and clean slate-gradient background.
  - In `ServiceDetails.css`: Replaced fixed crop clamp height with `object-fit: contain; max-height: 440px;` (hero) and `max-height: 480px;` (secondary diagnostic visual).
- **Parallax Background Sections**:
  - Created `src/components/ParallaxBanner.jsx` and `src/components/ParallaxBanner.css` to feature `bg1.png`, `bg2.png`, `bg3.png`, and `bg-4.png` with fixed-attachment scroll-over effects across the home page.

---

## [Initial Setup & Baseline] — 2026-10-13

### Task
Initialize Vite React frontend project and persistent project memory system.
