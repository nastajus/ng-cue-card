import { Component, OnInit, Input, ViewContainerRef, Inject, forwardRef } from '@angular/core';
import { CueCard } from 'src/app/models/cue-card';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CueCardShoeBoxComponent } from '../cue-card-shoe-box/cue-card-shoe-box.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cue-card',
  templateUrl: './cue-card.component.html',
  styleUrls: ['./cue-card.component.scss'],
  // animations: CueCardAnimations
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class CueCardComponent implements OnInit {

  @Input() cueCard: CueCard

  flip: string = 'inactive';

  //simply used to detect any bound string at all in template, to affect which style class is applied
  @Input() shoeBox: CueCardShoeBoxComponent;
  
  constructor() { }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }


  ngOnInit() {
  }

}
