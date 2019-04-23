# NgCueCards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## References used

- https://www.improvestudyhabits.com/best-font-study-notes/
- https://websitesetup.org/web-safe-fonts-html-css/
- https://kyleschaeffer.com/css-font-size-em-vs-px-vs-pt-vs-percent
- https://coolors.co/98c1d9-6969b3-533a7b-4b244a-25171a

shoebox:
- https://3dtransforms.desandro.com/perspective
- https://tympanus.net/codrops/css_reference/rotate3d/

contemplations of layout:
(breakpoint widths)
- https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
- https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
- http://easysitemaker.net/website-design-breakpoints/website-design-breakpoints-responsive-design-best-practices-ux-planet/
- https://www.lullabot.com/articles/unexpected-power-of-viewport-units-in-css
- https://www.rioleo.org/common-webpage-layouts.php
- https://uxplanet.org/adaptive-vs-responsive-web-design-eead0c2c28a8
- https://www.seamedia.in/blog/website-checker-resolutions/


viewport height
- https://uxplanet.org/what-do-you-know-about-viewport-height-in-2017-4f25be5b05f
- https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
- https://stackoverflow.com/questions/1520511/what-is-the-average-and-or-maximum-viewport-height
- https://googleblog.blogspot.com/2009/12/browser-size-tool-to-see-how-others.html
- http://googlecode.blogspot.com/2009/12/introducing-google-browser-size.html

tools
- https://browsersize.com/

common screen size
- http://jwedding.info/what-is-the-most-common-screen-size-for-website-design/what-is-the-most-common-screen-size-for-website-design-what-is-the-most-common-screen-size-for-website-design-hobo-internet-ideas/
- https://designm.ag/design/a-simple-look-into-adaptive-and-responsive-web-design/
- http://www.creativedevelopment.com.au/web-design/standard-web-page-size/
- https://stackoverflow.com/questions/25754848/what-are-the-device-width-css-viewport-sizes-of-the-iphone6-and-iphone-6-plus



(interesting information, but not really used)
- https://rajeeshcv.com/2015/05/08/How-to-Fill-Remaining-Height-with-a-Div/
- https://css-tricks.com/equal-height-blocks-in-rows/
- https://stackoverflow.com/questions/36201863/how-to-make-the-child-divs-height-higher-the-parent-div
- https://developers.google.com/web/fundamentals/design-and-ux/responsive/
- https://blog.prototypr.io/designing-for-multiple-screen-densities-on-android-5fba8afe7ead
- https://www.reddit.com/r/explainlikeimfive/comments/yub3a/why_did_the_world_switch_to_1366_x_768_when_all/
- https://webdesign.tutsplus.com/tutorials/create-an-isometric-layout-with-3d-transforms--cms-27134


importing sass into typescript class in angular via json
- https://scotch.io/tutorials/angular-shortcut-to-importing-styles-files-in-components
- https://stackoverflow.com/a/50713353/1277651 -- idea to use script 
- https://stackoverflow.com/questions/41638980/export-scss-map-to-json-format -- idea to use `sass-export` 
- https://stackoverflow.com/questions/46991237/how-to-import-json-file-into-a-typescript-file

woops i caused a bug (broke box-front, etc), fixing them... needed ~~calc without px units~~ to be _extremely careful_ with `calc` syntax!
- https://stackoverflow.com/questions/29505279/css-calc-multiplication-and-division-with-unit-ed-values
- https://stackoverflow.com/questions/38205885/can-i-use-calc-inside-transformscale-function-in-css
- https://stackoverflow.com/questions/44806076/css-calc-number-division
- https://stackoverflow.com/questions/53654888/using-css-variables-with-calc-not-working-when-2nd-parameter
- https://stackoverflow.com/questions/25205039/is-it-possible-to-get-a-negative-value-with-css-calc/25205523 ... at this point, i hate `calc`.

thinking how to dynamically apply pixel positions of cards-in-box...
- https://stackoverflow.com/questions/10765755/how-to-apply-multiple-transforms-in-css

trying to understand how rotations and position offsets work
- https://tympanus.net/codrops/css_reference/rotate3d/
- https://tympanus.net/codrops/css_reference/transform/
- https://oreillymedia.github.io/Using_SVG/extras/ch11-3d.html

find way to prepend `default export` to json output file
- https://stackoverflow.com/questions/55417262/how-to-prepend-text-to-a-file-as-an-npm-script-command -- ok so i'm running via `git bash`, so that's helpful
- https://stackoverflow.com/questions/10587615/unix-command-to-prepend-text-to-a-file
- https://unix.stackexchange.com/questions/187145/whats-the-difference-between-semicolon-and-double-ampersand
- https://stackoverflow.com/questions/39172536/running-npm-scripts-sequentially
- 
how do package.json script commands work
- https://stackoverflow.com/questions/48942691/how-angular-builds-and-runs - well, super interesting, but very irrelevent.
- https://stackoverflow.com/questions/26398537/do-i-need-node-js-to-use-angularjs - 'node only manages dependencies in angular'... ahh. interesting, and seemingly irrelevent... but actually narrows my search, so it was useful.
- https://stackoverflow.com/questions/27736579/in-node-package-json-invoke-script-from-another-script-with-extra-parameter-in -- getting warmer.
- https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html 
- https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script
  - Eureka moment!
  - Eventually realized I needed to execute internally-referenced package.json script names with preceding `npm run foo`... sigh.
  - I now have a buildable pipeline with one-click again.

should i usse import or require for `reduce-css-calc` to work in ts class? 
- https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require
how to import npm module in angular

figuring out why i get an error with the updated syntax `import * as foo from 'node_modules/reduce-css-calc`...
- https://www.amadousall.com/angular-cli-module-not-found-error-cant-resolve/

how to get select to reactively update 'active' data object upon click event bound to each selection.
- https://stackoverflow.com/questions/44840735/change-vs-ngmodelchange-in-angular
- https://stackoverflow.com/questions/38893207/angular-2-ngonchanges-fires-when-template-renders -- when ngOnChanges fires.
- https://angular.io/guide/lifecycle-hooks#lifecycle-sequence
- https://dzone.com/articles/understanding-output-and-eventemitter-in-angular -- how to use @Input and @Output of type EventEmitter()
- https://stackoverflow.com/questions/36076700/what-is-the-proper-use-of-an-eventemitter
- https://stackoverflow.com/a/34402436/1277651 -- "actually, using an EventEmitter in a service is bad practice." -- oh, interesting. okay.


deciding when observables vs eventEmitters are preferrable:
- https://stackoverflow.com/questions/34717451/when-to-use-observable-vs-eventemitter-vs-dot-rule-for-change-detection-in-angul 
    - "As a side note: According to the documentation for EventEmitter it should really only be used by components & directives; implying that it is not meant for services where Observables are preferred it would seem."
  - when to use `new Observable` vs `of()`
    - https://blog.angularindepth.com/how-to-read-the-rxjs-6-sources-part-1-understanding-of-and-subscriptions-694e7d9def6b
  - ~~do i need .share()? ... unclear (was thinking it was out-of-date, but now more of ........ other things)~~
    - ~~https://stackoverflow.com/questions/35141722/how-does-the-rxjs-5-share-operator-work~~
  - i think I need a `Subject`, not just an `Observer`. ... i'm not _just_ observing, i'm also _updating_ the active cue card external to the service. 
    - https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
    - https://stackoverflow.com/questions/37671700/angular2-style-guide-property-with-dollar-sign (try confirm $ used for Subjects as well, looks so.)
- https://netbasal.com/why-its-important-to-unsubscribe-from-rxjs-subscription-a7a6455d6a02

how to work with observables
- https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
- https://github.com/jhades/angular2-rxjs-observable-data-services/blob/master/src/state/TodoStore.ts


ok so... i have pair of get/set going in the service for tracking the active Cue Card, and I'm debating pros/cons switching that to EventEmitter in the service.

