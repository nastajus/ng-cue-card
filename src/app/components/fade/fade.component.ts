import {Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'fade-example',
  
   template: `
     <h4>Ng-if fade animation</h4>
     <button (click)="toggleElement()">toggle - fade</button>
     <div *ngIf="toggle" [@fadeInOut]>element<div>
  `,
  
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}), //style only for transition transition (after transiton it removes)
        animate(500, style({opacity:1})) // the new state of the transition(after transiton it removes)
      ]),
      transition('* => void', [
        animate(500, style({opacity:0})) // the new state of the transition(after transiton it removes)
      ])
    ])
  ]
})

export class FadeComponent {
  
  toggle: boolean = true;
  
  constructor() {}
  
  toggleElement(){
     this.toggle=!this.toggle;
  }

}
