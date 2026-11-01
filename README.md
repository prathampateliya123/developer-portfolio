# DEV IN THE HOOD — Next.js 14 Developer Portfolio

A 100% pixel-perfect, animation-identical conversion of [https://devinthehood.com/](https://devinthehood.com/) built with **Next.js 14 (App Router)**, **Tailwind CSS**, and modern JavaScript/JSX.

---

## 📁 Clean & Modular Folder Structure

```text
developer-portfolio/
├── app/                          # Next.js App Router (Routes & Layouts)
│   ├── layout.jsx                # Root layout with fonts, meta, and deferred scripts
│   ├── globals.css               # Global styling
│   ├── page.jsx                  # Home portfolio page (/)
│   ├── work/                     # Work directory (/work)
│   │   ├── page.jsx
│   │   └── [slug]/               # Dynamic SSG project case studies (/work/[slug])
│   │       └── page.jsx
│   ├── contact/                  # Interactive contact console (/contact)
│   │   └── page.jsx
│   └── login/                    # Back office sign-in console (/login)
│       └── page.jsx
│
├── components/                   # Modular React & JSX Components
│   ├── index.js                  # Central re-export hub
│   ├── PageRunner.jsx            # Backward-compatible runner export
│   ├── core/                     # Core engine components
│   │   ├── PageRunner.jsx        # Synchronous body dataset bootstrap & markup runner
│   │   ├── BackgroundEffects.jsx # Paper grain, grid lines & veil transition
│   │   └── Cursor.jsx            # Custom interactive follower cursor
│   ├── layout/                   # Layout components
│   │   ├── Header.jsx            # Site header, real-time clock & mobile burger
│   │   └── Footer.jsx            # Site footer & back office doorway
│   └── sections/                 # Portfolio sections
│       ├── HeroSplit.jsx         # Split Day/Night hero with rotating hoodie SVG
│       ├── TheStreet.jsx         # 13 street shops with horizontal scroll scrub
│       ├── TheFactory.jsx        # Conveyor belt with hydraulic stamp & crates
│       ├── PlayerCard.jsx        # Full-stack developer character card & stats
│       ├── Missions.jsx          # Missions selector & console board
│       ├── FinaleCTA.jsx         # Finale seam call-to-action
│       └── Loader.jsx            # DrawSVG loader with 0% to 100% counter
│
├── data/                         # Structured Data & Modular Page Content
│   ├── siteConfig.js             # Central metadata, author info & navigation config
│   ├── projects.js               # Structured metadata for all 13 projects
│   ├── pagesHtml.js              # Backward-compatible content export hub
│   └── pages/                    # Individual modular page contents
│       ├── home.js               # Home page markup
│       ├── work.js               # Work directory markup
│       ├── contact.js            # Contact console markup
│       ├── login.js              # Back office login markup
│       └── projects/             # 13 individual case study markups
│           ├── index.js          # Project map export
│           ├── cegeta.js
│           ├── cereezer.js
│           ├── tradebot.js
│           ├── tessera.js
│           ├── devingame.js
│           ├── dev-in-live.js
│           ├── devinthehood.js   (Awwwards nominee)
│           ├── superp.js
│           ├── letz-kola.js      (Awwwards nominee)
│           ├── provencale-webshop.js
│           ├── enoprimes.js
│           ├── sms-group.js
│           └── iroom.js
│
├── public/                       # Authentic Static Assets (188 verified assets)
│   ├── build/                    # Webpack bundles, fonts & styles
│   │   ├── fonts/                # JetBrains Mono, Archivo & FontAwesome glyphs
│   │   ├── runtime.98187d6b.js
│   │   ├── 854.7ec0aa7a.js
│   │   ├── site.0197b589.js
│   │   └── site.8cc5d90d.css
│   ├── assets/                   # Vector badges & icons
│   ├── images/                   # Project screenshots & logos
│   ├── media/                    # Shop window cached visuals
│   └── humans.txt                # Developer credentials
│
├── scripts/                      # Automation & Verification Tools
│   ├── verify-all.js             # Headless Chrome audit for all 20 pages
│   ├── benchmark-scroll.js       # ScrollSmoother damping & inertia benchmark
│   └── check-assets.js           # Asset integrity check across all modules
│
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Dependencies and NPM scripts
└── jsconfig.json                 # Path aliases (@/*)
```

---

## ⚡ Motion & Animation Architecture

The application uses an integrated hybrid runtime:
- **GSAP ScrollSmoother**: Smooth inertial damping (`smooth: 1.1`, `smoothTouch: 0`, `normalizeScroll: false`).
- **GSAP ScrollTrigger**: Pins split hero stage, scrubs horizontal shop tracks across 13 storefronts, and drives hydraulic factory presses.
- **Dynamic SVG Scenes**: 23 SVG environments dynamically generated at runtime (`hoodie:hoodie-two-sides`, `factory-wall`, `factory-machines`, `lamp:day`, `lamp:night`).
- **Synchronous Body Bootstrap**: Injects dataset configuration on server render to ensure the GSAP motion engine initializes with zero race conditions.

---

## 🛠️ Developer Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server on `localhost:3000` |
| `npm run build` | Builds optimized production static build (20 static pages) |
| `npm run start` | Runs the production build on `localhost:3000` |
| `npm run verify:all` | Runs headless Google Chrome audit across all routes |
| `npm run verify:scroll` | Measures GSAP ScrollSmoother damping curve & inertia |
| `npm run verify:assets` | Verifies integrity of all 188 local static assets |

---

## 🌐 Routes Overview

- **`/`**: Split-hero, street track with 13 shops, conveyor factory, player card, missions board, finale CTA.
- **`/work`**: Project directory with category filtering and case study links.
- **`/contact`**: Interactive console with pre-filling mission chips and feedback states.
- **`/login`**: Back office terminal with keyboard listeners (`ctrl+b`, `ctrl+enter`, `e`, `j`, `k`, `r`).
- **`/work/[slug]`**: 13 comprehensive project case studies (Cegeta, Cereezer, Tradebot, Tessera, DEV IN GAME, DEV IN LIVE, DEV IN THE HOOD, SupERP, Lët'z Kola, Webshop Provençale, Enoprimes simulator, SMS group, iRoom).
