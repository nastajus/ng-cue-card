import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-selector',
  templateUrl: './cue-card-selector.component.html',
  styleUrls: ['./cue-card-selector.component.css']
})
export class CueCardSelectorComponent implements OnInit {

  // how the binding works:
  // eureka moment: mandatorily discarded this local state copy, the bindings to ngModel weren't working.

  // when page first loads:
  // 1) [ngValue]="cueCard" updates that individual <option ..> to the object, and passes up to <select ..> in the DOM...

  // when option picked:
  // 2) [(ngModel)]="ccL.cueCardActive" in <select.. > now extracts the DOM value and passes to the class (by setting), and retrieves it too oddly (by getting)...

  cueCards: CueCard[];
  uglyEditStateTracker = false; //replace with more reactive design

  constructor(public ccLoaderService: CueCardLoaderService) { }

  ngOnInit() {
  }

  editHandler() {
    this.uglyEditStateTracker = true;
  }

  cancelHandler() {
    this.uglyEditStateTracker = false;
    this.ccLoaderService.cueCardActive = null;
  }

}
