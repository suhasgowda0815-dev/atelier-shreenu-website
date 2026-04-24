# The Vrindavan Project — Website

A single-page Next.js site for **The Vrindavan Project / Atelier Shreenu**, built as an editorial, soft-minimal scroll inspired by Norm Architects and Purple Lane Interiors.

This is the **temporary / AWS-credits version**. The full multi-page production site (with CMS, paid consultation booking, full legal pages, press page, FAQ, journal) will be built in Phase 2.

---

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for scroll reveals
- **next/font** — Cormorant Garamond (serif) + Inter (sans)
- **next/image** — auto WebP/AVIF, lazy loading
- **Netlify Forms** for the enquiry form (no backend needed)
- **Netlify** for hosting (free tier)

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and set values
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
vrindavan-project/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg             # Social share preview (1200×630)
│   ├── robots.txt
│   └── images/
│       ├── hero/hero-main.jpg
│       ├── projects/{slug}/01.jpg
│       ├── texture/01.jpg … 05.jpg
│       ├── logo/                # drop logo files here
│       ├── team/                # founder portrait goes here
│       └── press/               # publication marks (when cleared)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout + SEO metadata + JSON-LD schema
│   │   ├── page.tsx             # Assembles all sections
│   │   ├── sitemap.ts
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/              # Nav, Footer, WhatsAppButton
│   │   ├── sections/            # 11 scroll sections (Hero, Philosophy, etc.)
│   │   └── ui/                  # Container, Button, FadeIn, SectionHeading
│   │
│   ├── content/                 # ALL copy + data lives here
│   │   ├── site.ts              # Contact info, nav, social URLs
│   │   ├── projects.ts          # 6 project entries
│   │   ├── testimonials.ts      # 5 testimonials
│   │   ├── approach.ts          # 5-step process
│   │   ├── qualities.ts         # 5 unique qualities
│   │   └── press.ts             # 8 publications
│   │
│   ├── lib/utils.ts             # cn() helper
│   └── styles/fonts.ts          # next/font config
│
├── tailwind.config.ts           # Design tokens (colors, fonts)
├── netlify.toml                 # Deploy config
└── next.config.mjs
```

---

## Editing content

**All copy and data is in `src/content/*.ts` — you don't touch JSX to update text.**

- Change studio contact info → `src/content/site.ts`
- Add/edit/reorder projects → `src/content/projects.ts`
- Add testimonials → `src/content/testimonials.ts`
- Edit the 5-step approach → `src/content/approach.ts`
- Edit unique qualities → `src/content/qualities.ts`
- Add/remove press publications → `src/content/press.ts`

**Images:** replace files in `/public/images/`. Keep the same filenames or update the path in the matching content file.

---

## Design tokens

All defined in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `bg-bone` | `#F5F1EA` | Page background |
| `bg-ivory` | `#EDE7DA` | Section alt background |
| `text-ink` | `#1C1A17` | Primary text |
| `text-terracotta` | `#B5634A` | Accent (labels, italics) |
| `bg-sandstone` | `#C9B79C` | Surfaces |
| `font-serif` | Cormorant Garamond | Display headlines |
| `font-sans` | Inter | Body + micro labels |
| `.text-micro` | 11px uppercase, tracked | Labels, nav, metadata |

---

## Section order (scroll)

1. **Hero** — split layout, Devanagari texture, primary headline
2. **Philosophy** — pull-quote block
3. **Selected Work** — 6-card project grid (asymmetric)
4. **Approach** — 5-step process
5. **Material & Detail** — dark horizontal strip
6. **Unique Qualities** — 5-pillar grid
7. **Film** — YouTube embed
8. **Testimonials** — slider (5 quotes)
9. **Press** — featured-in text strip
10. **Founders Note** — studio / bio
11. **Contact** — form + studio details on a dark section

Add/remove sections in `src/app/page.tsx`.

---

## Deploying to Netlify

### Option 1: Netlify CLI (fastest)

```bash
npm install -g netlify-cli
netlify login
netlify init    # connect to new or existing Netlify site
netlify deploy --prod --build
```

### Option 2: Git + Netlify dashboard (recommended)

1. Push this repo to GitHub/GitLab.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import existing project**.
3. Select the repo. Netlify auto-detects Next.js — use the defaults:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Add environment variables (copy from `.env.example`) in **Site settings → Environment variables**.
5. Deploy. Netlify generates a `*.netlify.app` URL.
6. Add your custom domain in **Domain settings → Add custom domain**.

### Custom domain

To point `thevrindavanproject.com` to Netlify, update DNS:

- `A` record → `75.2.60.5`
- `CNAME` on `www` → `apex-loadbalancer.netlify.com`

(Or use Netlify DNS for a simpler setup.)

---

## Contact form

The form in `src/components/sections/Contact.tsx` uses **Netlify Forms** — it works automatically after deploy. Submissions appear in Netlify dashboard → Forms tab.

To receive email notifications: **Site settings → Forms → Form notifications → Add notification → Email notification.**

To add reCAPTCHA: wrap the button with `<div data-netlify-recaptcha="true" />` and enable reCAPTCHA in your Netlify form settings.

---

## Things you'll want to replace before going live

| Item | Current state | Action |
|---|---|---|
| Logo | Typeset wordmark in the Nav | Drop SVG/PNG into `/public/images/logo/` and update `Nav.tsx` |
| Hero image | One of the Apartment Interior photos | Swap `/public/images/hero/hero-main.jpg` |
| 5 project photos | Also Apartment Interior photos (placeholder) | Replace `01.jpg` in each `/public/images/projects/{slug}/` |
| Founder portrait | Not wired in yet | Add to `FoundersNote.tsx` when photo is ready |
| OG image | Auto-generated from hero | Replace `/public/og-image.jpg` with a custom 1200×630 graphic |
| Press logos | Text-only treatment | When cleared, add SVGs to `/public/images/press/` and swap in `Press.tsx` |

---

## SEO checklist (done)

- [x] Page title + description + keywords (`src/app/layout.tsx`)
- [x] Open Graph + Twitter cards
- [x] JSON-LD structured data (Architect + LocalBusiness)
- [x] `robots.txt`
- [x] Dynamic sitemap
- [x] Alt text on all images
- [x] Semantic HTML (proper h1/h2/h3, section tags)
- [x] Favicon + apple-touch-icon ready slots

---

## Accessibility

- All images have meaningful `alt` text
- Color contrast: bone/ink passes WCAG AA (13.5:1)
- Keyboard navigation: all links and form fields focusable
- Form labels properly associated
- Respects `prefers-reduced-motion` (Framer Motion handles this by default)

---

## Performance

- next/image handles WebP/AVIF conversion, responsive sizes, lazy loading
- next/font self-hosts Google Fonts (zero external requests)
- CSS-in-JS not used (just Tailwind atomic CSS)
- Framer Motion tree-shakes well
- Target: LCP < 2.5s · FID < 100ms · CLS < 0.1

Run `npm run build` then [PageSpeed Insights](https://pagespeed.web.dev/) on the deployed URL to verify.

---

## Phase 2 roadmap

When the temp site is approved and it's time to build the real thing:

1. Add routing for individual project detail pages (`/work/[slug]`)
2. Wire content into a CMS (Sanity or Payload recommended — the `src/content/*.ts` structure maps 1:1)
3. Add: About, Services, Process, Publications, FAQ, Journal, Privacy, Terms as separate pages
4. Add Calendly + Razorpay for paid consultation booking
5. Add Google Analytics 4 + GTM
6. Commission real photography for remaining 13+ projects
7. Accessibility audit + Core Web Vitals fine-tuning

---

## Credits

- Design direction: Norm Architects + Purple Lane Interiors (reference)
- Content: The Vrindavan Project brand brief + scraped from their Google Sites
- Photography: The Vrindavan Project archive (Apartment Interior folder)

© The Vrindavan Project · Atelier Shreenu · 2026
