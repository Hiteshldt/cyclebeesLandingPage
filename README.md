# CycleBees — Marketing Site

Next.js (Pages Router) + Tailwind marketing site for CycleBees, doorstep bicycle
repair and rentals in Coimbatore.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

| Script              | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Dev server on :3000                            |
| `npm run build`     | Production build                               |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | `tsc --noEmit`                                 |
| `npm run icons`     | Regenerate favicons/PWA icons/OG image         |

## Environment variables

All four must be set locally **and** in the Vercel project settings
(Settings → Environment Variables) for Production and Preview.

| Variable               | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `RESEND_API_KEY`       | Resend API key. Server-only — never prefix with `NEXT_PUBLIC_`. |
| `CONTACT_INBOX`        | Where enquiries are delivered (`mail@cyclebees.in`).        |
| `CONTACT_FROM`         | Envelope sender on the Resend-verified domain.              |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for SEO tags, sitemap and robots.txt.      |

## How email works

Outbound and inbound mail are deliberately separate, so the existing Zoho setup
is untouched:

- **Outbound** — `/api/contact` sends through **Resend** from
  `website@cyclebees.in`.
- **Inbound** — MX records stay on **Zoho**. `mail@cyclebees.in`,
  `hitesh.gupta@cyclebees.in` and `guru.m@cyclebees.in` receive exactly as
  before.
- Each enquiry sets `replyTo` to the sender's address, so replying from Zoho
  answers the customer directly rather than the no-reply address.

All four forms (contact, service booking, home quick-enquiry, newsletter) post
to the same endpoint via `useEnquiryForm`. The endpoint validates with the
shared rules in `src/lib/enquiry.ts`, rate-limits to 5 requests/minute per IP,
and drops bots with a honeypot field plus a submit-timing check.

## Reviews

`src/data/reviews.ts` is **intentionally empty**. Paste real reviews from the
Google Business Profile and the review wall, home-page section and
`Review`/`AggregateRating` structured data all switch on automatically. Never
seed it with invented entries — they render as public testimonials and are fed
to Google as structured data.

## Conventions

- **Icons** — `src/components/Icon.tsx`. Outline SVGs drawn in `currentColor`.
  No emoji in UI.
- **Logo** — `src/components/BrandMark.tsx`. The path is vector-traced from
  `public/logo.webp`, so it is the real mark, not a redraw. It is emitted once
  per page as an SVG `<symbol>` (`BrandMarkSprite`, mounted in `Layout`) and
  referenced by `<use>`, because the path is ~5KB and appears a dozen times per
  page. The mark is **1.76:1 (wide)** — size it by width only (`w-8`, never
  `w-8 h-8`) or it will squash. `BrandWatermark` is the oversized decorative
  variant. `scripts/generate-icons.js` shares the same path, so favicons, PWA
  icons and the OG card all stay in sync with it.

  To re-trace after a logo change:

  ```bash
  # alpha channel -> bitmap -> vector
  potrace logo.pbm --svg -O 0.6 -a 1.2 -t 20 -o traced.svg
  ```
- **Page metadata** — always via `src/components/Seo.tsx`; never hand-roll
  `<Head>` tags, or OG tags end up duplicated.
- **Section headers** — `SectionHeading`; page heroes — `PageHero`.
