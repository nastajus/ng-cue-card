# Selected references from the journal

These are entry points back into the research. The [2019 journal](development-journal-2019.md) holds the original links in context, including duplicates and tentative searches. Technical lessons link to version-specific source when the original article or API link has moved.

| Topic | Reference | Why revisit it |
| --- | --- | --- |
| Three-dimensional geometry | [David DeSandro, CSS perspective](https://3dtransforms.desandro.com/perspective) | Understand how the box scene projects depth. [Shoebox geometry](../lessons/css-geometry.md) |
| Transforms | [Codrops, CSS transform reference](https://tympanus.net/codrops/css_reference/transform/) | The journal used it to reason about axis, origin and function order. The URL blocked the availability check. [Shoebox geometry](../lessons/css-geometry.md) |
| Pointer input | [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) | Match the pointer coordinate system with the element measurement. [Shoebox geometry](../lessons/css-geometry.md) |
| CSS layout | [A List Apart, CSS Positioning 101](http://alistapart.com/article/css-positioning-101/) | The breakthrough reference for the relationship between overlap, flow and positioned ancestors. [Animation and layering](../lessons/animation-architecture.md) |
| View readiness | [Angular lifecycle sequence, original](https://angular.io/guide/lifecycle-hooks#lifecycle-sequence) · [Angular 7 guide source](https://github.com/angular/angular/blob/7.2.16/aio/content/guide/lifecycle-hooks.md) | The original documentation URL is legacy. The versioned copy explains initialization and view hooks in context. [Component lifecycle](../lessons/component-lifecycle.md) |
| Observable data services | [Angular University’s example store](https://github.com/jhades/angular2-rxjs-observable-data-services/blob/master/src/state/TodoStore.ts) | A concrete model for keeping the producer inside a service and publishing observable state. Check the RxJS syntax against version 6. [Reactive programming](../lessons/reactive-programming.md) |
| Dynamic card animation | [Netanel Basal, Animate Dynamic Components in Angular](https://netbasal.com/animate-dynamic-components-in-angular-10681438bdd4) | Led to experimenting with triggers on dynamically inserted hosts. The original URL could not be reached during review. Factory-based component creation reflects the Angular of that period. [Animation and layering](../lessons/animation-architecture.md) |
| Dependency ownership | [Installing dependencies globally and locally](https://stackoverflow.com/questions/6480549/install-dependencies-globally-and-locally-using-package-json) | The journal’s clue for declaring the exporter in the project. The URL blocked the availability check. [Build tooling](../lessons/build-tooling.md) |
| npm script composition | [Helpers and tips for npm run scripts](https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html) | Contemporary background for composing the Sass generation and Angular commands. [Build tooling](../lessons/build-tooling.md) |
| Domain modelling | [Domain-Driven Design Quickly](http://carfield.com.hk/document/software%2Bdesign/dddquickly.pdf) | The journal’s notes around page 35 prompted the distinction between entities and value objects. [State management](../lessons/state-management.md) |
| Runtime freezing | [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) | See which mutations shallow freezing prevents. [JavaScript and TypeScript](../lessons/javascript-typescript.md) |
| Learning design | [Nicky Case, How To Remember Anything Forever-ish](https://ncase.me/remember/) | The project’s original explanation of active recall, intervals and the Leitner box. [UI and product design](../lessons/ui-design.md) |

[Learning index](../LEARNING.md)
