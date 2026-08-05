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

**Correction (7)**
`correction-gloss` `correction-panel-1` `correction-panel-2` `correction-panel-3`
`correction-fender-tape` `correction-worklight` `correction-compound-hood`

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

Filenames carry the guessed model in them. **Renaming is cheap** if a name is wrong;
say so and the file plus every reference gets renamed together.

## Known problems to fix

1. **The 925230/925231 batch is split three ways by guesswork** into "Crew Cab
   Truck", "Compact SUV", and "White SUV" cards. Colors clearly differ, but the
   split needs confirming, and there may be more vehicles than three.
2. **`correction-fender-tape` and `correction-panel-1..3` are from different posts**
   but look like similar dark vehicles. Same truck or not?
3. **`correction-compound-hood` and `shop-corvette` are in the same post** and are
   currently one card. Is the compound hood the white sports car, or another vehicle?
4. **`correction-worklight`** shows a work light against a panel. Is that a defect
   inspection (a before) or a final check (an after)?
5. **`interior-before-1..3` are not on the live site.** They only appear on
   `before-after-preview.html` until pairing is confirmed.

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
