# Job groupings worksheet

Working file for correcting the Our Work page. Fill this in (or send screenshots
grouped per job and I will fill it in), then `gallery.html` gets rebuilt from it.
Delete this file once the groupings are settled.

## Why this file exists

The first pass grouped photos by **Facebook upload batch**, which reliably means
"posted the same day" but does **not** mean "same vehicle." The 925230/925231 batch
alone contains at least three different vehicles. Vehicle makes and models were also
guessed from the photos, which is not reliable and is why the current cards use
generic descriptions ("Crew Cab Truck", "Compact SUV") rather than naming models.

Only one grouping is confirmed: the **Lincoln Navigator** card, because Logan named
that vehicle in his own Facebook post text.

## Format for each job

```
### Job: <short title, e.g. "F-150 paint correction">
Service:  correction | interior | exterior | full detail   (one or more)
Vehicle:  <year make model, or "do not publish the model">
Photos:   <filenames from img/, in display order; first one is the card's lead image>
Before:   <filename>   (optional, only if confirmed same vehicle + same visit)
After:    <filename>   (optional, must pair with the Before above)
Notes:    <anything worth saying in the card footer>
```

`Before`/`After` become a flip card at the top of that job's card. Leave them blank
if unsure. A job can have more than one before/after pair; list extra pairs as
`Before 2:` / `After 2:`.

## Current photo inventory

All files live in `img/`. Every one of these is already committed and optimized, so
regrouping is only an HTML edit, no image work.

**Correction (6)** — before/after is now encoded in the filename
`correction-red-before-1` `correction-red-before-2` (the two showing swirls)
`correction-red-after-1` `correction-red-after-2` (the two corrected)
`correction-truck-before` `correction-truck-after`

**Interior, clean (12)**
`interior-cloth-1` `interior-cloth-2` `interior-cloth-3` `headliner-1` `headliner-2`
`navigator-seats` `navigator-dash` `navigator-rear-seats` `navigator-door`
`navigator-door-2` `navigator-cargo` `mustang-interior`

**Interior, soiled / candidate befores (3)**
`interior-before-1` `interior-before-2` `interior-before-3`

**Truck / SUV interiors (9)**
`tundra-interior-front` `tundra-driver` `tundra-steering` `tundra-rear-seats`
`bronco-interior` `bronco-seats-1` `bronco-seats-2` `bronco-dash` `bronco-door`

**Exteriors (17)**
`navigator-side` `navigator-front` `navigator-profile` `tundra-profile` `tundra-front`
`bronco-rear` `range-rover-front` `range-rover-rear` `range-rover-garage`
`mustang-red-profile` `mustang-red-door` `mustang-yellow-front` `mustang-yellow-rear`
`audi-q8-profile` `audi-q8-front` `wheel-detail` `bmw-front` `bmw-x6-side`
`bmw-x6-rear` `volvo-xc90-profile` `volvo-xc90-front` `kia-sportage` `shop-corvette`
`corvette-hood`

Filenames carry the guessed model in them. **Renaming is cheap** if a name is wrong;
say so and the file plus every reference gets renamed together.

## Settled by Alex, 2026-08-05

1. **The three interior before/after pairs are confirmed** and are live as flip
   cards on the Cloth Interior Deep Clean card (a `.jobcard.feature`, full row).
2. **Correction groupings corrected.** The taped fender and the work light shot are
   **one job** (`correction-truck-before` + `correction-truck-after`, a before and
   after, though of different areas of the truck). The four dark red panel shots are
   **one job**. The old `correction-compound-hood` is the **Corvette's hood**.
3. **The Corvette job is a wash and detail, not correction.** Its card is
   `data-cat="exterior"`, and the hood photo was renamed `corvette-hood.jpg`. It was
   also removed from the paint-correction illustration on Home and Services, where it
   had been standing in for correction work it does not show.
4. **Correction before/after designated.** `correction-red-before-1` and
   `-before-2` are the "old" shots; `correction-red-after-1` and `-after-2` are
   corrected. Files were **renamed to encode this**, because "panel 2 and 3" was
   ambiguous between the preview page's A-labels and the old filenames, and the first
   implementation inverted a pair as a result. The zoomed crops settle it: the two
   `before` files show swirl marks and haze around the light reflections, the two
   `after` files are clean. Home and Services now use an `after` file to illustrate
   correction.
5. **Flip cards are the chosen presentation** for before/after. The side-by-side
   variant was dropped, and its CSS/JS/markup removed rather than left as dead code.

## Also settled, second review pass

6. **The headliner shots are a fourth before/after pair.** `headliner-before` carries
   the staining, `headliner-after` is clean. Files renamed to match. The Cloth
   Interior card is now the page's hero: four flips across one row.
7. **Red metallic publishes only the first pair** (`correction-red-before-2` to
   `correction-red-after-1`). `correction-red-before-1` is no longer shown anywhere;
   `correction-red-after-2` survives as the gallery and services `og:image`.
8. **Ceramic coating illustrates with a different vehicle** than paint correction, on
   both Home and Services. Each page now uses five distinct vehicles across its
   service sections.
9. **Draft bio copy is live behind a `.draft-note` marker** on Home and About. It is
   built only from sourced facts (locally owned, Ramsey IN, mobile and shop, DuraSlic
   certification, corrective focus). Nothing about how Logan started or how long he
   has been detailing was invented; that is called out in the marker.

## Still open

1. **The 925230/925231 batch is still split three ways by guesswork** into "Crew Cab
   Truck", "Compact SUV", and "White SUV" cards. Colors clearly differ, but the
   split needs confirming, and there may be more vehicles than three.
2. **All remaining vehicle descriptions are generic on purpose.** Confirmed names so
   far: Lincoln Navigator (Logan's own post) and Corvette (Alex).
3. **Logan's bio text.** The About portrait now stretches to match whatever height
   the bio ends up being, so no layout work is needed when the copy lands.
4. **Service on the two new exterior cards.** The Corvette Z06 and Gray SUV cards say
   "Exterior Detail" because every photo of those jobs is an exterior shot. That is a
   description of the photos, not a confirmed service. If either was actually a full
   detail, a wash, or a correction, say so and the tag changes.
5. **The Gray SUV's make and model.** Three photos, no legible badge. Card stays
   generic ("Gray SUV") until confirmed.

## Intake decisions, settled by Alex 2026-08-13

These govern the 180-photo batch and every batch after it, including the ceramic
coating set still to come.

1. **Replacement is per job, not per photo.** When a new capture session supersedes a
   job already on the site, the card's whole photo set is swapped for the new
   session's photos, even if the count changes. The superseded low-res files move to
   `img/archive/` and **stay tracked** (never deleted, per the repo-wide rule on image
   assets). This was chosen over photo-for-photo matching specifically so that nobody
   has to pair a new photo to an old one by eye.
2. **A legibly badged name may be published.** If the model lettering or badge is
   actually readable in the photo ("SUPER DUTY", the Audi rings), the card names it.
   That is reading text off a photo, not inferring a model from its shape. Anything
   not legibly badged stays generic, as the Gray SUV card does.

**Sessions are cut from capture timestamps, not from appearance.** Every file arrives
named `YYYYMMDD_HHMMSSmmm_iOS.*`, so a session boundary is any gap over one hour. For
the 2026-08-13 batch that yielded 34 sessions from 180 files; 133 of the 179 gaps were
under 5 minutes and 22 were over a day, so the clusters were not borderline. Sessions
needing a human call because of a large internal gap: S03 (59 min), S15 (52 min),
S07 (34 min). Dates holding more than one session, which may be one job shot before
and after: S05/S06, S16/S17/S18, S19/S20, S21/S22/S23, S24/S25.

**Derivative sizes.** Originals are 12 to 24 MP, far larger than the site needs.
Gallery tile images render at roughly 360 px and lightbox at up to full width, so the
target is about 1400 px on the long edge at quality 82, and about 2000 px for a hero
or a full-row feature. Bake the EXIF rotation in and strip the EXIF, as below.

## Second grouping pass, 2026-08-13 (before/after aware)

Alex confirmed the pattern: many jobs open with a dirty wheel or interior shot, then
the after set, and files sitting together in timestamp order lean toward one job.
Every claim below was verified against side-by-side crops of the originals, not
thumbnails.

**Merges executed, now live as cards or card updates:**

- **S13 + S14 = one Toyota Camry** (`CAMRY` embossed on the sill in the before shot,
  so the model is read, not guessed). Live as "Toyota Camry, Interior Deep Clean"
  plus a flip card in the Before & After showcase.
- **S16 + S17 + S18 = one Ford crew cab** overnight job. The chrome wheel in S17
  (hazy with brake dust) and S18-01 (mirror) are the same wheel design with the
  same Ford cap. Live as "Ford Crew Cab, Cab & Wheel Detail" plus a wheel flip.
- **S03 + S04 = one teal Porsche SUV.** Same staggered wheel set, front wheel filthy
  on the 19th, rear wheel spotless on the 23rd. Live as "Porsche SUV, Wash & Wheel
  Detail" plus a wheel flip whose caption notes it is front wheel before, rear after
  (same honest pattern as the truck correction card).
- **S21 + S22 + S23 + S24 all join the live Chevy card.** `CHEVROLET` is legible on
  the S21 door sill and the S24 wheel cap carries the bowtie. The card is now
  "Chevrolet Full-Size SUV, Interior & Wheels", 24 photos, with a third-row flip.
- **S11 is its own job**: a SILVER Audi Q8 interior (a different vehicle from the
  purple Q8). Live as "Audi Q8, Interior Detail".
- **S15 is live** as "White Toyota Sedan, Full Detail"; the Toyota emblem is legible
  on the wheel caps at full resolution, the trunk is debadged, so marque only.

**Correction to the first-pass table: S19 does NOT merge into S20.** The S19 wheel
is a Y-spoke design; the purple Q8's wheels in S20 are thin double-spokes. Different
wheels, same yellow calipers. S19 is unplaced; ask which vehicle it belongs to.

**S05 + S06 are one before/during pair of a KING RANCH interior** (the logo is
embossed on the seatback). Same trim as the S10 Super Duty dually, but five weeks
earlier, so they are NOT attached to that card without Alex confirming it is the
same truck returning.

**HIDDEN-TILE OPTIMIZATION, do not "fix" it back.** Jobcard figures past the 4th are
display:none, but `loading="lazy"` does NOT defer a display:none image, so the page
was fetching every hidden tile (~11 MB on a fresh phone visit). The fix, introduced
by an edit to the conversion script and now applied everywhere: hidden figures carry
a 1x1 data-URI gif as `src` and only `data-full` (the 1400px file the lightbox uses);
their 700px tile file is not generated at all unless a flip card also displays it.
A future session that sees gif `src` values in gallery.html or "missing" hidden-tile
files must NOT restore them; that is the design. This was nearly reverted once
already on 2026-08-13.

**Housekeeping:** two tracked Facebook pulls
(`522634249_...n.jpg`, `548019079_...n.jpg`) were re-encoded slightly larger by a
Windows rotate in Explorer; the new bytes are staged. The ceramic batch's two exact
duplicate files remain on disk, skipped.

## Ceramic batch, 2026-08-13 (second delivery)

25 files arrived, designated by Alex as ceramic coating work. **Two are exact
byte-for-byte duplicates** (`sha256` match): `20250805_184226949_iOS 1.heic` and
`20250913_175044234_iOS 1.heic` are copies of the same-named files without the " 1".
They are skipped, not deleted. That leaves **23 unique photos in 8 sessions** (C1..C8,
prefixed C to keep them distinct from the S-series above).

`20241009_135227512_iOS.heic` shows a generic placeholder in Explorer. That is only a
Windows thumbnail-cache miss; the file decodes fine.

| C | Date | N | What the photos show | Status |
|---|---|---|---|---|
| C1 | 2024-10-09 13:52 | 1 | Red hood **off the vehicle** on a stand, red Ford truck behind | held |
| C2 | 2024-10-09 16:13 | 2 | The same red hood, high gloss | held, pairs with C1 |
| C3 | 2025-08-05 | 4 | Red BMW SUV, roundel on the wheel cap, in a shop with Ferrari/BMW signage | held, likely replaces `bmw-x6-*` |
| C4 | 2025-08-17 | 2 | Black coupe, `5.0` fender badge, deep gloss | **live** |
| C5 | 2025-09-13 | 6 | **Two vehicles.** White Corvette (C5-01/02), then a red BMW hood under an inspection light showing swirls (C5-03..06) | held, needs split |
| C6 | 2025-09-20 | 1 | A near-featureless pale surface with a lamp reflection. No vehicle, no context | held, likely unusable |
| C7 | 2025-09-29 | 2 | Black Ford crew cab, `4X4` bed badge, Ford oval on the wheel cap | **live** |
| C8 | 2025-10-02 | 5 | Dark navy Ford panels, `FX4` badge, **masked with blue tape**, under an inspection light | held, reads as correction |

**Two cards are live**: "Black Coupe, Ceramic Coating" (C4) and "Black Ford 4X4,
Ceramic Coating" (C7). Both are new vehicles with no counterpart already on the site,
both are two-photo exterior sessions so both tiles carry `.t-wide`.

Named to the house style. The existing gallery already says "Red Coupe" and "Yellow
Coupe" rather than naming the model, so C4 is "Black Coupe" even though `5.0` is
legible; the badge is mentioned in the alt text instead. C7 is "Black Ford 4X4" because
`4X4` and the Ford oval are both readable while no model name is. C7 is a stock-height
truck and is **not** the lifted Super Duty from S31.

**There is no Ceramic filter on the gallery.** The filter row is All / Paint Correction
/ Interiors / Exteriors, so both new cards are `data-cat="exterior"` with "Ceramic" only
as the card tag and in the title. Adding a fifth filter button is a structural change to
the page and is Alex's call; `main.js` supports arbitrary `data-cat` values, so it is a
small change whenever wanted.

**Three sessions look like paint correction, not ceramic.** C8's blue masking tape and
inspection lighting is polishing prep, and C5-03..06 are swirl-inspection shots. Alex
designated the batch as ceramic, so rather than label them either way they are held. If
any of it is correction, it matters: the Paint Correction filter currently has only the
four legacy `correction-*` photos behind it, and C8 may be the hi-res version of the
existing "Truck Scratch Correction" before/after card, whose before shot is literally
described as a taped-off panel.

## Processed 2026-08-13: nine cards live

Alex said to proceed with everything unambiguous. These nine are on `gallery.html`,
at the top of the job grid. All are **additions**, not replacements, so nothing was
overwritten and `img/archive/` is still not needed.

| Card | From | Photos |
|---|---|---|
| Jeep Grand Wagoneer, Full Detail | S28-01..15 | 15 |
| Lifted Red Ford Truck, Full Detail | S28-16..27 | 12 |
| Ford ST SUV, Full Detail | S29 | 15 |
| Ford Super Duty Dually, Full Detail | S10 | 13 |
| Lifted Ford Super Duty, Full Detail | S31 | 9 |
| Chevrolet Full-Size SUV, Interior Detail | S25 | 16 |
| Black Toyota SUV, Full Detail | S07 | 6 |
| Ford Maverick, Full Detail | S08 | 5 |
| Toyota Sedan, Interior Detail | S32 | 8 |

**Names were read, not guessed.** `GRAND WAGONEER` is spelled out on the front door,
`MAVERICK` on the tailgate, `SUPER DUTY` and `FX4 OFF ROAD` on both Super Dutys, an
`ST` badge on the blue Ford. Where only the marque was legible the card stops there:
"Black Toyota SUV" and "Chevrolet Full-Size SUV" claim no model, because no model
lettering was readable even at 24 MP. The S28 seam sits at 18:49 / 18:50.

**The white Grand Wagoneer is not the existing "White SUV" card.** That one is a white
Range Rover Sport. Different vehicle, no collision.

### The two-size image pipeline, new in this batch

Tiles render about 215 px wide on desktop, so shipping a 1400 px file into a tile is
waste. Each photo now gets:

- `<slug>-<n>.jpg` at 700 px q78, about 69 KB, the tile. **Generated only for the four
  tiles a card actually shows.**
- `<slug>-<n>-lg.jpg` at 1400 px q82, about 280 KB, named in `data-full` and fetched
  only when the lightbox opens.

`main.js` now reads `lbImg.src = img.dataset.full || img.currentSrc || img.src`. Images
with no `data-full` behave exactly as before, so every legacy card is untouched.

Tiles 5 and up are `display:none` via `.jc-media > figure:nth-of-type(n+5)` and the
lightbox pulls them from `data-full`, so their `src` is a 1x1 transparent GIF data URI
rather than a real file. That guarantees a hidden tile can never cost a request, and it
is why only 36 tile files exist for 99 photos. **If that CSS rule ever changes to show
more than four tiles, re-run the processing script**, or the newly shown tiles will
render as the blank placeholder.

`site-checks` validates `src=` only, so it does **not** see `data-full`. It cannot
catch an uncommitted `-lg` file. Those 99 references were verified by hand this
session; a checker rule for `data-full` would be worth adding.

## Session inventory, 2026-08-13 batch

Read from the photos at full resolution. **"Seen" means legibly badged or plainly
visible** (a Ford oval on a steering wheel, MAVERICK stamped on a tailgate, VOLVO on a
door sill). **"Proposed" means Claude's read, awaiting Alex.** Nothing in the Proposed
column goes on the site until confirmed.

| S | Date | N | Seen in the photos | Proposed |
|---|---|---|---|---|
| 01 | 2023-12-16 | 2 | Yellow Ford Mustang, `5.0` fender badge, exterior | replaces `mustang-yellow-*` |
| 02 | 2023-12-31 | 1 | Teal Porsche SUV, exterior | own job |
| 03 | 2024-10-19 | 4 | Teal Porsche SUV, crest on wheel cap; mats out | own job, 2h span is one visit |
| 04 | 2024-10-23 | 1 | Teal Porsche wheel | merge into S03? 4 days later |
| 05 | 2025-05-23 | 1 | Saddle leather cabin, stained carpet | pairs with S06 |
| 06 | 2025-05-23 | 1 | Same saddle cabin, carpet part-cleaned | pairs with S05 |
| 07 | 2025-06-21 | 6 | Black Toyota RAV4, badge on wheel and grille, in + out | full detail |
| 08 | 2025-06-23 | 5 | Grey Ford Maverick, `MAVERICK` on tailgate, in + out | full detail |
| 09 | 2025-06-30 | 2 | Black leather seats, blue door sill | unidentified vehicle |
| 10 | 2025-07-01 | 13 | Ford Super Duty King Ranch, saddle leather, 1 exterior | full detail |
| 11 | 2025-07-14 | 6 | Audi Q8, rings on wheel, `Q8` on sill, interior | interior detail |
| 12 | 2025-07-22 | 3 | Black Lincoln Navigator, cream leather, in + out | replaces `navigator-*` |
| 13 | 2025-07-23 | 2 | Silver Toyota, soiled cloth interior | pairs with S14 |
| 14 | 2025-07-24 | 4 | Silver Toyota, badge on wheel, clean interior | pairs with S13 |
| 15 | 2025-07-30 | 3 | White Toyota sedan, in + out | full detail |
| 16 | 2025-08-12 | 2 | Truck rear floor, grey cloth | merge S16+S17+S18 |
| 17 | 2025-08-12 | 1 | Chrome wheel, Ford cap | merge S16+S17+S18 |
| 18 | 2025-08-13 | 4 | Ford truck, grey cloth cabin | merge S16+S17+S18 |
| 19 | 2025-09-02 | 1 | Audi wheel, yellow caliper | merge into S20 |
| 20 | 2025-09-02 | 4 | Purple Audi Q8, rings on grille, exterior | replaces `audi-q8-*` |
| 21 | 2025-09-15 | 3 | Black leather rear seats, wet floor | merge S21+S22+S23? |
| 22 | 2025-09-15 | 1 | Door panel, water beading | merge S21+S22+S23? |
| 23 | 2025-09-15 | 3 | Grey carpet cargo bay | merge S21+S22+S23? |
| 24 | 2025-09-16 | 1 | Machined alloy wheel | merge into S25? |
| 25 | 2025-09-16 | 16 | Dark Chevrolet full-size SUV, interior | interior detail |
| 26 | 2025-10-02 | 3 | Black Volvo XC90, exterior | replaces `volvo-xc90-*` |
| 27 | 2025-10-03 | 10 | Black Volvo, cream leather, `VOLVO` on sill, interior | merge into S26 |
| 28 | 2025-11-23 | 27 | **Two vehicles.** White full-size SUV, tan leather (S28-01..15); red lifted Ford F-150, black interior (S28-16..27) | split into two jobs |
| 29 | 2026-01-11 | 15 | Blue-grey Ford Explorer, badge on wheel, in + out | full detail |
| 30 | 2026-03-12 | 10 | Red Ford Mustang, pony badge on wheel, in + out | full detail |
| 31 | 2026-04-26 | 9 | Black lifted Ford Super Duty, oval on wheel, in + out | full detail |
| 32 | 2026-06-28 | 8 | Toyota sedan, badge on wheel, ivory cloth, interior | interior detail |
| 33 | 2026-08-04 | 1 | **A Rolodex card file on a desk.** Not a vehicle | exclude |
| 34 | 2026-08-09 | 2 | Two MOV clips only | held, see below |

**The paper floor mats read "We take PRIDE in your RIDE."** That is a slogan on a
disposable mat, not another business name, so it is not a repeat of the HEUN'S
question in the README. It does differ from the site's tagline, "We Shine Your Ride".
Worth asking Logan which he wants used.

**Nothing in this batch matches the three jobs added 2026-08-12.** No orange Corvette
Z06, no white Super Duty matching `ford-truck-*`, no grey SUV with red calipers. Those
15 files stay at 480x640 unless the ceramic batch carries them.

**No paint-correction photos in this batch.** No taped panels, no polisher, no swirl
crops. The existing `correction-*` files remain the only correction evidence on the
site, so the Paint Correction filter gains nothing here.

**Video is held at Alex's direction (2026-08-13).** The 7 MOV clips stay in
`source-photos/work/`. They are gitignored, and there is no ffmpeg on this machine, so
transcoding needs a tool decision before the site can carry video.

## Added 2026-08-12

Alex added new photos and named the jobs directly, so these three groupings are
trusted rather than batch-guessed.

**New hero.** `corvette-hero.jpg` replaced `navigator-front.jpg` as the Home hero
background, and is now also the Home `og:image` and the `AutomotiveBusiness` schema
image. It arrived as a 2.2 MB PNG (`corvette home hero.png`) and was converted to a
269 KB progressive JPEG. Same orange Z06 and same property as the six phone photos,
so it is Logan's own work, not a stock press shot.

**Image intake, for the next batch.** The phone photos all arrived at 640x480 with
EXIF orientation 6, meaning they display portrait 480x640 only if the viewer honors
EXIF. Every one was run through `ImageOps.exif_transpose` so the rotation is baked
into the pixels and the EXIF is dropped, which is what earlier rotation commits in
this repo were fixing by hand. Filenames also arrived with spaces and mixed case
(`corvette zo6 1.jpeg`); all were normalized to lowercase and hyphenated with a
`.jpg` extension, per the repo convention. 640x480 is low for a hero-adjacent
gallery; larger originals are welcome if Logan has them.

### Job: Corvette Z06, exterior detail
Service:  exterior  (inferred from the photos, see "Still open" #4)
Vehicle:  Chevrolet Corvette Z06, orange  (Alex named it; Z06 is badged)
Photos:   corvette-zo6-6, corvette-zo6-3, corvette-zo6-2, corvette-zo6-1,
          corvette-zo6-4, corvette-zo6-5  (display order; 6 leads the card)
Before:   (none)
After:    (none)
Notes:    A DIFFERENT car from the white Corvette on the existing "Corvette, Wash &
          Detail" card. Do not merge the two.

### Job: Lifted Ford Super Duty, full detail
Service:  full detail (interior + exterior)
Vehicle:  Ford Super Duty crew cab, white, lifted  (both words are legible on the
          vehicle; trim and engine deliberately not claimed)
Photos:   ford-truck-1, ford-truck-4, ford-truck-2, ford-truck-6, ford-truck-3,
          ford-truck-5  (display order)
Before:   (none)
After:    (none)
Notes:    4 exterior, 2 interior. ford-truck-6 is the only landscape shot of the set.

### Job: Gray SUV, exterior detail
Service:  exterior  (inferred from the photos, see "Still open" #4)
Vehicle:  do not publish the model  (no legible badge)
Photos:   suv-gray-2, suv-gray-1, suv-gray-3  (display order)
Before:   (none)
After:    (none)
Notes:    Not the purple Audi Q8 on the "Dark Metallic SUV" card. Different color,
          different location, red calipers.

## Filled-in jobs

<!-- Add confirmed jobs below this line, then gallery.html gets rebuilt to match. -->

### Job: Lincoln Navigator, full mobile detail
Service:  full detail (interior + exterior)
Vehicle:  Lincoln Navigator  (confirmed: Logan named it in his July 2025 post)
Photos:   navigator-side, navigator-front, navigator-profile, navigator-seats,
          navigator-dash, navigator-rear-seats, navigator-door, navigator-door-2,
          navigator-cargo
Before:   (none)
After:    (none)
Notes:    Mobile detail. 9 photos, inside and out.
