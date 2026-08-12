# Detailz Matter, LLC — detailzmatter-website-repo

Static website for **Detailz Matter, LLC**, Logan Heun's premium auto detailing
business in Ramsey, Indiana. Replaces the near-empty GoDaddy template currently at
https://detailzmatter.co/. Built 2026-08-05 with the `service-website-builder` skill.

Plain HTML/CSS/JS, no build step. Pages: `index.html`, `services.html`,
`gallery.html`, `about.html`, `contact.html`, plus `404.html`. Shared `style.css`
and `main.js`, images in `img/`, originals preserved in `source-photos/`.

**Positioning:** corrective repair first (paint correction / scratch repair), then
ceramic coating (Logan is a DuraSlic certified installer, cert dated 09/13/2025 and
shown on the About page), interior detailing, and exterior wash & detail. Mobile
and shop service. Phone: (812) 621-6478 (from the Facebook page).

## Run locally

```bash
python -m http.server 8144 --directory .
```

Or `preview_start({name: "detailzmatter"})` from the root `launch.json`.

## Check before committing

```bash
python ../site-checks/check_site.py .
```

## Hosting

Published to GitHub Pages from `main` / root at
`https://alexharper24.github.io/detailzmatter-website-repo/` (public URL for Logan's
review; draft mode keeps it out of search). Note: `404.html` uses root-relative
links by design, so it only fully works once the custom domain is attached.

## Draft mode — currently ON

Every page carries `<meta name="robots" content="noindex,nofollow">` and
`robots.txt` is `Disallow: /`. The site can be pushed to GitHub Pages for Logan to
review without search engines indexing placeholder content. **At launch:** remove
the noindex line from every page (grep for `DRAFT MODE`) and flip `robots.txt` to
`Allow: /`.

## Pending — needs real information before launch

- [ ] **Business name question:** `source-photos/brand/logo alternate.jpg` is a
      different brand, "HEUN'S AUTO DETAILING", and Logan's July 2025 Facebook post
      refers to "Heun's premium". Site is built as **Detailz Matter, LLC** (matches
      the Facebook page, LLC, and domain). **Ask Logan which name is current** before
      launch.
- [ ] **Formspree form ID** — `contact.html` posts to `YOUR_FORM_ID` (guarded: shows
      a friendly call-us message until configured). Create the form at formspree.io,
      replace the ID, and remember the first submission needs a one-time email
      confirmation click. Free tier is 50 submissions/month.
- [ ] **Logan's story** — two `[REPLACE THIS: ...]` placeholders, on `index.html`
      (About teaser) and `about.html` (The Story). Get 2–3 short paragraphs from
      Logan in his own words. Do not invent details. His portrait
      (`img/logan-heun.jpg`) is in place on the About page.
- [ ] **Job groupings are provisional** — see [`JOB-GROUPS.md`](JOB-GROUPS.md).
      Grouped by Facebook upload batch, which is not the same as "one vehicle."
      Vehicle makes/models are deliberately not claimed on the site except the
      Lincoln Navigator, which Logan named himself. Alex is sending screenshots
      grouped per job; fill in JOB-GROUPS.md, then rebuild the cards in
      `gallery.html`. Three jobs added 2026-08-12 (Corvette Z06, Lifted Ford Super
      Duty, Gray SUV) **are** trusted groupings, because Alex named them.
- [ ] **Service on the two new exterior cards** — the Corvette Z06 and Gray SUV cards
      say "Exterior Detail" because every photo of those jobs is an exterior shot.
      That describes the photos, not a confirmed service. Ask Logan whether either was
      really a full detail, a wash, or a correction, and change the tag if so.
- [ ] **Reviews: confirm the presentation.** Four Facebook recommendations are on
      the homepage as `Nicholas H.` / `Colton S.` / `Landon S.` / `Easton S.` with
      month and year. Decisions Logan should sign off on:
      - **Names are shortened to first name + last initial** (privacy default).
        He may prefer full names as they appear publicly on Facebook.
      - **Nicholas H.'s review is truncated on Facebook** ("... See more"), so only
        the visible portion is quoted. Get the full text if he wants it complete.
      - **Two light punctuation edits were made.** Nicholas's em dash became a
        period (house style: no em dashes in copy), and Colton's "did and awesome
        job" was corrected to "did an awesome job". Both are revertible.
      - **No star ratings are shown**, because Facebook recommendations are not a
        5-star scale. Nicholas typed five star characters into his text; that is
        his formatting, not a platform rating.
      - **No `Review`/`aggregateRating` JSON-LD was added.** Google discourages
        marking up reviews copied from a third-party site, and it risks a
        structured-data penalty. Genuine on-site reviews could be marked up later.
- [ ] **Email address** — none published anywhere yet. Logan has not provided one.
      Add to contact page + footer + JSON-LD when he does.
- [ ] **Hours** — contact page says "By appointment. Call or text to schedule."
      Confirm with Logan or replace with real hours.
- [ ] **Service area radius** — currently "Ramsey, Indiana and the surrounding
      area". Ask Logan how far mobile service actually travels.
- [ ] **Shop address** — deliberately not published (home-based rules apply until
      confirmed otherwise). If the shop is a commercial location Logan wants public,
      add it to the contact page and JSON-LD.
- [ ] **Pricing** — everything is quote-based by design. Confirm that is how Logan
      wants it.
- [ ] **Better photos** — Logan is sending formal photos later. Current gallery uses
      photos pulled from his Facebook page. Swap in higher quality originals when
      they arrive; filenames in `img/` are semantic so swaps are one-line changes.
- [x] **Before/after flip cards are live.** Our Work is one `.jobcard` per vehicle
      per visit: a lead photo, a scrollable thumbnail strip of the rest of that job,
      and a lightbox whose arrows stay inside that one job. Filters hide whole cards.
      Three confirmed interior pairs render as **flip cards** (`.flip`, before on the
      front, after on the back, tap or Enter to flip) inside a `.jobcard.feature`
      that spans the full row. Flip cards are the chosen presentation; the
      side-by-side variant was removed rather than left as dead code. Paste-ready
      markup is in a comment above the job cards in `gallery.html`.
- [ ] **Correction before/after still undesignated.** Grouping for the two
      correction jobs is confirmed, but nobody has said which photo is the before and
      which is the after, so those stay photo sets. The question is staged on
      [`before-after-preview.html`](before-after-preview.html) (noindex, excluded from
      checks and sitemap). Delete that page once answered. Pairing is never done by
      visual inspection alone.
- [ ] **Domain cutover** — detailzmatter.co currently points at a GoDaddy site
      builder which includes a booking feature. Replacing it loses GoDaddy bookings;
      the new site uses a quote-request form + phone instead. Confirm Logan is fine
      with that. GitHub Pages custom-domain steps: set custom domain in Pages
      settings first, then DNS (apex A records 185.199.108–111.153, `www` CNAME to
      alexharper24.github.io), then Enforce HTTPS.
- [ ] **Off-site SEO at launch** — Google Business Profile for "Detailz Matter,
      Ramsey IN", Search Console + sitemap submission, link the site from the
      Facebook page.
- [ ] **Analytics** — no tag yet; add GA4 or Cloudflare Insights to every page if
      Logan wants traffic data.

## Deliberate decisions (do not "fix" back)

- **Draft mode** as above, until placeholders are resolved.
- **Dark navy + gold palette** is drawn from the actual badge logo. Deliberately
  dark-themed sections; the light-mode-lock dark-scheme override block protects
  `.nav`, `.hero`, `.section-dark`, `.stats`, `.side-card`, `.cta-ribbon`, and
  `footer.site` as intentionally dark.
- **Gallery captions are service-generic** ("SUV interior detail") rather than
  naming vehicle models, except the Lincoln Navigator, which Logan's own Facebook
  post identifies. No conclusions drawn from photos alone.
- **`logo alternate.jpg` (Heun's Auto Detailing) is unused but preserved** in
  `source-photos/brand/`. Never delete logo assets.
- **Quote-based pricing, no price list** — matches how Logan operates on Facebook.

## Assets

- `img/` — web-optimized (Pillow, progressive JPEG q72): gallery ~700px,
  features ~1100px, hero 1600px. `logo.png` is the badge cut to a transparent
  circle from `source-photos/brand/logo.jpg`; `favicon.ico` (root) + `img/favicon.png`
  + `img/apple-touch-icon.png` derive from it.
- `source-photos/` — untouched originals pulled from the Facebook page, including
  the four unplaced interior "before" shots and the alternate logo.
