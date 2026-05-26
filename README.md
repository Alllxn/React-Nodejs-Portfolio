# Portfolio — allandev.es

Personal portfolio website built with React and Node.js.

**Live:** [allandev.es](https://allandev.es)

---

## Stack

| Layer    | Technologies                                                                 |
|----------|------------------------------------------------------------------------------|
| Frontend | React 18, Redux Toolkit, React Router v6, React Scroll, FontAwesome          |
| Backend  | Node.js, Express, Resend                                                      |
| Styling  | CSS (custom, no UI framework)                                                 |

---

## Features

- **Bilingual (ES / EN)** — language detection based on browser preference, toggle in nav
- **Dark / Light theme** — system preference detection, toggle in nav
- **Contact form** — sends email via Resend API
- **Project showcase** — filterable cards with image carousel per project
- **Sections:** Home · About · Timeline · Work · Contact

---

## Project structure

```
/
├── client/          # React app (CRA)
│   └── src/
│       └── PortfolioContainer/
│           ├── Home/
│           ├── About/
│           ├── Nav/
│           ├── Timeline/
│           ├── Work/
│           ├── Contact/
│           └── Footer/
└── server/          # Express API
    └── index.js
```

---

## Getting started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account and API key for the contact form

### Install

```bash
# Install all dependencies (root + client + server)
npm install
npm --prefix client install
npm --prefix server install
```

### Environment variables

Create `server/.env`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Create `client/.env`:

```env
# Empty in development — proxied to localhost:3001 automatically
REACT_APP_API_URL=
```

### Run in development

```bash
npm run dev
```

Starts both client (`localhost:3000`) and server (`localhost:3001`) concurrently. The client proxies API requests to the server automatically.

### Build for production

```bash
npm run build
```

Outputs the static build to `client/build/`.

---

## Changelog

### [2.0.0] — major redesign & new features

**UI / UX**
- Dark / light theme toggle with system preference detection
- Bilingual support (ES / EN) with automatic browser language detection
- Redesigned project cards with company grouping and image carousel
- New project-specific cover images and logos
- Refined nav identity and styling; improved mobile layout and CTA hover effects
- Replaced favicon with PNG and updated page title

**Content**
- Redesigned About section with structured biography layout
- Updated Timeline with new entries and hover animations
- Added Ayesa projects (Junta de Andalucía EducaDistancia, URJC)
- Added bilingual CV versions
- Added WhatsApp contact link in Contact and Footer

**Infrastructure**
- Added Footer component
- Moved email credentials to environment variables (`server/.env`)
- Optimized Work section images (`.webp`)

### [2.1.0] — CI/CD & infrastructure

- Automated deploy pipeline via GitHub Actions on push to `main`
- Frontend (React build) deployed to IONOS via rsync over SSH
- Backend (Express) deployed to Render, triggered via deploy hook
- Replaced Nodemailer + Gmail SMTP with Resend API (SMTP blocked on Render free tier)
- Added `REACT_APP_API_URL` env variable to decouple frontend from backend URL
- See [DEPLOY.md](DEPLOY.md) for full setup documentation

### [2.2.0] — Pip-Boy terminal redesign

- Full Pip-Boy phosphor-green theme across all sections (global layout, nav, home, footer, about, timeline, contact, projects)
- Projects section redesigned with terminal aesthetic; carousel refactored and card assets replaced
- Flag-based language toggle in nav with `localStorage` persistence; contact form responses localized
- Light mode scan lines and vignette corrected to be visible on white background
- CSS cleanup: removed dead rules, duplicates and orphan class definitions

