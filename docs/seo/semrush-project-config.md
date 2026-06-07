# SEMrush Project Config - riseroofingav.com

Spec for AVD-307: stand up SEMrush measurement (Position Tracking + Site Audit) for
`riseroofingav.com` so the Phase 7 optimization wave (AVD-297) has visible impact and
technical issues surface.

This file is the agent-doable deliverable: the project-config spec plus the tracking
keyword set. The dashboard setup itself needs SEMrush account access and is the
owner/access step in the acceptance criteria.

- Domain: `riseroofingav.com`
- Business: Rise Roofing - service-area roofing company, Los Angeles County, CA
- Phone (NAP): `(818) 714-7330`
- Database/market: United States (`us`)
- Data date for all metrics below: 2026-06-07 (SEMrush US)
- Tracking keyword list: `docs/seo/riseroofingav-tracking-keywords.csv` (import-ready)

## 1. Create the SEMrush project

1. Projects -> Add new project.
2. Domain: `riseroofingav.com`. Project name: `Rise Roofing - riseroofingav.com`.
3. Enable the two tools this issue needs: Position Tracking and Site Audit.
4. (Recommended) Connect Google Search Console and GA4 (`G-71MTL144DV`) to the project
   so GSC keywords and real traffic feed Position Tracking and Organic Traffic Insights.

## 2. Position Tracking

### Campaign settings

| Setting | Value |
| --- | --- |
| Search engine | Google |
| Country | United States (google.com) |
| Location | Los Angeles, California, United States (city level) |
| Language | English |
| Business name | Rise Roofing (enables Local/Map Rank + branded SERP tracking) |
| Devices | Mobile and Desktop (see device note) |
| Update frequency | Weekly (matches the wave cadence) |
| Notification email | sales@avdesignandbuilds.com |

**Device note.** SEMrush Position Tracking collects one device + one location per campaign.
To satisfy the issue's "mobile + desktop" requirement, set up two campaigns on the same
project/domain with identical keywords and location - one **Mobile**, one **Desktop**. If a
plan campaign limit is tight, run **Mobile first** (local roofing intent is mobile-dominant)
and add Desktop when a slot frees up.

**Location note.** A single Los Angeles location tracks all 15 keywords correctly, including
the city-specific terms (Glendale / Santa Monica / Pasadena), because the city is in the
keyword text. Optional later refinement: add separate local campaigns pinned to Glendale,
Santa Monica, and Pasadena to see true in-city local-pack position for those geo terms.

### Keywords and tags

Import all 15 keywords from `docs/seo/riseroofingav-tracking-keywords.csv` (paste the
`Keyword` column, then apply the `Tags` shown). Tags double as Position Tracking filter
groups and map each keyword to its owning wave issue and landing page.

| # | Keyword | Cluster (tag) | Vol (US) | KD % | CPC (USD) | Landing page | Issue | Priority |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| 1 | commercial roofing los angeles | commercial | 720 | 18 | 20.33 | /services/commercial-roofing | AVD-298 | P1 |
| 2 | los angeles commercial roofing | commercial | 390 | 18 | 20.33 | /services/commercial-roofing | AVD-298 | P1 |
| 3 | commercial roofing contractors los angeles | commercial | 590 | 20 | 20.33 | /services/commercial-roofing | AVD-298 | P1 |
| 4 | roof leak repair los angeles | leak-repair | 210 | 6 | 24.35 | /services/roof-leak-repair* | AVD-300 | P1 |
| 5 | roof inspection los angeles | inspection | 210 | 8 | 32.74 | /services/roof-inspections | AVD-301 | P1 |
| 6 | flat roof repair los angeles | flat-roof | 170 | 10 | 0.00 | /services/flat-roof-repair* | AVD-302 | P1 |
| 7 | roofing glendale | city-geo | 210 | 14 | 23.25 | /service-areas/glendale | AVD-303 | P2 |
| 8 | roof repair glendale | city-geo | 90 | 13 | 32.80 | /service-areas/glendale | AVD-303 | P2 |
| 9 | roofing santa monica | city-geo | 140 | 20 | 37.59 | /service-areas/santa-monica | AVD-304 | P2 |
| 10 | roof repair pasadena | city-geo | 210 | 22 | 25.46 | /service-areas/pasadena | AVD-304 | P2 |
| 11 | emergency roof repair los angeles | emergency | 70 | 2 | 0.00 | /services/emergency-roofing | AVD-297 | P1 |
| 12 | roofing los angeles | head-term (deferred) | 1000 | 43 | 31.75 | /service-areas/los-angeles | AVD-297 | P3 |
| 13 | roof repair los angeles | head-term (deferred) | 1000 | 46 | 33.06 | /services/roof-repair | AVD-297 | P3 |
| 14 | roof repair near me | near-me | 74000 | 44 | 26.01 | /services/roof-repair | AVD-297 | P3 |
| 15 | roofing contractor near me | near-me | 33100 | 69 | 28.93 | / | AVD-297 | P3 |

`*` Pages 4 and 6 are new routes the wave will create (AVD-300, AVD-302). Until they ship,
the keyword is still tracked; interim relevant pages are `/services/roof-repair` (leak) and
`/services/commercial-roofing` (flat/low-slope, which already covers TPO / modified bitumen /
built-up systems).

Notes on the metrics:
- CPC `0.00` for keywords 6 and 11 is what the SEMrush US API returned (thin paid-search
  data), not a sign the term has no commercial value - both are strong low-KD organic wins.
- KD = SEMrush Keyword Difficulty (US, 2026-06-07).

### Priority bands

- **P1 - active wave, low difficulty, high impact:** commercial cluster (#1-3), roof leak
  repair (#4, KD 6 - the single easiest money term), roof inspection (#5, KD 8, high CPC),
  flat roof repair (#6, KD 10), emergency roof repair (#11, KD 2). Optimize on-page this wave.
- **P2 - active wave, city/geo:** Glendale / Santa Monica / Pasadena terms (#7-10). Win via
  the matching `/service-areas` pages.
- **P3 - track only:** deferred head terms `roofing los angeles` / `roof repair los angeles`
  (#12-13, KD 43-46, parked until domain authority builds) and the `near-me` terms (#14-15).
  Near-me queries are won mainly through Google Business Profile / local pack (prior phases),
  not on-page organic this wave - tracked for visibility, not actively targeted.

### Competitors (owner step)

Add up to 5 competitor domains so Position Tracking shows relative movement. Do not guess
them - identify real competitors via SEMrush -> Organic Research -> Competitors for
`commercial roofing los angeles` and `roof repair los angeles`, then add the top local
roofing domains.

### SERP features to watch

Local Pack, Reviews, Sitelinks, FAQ, and People Also Ask - all common on LA roofing SERPs
and relevant to the service/city/blog pages this wave is building.

## 3. Site Audit

### Crawl settings

| Setting | Value |
| --- | --- |
| Crawl source | Website - `riseroofingav.com` |
| Pages per audit | 100 (site is ~30 routes; raise to 500 only if needed) |
| Crawl schedule | Weekly (e.g., every Monday) |
| User agent | SiteAuditBot, Mobile (mobile-first) |
| JavaScript rendering | Enabled (Next.js App Router; SSR-first, but enable JS so any client content is crawled) |
| Connect | Point Site Audit at `https://riseroofingav.com/sitemap.xml` |
| Email report | sales@avdesignandbuilds.com |

### Crawl scope / exclusions

- Respect `robots.txt`. The site's `src/app/robots.ts` already sets
  `disallow: ["/admin", "/api/"]`, so the internal attendance/admin tool and API routes are
  out of scope by default.
- As defense in depth, also add Site Audit "Disallow" masks for `/admin` and `/api/` so the
  internal tool is never crawled even if robots changes.
- Confirm `SiteAuditBot` is not blocked before the first crawl; if a crawl returns 0 pages,
  allow the SEMrush bot or use the "Bypass disallow" + verified-domain option.

## 4. Baseline snapshot

Record these once the project is live so the wave's impact is measurable against a fixed
starting point.

### 4.1 Domain organic baseline (already captured - SEMrush Domain Overview, US, 2026-06-07)

| Metric | Value |
| --- | --- |
| Organic keywords | 4 |
| Estimated organic traffic | 0 / mo |
| Organic traffic cost | $0 |
| SEMrush rank | 20,705,919 |
| Authority Score | record from dashboard (not exposed via API export) |

Interpretation: brand-new/low-authority domain. Effectively none of the 15 tracked terms
rank yet, which is why the wave targets low-KD money terms first and defers head terms.

### 4.2 Position Tracking baseline (record after first data pull)

| Metric | Value (fill in) |
| --- | --- |
| Snapshot date | |
| Visibility % (Mobile) | |
| Visibility % (Desktop) | |
| Average position | |
| Keywords in top 3 / 10 / 20 / 100 | |
| Keywords ranking at all (of 15) | |
| SERP features captured | |

### 4.3 Site Audit baseline (record after first crawl)

| Metric | Value (fill in) |
| --- | --- |
| Crawl date | |
| Site Health % | |
| Pages crawled | |
| Errors | |
| Warnings | |
| Notices | |
| Top issues | |

## 5. Acceptance criteria status

- [x] Keyword list committed - `docs/seo/riseroofingav-tracking-keywords.csv`.
- [x] Config spec committed - this file.
- [ ] (Owner/access) Position Tracking + Site Audit configured in SEMrush dashboard.
- [ ] (Owner/access) Baseline snapshot recorded in sections 4.2 and 4.3.

## 6. How this connects to the wave

Each Position Tracking tag mirrors a sibling issue under AVD-297, so a single tag filter
shows whether that issue's page work is moving:

- `commercial` -> AVD-298 (`/services/commercial-roofing`, already merged to main)
- `leak-repair` -> AVD-300 (new `/services/roof-leak-repair`)
- `inspection` -> AVD-301 (`/services/roof-inspections`)
- `flat-roof` -> AVD-302 (new `/services/flat-roof-repair`)
- `city-geo` -> AVD-303 (Glendale), AVD-304 (Santa Monica, Pasadena)
- `emergency` -> existing `/services/emergency-roofing`
- `head-term` / `near-me` -> deferred; watch for organic lift as authority builds and as
  AVD-305 (toxic backlink disavow) and AVD-306 (cost/leak + commercial content) land.

Re-check Position Tracking weekly; after each sibling issue ships, confirm the matching
keyword group starts climbing.
