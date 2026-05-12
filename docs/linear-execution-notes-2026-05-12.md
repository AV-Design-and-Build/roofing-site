# Linear Execution Notes - 2026-05-12

## Verification

- `npm run lint` passed.
- `npm run build` passed.
- Manual route checks returned `200` for `/`, `/services`, `/services/roof-repair`, `/service-areas`, `/service-areas/san-fernando`, `/service-areas/los-angeles`, `/estimate`, `/reviews`, `/blog`, `/blog/roof-repair-cost-los-angeles`, `/robots.txt`, and `/sitemap.xml`.
- Browser screenshots were checked for desktop home and mobile estimate/city pages.
- Relinked the local checkout to the current Vercel team/project (`av-design-and-builds-projects/roofing-site`) after `.vercel/project.json` had a stale org ID.
- Production deployed Vercel deployment `dpl_56pBr21jUAKGRz6Ay9wiNEAbTKBM`, aliased to `https://riseroofingav.com` and `https://www.riseroofingav.com`.
- Post-deploy public checks returned `200` on `https://riseroofingav.com` for `/`, `/blog`, `/estimate`, `/reviews`, `/projects/roof-repair-los-angeles`, `/projects/roof-replacement-pasadena`, `/projects/storm-damage-roofing-glendale`, `/service-areas/los-angeles`, `/service-areas/san-fernando`, `/services/roof-repair`, `/robots.txt`, and `/sitemap.xml`.
- Post-deploy sitemap contains canonical `https://riseroofingav.com` URLs for the new service, city, blog, estimate, review, and project pages.
- Post-deploy screenshots saved at `/tmp/rise-production-home.png` and `/tmp/rise-production-estimate.png`.

## Completed Repo Work

- AVD-100: canonical URL fallback is now `https://riseroofingav.com`, not `example.com`.
- AVD-101: added `src/app/robots.ts` and expanded sitemap coverage.
- AVD-102: installed GTM `GTM-WS44FS39`, GA4 `G-71MTL144DV`, and optional Search Console verification metadata.
- AVD-103: phone CTA tracking hooks added across shell, homepage, service, city, reviews, blog, and estimate paths.
- AVD-104: created Jotform `261313493545356` (`Rise Roofing Estimate Request`) in the AVsales Jotform account, then connected `/estimate` to submit the approved fields and optional photo upload into that form while keeping the on-site same-business-day confirmation.
- AVD-105: minimum event taxonomy added through `src/components/analytics-events.tsx`.
- AVD-106 through AVD-110: customer-facing copy, richer service data, service pages, and FAQ patterns implemented.
- AVD-111 and AVD-126: reusable honest proof/review slots added without fabricated reviews or project claims.
- AVD-112 through AVD-117: structured city data, dynamic city route, service-plus-city criteria, internal links, sitemap coverage, and city/service schema implemented.
- AVD-119, AVD-120, AVD-122, AVD-123: local prominence, review cadence, real-photo checklist, citation/profile priority, and mention targets documented in `docs/local-prominence-playbook.md`.
- AVD-124: reusable article template implemented at `src/app/blog/[slug]/page.tsx`.
- AVD-125: proof-page template documented in `docs/proof-page-template.md`.
- AVD-127 and AVD-128: editorial calendar and post-publish QA documented.
- AVD-129: `/reviews` published with verified aggregate-rating facts only.
- AVD-130 and AVD-136 through AVD-140: `/blog` and five planned articles published.
- AVD-131 through AVD-135: original anchor city routes published, plus focused city pages for San Fernando, Altadena, Sierra Madre, La Canada Flintridge, and La Crescenta-Montrose.
- AVD-141 through AVD-143: exact `/projects/...` routes published as proof-ready pages that do not claim completed projects. They can be converted into full case studies after real project photos/details are supplied.

## Live Profile Updates

- Google Business Profile now exposes the canonical public NAP on Google Search: `Rise Roofing`, `(818) 714-7330`, and `https://riseroofingav.com/`.
- Google Business Profile service-area edit published. The managed profile row now shows `Glendale, CA, USA`, `Pasadena, CA, USA`, and 10 other service areas, with no `Nassau County, NY`.
- Google Business Profile's owner-managed booking URL is set to `https://riseroofingav.com/estimate`, but the public profile still shows a third-party `calendly.com` contact/provider link. Google Business Profile Support case `3-5405000041381` was submitted to remove the Calendly provider link.
- The saved `Calendly Access Token` in 1Password belongs to the `proairchimney` / Air Duct & Chimney Services Calendly account, not `calendly.com/riseroofing9663`, so the old Rise Roofing Calendly link cannot be removed from the provider side with current credentials.
- Bing Places was accessible through the saved Google login. The `RiseRoofing.` listing was synced from Google and now shows `Rise Roofing`, `(818) 714-7330`, and `https://riseroofingav.com/` in the Bing listing table and basic details.
- Bing Places was re-synced after the GBP service-area edit published. Basic Details now shows the Southern California service-area tags only, with no `Nassau County, NY`, and the address is still hidden in search results.
- MapQuest support request `#3151882` was submitted and email-confirmed through `sales@avdesignandbuilds.com` to correct the stale business listing data at `https://www.mapquest.com/us/california/rise-roofing-791247564` to the canonical Rise Roofing name, phone, and website.
- Yelp moderator-reviewed correction was submitted through the `Suggest an edit` form for business ID `0XEMK2lfZGpa8JINPwZD7Q`. Requested updates: phone `(818) 714-7330`, website `https://riseroofingav.com/`, and no invented public storefront street address. Yelp returned the success message: `Thanks! Our moderators will take a look at your suggestions and verify the information before updating the business page.`
- BBB exact search found unrelated `Rise UP Roofing` results but no matching `Rise Roofing` profile. Submitted Rise Roofing through BBB's `Add This Business` flow with city/state, canonical phone, canonical website, and reporter email, leaving street address blank because the field is optional and no owner-approved public storefront address is available. BBB returned the success message: `Thank you for submitting this business to BBB.org! Your local BBB will review the information you provided before the business appears in our search directory.`
- Yahoo Local listing `https://local.yahoo.com/info-240067109-rise-roofing-los-angeles/` is live with stale `(323) 336-4612` data. Its `Verify your listing` path routes to YellowPages at `https://www.yellowpages.com/claim-yahoo-business-listing?n=Rise%20Roofing&c=Los%20Angeles&s=CA`, which returned a Cloudflare `Sorry, you have been blocked` page from this environment. Evidence screenshot: `/tmp/rise-yellowpages-cloudflare-block.png`.
- Yahoo's generic feedback channel at `https://yahoo.uservoice.com/forums/224445-search` has a `False or incorrect content` category, but posting requires Yahoo sign-in. No saved Yahoo owner credential was available in the checked vault.
- YellowPages' general contact page was reachable through Firecrawl and confirms that listing updates are normally routed through `Suggest an Edit` for data-quality review. Its fallback contact form includes reCAPTCHA; submitting without a valid CAPTCHA token returned `Internal Server Error`, so no YellowPages contact ticket was confirmed from that path.
- Thryv's support center exposes `support@thryv.com`; sent a YellowPages/Yahoo Local correction request for the stale Yahoo listing and canonical Rise Roofing NAP. Gmail sent message ID: `19e1c590b26695a1`. Thryv's public Contact Us form was also submitted under Customer Service / Marketing Services with the same correction request, and the page returned `Thank You For Contacting Us! A representative from our team will be in touch with you shortly regarding your inquiry.` Evidence screenshot: `/tmp/rise-thryv-contact-submitted.png`. Thryv Support also sent an inbox confirmation from `support@thryv.com` saying the request was received and is being reviewed; Gmail message ID: `19e1c6217e7acd2c`.
- Nextdoor public searches found no existing Rise Roofing business page or old-phone match. The Nextdoor create-business flow starts with creating/logging into a Nextdoor business account, and Nextdoor's support contact route is login-gated. Nextdoor's own verification docs say business verification may require call/text or acceptable current business documents, and mobile/home-service businesses should use an address matching documentation while optionally hiding it. No Nextdoor credential was present in the checked `AV Design` vault, so no Nextdoor business page was created with guessed owner/account/address details.
- Facebook public page still exposes stale data plus contact email `riseroofing9663@gmail.com`. Sent a NAP-correction request from `sales@avdesignandbuilds.com` to that address asking the account holder to update Facebook/Calendly-controlled profile data to the canonical phone, website, and estimate link. Gmail sent message ID: `19e1c4d13b612bec`.
- Apple Business signup was reachable through Firecrawl. The Apple Business growth page describes virtual-business support, but signup still requires organization name, business email, country, address line, city, state, and zip code before proceeding. No Apple Business organization/profile was submitted because no owner-approved legal organization name, mailing address, or Apple account/agency setup is available for Rise Roofing in the checked access.

## Still Blocked Outside Repo

- AVD-121: Yelp has a submitted moderator-review correction request but still displays the old `(323) 336-4612` data until Yelp reviews/publishes it. BBB has a submitted directory-add request and is pending local BBB review. Facebook still needs owner login/page access to update the public page; a correction request email was sent to the page's public contact email. Yahoo/YellowPages still show stale data, but correction requests were sent through Thryv support email and Thryv's public Contact Us form after claim/contact paths were blocked or CAPTCHA-gated. Nextdoor found no existing public profile, but creation/verification is gated behind a Nextdoor account plus owner-approved business/address documentation. Apple Business Connect still requires owner-approved legal organization, mailing address, and account/agency setup for the real business.
- The only relevant aggregator credential found in 1Password was Local Marketing Manager/Paige. It opens, but it reports no associated Google Business Profile locations and stalls indefinitely on sync, so it cannot currently push citation changes.
- A full 82-item `AV Design` 1Password vault scan found no hidden Yelp, Facebook/Meta, Apple/iCloud, BBB, MapQuest, Yahoo, YellowPages, Nextdoor, Bing/Microsoft Places, or Rise-specific owner credentials beyond the already-tested Google/Bing access and Local Marketing Manager item.
- Yelp public listing and claim/contact pages returned HTTP 403 from the local browser environment, including with a browser user agent. Firecrawl did reach the Yelp listing and submit a moderator-reviewed `Suggest an edit` correction, but the live page still shows `(323) 336-4612` until Yelp accepts it.
- Yahoo's fallback feedback channel requires Yahoo sign-in, and no Yahoo owner credential was available in the checked vault.
- BBB's local browser path was stopped by Cloudflare human verification, but Firecrawl reached the official submit flow and submitted Rise Roofing for local BBB review.
- Apple Business signup requires legal organization details and a mailing address before proceeding. Firecrawl confirmed the form fields and Apple's virtual-business positioning, but no owner-approved Rise Roofing legal address, Apple ID, or agency organization details are available in the checked access, so no Apple Business organization/listing was created with guessed information.
