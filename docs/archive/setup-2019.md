# Original setup notes

From [the source README](https://github.com/nastajus/ng-cue-card/blob/6c09c400d6d9685c1bb1cc5caa855a99ced08c94/README.md). See the [project README](../../README.md#development) for the script entry points.

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


## Support 
- Currently designed for Chrome on desktop monitor. 
- Ideally I want to make this cross-platform for all common operating systems, browsers and devices such as mobile, however I am uncertain at this time I'll be able to support those. 


## Remember
- Optimized for VSCode using Git Bash to run on Windows. Minimal testing done in other contexts.

- The scripts that make `generated/styles/*.ts` files currently rely on Bash being installed to run (for `sed` to function, which necessarily modifies the `sass-export` output to a valid module by prepending `export default`). Did not implement any PowerShell equivalent. So make sure bash is set to your shell, such as [here](https://stackoverflow.com/questions/43427631/how-to-add-multiple-terminal-in-vs-code) does.

- Remember building generates updated variables in JS for CSS, which is used to calculate cue card positions in-box.  Simply doing `npm run start` and angular recompile does **not** regenerate the updated variables! To regenerate **terminate** the server and **re-start** (which rebuilds). 

- Sometimes there's a build error regarding the `empty.ts` file. No idea why it's _intermittent_. Rebuilding solves it. I mean, it's a correct error... So I should come back to fix this.
  - `ERROR in Source file not found: '/C/Users/<USER>/Documents/.../ng-cue-card/src/empty.ts'.`


