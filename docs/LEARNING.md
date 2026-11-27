# Engineering notes from Cue Card

[Back to the Cue Card README](../README.md) · [Try the live prototype](https://nastajus.github.io/ng-cue-card/)

Cue Card started as a flashcard prototype and became a hands-on study of how a UI turns changes in data into changes on screen. The original README follows those discoveries in real time, including searches, wrong turns, decisions and ideas for the product. Start here when you want to revisit a concept. Go to the journal when you want to see how the thinking changed.

- [Development journal](archive/development-journal-2019.md) preserves the complete “References used” section and recovered passages on export, study workflow and D3.
- [Reference index](archive/reference-index.md) gives a short route back to sources worth revisiting.

## Research threads

| Investigation | What it turned into | Journal |
| --- | --- | --- |
| Centering and spacing in 3D | Shared geometry between SCSS and TypeScript, with a build step to carry values across | [Centering and SCSS export](archive/development-journal-2019.md?plain=1#L55) |
| Mouse reactivity and UI polish | State selection, pointer geometry, colour feedback, form rules and responsive layout | [Mouse interaction and UI polish](archive/development-journal-2019.md?plain=1#L104) |
| Rebalance fired too early | Separate the data signal from the view-query signal | [Rebalance and teardown](archive/development-journal-2019.md?plain=1#L278) |
| “Designing model good” | Separate identity from state and decide who owns a change across study topics, sessions and history | [Model design](archive/development-journal-2019.md?plain=1#L436) |
| Quiz animation and overlap | Give outgoing and incoming cards separate lifetimes and place animation on the moving host | [Single-instance breakthrough](archive/development-journal-2019.md?plain=1#L926), [host experiment](archive/development-journal-2019.md?plain=1#L1400) |
| Late rebalancing regression | Revisit assumptions when a later refactor changes the point at which code runs | [Later investigation](archive/development-journal-2019.md?plain=1#L1417) |
| Tooling and return after a break | Recover the build assumptions, try the library in isolation and capture the setup steps | [Dependency investigation](archive/development-journal-2019.md?plain=1#L140), [D3 branch notes](archive/development-journal-2019.md#supplement--returning-to-the-project-and-exploring-d3) |
| Offline study and file export | Product scope and ownership questions framed as user stories | [Offline spike](archive/development-journal-2019.md?plain=1#L395), [recovered user stories](archive/development-journal-2019.md#supplement--file-export-and-the-study-workflow) |

## Lessons

1. [Domain modelling and state ownership](lessons/state-management.md). Which card is this across edits, quiz attempts and reloads?
2. [Reactive programming](lessons/reactive-programming.md). Who can publish changes, and when do subscriptions end?
3. [Angular views and component identity](lessons/component-lifecycle.md). How do you tell when the element you need exists?
4. [Quiz animation and layering](lessons/animation-architecture.md). Who owns motion, sequencing and cleanup?
5. [Shoebox geometry and visual feedback](lessons/css-geometry.md). How do dimensions, transforms and pointer distance fit together?
6. [JavaScript and TypeScript](lessons/javascript-typescript.md). What actually happens at runtime when you pass, cast or map an object?
7. [Build tooling and reproducibility](lessons/build-tooling.md). What does a clean checkout need to generate the same geometry?
8. [UI and product design](lessons/ui-design.md). Where does the physical metaphor help, and what belongs in the first release?
9. [Engineering methodology](lessons/engineering-methodology.md). When is it time to stop trying recipes and learn the governing rules?

The code links describe the source checkout used for this review. Historical links identify the relevant earlier implementation. Angular examples use the project’s Angular 7 and RxJS 6 conventions.
