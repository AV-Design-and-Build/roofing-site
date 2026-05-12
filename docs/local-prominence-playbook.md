# Local Prominence Playbook

## GBP Audit Checklist

- Primary category: roofing contractor.
- Secondary categories: only add categories that match real services.
- Services: roof repair, roof replacement, roof inspections, emergency roofing, storm damage roofing, residential roofing, commercial roofing.
- Hours: confirm regular and holiday hours with the owner before publishing changes.
- Service area: use real service-area coverage; do not add fake offices.
- Phone: `(818) 714-7330`.
- Website: `https://riseroofingav.com/`.
- Address visibility: hide the public address if the business is operating as a service-area business without walk-in customer service.

## Review Request Cadence

- Ask after a completed job, successful inspection, or positive repair conversation.
- Use a short owner-approved message with the Google Business Profile review link.
- Track sent requests weekly.
- Do not create, rewrite, or invent reviews for the customer.
- Add verified review snippets to `/reviews` only after the real text is approved for display.

## Real Photo Checklist

- Exterior roof before work.
- Leak or damage detail, when safe and appropriate.
- Crew/work-in-progress photo with permission.
- Finished roof or repair area.
- Material/detail close-up.
- City/context photo that does not expose private information.
- Owner-approved alt text and caption.

## Citation And Profile Priority

Activate or normalize these first:

- Google Business Profile.
- Apple Business Connect.
- Bing Places.
- Yelp.
- BBB.
- Nextdoor Business.
- Angi/HomeAdvisor if the owner wants that lead channel.
- Local chamber or business association pages where membership is real.
- Supplier or manufacturer directories where Rise Roofing qualifies.

Hold for later:

- Low-quality directories with no real local prominence.
- Any profile requiring a fake address, fake office, or unsupported license claim.
- Sponsorships or partner pages that are not tied to a real relationship.

## Current Live Status

- Google Business Profile: canonical name, phone, website, and Southern California service areas are published. The owner-managed booking URL is `https://riseroofingav.com/estimate`, but Google still shows a third-party `calendly.com` provider link; Google Business Profile Support case `3-5405000041381` was submitted to remove it.
- Bing Places: canonical name, phone, website, hidden address, and Southern California service areas are synced from Google. `Nassau County, NY` no longer appears in Bing Basic Details after the post-publication re-sync.
- Yelp: moderator-reviewed `Suggest an edit` correction submitted for phone `(818) 714-7330` and website `https://riseroofingav.com/`; Yelp still shows `(323) 336-4612` until moderators verify/publish the change.
- Facebook: requires owner login or page access before the old `(323) 336-4612` data, `RiseRoofing.` name formatting, and Google-share URL can be changed. A correction request email was sent from `sales@avdesignandbuilds.com` to the page's public contact email `riseroofing9663@gmail.com` (Gmail sent message ID `19e1c4d13b612bec`).
- Apple Business Connect: Firecrawl and live browser confirmed Apple Business signup is reachable and supports virtual-business positioning, but the organization step still requires legal organization details and a mailing address. The agency/third-party option still keeps that legal organization/address gate in place. Do not submit Apple Business Connect until the owner supplies/approves the exact legal identity, mailing address, and Apple/agency account path. Evidence screenshot: `/tmp/rise-apple-agency-legal-address-gate.png`.
- BBB: exact search found no matching Rise Roofing profile; BBB `Add This Business` request submitted with canonical phone and website, pending local BBB review.
- MapQuest: support ticket `#3151908` was submitted and email-confirmed to correct the stale listing at `https://www.mapquest.com/us/california/rise-roofing-791247564`. The earlier `#3151882` verification link had expired, so the request was resubmitted and verified. Evidence screenshots: `/tmp/rise-mapquest-resubmit-filled.png` and `/tmp/rise-mapquest-email-confirmed.png`. Gmail confirmation message ID: `19e1c7fb70ff272c`.
- Yahoo Local: the stale listing at `https://local.yahoo.com/info-240067109-rise-roofing-los-angeles/` still shows `(323) 336-4612`. Its `Verify your listing` path routes to YellowPages and returned a Cloudflare `Sorry, you have been blocked` page from this environment; evidence screenshot saved at `/tmp/rise-yellowpages-cloudflare-block.png`. Yahoo's fallback UserVoice feedback form has a `False or incorrect content` category but requires Yahoo sign-in. YellowPages' general contact form includes reCAPTCHA and did not confirm a ticket without a valid CAPTCHA token. A correction request was sent to `support@thryv.com` with Gmail sent message ID `19e1c590b26695a1`, Thryv's public Contact Us form returned a confirmed thank-you message for the same request, and Thryv Support emailed back that the request was received and is being reviewed; evidence screenshot saved at `/tmp/rise-thryv-contact-submitted.png`, Thryv confirmation Gmail message ID `19e1c6217e7acd2c`. A Thryv Success Specialist then replied that the request was shared with the proper team; Gmail message ID `19e1c6e21c9603cf`.
- Nextdoor Business: public searches found no existing Rise Roofing business page or old-phone match. Nextdoor's create-business path starts with creating/logging into a Nextdoor business account, and its support contact path is login-gated. Nextdoor's verification docs say business verification may require call/text or current business documents, and mobile/home-service businesses should use an address that matches documentation while optionally hiding it. Do not create a Nextdoor Business page until the owner supplies/approves the account path, verification documents, and business/mailing address to use.

## Owner Unblock Checklist For AVD-121

- Yelp: wait for the moderator-reviewed correction to publish, or provide Yelp owner/claim access for `Rise Roofing` so phone and website can be edited directly.
- Facebook/Calendly: provide Page access for `RiseRoofing.` or have the current page owner update the phone, website, name formatting, and booking link. Facebook's own help says only people with Page access can update Page information: `https://www.facebook.com/help/160672070698623/`.
- Apple Business Connect: provide the owner-approved legal organization name, business email, mailing address, Apple account or agency account path, and confirmation about whether the address may be used for verification only or may appear publicly.
- Nextdoor Business: provide an owner-approved Nextdoor business account path plus verification documents. Nextdoor's public business-page guidance says business pages must be created or claimed by an owner, employee, or authorized representative, and its verification guidance may require current business documents: `https://business.nextdoor.com/en-us/getting-started/business-page?hsLang=en`.
- BBB: wait for local BBB review, or provide any BBB support reply/request ID if they ask for more proof.
- Yahoo/YellowPages/Thryv: wait for Thryv/Yahoo/YP support to publish the correction, or provide a Yahoo/YellowPages/Thryv owner login if the support route stalls.
- Google Business Profile Calendly provider: wait for Google support case `3-5405000041381`, or provide access to the real Rise Roofing Calendly account behind `calendly.com/riseroofing9663`.
- Public-address rule: do not publish a storefront address unless the owner explicitly approves the exact address and confirms that it is appropriate for public citation use.

## Citation Recheck Command

- Run `npm run check:citations` to recheck the controlled site and stale external citation URLs.
- The command writes a dated JSON report under `tmp/citation-rechecks/`, which is ignored by git.
- The controlled Rise Roofing URLs fail the command if canonical NAP disappears or stale phone data appears.
- External URLs are reported as `STALE`, `BLOCKED`, `PENDING`, or `OK` without failing the command, because Yelp, Yahoo, MapQuest, and similar platforms can block automated requests or wait on human review.

## Access Audit

- Available vault checked: `AV Design`.
- Vault coverage checked: all 82 items, including non-concealed field labels/URLs.
- No hidden owner credentials were found for Yelp, Facebook/Meta, Apple/iCloud, BBB, MapQuest, Yahoo, YellowPages, Nextdoor, or Rise-specific directory accounts.
- The saved Calendly token belongs to the `proairchimney` account, not the `calendly.com/riseroofing9663` account that still appears on GBP.
- Do not create new citation accounts with guessed legal entity data or a fake publishable address. Use the business owner's Apple/Facebook/Yelp/BBB access or an owner-approved legal address and verification path.
