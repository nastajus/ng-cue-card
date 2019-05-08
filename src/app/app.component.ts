import { Component } from '@angular/core';
import { trigger, transition, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('flyInOutParent', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'ng-cue-cards';
}
