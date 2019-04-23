import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-selector',
  templateUrl: './cue-card-selector.component.html',
  styleUrls: ['./cue-card-selector.component.css']
})
export class CueCardSelectorComponent implements OnInit {

  cueCards: CueCard[];

  // eureka moment: mandatorily discarded this local state copy, the bindings to ngModel weren't working.
  //private _cueCardActive: CueCard;
  // get cueCardActive() { return this._cueCardActive; }
  // set cueCardActive(cc) { 
  //   this._cueCardActive = cc;
  //   this.ccLoaderService.cueCardActive = cc;
  // }
  uglyEditStateTracker = false; //replace with more reactive design

  constructor(public ccLoaderService: CueCardLoaderService) { 
    this.cueCards = ccLoaderService.cueCards;

    //this._cueCardActive = ccLoaderService.cueCardActive;
  }

  ngOnInit() {
  }

  editHandler() {
    this.uglyEditStateTracker = true;
    //this.ccLoaderService.cueCardActive = this._cueCardActive;
  }

  cancelHandler() {
    this.uglyEditStateTracker = false;
    this.ccLoaderService.cueCardActive = null;
  }



  // *OPTION A*
  // when page first loads:
  // 1) [ngValue]="cueCard" updates that individual <option ..> to the object, and passes up to <select ..> in the DOM...

  // when option picked:
  // 2) [(ngModel)]="ccL.cueCardActive" in <select.. > now extracts the DOM value and passes to the class (by setting), and retrieves it too oddly (by getting)...

  // critically must be bound to the service instance, not another local instance copy. otherwise be forced to use instead option B.

  // *OPTION B*
  // 3) upon deletions in the model stored in ccLoaderService, the above steps also trigger. But...
  // 4) when deleting the last item, this process fails. 
  // so i need to manually capture to it. or something. by ALSO adding the following
  // updateActiveCueCare($currentSelection) {
  //   console.log($currentSelection);
  //   this.ccLoaderService.cueCardActive = $currentSelection;

  // }

  // *OPTION C*
  // originally tried this binding, but it failed me
  //  5) (change)=updateActiveCueCare() 

}
