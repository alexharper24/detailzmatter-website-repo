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
