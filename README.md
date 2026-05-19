# Portfolio — allandev.es

Personal portfolio website built with React and Node.js.

**Live:** [allandev.es](https://allandev.es)

---

## Stack

| Layer    | Technologies                                                                 |
|----------|------------------------------------------------------------------------------|
| Frontend | React 18, Redux Toolkit, React Router v6, React Scroll, FontAwesome          |
| Backend  | Node.js, Express, Nodemailer                                                  |
| Styling  | CSS (custom, no UI framework)                                                 |

---

## Features

- **Bilingual (ES / EN)** — language detection based on browser preference, toggle in nav
- **Dark / Light theme** — system preference detection, toggle in nav
- **Contact form** — sends email via Nodemailer + Gmail SMTP
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
- A Gmail account for the contact form (see environment variables)

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
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

> Use a [Gmail App Password](https://support.google.com/accounts/answer/185833), not your regular password.

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

