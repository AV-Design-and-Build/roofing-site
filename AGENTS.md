# Repository Guidelines

## Project Snapshot

This repository is a Next.js 16 App Router project with two connected surfaces:

- A public roofing marketing site for Rise Roofing.
- An internal attendance/admin workflow for clock-in, edit approvals, CSV export, and weekly report delivery.

The public site and the attendance tool share the same app shell, styling stack, and deployment target, so changes in one area can affect the other.

## Architecture Map

- `src/app/`
  - `page.tsx` is the marketing homepage.
  - `services/page.tsx`, `services/[slug]/page.tsx`, and `service-areas/page.tsx` power the marketing page stack.
  - `admin/page.tsx` is the protected attendance dashboard.
  - `actions.ts` contains server actions for auth/session logout, clock in/out, edit requests, and report sending.
  - `api/auth/google/route.ts` handles Google credential login.
  - `api/reports/export/route.ts` returns the weekly CSV export.
  - `api/reports/weekly/route.ts` sends the completed-week report for admin or cron callers.
- `src/lib/site-config.ts`
  - Main source of truth for business identity, service definitions, featured cities, metadata text, trust signals, and brand asset paths.
  - Prefer updating this file before scattering business copy across page components.
- `src/lib/attendance/`
  - `config.ts` reads attendance-related environment variables.
  - `auth.ts` verifies Google credentials and manages the signed session cookie.
  - `store.ts` is the file-backed persistence layer for users, time entries, edit requests, and report runs.
  - `selectors.ts`, `time.ts`, and `reports.ts` provide derived data, week/date helpers, and reporting behavior.
- `src/components/`
  - Shared layout/navigation plus attendance form helpers.
- `public/`
  - `public/site/` contains marketing imagery.
  - `public/brand/` contains logos and brand assets.
- `data/attendance-store.json`
  - Local JSON datastore for the attendance system.

## Stack And Conventions

- TypeScript is strict. Keep types explicit when shaping data across routes, server actions, and store utilities.
- Use the `@/*` path alias from `tsconfig.json` for imports from `src/`.
- Styling is Tailwind CSS v4 plus `src/app/globals.css`.
- Fonts are configured in `src/app/layout.tsx` with `Bebas Neue` for headings and `Manrope` for body copy.
- ESLint uses the flat config in `eslint.config.mjs` with `eslint-config-next` core-web-vitals plus TypeScript rules.
- Favor Server Components and server actions unless client behavior is actually required.

## Working Rules

- Prefer small, focused changes that preserve the current structure and naming.
- Do not overwrite or revert user changes unless the user explicitly asks.
- Use `apply_patch` for manual edits.
- Keep new content ASCII unless the target file already uses non-ASCII text.
- Avoid editing generated or temporary folders such as `.next/`, `node_modules/`, and most files under `tmp/` unless the task depends on them.

## Marketing Site Guardrails

- Treat `src/lib/site-config.ts` as the first place to look when changing services, city coverage, trust bar items, FAQs, phone numbers, brand assets, or business metadata.
- Keep the current visual language intact: strong uppercase display headings, warm neutral backgrounds, dark blue brand anchors, and gold accent highlights.
- Reuse `next/image` for marketing imagery and keep new assets under `public/site/` or `public/brand/`.
- When updating metadata or structured data, keep it aligned with `siteConfig` so the site does not drift into conflicting business details.
- Avoid inventing operational claims that are not backed by configuration or existing content, especially around service areas, review counts, response times, and emergency availability.

## Attendance And Admin Guardrails

- Do not bypass helpers in `src/lib/attendance/time.ts` when working with date keys, time keys, week ranges, or timezone-sensitive calculations.
- Do not write directly to `data/attendance-store.json` from page code or routes. Go through `src/lib/attendance/store.ts`.
- Preserve the write queue pattern in `store.ts`; it protects the JSON store from overlapping writes.
- Keep admin-only behavior behind `getAdminSessionUser()`.
- Treat `/api/reports/weekly` as a side-effecting route. Changes there can affect email and WhatsApp delivery.
- The attendance module is branded as `Airduct Hours` / `Airduct` in `src/lib/attendance/config.ts`; do not silently rename that unless the task explicitly includes rebranding.

## Environment Variables

Public and shared:

- `NEXT_PUBLIC_SITE_URL`

Attendance/auth/reporting:

- `ATTENDANCE_TIMEZONE`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_HOSTED_DOMAIN`
- `ADMIN_EMAIL`
- `SESSION_SECRET`
- `REPORT_EMAIL_FROM`
- `REPORT_EMAIL_TO`
- `RESEND_API_KEY`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_WHATSAPP_FROM`
- `TWILIO_WHATSAPP_TO`
- `REPORTS_CRON_SECRET`
- `CRON_SECRET`

If a change depends on one of these values and it is missing locally, say so clearly in the handoff.

## Common Commands

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`

## Verification Expectations

- Run `npm run lint` for code changes when practical.
- Run `npm run build` for changes that affect routing, metadata, API routes, server actions, auth, or config.
- Manually verify the relevant routes when UI or flow behavior changes. Common routes:
  - `/`
  - `/services`
  - `/services/[slug]`
  - `/service-areas`
  - `/admin`
- There is no dedicated automated test suite in this repo right now, so lint, build, and targeted manual checks are the main safety net.

## Useful Change Patterns

- New marketing service:
  - add the service definition in `src/lib/site-config.ts`
  - confirm it renders correctly in `/services` and `/services/[slug]`
  - update metadata or supporting copy only where needed
- Attendance workflow changes:
  - trace the flow through `src/app/actions.ts`, `src/lib/attendance/store.ts`, and `src/lib/attendance/selectors.ts`
  - verify both employee and admin outcomes
- Reporting changes:
  - inspect `src/lib/attendance/reports.ts` plus both report API routes
  - be careful with delivery side effects and cron authentication

## Before You Finish

- Re-read the diff for accidental copy drift or duplicated business facts.
- Note any env vars, manual steps, or delivery integrations you could not validate locally.
- Mention clearly if lint/build/manual verification was skipped.
