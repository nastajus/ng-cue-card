import { Component, OnInit, OnChanges, Input, AfterViewInit, OnDestroy, Output, EventEmitter, NgZone } from '@angular/core';
import { CueCard } from 'src/app/models/cue-card';
import { trigger, style, transition, animate } from '@angular/animations';
import { CueCardShoeBoxComponent } from '../cue-card-shoe-box/cue-card-shoe-box.component';
import sassExport from 'src/app/generated/styles/base';
import { Subscription, fromEvent } from 'rxjs';
import * as reduceCSSCalc from 'node_modules/reduce-css-calc';


@Component({
  selector: 'app-cue-card',
  templateUrl: './cue-card.component.html',
  styleUrls: ['./cue-card.component.scss'],
  animations:
  [
    trigger('slider', [
      //this state needs to exist, and to have it's name reused in the transition, for it to persist beyond animation.
      //which may be okay to not exist after all, because i'm going to be deleting immediately anyways.
      // state('slideLeftToUnder', 
      //   style({ 'z-index': '-1' }) //, transform: 'translateX(-660px)' })
      // ),
      transition('* => slideLeftToUnder', [
        style({ 'z-index': '1' }),
        //WARNING: this usage occasionally causes @Component to appear broken in VSCODE... but app still works... ever since calling `export function`.
        //probably a *SECOND* good reason to push `slideDistance` into a `base.scss` variable instead, after clean code.
        animate('0.5s', style({ transform: `translateX(-${slideDistance()}px)` })), //540 in 0.5s, 1080 in 1
        style({ 'z-index': '-1' }),
        animate('0.5s', style({ transform: 'translateX(0)' })),
        //reusing transition names / state names causes any style set defined inside to persist, after animation ends! 
        //(is that weird? maybe my desire to not use 'state()' and just use 'transition()' only is weird.)
        //but since the card is immediately deleted, there's only a tiny chance of it appearing. so i'll leave state() anyways.
      ]),

      transition('* => slideRightToOffscreen', [
        style({ 'z-index': '1' }),
        animate('0.8s', style({ transform: 'translateX(+1200px)' })), //1.2s same speed. 0.8s faster speed.
      ])
    ]),
  ],
  host: { '[@slider]': "this.pickAnim()", '(@slider.done)': "this.doneAnim($event)" }
})
export class CueCardComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  private _mouseSubscription: Subscription;

  flipState: string = 'flip-front';

  @Input() cueCard: CueCard

  //simply used to detect any bound string at all in template, to affect which style class is applied
  @Input() shoeBox: CueCardShoeBoxComponent;

  @Input() ccId: string;

  _hasRecalled: boolean | null = null;
  set hasRecalled(val: boolean) {
    this._hasRecalled = val; 
  };

  //to indicate back was *ever* shown to parent even once during a card instance lifetime.
  private _backShown = false;
  @Output() onBackShown: EventEmitter<boolean> = new EventEmitter();
  @Output() isDoneAnim: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private zone: NgZone) { }

  ngOnInit() { 
    if (!this.cueCard) { throw new Error("No CueCard passed in! Cannot initialize CueCard component!"); }
  }

  ngOnChanges() {
    if (this._backShown) {
      // this.toggleFlip();   //this causes some weird state too... 
      this.resetFlip();
    }
  }

  ngAfterViewInit() {
    if (this.ccId === undefined) { return; }

    const card = document.getElementById(this.ccId);
    const wrapper = card.querySelector<HTMLElement>('.tp-wrapper');
    const front = card.querySelector<HTMLElement>('.tp-card__front');
    const primary = parseInt(getCssObject('$primary-card-background').compiledValue.slice(1), 16);
    const secondary = parseInt(getCssObject('$secondary-card-background').compiledValue.slice(1), 16);

    this.zone.runOutsideAngular(() => {
      this._mouseSubscription = fromEvent<MouseEvent>(document, 'mousemove').subscribe(event => {
        const box = card.getBoundingClientRect();
        const distance = Math.hypot(event.clientX - (box.left + box.width / 2),
                                    event.clientY - (box.top + box.height / 2));
        const lift = 30 * Math.max(0, 1 - distance / 100);

        // Move the wrapper so the shoebox still owns the host transform and spacing.
        wrapper.style.transform = lift ? `translateY(-${lift}px)` : '';
        if (distance >= 200) {
          front.style.backgroundColor = '';
          return;
        }

        const { r, g, b } = this.lerpColor(primary, secondary, 400 / Math.max(distance, 1));
        front.style.backgroundColor = `rgb(${Math.min(255, r)}, ${Math.min(255, g)}, ${Math.min(255, b)})`;
      });
    });
  }

  ngOnDestroy() {
    if (this._mouseSubscription) {
      this._mouseSubscription.unsubscribe();
    }
  }

  toggleFlip() {
    this.flipState = (this.flipState == 'flip-front') ? 'flip-back' : 'flip-front';
    this._backShown = !this._backShown;
    this.onBackShown.emit(this._backShown);
  }

  resetFlip() {
    this.flipState = 'flip-front';
    this._backShown = false;
    this.onBackShown.emit(this._backShown);
  }

  //slideLeftToUnder
  pickAnim() {
    if (this._hasRecalled) { return 'slideRightToOffscreen' }
    if (this._hasRecalled == false) { return 'slideLeftToUnder' }
    return undefined;
  }

  //presumably i need this, as *ngIf in the parent isn't good enough ....... or wait... i can use this emit... and then i *CAN* USE the parent's own *ngIf="some expre!"
  //doneAnimGoUnderDeck($event) {
  //doneAnimGoOffScreen($event) {

  doneAnim($event) {
    //if ($event.toState == "slideLeftToUnder") {
    //if ($event.toState == "slideLeftToUnder" || $event.toState == "slideRightToOffscreen") {
    //if ($event && $event.toState) {
    if ($event && ($event.toState == "slideLeftToUnder" || $event.toState == "slideRightToOffscreen")) {
      this.isDoneAnim.emit(true);
    }
  }

  // The original effect extrapolates past the secondary colour.
  // Clamp the resulting channels at the CSS write to keep the blue-to-pink range.
 /**
 * A linear interpolator for hex colors.
 *
 * Found at:
 * https://gist.github.com/nikolas/b0cce2261f1382159b507dd492e1ceef
 *
 * @param {Number} a  (hex color start val)
 * @param {Number} b  (hex color end val)
 * @param {Number} amount  (the amount to fade from a to b)
 *
 * @example
 * // returns 0x7f7f7f
 * lerpColor(0x000000, 0xffffff, 0.5)
 *
 * @returns {Number}
 */
  lerpColor(a, b, amount) {
    const ar = a >> 16,
          ag = a >> 8 & 0xff,
          ab = a & 0xff,

          br = b >> 16,
          bg = b >> 8 & 0xff,
          bb = b & 0xff,

          rr = ar + amount * (br - ar),
          rg = ag + amount * (bg - ag),
          rb = ab + amount * (bb - ab);

    //i don't understand the addition arithmetic singular total, nor the negatives that appear randomly / so I don't need. 
    //return (rr << 16) + (rg << 8) + (rb | 0);
    return { r: Math.round(Math.abs(rr)), g: Math.round(Math.abs(rg)), b: Math.round(Math.abs(rb)) };
  };
}


//TODO: put in utils class or something
export function getCssObject(cssPropertyName: string) : { name: string, value: string, compiledValue: string } {
  var result = sassExport.variables.find(obj => {
    return obj.name === cssPropertyName;
  })
  return result;
} 

export function slideDistance() : number { 
  return parseInt(reduceCSSCalc(`calc(${getCssObject('$card-width-with-padding-px').compiledValue} + 100px`), 10);
}

