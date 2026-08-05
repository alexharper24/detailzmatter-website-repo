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
      Logan in his own words. Do not invent details.
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
- [ ] **Before/after pairs** — `source-photos/work/` holds several "dirty interior"
      shots (526580188, 526771238, 527380167) that were deliberately NOT placed;
      pairing before/after photos by visual inspection is not done here. If Logan
      confirms which befores match which afters, add a before/after section.
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
