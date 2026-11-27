# Shoebox postmortem

[Back to Engineering Notes](LEARNING.md#postmortem--why-the-shoebox-went-flat) · [Try Cue Card live](https://nastajus.github.io/ng-cue-card/)


The 2019 work had already solved much of the hard part. The card slot math worked, and the April rebalancing fix had found the right Angular lifecycle signal. When the project was revisited with AI assistance in November 2026, Git and the journal supplied the two clues needed to recover it. One was about **when the card hosts exist**. The other was about **whether CSS lets those hosts and the box walls share depth**. The two failures can be reproduced independently.

## Timeline and cost

| Date | What the record shows |
| --- | --- |
| April 14–21, 2019 | The shoebox went from basic faces and an isometric view to a single aligned card, shared SCSS dimensions, and a spaced stack. The April 19 refactor also introduced separate `#faces` and `#cards` wrappers. The test cube was an attempt to isolate the transforms from the full scene. [Isometric view](https://github.com/nastajus/ng-cue-card/commit/9504776) · [Wrappers and SCSS export](https://github.com/nastajus/ng-cue-card/commit/79c679d) · [Test cube](https://github.com/nastajus/ng-cue-card/commit/85cc2bf) · [Spaced stack](https://github.com/nastajus/ng-cue-card/commit/b068d62) |
| April 25 | The journal recorded `rebalance` running too early and explored OnPush, manual detection, `trackBy`, the async pipe, view queries and subscription teardown. The committed fix positioned the initial cards in `ngAfterViewInit` and used `this.cc.changes` for later changes. The same section records the successful add flow. [Journal investigation](archive/development-journal-2019.md?plain=1#L278) · [Rebalance fix](https://github.com/nastajus/ng-cue-card/commit/3bc2237) |
| April 26 | About **24 hours after the fix**, the getter-to-observable refactor replaced the live view-query subscription with `cueCards$.subscribe(...)`. The template already knew how to display emitted cards. The new subscriber assumed the emitted list and the rendered list were ready at the same time. [Regression diff](https://github.com/nastajus/ng-cue-card/commit/2eb7cca) |
| May 21 | **25 days and 26 descendant commits later**, the journal explicitly rediscovered that the callback was firing before the view refreshed. The notes mention dynamic quiz components and element IDs as hypotheses, then record a breakpoint confirming that the element existed by `ngAfterViewChecked`. The commit added a debug hook and left the data subscription in place. Many intervening commits concern quiz animation and overlap. [Second investigation](archive/development-journal-2019.md?plain=1#L1417) · [May 21 diff](https://github.com/nastajus/ng-cue-card/commit/d4581f8) |
| October 4 | The revert and the addition of the checked-in build left the early subscription and the flat wrappers in the historical snapshot. [Revert](https://github.com/nastajus/ng-cue-card/commit/660a88f) · [Archived build](https://github.com/nastajus/ng-cue-card/commit/6c09c40) |
| November 26, 2026 | The AI-assisted patch restored the view-query trigger, made the queried elements the direct targets, and added one CSS rule for both wrappers. The published build was checked in the browser. [Patch diff](https://github.com/nastajus/ng-cue-card/commit/d1885c7) |

There are **31 descendant commits** from the April 25 fix through the October 4 snapshot, and **five commits touching the shoebox directory** in that range, including cleanup and the revert. These counts describe the history surrounding the regression. The journal gives direct evidence of two rounds of debugging, but it cannot establish hours spent, how many experiments went uncommitted, or how many commits were lost to the bug. It also cannot date when the flat rendering first became visible on the original browser. The wrappers were already present when the April commit reported working spacing, and the archived demo shows a visible stack.

To reproduce the counts from the source checkout:

```bash
git rev-list --count --ancestry-path 3bc2237..6c09c40
git rev-list --count 3bc2237..6c09c40 -- src/app/components/cue-card-shoe-box
git rev-list --count --ancestry-path 2eb7cca..d4581f8
```

## Failure 1 — A new array entry is ahead of its element

The April 26 code looked reasonable because the list was reactive and the subscription was established in `ngAfterViewInit`. Here is the active part of that revision:

```ts
this.ccLoaderService.cueCards$.subscribe(
  (cueCards: CueCard[]) => {
    this.rebalanceBoxCardPositions(cueCards);
  }
);
```

`ngAfterViewInit` establishes that the initial children exist when the subscription is made. Later emissions trigger their own callback. On an add, the service already has five items and the async pipe has received the change, but Angular can still have four rendered hosts while the callback is running. The old loop looked up `bcc4` by document ID before the fifth host was ready. In the archived build, all four original hosts received updated offsets during the add, and the new host subsequently appeared with **no inline transform**. It fell back to the same hard-coded CSS offset used for any unpositioned card.

The 2026 patch restores the April 25 structure. It keeps the observable in the template and uses the rendered query for layout. This excerpt is from the [current shoebox](../src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.ts):

```ts
@ViewChildren('cc', { read: ElementRef }) cc: QueryList<ElementRef<HTMLElement>>;
private _cardChanges: Subscription;

ngAfterViewInit() {
  this.rebalanceBoxCardPositions();
  this._cardChanges = this.cc.changes.subscribe(() => this.rebalanceBoxCardPositions());
}

ngOnDestroy() {
  this._cardChanges.unsubscribe();
}
```

The loop now gets its count and target from the same query. The original `boxLength / count * (i + 1)` spacing and SCSS-derived offsets are still there. The write targets `card.nativeElement.style.transform` rather than replacing the entire style attribute of a document-wide ID. The ID remains available to the card component. There is no timeout, repeated after-check polling, change detection strategy change, or geometry rewrite. The focused check is four initial offsets, five distinct offsets immediately after adding, then the original four after deletion.

## Failure 2 — A 3D transform can still be flattened by a parent

The box already had a valid perspective on `.scene` and `transform-style: preserve-3d` on `.box`. Its children, however, were the plain block wrappers `#faces` and `#cards`. The actual walls and card hosts were one level below those wrappers. `transform-style` does not inherit. Each wrapper must carry the 3D context through to its children. Otherwise the browser flattens its descendants into the wrapper plane before compositing that plane in the outer scene. Accurate card depths in the DOM are compatible with an image that still looks flat. [CSS Transforms Level 2](https://www.w3.org/TR/css-transforms-2/#3d-rendering-contexts)

The complete shoebox CSS addition was:

```scss
#faces, #cards {
  transform-style: preserve-3d;
}
```

This keeps the existing wrappers, transforms and angle. In Edge and Firefox, temporarily setting only those wrappers back to `flat` on the fixed build reproduced the flat panel with the cards missing from view. Removing the temporary override immediately restored the visible walls and cards. The two captures below use the same build and card coordinates.

| Wrapper depth disabled by a temporary CSS override | Wrapper depth preserved |
| --- | --- |
| ![Only a flat box panel is visible](images/postmortem/shoebox-flat.png) | ![The same scene shows four cards at distinct depths between the walls](images/postmortem/shoebox-preserved.png) |

## What made the bug hard to isolate

The visual result hid the state of the input. A flat panel could look the same whether a card had a valid depth or never received one. In the original investigation, a data emission, a view update, and the final paint were easy to treat as one event. The useful split was to check them in order:

1. Count the service items and the rendered hosts at the moment the collection changes.
2. Inspect the inline transforms. If the count matches and every card has a distinct depth, hold the geometry constant.
3. Toggle only the parent wrappers' `transform-style`. If the cards reappear without their transforms changing, the remaining failure is in the CSS rendering context.

The journal already supplied the initial timing diagnosis and the idea of isolating geometry in a test cube. Git exposed the exact refactor that crossed the timing boundary. AI assistance helped compare those revisions and run the wrapper test with the other variables held constant.

## Follow-up — New Firefox card-face seam

**Status: open.** The horizontal line is a new issue reported after the November 2026 flip repair in [`d1885c7`](https://github.com/nastajus/ng-cue-card/commit/d1885c7). It still appears on several cards in the project author's Firefox session. This is separate from the 2019 shoebox failure.

![Cropped Firefox screenshot showing a one-pixel darker red line just below the question text](images/postmortem/firefox-card-seam.png)

*The crop keeps the original pixels. The dark line is directly below the second line of question text.*

The markup has no divider at that position. The repair introduced two depth offsets to stop the question from bleeding through the answer. The new front-face `translateZ(1px)` is a candidate for a browser compositing seam, but the capture does not establish its cause.

The follow-up tested the published flip styles and a temporary override removing only the front-face offset. Automated screenshots in headless Firefox and Edge at four combinations of device scale and page zoom showed no comparable seam with either version. With the override, both browsers still completed one transition per click in each direction. The reported artifact remains unverified with the override because the baseline did not reproduce it in those sessions.

### Smallest candidate change

```diff
 .tp-card__front {
   background: $primary-card-background;
-  transform: translateZ(1px);
 }
```

The back keeps `rotateY(180deg) translateZ(1px)`, so the faces still occupy different planes. For a direct check in the affected Firefox session, uncheck the front face's `transform: translateZ(1px)` declaration in the Inspector while the line is visible. Then flip to the answer and back. If the line disappears and neither face bleeds through, the one-line deletion has a verified effect. The live build still uses the original flip repair.
