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


## Remember
- Optimized for VSCode using Git Bash to run on Windows. Minimal testing done in other contexts.

- The scripts that make `generated/styles/*.ts` files currently rely on Bash being installed to run (for `sed` to function, which necessarily modifies the `sass-export` output to a valid module by prepending `export default`). Did not implement any PowerShell equivalent. So make sure bash is set to your shell, such as [here](https://stackoverflow.com/questions/43427631/how-to-add-multiple-terminal-in-vs-code) does.

- Remember building generates updated variables in JS for CSS, which is used to calculate cue card positions in-box.  Simply doing `npm run start` and angular recompile does **not** regenerate the updated variables! To regenerate **terminate** the server and **re-start** (which rebuilds). 


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


**figuring out to keep styles defined in styles, but use those *.scss variables in angular components**
`<epic-centering-dynamically>`

importing ~~sass~~ scss(?) into typescript class in angular via json
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
how do package.json `script` commands work
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

`</epic-centering-dynamically>`

**figuring out how to build reactivity into my cards, so it "pops" in an "enjoyable" manner**

`<epic-mouse-reactivity>`

how to get select to reactively update 'active' data object upon click event bound to each selection.
- https://stackoverflow.com/questions/44840735/change-vs-ngmodelchange-in-angular
- https://stackoverflow.com/questions/38893207/angular-2-ngonchanges-fires-when-template-renders -- when ngOnChanges fires.
- https://angular.io/guide/lifecycle-hooks#lifecycle-sequence
- https://dzone.com/articles/understanding-output-and-eventemitter-in-angular -- how to use @Input and @Output of type EventEmitter()
- https://stackoverflow.com/questions/36076700/what-is-the-proper-use-of-an-eventemitter
- https://stackoverflow.com/a/34402436/1277651 -- "actually, using an EventEmitter in a service is bad practice." -- oh, interesting. okay.


`<off-topic-ish>`
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
  - ultimately I kept all of: `get`, `set`, and used a `BehaviorSubject` source variable internally in the service, and exposed another variable$ with `.asObservable()` applied to that same source variable.
  - might make sense to drop later the get/set property design, and replace with normally-named function name like "updateFoo()" instead. TBD.
`</off-topic-ish>`


`<bug-missing-dependency>`

so `sass-to-json` wasn't building on other computers.... because I'd installed it globally on my originally computer, without ``--save-dev``
- https://stackoverflow.com/questions/6480549/install-dependencies-globally-and-locally-using-package-json -- okay, --save-dev is pretty cool

`</bug-missing-dependency>`



calculate distance of mouse from element:
- https://jsfiddle.net/chriscoyier/t5Kts/

what's the right way to listen to mouse movement events in angular?
- https://stackoverflow.com/questions/46389002/how-to-listen-for-mousemove-event-on-document-object-in-angular

my template reference variable to each cue card wasn't working (was undefined), seemingly as it wasn't being assigned yet (not until entry form appears)
- https://stackoverflow.com/questions/34947154/angular-2-viewchild-annotation-returns-undefined

despite my efforts, still not working. instead i'll do a workaround for now
- https://stackoverflow.com/questions/17230242/angular-element-vs-document-getelementbyid-or-jquery-selector-with-spin-busy-c

how does mouseEvent work?
- https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
- https://plainjs.com/javascript/events/getting-the-current-mouse-position-16/

what typescript type do i need so vscode lets me compile successfully `e.pageX` etc? 
- https://stackoverflow.com/questions/49226309/what-are-the-proper-typescript-types-for-addeventlistener-mousemove-and-its-eve

what's the angular way to find elements? 
- https://stackoverflow.com/questions/40817336/whats-the-difference-between-ngoninit-and-ngafterviewinit-of-angular2 -- oh! need `AfterViewInit`! 

how to get offset() / width() / etc without jquery?
- https://stackoverflow.com/questions/18953144/how-do-i-get-the-offset-top-value-of-an-element-without-using-jquery
- https://stackoverflow.com/questions/21887774/get-width-of-an-element-without-jquery

what best practice is there for a utils class in angular? I need one for `getCssObject` soon... rule of 3s is coming. but not yet.
- https://stackoverflow.com/questions/32790311/how-to-structure-utility-class

how to get reference to child element by class?
- https://stackoverflow.com/questions/12166753/how-to-get-child-element-by-class-name

looking for if any typescript type standard exists for json-transformed-into-exported class (`generated/styles/*.ts`)?
- https://github.com/Microsoft/TypeScript/issues/1897 -- nevermind, too much overhead for this project.
- https://stackoverflow.com/questions/39392853/is-there-a-type-for-class-in-typescript-and-does-any-include-it -- unsure i want to declare any types yet.
- https://stackoverflow.com/questions/18961203/any-vs-object -- i'll go with `Object` type for this.
  
looking for javascript equivalent to C#'s extension methods, suspect not applicable
- https://stackoverflow.com/questions/9354298/how-do-i-write-an-extension-method-in-javascript -- confirmed, bad idea.

using hex codes in javascript:
- https://stackoverflow.com/questions/8172384/what-does-0x-mean
- https://stackoverflow.com/questions/21647928/javascript-unicode-string-to-hex
- https://stackoverflow.com/questions/11023144/working-with-hex-strings-and-hex-values-more-easily-in-javascript -- prepending 0x seems unnecessary actually.
- https://stackoverflow.com/questions/573145/get-everything-after-the-dash-in-a-string-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators -- bitshifting... sigh.

is pushing values exceeding `255` into the rgba function reliable? e.g. is `rgba(1357, 13, 1013, 1)` reliable in other browsers?
- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value -- well, doesn't really directly answer how input ranges work exceeding 1.
- ... sigh. Tried to spend 10 minutes figuring out what the actual implementation specifies rgba will do, gave up searching
- ignoring this possible rgba issue for now, with the known caveat the beautiful color range i'm enjoying from blues to pinks may not work in non-Chrome browsers.
- realized it's fine, documented why it goes pink, due to delta between primary and secondary colors.

`</epic-mouse-reactivity>`


`<bug-cross-browser-support>`

tried instead doing a quick visual test in each Firefox and Edge, discovered both have major visual problems beyond this issue.
- noted into my backlog technical debt, i'll need to resolve these issues for my portfolio. sigh.

`</bug-cross-browser-support>`


`<epic-prettify-ui>`

try use ternary in template's {{interpolation}} syntax for Submit button text to change dynamically
- https://stackoverflow.com/questions/38642480/ngif-alternative-to-set-button-text-in-angular-2/38642523 -- just needed to see example again. 

how to have `Validators.required` work for _one of several fields_? 
- https://stackoverflow.com/questions/41020069/require-one-from-two-fields-using-angular-2 - sweet!

how does truthiness work in javascript?
- https://www.sitepoint.com/javascript-truthy-falsy/
- https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy
- https://stackoverflow.com/questions/17643965/automatically-create-object-if-undefined -- how to add property to an undefined object -- assignment syntax with || is cool.
- https://stackoverflow.com/questions/39792221/adding-properties-to-an-empty-object -- "go behind typescripts back"... grumble...
- https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object -- used `Object.assign(obj, {key3: "value3"});` 
- https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript -- test empty string vs null/und...

how big should i make my question/answer text fields? they're definitely too small now.
- https://en.wikipedia.org/wiki/Index_card -- ohh, picture!
- https://www.quora.com/How-many-words-per-minute-can-a-person-write-on-paper-at-average-with-a-legible-handwriting -- speed, eh, not really what I want.
- https://www.vletter.com/help/font-faq/handwriting-font-sizes.html -- "Most handwriting has a body height that is between 1/8 inch and 1/4 inch tall".
- https://pearsonified.com/golden-ratio-typography-intro/ -- hmm... golden ratio... so these guys **suggest 25.88854px line _height_** and accompanying **670.21670px line _width_**... since I use ~16px... so that means a line width of ~412px... which fits in my "scene" size.
- https://www.quora.com/How-long-is-the-average-sentence -- avg "20 words"... "many persons have the habit of constructing long sentences -- 40 to 100 words."
- https://strainindex.wordpress.com/2008/07/28/the-average-sentence-length/ -- hmmm... 
  - "survey shows readers find sentences of 8 words or less very easy to read; 11 words, easy; 14 words fairly easy; 17 words standard; 21 words fairly difficult; 25 words difficult and 29 words or more, very difficult."
  - "Over the whole document, make the average sentence length 15-20 words, 25-33 syllables and 75-100 characters."
- https://medium.com/@theacropolitan/sentence-length-has-declined-75-in-the-past-500-years-2e40f80f589f -- interesting, and mostly just justifying aiming towards 20ish words size.
- https://www.hf.faa.gov/webtraining/visualdisplays/text/size1a1.htm -- Character Width-to-Height Ratio - Acceptable ratios range from 0.6:1 to 1:1.
  - so ~20 words, which is ~100 characters, at 16px height, should need about ~960 px to fit on a single line.
  - well, that's too long. oh well. okay. i'm done researching. i'm just going with the golden ratio recommended line width i calculated at ~400px. done.


`<task-best-practice-scss-hierarchy>`

what's the best practice for referencing variables in scss?  (because i want to start using variables in `cue-card.scss` which no longer semantically belong in a file with that name)
- https://medium.com/@mciastek/s-css-best-practices-that-you-have-not-yet-known-ba2f6329b5dd -- some example hierarchies...
- https://sass-guidelin.es -- interesting, insightful, but doesn't help
- https://stackoverflow.com/questions/17598996/sass-use-variables-across-multiple-files -- hmm... 
- http://thesassway.com/beginner/how-to-structure-a-sass-project -- has a good "Basic directory structure" (except mixes sass/scss)... puts all variables in `_base.sass`... 
  - here and elsewhere advocates for a specific file for just variables, like `variables.scss`(?). am uncertain i want this yet...
  - decided to go with `base.scss`. Done.
  - 
`</task-best-practice-scss-hierarchy>`


`<task-form-columns-responsively>`

how to do a responsive form layout? (e.g. with label/input on one row on a large monitor, with consistent column distances, but not in a restrictive table, but also collapses into one-per-row when on a small device.)
- https://www.creativebloq.com/how-to/how-to-design-responsive-and-device-agnostic-forms -- use flexbox! :D 
  - eventually realized this code doesn't match the picture.
  
how does flexbox grow work? (inputs filling screen! why)
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

change indentation I'm getting (coming from UL)
- https://stackoverflow.com/questions/30424248/does-ul-have-default-margin-or-padding -- oh, the browser adds it. okay.

`resize: vertical` not working 
- https://developer.mozilla.org/en-US/docs/Web/CSS/resize
- https://stackoverflow.com/questions/29306297/css-resize-work-for-horizontal-but-not-vertical -- oh, i need textarea... nvm.

`</task-form-columns-responsively>`

`</epic-prettify-ui>`


**hoo boy, buggo found! my 'rebalance' card positions function is firing too early in the angular lifecycle and breaking. hmm. need more know-how.**

`<epic-rebalance>`

how does angular react after view change?
- https://blog.angularindepth.com/what-every-front-end-developer-should-know-about-change-detection-in-angular-and-react-508f83f58c6a
  - "Once bindings are created, Angular no longer works with the template. The change detection mechanism executes instructions that process bindings. The job of these instructions is to check if the value of an expression with a component property has changed and perform DOM updates if necessary."
  - check if dirty, hmm, ok! got my clue!

how to check dirty angular:
- https://github.com/angular/angular/issues/17736 --- hmm... example at end just listens to dirty state of _form_... what about ... of the... model??? of pending updates??? maybe "dirty checking" is the wrong way to go.

how to check dom updated angular:
- https://blog.ninja-squad.com/2018/09/27/angular-performances-part-4/ 
  - "Now that we shifted our component to be OnPush, Angular will only run the change detection if the _reference_ of the pony input changes" hmm... 
    - grumble, this OnPush example only deals with _optimization_, reducing _all_ checks down to the _just necessary_ checks. NOT WHAT I NEED!
  - "Angular only refreshes the template if one of the @Input's changed, or if an event was triggered" -- (an event??)
  - "async pipe can be used to subscribe to a Promise or an Observable" ... hmm. 
    - grumble, i'm doing the equivalent of this already, and my subscription is firing too early in the angular lifecycle, so, no! not this way neither!
  - there's a "`Default` change detection strategy"
  - "you can completely opt out from the automatic change detection in your component, and handle things yourself, by injecting in your component a ChangeDetectorRef", This class offers a few methods: detach(), detectChanges(), markForCheck(), reattach()
    - okay! this looks legit! This will probably work, if I ~~`detach()` from .... and~~ manually call `detectChanges()`... so how about that? Hmm?
    - well... suppose I put detectChanges into my subscription call back... buuut i STILL need to _INSERT THE WHOLE CUE CARD COMPONENT_... at this point I'm thinking I might need to wrestle control away from the template's *ngFor usege, and start adding new component instances myself via the class instead? seems also wrong... keep researching... still need to know a way to successfully change the order of (which?) operations to successfully inject my DOM-manipulation style code... (why? can I bypass?)

how to trigger template reflow ngFor:
- https://stackoverflow.com/questions/51619220/angular-how-to-trigger-a-ngfor-directive-again-after-pushing-some-datas-in-an -- using `trackBy` looks very promising

- https://www.youtube.com/watch?v=dEIg-PR4Tew 
  - @ 3:30 ... why angular tears down and recreates all the dom elements: because the reference is new in his example.... so he makes a function that returns a sub-portion of an 'employee' object, that employee's code, and changes to _that code_ cause the entire ... DOM to 'reflow' as I'm calling it. .... 
  - so... his function limits unnecessary refreshes... because he was originally duplicating the entire _object_ of employees, and that caused a _new reference_ to be pushed to the template's `*ngFor` directive, which by the **nature of it being a new reference _caused it to refresh_**. in my case... maybe i can use `trackedBy` to _force an early refresh_??? ... of ... by... tracking by the observable?.... oh, okay, great... but then... hmm...
  - so this entire latency is now seemingly the result of my to-be-deprecated design of relying on _getters_ in my service!! so if i eliminate my getters from my service, and replace with observable, and push that observable directly into the *ngFor reference, that seems like it would solve my problem! ... 
  - so now i need to address my bias against `| async`... i heard it's 'bad practice' and it 'causes problems', but i have nothing to offer as justification for that! ... so... use it? hmm...

when to use `| async` in angular?
- https://blog.angularindepth.com/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794
  - "Subscribing to the observable manually in the ngOnInit() doesn’t work with OnPush change detection strategy out of the box. " -- woah! 
  - "... can be avoided by using a dedicated wrapper element but that means that the state management is mandating changes to DOM structure which is pretty weird…" ... huh? 
  - hmm, guy advocates for |async despite the list of cons... which seemingly isn't that big a deal yet in my application.
- https://www.youtube.com/watch?v=l5jARPyOlkM -- 
  - @2:15 shows syntax how to use: `<course-card *ngFor="let course of (courses$ | async)">` ... hmm. oh right! there's this further beautiful solution I did before! `<div *ngIf="courses$ | async) as courses"> <course-card *ngFor="let course of courses">... </...></...>`! this directly resolves the con above where the guy uses a dummy template, **this is the better way to avoid multiple unwrappings with async pipe**.
- https://blog.thoughtram.io/angular/2017/02/27/three-things-you-didnt-know-about-the-async-pipe.html -- hmm... 


ok so... i tried changing my `*ngFor="let cc of (ccService.cueCards$ | async)`... and nothing. hmm...

when to call .next observables?
- https://angular.io/api/common/AsyncPipe - "The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted." -- yup, confirms... i think... 
  
why does debugging template with interpolation syntax `{{ thing }}` result in `[object Object]` ?
- https://stackoverflow.com/a/53502462/1277651 -- basically i'm hoping for the moon to iteratively go through whole object and print all it's fields... oh wait `| json` surrounding with `<pre>` should solve this... can i combine both pipes like `{{ ccLoaderService.cueCards$ | async | json }}`? YES! WOOT!

how to process after `*ngFor` ? 
- https://stackoverflow.com/questions/35819264/angular-2-callback-when-ngfor-has-finished

viewchildren changes.subscribe not working
- https://stackoverflow.com/questions/43183465/querylist-changes-subscribe-does-not-work -- AHAHA!!!! THIS ANSWER!!! 

`<bug-destroy-called-2x>`

why is ngOnDestory called twice when deleting cards? second time causes error...
- https://stackoverflow.com/questions/40468267/angular-2-does-ngondestroy-get-called-on-refresh-or-just-when-navigate-away-fr -- shouldn't happen... grumble...
- https://stackoverflow.com/questions/53978845/subject-subscription-is-triggered-twice-when-i-call-next-once-in-angular-app -- hmm so it's quite possibly related to my usage of .next! ... ok... 
  
hmm, i see some out of date code in the earlier stack frames... despite saving changes that removed it... i'm restarting to eliminate doubt.
- no change
  
well, in checking each stack frame call set, i saw the second call somehow originates from another component, the list comp. 
- Since this is using the outdated getter service call, i hoped updating to the newer observable call would 'just get rid of this error'. Nope.
- i hoped to trace the stack back to an '.next' call i did in the service, but.... there's so much bloat frames in angular it's hard to find... well, i loaded all frames, looked at every non-angular frame (so 2 of ~30) in both call stacks... none were the .next I called... probably having to do with the callback nature. hmm.
- i'm uncertain how/if it relates to .next at this point... looking for another example. (
  - probably a better method would be to focus on understanding better all the fundamentals of reactive implementation, i'm kinda diving in head-first without much swimming lessons... i dunno, work taught me to learn on-the-go, so i'm trying out this learning-method for now... i'll revisit this concept if i keep being stuck.

  `<off-topic>`

  - https://blog.strongbrew.io/share-replay-issue/
  - https://stackoverflow.com/questions/51281017/upgrading-from-rxjs5-to-rxjs6 
  - https://stackoverflow.com/questions/53483832/property-map-is-missing-in-type-observableany
  - https://medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87
  
  `</off-topic>`

when to unsubscribe in angular
- https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3 -- "infinite observables"... interesting, okay.
  - "Final tip — You should be more declarative and try as little as possible to call the unsubscribe method" -- what.. ooh.. ok.. try this!

  `<bug-use-pipeable-operators-correctly>`

  Property 'takeUntil' does not exist on type 'Observable`<Event>
  - https://stackoverflow.com/questions/39514564/property-filter-does-not-exist-on-type-observableevent -- uhmm... not easy to jump into...

  `fromevent` `takeuntil`
  - https://stackoverflow.com/questions/51369830/need-help-on-using-takeuntil-and-observable-fromevent-methods -- NO! ATROCIOUSLY LARGE! must be simpler version.
  
  ~~Argument of type 'Subscription' is not assignable to parameter of type 'Observable`<any>'.~~
  - ~~... rabbit hole ... ~~

  idea, try to combine `takeUntil` with `fromEvent` and use **another** subscritption as the canary to abort...  but how to combine?
  - https://alligator.io/angular/takeuntil-rxjs-unsubscribe/ 

  docs
  - https://www.learnrxjs.io/operators/filtering/takeuntil.html -- aha! example with both `takeUntil` with `fromEvent`!
  
  using Subject wrong from example - Generic type 'Subject<T>' requires 1 type argument(s).ts(2314)
  - https://stackoverflow.com/questions/41757684/generic-type-observablet-requires-1-type-argument -- example didn't specify type, but i can use `Subject<any>`
  



  `</bug-use-pipeable-operators-correctly>`

`</bug-destroy-called-2x>`

`</epic-rebalance>`

**EUREKA! i now have additions correctly triggering at the right time in the ~~flow~~ angular life cycle combined with newly added observables data in my service**