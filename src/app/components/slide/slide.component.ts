import {Component} from '@angular/core';
import { style, state, animate, transition, trigger} from '@angular/animations';

// Simple example of ngif slide effect
@Component({
  
  selector: 'slide-example',
  
  // The template
  template: `
    <div>
      <h4>Ng-if slide animation</h4>
      <button (click)="toggleElement()">toggle</button>
      <div class="elemnt" 
        *ngIf="toggle"
        [@flyInOut]>
        element
      </div>
    </div>
  `,
  
  styles:['.elemnt{background-color:red}'],
  
  //add animations
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),//
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class SlideComponent {
  toggle: boolean = true;
  
  constructor() {}
  
  toggleElement(){
     this.toggle=!this.toggle;
  }
}