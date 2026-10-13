# Architecture: S.N. Health Care

## 1. System Overview
S.N. Health Care is an orthopedic healthcare information web platform built as a high-performance, single-page application (SPA) optimized for client-side routing, static deployment, and educational depth.

## 2. Technology Stack
- **Framework**: React 18+ (Vite tooling)
- **Router**: React Router DOM (v6 / BrowserRouter)
- **Animation & Motion**: Framer Motion
- **Iconography**: Lucide React
- **SEO & Head Management**: React Helmet Async
- **Styling Architecture**: Vanilla CSS with CSS custom properties (tokens), modular BEM/scoped utility patterns, zero third-party CSS overhead.

## 3. Data & Content Flow
```
Data Layer:
src/data/services.js ───┐
src/data/clinic.js   ───┼──► Reusable UI Components ──► Pages & Routes ──► DOM
src/data/navigation.js ─┤
src/data/testimonials.js┘
```

- **Content Decoupling**: Clinical data lives strictly in `src/data/`, allowing content updates without touching JSX structures.
- **Dynamic Routing**: `/services/:slug` resolves against `services.js`. Non-matching slugs cleanly trigger the custom 404 handler.
- **Client Actions**:
  - Telephone: Direct `tel:09090595901`
  - WhatsApp: Direct `https://wa.me/919090595901?text=...`
  - Email: `mailto:` link with pre-filled subject and body
  - Maps: Direct navigation link to verified clinic coordinate
