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

-  