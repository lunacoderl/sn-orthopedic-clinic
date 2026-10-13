# Changelog — S.N. Health Care

All notable changes to the S.N. Health Care project are documented here.
Format adheres to [Keep a Changelog](https://keepachangelog.com/).

---

## [Mobile Component Overflows, Button Blowout & Extra Space Elimination] — 2026-10-13

### User Directives Addressed
- "some components in the mobile version were taking extra space fix those!!!"
- Attached screenshots showing:
  1. `SymptomChecker` cards blowing out on the right with badges (`NERVE`, `HI`, `ROTATOR`) and text clipped by the right viewport boundary.
  2. `SymptomChecker` active insight card blown out horizontally by `white-space: nowrap` on `.btn` ("Read In-Depth Knee Pain & Preservation Guide").
  3. A 210px+ vertical tower of 4 floating buttons on mobile covering cards, buttons, and alert boxes.

### Root Cause Analysis & Solution
1. **Global Button Blowout Fixed**:
   - `src/styles/global.css`: `.btn` had global `white-space: nowrap;` without mobile wrapping. Long button labels (such as "Read In-Depth Knee Pain & Preservation Guide") reached ~420px width, blowing out CSS Grid columns and causing horizontal scroll and card clipping.
   - Added responsive `@media (max-width: 640px)` rule to `.btn` with `white-space: normal; line-height: 1.35; max-width: 100%; word-break: break-word;` so all buttons wrap cleanly inside their cards.
2. **Symptom Checker Zero-Overflow Grid Architecture**:
   - `src/sections/SymptomChecker.css`: Rewrote layout with `grid-template-columns: minmax(0, 1fr)`.
   - Cards now use `min-width: 0; width: 100%; max-width: 100%; box-sizing: border-box; overflow: hidden;`.
   - `.symptom-card-header` configured with `flex-wrap: wrap; gap: 0.4rem;` and `.symptom-mini-badge` allows text wrapping, ensuring tags (`Nerve Involvement`, `Rotator Cuff / Bursa`, `High Incidence`) never get truncated or clipped off-screen.
   - Added `word-break: break-word; overflow-wrap: break-word;` across all headings, snippets, red flag boxes, and explanations.
3. **Floating Actions Compact Mobile Rail**:
   - `src/components/FloatingActions.css`:
     - Hid redundant `.corner-btn-phone` on mobile (`<640px`) because direct phone calling is already permanently pinned in the sticky header (`.mobile-call-circle`).
     - Scaled button size down to compact 38px circles (`width: 38px; height: 38px`) and 17px icons with `bottom: 0.85rem; right: 0.75rem; gap: 0.45rem`.
     - Stack height reduced from 210px+ to ~85px, keeping it completely clear of page content, action buttons, and disclaimer cards.
4. **General Mobile Section Extra Space Elimination**:
   - `src/styles/global.css`: Reduced `.section-py` on mobile from `clamp(3.5rem, 7vw, 6rem)` down to `2.25rem` (36px), eliminating large empty vertical blocks. Reduced container horizontal padding to `1rem`.
   - `src/components/SectionHeading.css`: Reduced mobile `margin-bottom` from up to 56px down to `1.5rem` (24px).
   - `src/sections/ConditionsEdu.css`: Rebuilt grid with `minmax(0, 1fr)` and reduced mobile padding to `1.25rem 1rem`.
   - `src/components/ServiceCard.css`: Added mobile overrides (`min-height: 165px` for thumbnails, `padding: 1.15rem 1rem;`).
   - `src/sections/CareOverview.css`, `WhyChooseUs.css`, `CareJourney.css`, `Testimonials.css`, `LocationSection.css`, `ContactSection.css`, `ParallaxBanner.css`: Added `minmax(0, 1fr)` and streamlined mobile padding and gaps.

### Files Modified
- `src/styles/global.css`
- `src/sections/SymptomChecker.css`
- `src/components/FloatingActions.css`
- `src/components/SectionHeading.css`
- `src/sections/ConditionsEdu.css`
- `src/components/ServiceCard.css`
- `src/sections/CareOverview.css`
- `src/sections/WhyChooseUs.css`
- `src/sections/CareJourney.css`
- `src/sections/Testimonials.css`
- `src/sections/LocationSection.css`
- `src/sections/ContactSection.css`
- `src/components/ParallaxBanner.css`
- `PROJECT_MEMORY/CHANGELOG.md`
- `PROJECT_MEMORY/PROJECT_STATE.md`

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
