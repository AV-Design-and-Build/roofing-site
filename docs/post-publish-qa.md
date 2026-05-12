# Post-Publish QA

Use this checklist after publishing any new service, city, review, estimate, blog, or proof page.

## Crawl And Indexing

- Open the public URL and confirm it returns `200`.
- Confirm `https://riseroofingav.com/sitemap.xml` includes the route.
- Confirm `https://riseroofingav.com/robots.txt` references the sitemap and does not block normal indexing.
- Submit or inspect the URL in Search Console when the `riseroofingav.com` property is verified.

## Schema

- Validate the page JSON-LD with Rich Results Test or Schema Markup Validator.
- Confirm service pages include `Service`, `FAQPage`, and `BreadcrumbList`.
- Confirm city pages include `RoofingContractor`, `Service`, `FAQPage`, and `BreadcrumbList`.
- Confirm blog pages include `Article`, `FAQPage`, and `BreadcrumbList`.
- Confirm reviews page uses only verified aggregate rating facts.

## Internal Links

- Confirm header/footer links reach `/estimate`, `/reviews`, `/blog`, `/services`, and `/service-areas`.
- Confirm service pages link to relevant city pages.
- Confirm city pages link back to relevant service pages.
- Confirm blog posts link to phone and estimate CTAs.

## Tracking

- Confirm GTM container `GTM-WS44FS39` is present on public pages.
- Confirm GA4 measurement ID `G-71MTL144DV` is configured through GTM or direct data-layer setup.
- Confirm `phone_click`, `quote_form_submit`, `gbp_click`, `service_page_view`, and `city_page_view` events appear in debug tools.
- Confirm `/estimate` submits into Jotform `261313493545356` unless `NEXT_PUBLIC_JOTFORM_ESTIMATE_FORM_ID` is intentionally overridden.
