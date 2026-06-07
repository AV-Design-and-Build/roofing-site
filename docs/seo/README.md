# Backlink Disavow — riseroofingav.com

Protective cleanup of a toxic backlink profile. A previous link purchase
produced **18 backlinks across 15 referring domains, 0 followed (all
nofollow), Authority Score 0**, with fake Fiverr testimonial anchors
(e.g. "{riseroofingav.com}'s DA rose from 20 to 45 thanks to fiverr").
These links add zero ranking value and carry penalty risk, so all 15
referring domains are disavowed.

- Disavow file: [`disavow.txt`](./disavow.txt) — 15 `domain:` lines.
- Source: SEMrush backlink audit.
- Tracking: Linear AVD-305.

## Standing Rule — Stop Buying Cheap Links

**Do not purchase Fiverr / cheap / PBN backlinks.** They are nofollow,
worthless for ranking, and create disavow-and-cleanup work plus penalty
exposure. Earn links through real content, local citations (NAP), and
genuine partnerships instead. If a new batch of toxic links appears in a
future SEMrush audit, add the new domains to `disavow.txt` and re-upload.

## Upload Steps — Google Search Console Disavow Links Tool

Requires Search Console access to the `riseroofingav.com` property (owner
or full permission). The file generation is done; this upload is the
manual, access-gated step.

1. Confirm `riseroofingav.com` is a **verified property** in Google
   Search Console. If only the `https://` URL-prefix property is
   verified, verify the domain property too so the disavow covers
   `http`/`https` and all subdomains.
2. Open the Disavow Links Tool directly:
   https://search.google.com/search-console/disavow-links
3. Select the `riseroofingav.com` property from the dropdown.
4. If a disavow file already exists for the property, click **Cancel
   Disavowals** / download the current list first, merge in any entries
   you want to keep, then re-upload the combined file. Uploading
   **replaces** the entire previous list — it is not additive.
5. Click **Upload**, choose this repo's `docs/seo/disavow.txt`, and submit.
6. Google shows a confirmation and may take a few weeks to recrawl and
   reprocess the disavowed domains. No further action is needed; disavow
   is "set and forget" unless new toxic links appear.

### Notes

- Keep `docs/seo/disavow.txt` as the single source of truth. Edit it here
  and re-upload rather than editing in the GSC UI, so the committed file
  always matches what Google has.
- Comment lines (starting with `#`) are allowed and ignored by Google.
- The file must be plain text, UTF-8 or 7-bit ASCII, one URL or
  `domain:` directive per line.

## Acceptance Checklist

- [x] `disavow.txt` committed with all 15 `domain:` lines.
- [x] GSC upload steps documented (this file).
- [ ] File uploaded to GSC and confirmed (owner/access — manual step).
