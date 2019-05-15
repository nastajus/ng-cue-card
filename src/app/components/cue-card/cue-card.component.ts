import { Component, OnInit, OnChanges, Input, AfterViewInit, OnDestroy, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CueCard } from 'src/app/models/cue-card';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CueCardShoeBoxComponent } from '../cue-card-shoe-box/cue-card-shoe-box.component';
import sassExport from 'src/app/generated/styles/base';
import { Subscription, fromEvent } from 'rxjs';
//import 'rxjs/add/operator/takeUntil';



@Component({
  selector: 'app-cue-card',
  templateUrl: './cue-card.component.html',
  styleUrls: ['./cue-card.component.scss'],
  animations:
  [
    trigger('slider', [
      //this state needs to exist, and to have it's name reused in the transition, for it to persist beyond animation.
      //which may be okay to not exist after all, because i'm going to be deleting immediately anyways.
      // state('newCard', 
      //   style({ 'z-index': '-1' })
      // ),
      transition('* => newCard', [
        animate('0.5s', style({ transform: 'translateX(-660px)' })),
        style({ 'z-index': '-1' }),
        animate('0.5s', style({ transform: 'translateX(0)' })),
        //reusing transition names / state names causes any style set defined inside to persist, after animation ends! 
        //(is that weird? maybe my desire to not use 'state()' and just use 'transition()' only is weird.)
        //but since the card is immediately deleted, there's only a tiny chance of it appearing. so i'll leave state() anyways.
      ])

    ])
  ],
  //host: { '[@slider]':"slideAndHide()" }
})
export class CueCardComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  private _mouseSubscription: Subscription;

  //needed to promote to class-level scope, so can be referenced inside mouse move subscribe callback.
  private _elem: HTMLElement;
  private _elemKid: HTMLElement;
  private _colorPrimary: string;
  private _colorSecondary: string;

  flip: string = 'flip-front';

  @Input() cueCard: CueCard

  //simply used to detect any bound string at all in template, to affect which style class is applied
  @Input() shoeBox: CueCardShoeBoxComponent;

  @Input() ccId: string;

  _hasRecalled: boolean = false;
  set hasRecalled(val: boolean) {
    this._hasRecalled = val; 
  };

  //to indicate back was *ever* shown to parent even once during a card instance lifetime.
  private _backShown = false;
  @Output() onBackShown: EventEmitter<boolean> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

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

    this._elem = document.getElementById(this.ccId);
    this._colorPrimary = this.getCssObject('$primary-card-background').compiledValue;
    this._colorSecondary = this.getCssObject('$secondary-card-background').compiledValue;
    this._elemKid = this._elem.querySelector('.tp-card__front');

    //possibly causes my 2x call error to ngOnDestory?
    // this._mouseSubscription = fromEvent(document, 'mousemove').subscribe( (e: MouseEvent) => { 

    //   //change height
    //   let distance = this.calculateDistance(this._elem, e.pageX, e.pageY);
    //   this.lerpChangeCardHeight(distance, this._elem);

    //   //change color
    //   this.lerpChangeCardColor(distance, this._elemKid);
    // })
  }

  ngOnDestroy() {
    //TODO remove this ugly hack -- it's ugly because it buries an unknown problem, and will lead to more problems later.
    // if (!this._mouseSubscription) { 
    //   console.warn(`attempting to destroy cue card despite it already destroying successfully earlier... hiding error related to second unnecessary attempt to unsubscribe:  ${this._mouseSubscription}... `);
    //   return;
    // }
    // this._mouseSubscription.unsubscribe();
  }

  toggleFlip() {
    this.flip = (this.flip == 'flip-front') ? 'flip-back' : 'flip-front';
    this._backShown = !this._backShown;
    this.onBackShown.emit(this._backShown);
  }

  resetFlip() {
    this.flip = 'flip-front';
    this._backShown = false;
    this.onBackShown.emit(this._backShown);
  }

  slideAndHide() {
    //console.log('this._hasRecalled : ' + this._hasRecalled)
    return this._hasRecalled ? 'newCard' : undefined;
  }



  @Output() isDoneAnim = new EventEmitter<boolean>();

  //presumably i need this, as *ngIf in the parent isn't good enough ....... or wait... i can use this emit... and then i *CAN* USE the parent's own *ngIf="some expre!"
  //doneAnimGoUnderDeck($event) {
  //doneAnimGoOffScreen($event) {
  doneAnim($event) {
    if ($event.toState == "newCard") {
      this.isDoneAnim.emit(true);
    }
  }

  destroy() {
    this.elementRef.nativeElement.remove();
  }

  //TODO: test performance on low-power devices, ugly jittering jumps visible console was logging, but gone without.
  //TODO: consider refactor. it's upsetting i need to use a mixof global variable + mix with parameter variables...  try to see if this can be rewritten more 'reactively'(?) later??? (not sure this solves it)
  lerpChangeCardHeight(distance: number, elem: HTMLElement): number {
    let cardHeightChange = this.lerp(0, 30, distance < 100 ? 30 / distance : 0);
    let styleAttribute = elem.getAttribute('style').split('translateY')[0];
    elem.setAttribute('style', `${styleAttribute} translateY(-${cardHeightChange}px)`);
    return cardHeightChange;    
  }

  lerpChangeCardColor(distance: number, elem: HTMLElement) {
    let lerpAmount = distance < 200 ? 1 / distance * 400 : 0;
    let lerpedHexValue = this.lerpColor(`0x${this._colorPrimary.split('#').pop()}`, `0x${this._colorSecondary.split('#').pop()}`, lerpAmount);
    let rgbaArray = [ lerpedHexValue.r, lerpedHexValue.g, lerpedHexValue.b, 1];
    elem.setAttribute('style', `background-color: rgba(${rgbaArray})`);

  }
  
  calculateDistance(elem: HTMLElement, mouseX: number, mouseY: number) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (this.getElementOffset(elem).left+(elem.clientWidth/2)), 2) + Math.pow(mouseY - (this.getElementOffset(elem).top+(elem.clientHeight/2)), 2)));
  }

  getElementOffset(element: HTMLElement)
  {
    var de = document.documentElement;
    var box = element.getBoundingClientRect();
    var top = box.top + window.pageYOffset - de.clientTop;
    var left = box.left + window.pageXOffset - de.clientLeft;
    return { top: top, left: left };
  }

  lerp(value1: number, value2: number, amount: number) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  };

  //TODO: put in utils class or something
  getCssObject(cssPropertyName: string) : { name: string, value: string, compiledValue: string } {
    var result = sassExport.variables.find(obj => {
      return obj.name === cssPropertyName;
    })
    return result;
  } 


  // returns under 255 for each field, except when amount > 1, worst example is 33.33333333333333 returns  [1357, 13, 1013, 1]
  // I deliberately 'abuse' this function, submitting values exceeding `amount > 1`, which results in a beautiful color range from blue to pink. It maxes out at pink, because the delta between the two primary and secondary colors is unchanging for 1 of 3 parameters, "g: 13", whereas the other 2 parameters "r: 255" and "b: 255" max out at 255, giving the result "pink". Otherwise if there was any slight difference in that last parameter, instead it would max out at entirely white.

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


