# Architectural Decisions: S.N. Health Care

## Decision 1: Pure Static Frontend with Honest Patient Interactions
- **Context**: A healthcare website should never pretend to store appointment submissions into a database if none exists.
- **Decision**: All enquiry and appointment triggers directly interface with client-side communications: verified phone dialer (`tel:09090595901`), WhatsApp API pre-filled message, mailto handler, or Google Maps directions.

## Decision 2: Single Dynamic Reusable Service Template
- **Context**: 14 distinct orthopedic conditions need dedicated, in-depth URLs and unique SEO metadata without duplicating component code.
- **Decision**: Centralize all medical content in `src/data/services.js` and render via `src/pages/ServiceDetails.jsx` keyed on `:slug`.

## Decision 3: CSS Custom Properties (Design Tokens) instead of Heavy Frameworks
- **Context**: Clean, rapid rendering with medical palette (Deep Navy `#123B57`, Medical Teal `#087E8B`, Soft Sage `#DDEEE3`, Warm Ivory `#FFF8ED`).
- **Decision**: Use pure CSS variables with Manrope and Inter Google Fonts for zero layout shifts and maximum performance.

## Decision 4: Skeleton Loading & Respect for System Preferences
- **Context**: Cinematic experience without slowing down users or jarring layout shifts.
- **Decision**: Provide built-in skeleton states for images and cards, plus support `prefers-reduced-motion` for accessibility.
