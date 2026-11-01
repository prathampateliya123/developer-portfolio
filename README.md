# Pratham Pateliya — Full Stack Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **GSAP (ScrollSmoother & ScrollTrigger)**.

---

## 👨‍💻 Developer Profile

- **Developer**: Pratham Pateliya
- **Role**: Full Stack Developer
- **Tagline**: *"Building End-to-End Web Applications with Modern Technologies."*
- **Industry Experience**: Working professional in the IT industry (~6 months)
- **Frontend Stack**: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Web Design, Component-Based Architecture
- **Backend Stack**: Node.js, Express.js, REST API Development, API Integration, Authentication, Server-Side Development
- **Database & Tools**: MongoDB, MySQL, Database Design, CRUD Operations, Git & GitHub, Dashboard Development
- **Additional Skills**: Third-Party API Integration, Payment Gateway Integration, Full Stack Application Development
- **Education**: Online MCA — Jain University (Specialization: WOCS & IT)

---

## 📁 Clean & Production-Ready Folder Structure

```text
developer-portfolio/
├── app/                          # Next.js 14 App Router
│   ├── layout.jsx                # Root layout with fonts, JSON-LD Schema & metadata
│   ├── globals.css               # Global CSS styling
│   ├── page.jsx                  # Main portfolio index page (/)
│   ├── work/                     # Work overview (/work)
│   │   ├── page.jsx
│   │   └── [slug]/               # Static SSG project case studies (/work/[slug])
│   │       └── page.jsx
│   ├── contact/                  # Interactive contact console (/contact)
│   │   └── page.jsx
│   └── login/                    # Back office terminal console (/login)
│       └── page.jsx
│
├── components/                   # Modular React & JSX Architecture
│   ├── index.js                  # Central re-export hub for all components
│   ├── PageRunner.jsx            # Backward-compatible runner export
│   ├── core/                     # Core engine runtime components
│   │   ├── PageRunner.jsx        # Synchronous body bootstrap & runner
│   │   ├── BackgroundEffects.jsx # Paper grain, grid lines & page veil
│   │   └── Cursor.jsx            # Interactive follower cursor
│   ├── layout/                   # Layout components
│   │   ├── Header.jsx            # Dynamic header, real-time status & navigation
│   │   └── Footer.jsx            # Portfolio footer & contact links
│   └── sections/                 # Modular portfolio sections
│       ├── HeroSplit.jsx         # Split Day/Night hero with interactive toggle
│       ├── TheStreet.jsx         # 13 street shops with horizontal scroll scrub
│       ├── TheFactory.jsx        # Conveyor belt with hydraulic stamp & crates
│       ├── Missions.jsx          # Interactive mission selector board
│       ├── UnderTheHood.jsx      # Developer profile, skills breakdown & education
│       ├── FinaleCTA.jsx         # Call-to-action seam
│       └── Loader.jsx            # DrawSVG loader with progress indicator
│
├── data/                         # Centralized Profile & Structured Content
│   ├── siteConfig.js             # Single source of truth for profile, skills, bio & links
│   ├── projects.js               # Structured metadata for all 13 case studies
│   ├── pagesHtml.js              # Page content re-export hub
│   └── pages/                    # Individual modular page contents
│       ├── home.js               # Personalized Home page markup
│       ├── work.js               # Personalized Work directory markup
│       ├── contact.js            # Personalized Contact console markup
│       ├── login.js              # Back office login markup
│       └── projects/             # 13 individual case study templates
│           ├── index.js          # Case study export registry
│           ├── cegeta.js
│           ├── cereezer.js
│           ├── tradebot.js
│           ├── tessera.js
│           ├── devingame.js
│           ├── dev-in-live.js
│           ├── devinthehood.js
│           ├── superp.js
│           ├── letz-kola.js
│           ├── provencale-webshop.js
│           ├── enoprimes.js
│           ├── sms-group.js
│           └── iroom.js
│
├── public/                       # Verified Static Assets (188 assets)
│   ├── build/                    # Webpack bundles, fonts & styles
│   ├── assets/                   # Vector badges & icons
│   ├── images/                   # Project screenshots & logos
│   ├── media/                    # Shop window cached visuals
│   └── humans.txt                # Developer credentials & standards
│
├── scripts/                      # Automated Verification & Benchmark Suite
│   ├── verify-all.js             # Headless Google Chrome audit (all 20 static pages)
│   ├── check-assets.js           # 188-asset integrity audit
│   ├── benchmark-scroll.js       # GSAP ScrollSmoother damping curve benchmark
│   ├── verify_protected_sections.js # Validates Street & Factory sections
│   └── verify_awwwards_removed.js   # Asserts absence of award ribbons
│
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS theme & tokens
├── package.json                  # Scripts & dependencies
└── jsconfig.json                 # Path aliases (@/*)
```

---

## ⚡ Motion & Interaction Architecture

- **GSAP ScrollSmoother**: Smooth inertial scrolling (`smooth: 1.1`, `smoothTouch: 0`, `normalizeScroll: false`).
- **GSAP ScrollTrigger**: Drives pinned hero split scenes, horizontal shop track scrubbing, and conveyor factory mechanics.
- **Synchronous Bootstrap**: Server-side dataset injection ensures zero-flicker initialization of the motion engine.

---

## 🛠️ Developer Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server on `http://localhost:3000` |
| `npm run build` | Builds optimized production static build (20 static pages) |
| `npm run start` | Runs the production build on `http://localhost:3000` |
| `npm run verify` | Runs the complete audit: pages, assets, and protected sections |
| `npm run verify:all` | Runs headless Google Chrome browser audit across all routes |
| `npm run verify:assets` | Verifies integrity of all 188 local static assets in `public/` |
| `npm run verify:scroll` | Measures GSAP ScrollSmoother damping curve & inertia |
| `npm run verify:sections`| Validates 13 shops & 13 factory crates remain untouched |

---

## 🌐 Routes Overview

- **`/`**: Split-hero, Street track with 13 shops, Conveyor Factory with 13 crates, Player Card, Missions board, Finale CTA.
- **`/work`**: Case study directory with category filters.
- **`/contact`**: Interactive console with message pre-filling and feedback states.
- **`/login`**: Back office terminal with keyboard listeners.
- **`/work/[slug]`**: 13 comprehensive project case studies.
